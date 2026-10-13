"use client";

import { motion } from "framer-motion";
import { gameConfig } from "@/config/game";
import {
  BookOpen,
  User,
  WifiOff,
  Compass,
  Puzzle,
  Eye,
} from "lucide-react";

const featureIcons = {
  "book-open": BookOpen,
  user: User,
  "wifi-off": WifiOff,
  compass: Compass,
  puzzle: Puzzle,
  eye: Eye,
};

export function Features() {
  return (
    <section id="features" className="relative" aria-labelledby="features-heading">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/20 to-transparent" />
      </div>

      <div className="container-custom mt-24">
        <header className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 id="features-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-6">
            FEATURES
          </h2>
          <p className="text-fg-secondary text-lg md:text-xl leading-relaxed">
            Core pillars that define The Wrong Guide experience.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gameConfig.features.map((feature, index) => {
            const Icon = featureIcons[feature.icon as keyof typeof featureIcons] || BookOpen;

            return (
              <motion.article
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative"
              >
                <div className="bg-bg-secondary border border-border-primary rounded-base p-6 md:p-8 h-full transition-all duration-500 hover:border-accent-red/50 hover:shadow-[0_20px_40px_-20px_rgba(220,38,38,0.15)]">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-base bg-accent-red/10 border border-accent-red/30 text-accent-red mb-6 group-hover:bg-accent-red group-hover:text-fg-primary group-hover:border-accent-red transition-all duration-300">
                    <Icon className="w-7 h-7 md:w-8 md:h-8" aria-hidden="true" />
                  </div>

                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg-primary tracking-tight mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-fg-secondary leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-accent-red/20 font-display font-bold text-6xl md:text-7xl tracking-tight select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16 md:mt-24">
          <div className="relative bg-bg-secondary border border-border-primary rounded-base overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-red/5 via-transparent to-transparent" />
            <div className="p-8 md:p-12 lg:p-16 relative">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-medium tracking-widest uppercase mb-6">
                  CORE DESIGN
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-fg-primary tracking-tight mb-6">
                  No Hand-Holding. No False Safety.
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-fg-secondary leading-relaxed">
                  <p className="text-lg">
                    The Wrong Guide respects your intelligence. There are no objective markers, no quest logs,
                    no highlighted interactables. The world communicates through environmental cues, audio,
                    and the guide itself — which may or may not be reliable.
                  </p>
                  <p className="text-lg">
                    Every mechanic serves the narrative. Puzzles emerge from observation. Horror emerges from
                    uncertainty. The guide emerges from the question: what happens when the only thing keeping
                    you alive might be the thing leading you to your end?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}