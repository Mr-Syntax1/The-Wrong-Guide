"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui";
import { gameConfig } from "@/config/game";
import { ArrowRight, Check, Download, Monitor, WifiOff, User, Shield } from "lucide-react";

const features = [
  { icon: User, label: "Single Player", description: "Focused solo experience" },
  { icon: WifiOff, label: "Offline Play", description: "No internet required" },
  { icon: Monitor, label: "Steam Deck Verified", description: "Optimized for handheld" },
  { icon: Shield, label: "No DRM", description: "Play anywhere, anytime" },
  { icon: Download, label: "Cloud Saves", description: "Progress follows you" },
  { icon: Check, label: "Full Controller Support", description: "Play your way" },
];

export function SteamCTA() {
  const isReleased = gameConfig.releaseStatus === "Released" || gameConfig.releaseStatus === "Available Now";

  return (
    <section id="steam" className="relative" aria-labelledby="steam-heading">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-red/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.03)_0%,_transparent_70%)]" />
      </div>

      <div className="container-custom">
        <div className="relative bg-bg-secondary border border-border-primary rounded-base overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-red/10 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-medium tracking-widest uppercase mb-6">
                  STEAM
                </div>

                <h2 id="steam-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-6">
                  READY TO FOLLOW THE GUIDE?
                </h2>

                <p className="text-fg-secondary text-lg leading-relaxed mb-8 max-w-xl">
                  {gameConfig.shortDescription} Wishlist now to be notified when the guide becomes available.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
                  <Link href={gameConfig.steamUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="primary"
                      size="xl"
                      className="w-full sm:w-auto min-w-[280px] group cursor-pointer"
                      aria-label={isReleased ? `Buy ${gameConfig.title} on Steam` : `Wishlist ${gameConfig.title} on Steam`}
                    >
                      <Monitor className="w-6 h-6 mr-2" aria-hidden="true" />
                      {isReleased ? "BUY ON STEAM" : "WISHLIST ON STEAM"}
                      <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </Link>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto cursor-pointer"
                    onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    LEARN MORE
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-fg-tertiary text-sm">
                  <span className="font-medium text-fg-secondary">Platform:</span>
                  <span className="flex items-center gap-1">PC (Windows)</span>
                  {gameConfig.price && !isReleased && (
                    <span className="flex items-center gap-1">
                      <span className="px-2 py-0.5 rounded bg-accent-red/10 border border-accent-red/30 text-accent-red font-mono text-xs">
                        {gameConfig.price}
                      </span>
                    </span>
                  )}
                  {gameConfig.releaseDate && gameConfig.releaseDate !== "[RELEASE DATE]" && (
                    <span className="flex items-center gap-1">
                      <span className="px-2 py-0.5 rounded bg-bg-tertiary border border-border-primary font-mono text-xs">
                        {gameConfig.releaseDate}
                      </span>
                    </span>
                  )}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square max-w-md mx-auto">
                  <div className="relative w-full h-full rounded-base overflow-hidden bg-bg-tertiary border border-border-primary">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <Monitor className="w-24 h-24 md:w-32 md:h-32 text-accent-red/30 mx-auto mb-4" aria-hidden="true" />
                        <p className="text-fg-tertiary text-sm">STEAM PAGE</p>
                        <p className="text-fg-disabled text-xs mt-1">Steam capsule art</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 bg-bg-primary/50 border border-border-primary rounded-base text-center"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-accent-red/10 border border-accent-red/30 text-accent-red mb-3">
                        <feature.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <p className="font-medium text-fg-primary text-sm">{feature.label}</p>
                      <p className="text-fg-tertiary text-xs mt-1">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-fg-tertiary text-sm">
            By clicking &ldquo;Wishlist on Steam&rdquo; you will be redirected to the Steam store page.
            {gameConfig.publisher !== "[PUBLISHER NAME]" && ` Published by ${gameConfig.publisher}.`}
          </p>
        </div>
      </div>
    </section>
  );
}