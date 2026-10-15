"use client";

import { useState, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gameConfig } from "@/config/game";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(index);
    } else if (e.key === "Escape") {
      setOpenIndex(null);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = index === gameConfig.faq.length - 1 ? 0 : index + 1;
      const nextButton = document.getElementById(`faq-question-${nextIndex}`);
      nextButton?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = index === 0 ? gameConfig.faq.length - 1 : index - 1;
      const prevButton = document.getElementById(`faq-question-${prevIndex}`);
      prevButton?.focus();
    }
  };

  return (
    <section id="faq" className="relative" aria-labelledby="faq-heading">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-bg-secondary/20 to-transparent" />
      </div>

      <div className="container-custom mt-24 ">
        <header className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 id="faq-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-6">
            FREQUENTLY ASKED
          </h2>
          <p className="text-fg-secondary text-lg md:text-xl leading-relaxed">
            What the guide would want you to know. Or not.
          </p>
        </header>

        <dl className="max-w-3xl mx-auto space-y-4 mb-20" role="list">
          {gameConfig.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group"
              >
                <div className="bg-bg-secondary border border-border-primary rounded-base overflow-hidden transition-all duration-300 hover:border-accent-red/50">
                  <button
                    id={`faq-question-${index}`}
                    onClick={() => toggleItem(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-full px-6 py-5 md:py-6 flex items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <dt className="font-display font-semibold text-lg md:text-xl text-fg-primary leading-relaxed pr-8">
                      {item.question}
                    </dt>
                    <div className="shrink-0" aria-hidden="true">
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="w-6 h-6 text-accent-red"
                      >
                        <ChevronDown className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reducedMotion ? 0 : 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <dd className="px-6 pb-6 text-fg-secondary leading-relaxed text-base md:text-lg border-t border-border-primary">
                          {item.answer}
                        </dd>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}