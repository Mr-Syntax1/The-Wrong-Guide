"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ResponsiveImage } from "@/components/ui";
import { cn } from "@/lib/utils";
import { gameConfig } from "@/config/game";
import { useTranslations } from "next-intl";

interface StoryProps {
  locale: string;
}

const sectionVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -150 : 150,
  }),
  visible: {
    opacity: 1,
    x: 0,
  },
};

export function Story({ locale: _locale }: StoryProps) {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const t = useTranslations("story");

  const sections = t.raw("sections") as Array<{ title: string; text: string }>;

  return (
    <section id="story" className="relative mt-20" aria-labelledby="story-heading">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-bg-secondary/30 to-transparent" />
      </div>

      <div className="container-custom">
        <header className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 id="story-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-6">
            {t("heading")}
          </h2>
          <p className="text-fg-secondary text-lg md:text-xl leading-relaxed">
            {t("subheading")}
          </p>
        </header>

        <div className="">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              ref={(el) => (sectionRefs.current[index] = el)}
              custom={index}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.84],
              }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div className={cn(
                  "relative",
                  index % 2 === 0 ? "order-1" : "order-2"
                )}>
                  <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-base">
                    <ResponsiveImage
                      src={gameConfig.locations[index]?.image || `/images/story-${index + 1}.webp`}
                      alt={section.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                      style={{
                        filter: "brightness(0.8) contrast(1.12) saturate(0.9)",
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bg-primary/60 via-transparent to-transparent" />
                  </div>

                  {index === 1 && (
                    <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-bg-primary/95 backdrop-blur-sm border border-border-primary p-6 max-w-xs">
                      <p className="text-fg-tertiary text-sm leading-relaxed italic">
                        &ldquo;The guide said the cabin was safe. The lock on the outside suggested otherwise.&rdquo;
                      </p>
                      <p className="text-fg-secondary text-xs mt-3 text-right font-mono">— Field Notes, Day 3</p>
                    </div>
                  )}

                  {index === 3 && (
                    <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 bg-accent-red/10 border border-accent-red/30 p-6 max-w-xs">
                      <p className="text-accent-red text-sm leading-relaxed font-medium">
                        ⚠ PATH DIVERGENCE DETECTED
                      </p>
                      <p className="text-fg-secondary text-xs mt-2">The guide has corrected itself. Proceed with caution.</p>
                    </div>
                  )}
                </div>

                <div className={cn(
                  "pt-4 md:pt-8",
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                )}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-medium tracking-widest uppercase mb-6">
                    {index + 1} / {sections.length}
                  </div>

                  <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-fg-primary tracking-tight mb-6">
                    {section.title}
                  </h3>

                  <div className="space-y-4 text-fg-secondary leading-relaxed text-base md:text-lg">
                    {section.text.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="transition-all duration-500">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {index === sections.length - 1 && (
                    <div className="mt-10 pt-6 border-t border-border-primary">
                      <p className="text-fg-tertiary text-sm leading-relaxed">
                        The Wrong Guide is a single-player, offline, story-driven psychological horror experience.
                        Minimal gunplay. No jump scares. Only observation, deduction, prayer pages (dua-nevisi) scattered as keys, and the creeping certainty that the Guide leading you — the Booklet Man who destroyed your past — has misrepresented everything about your situation.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}