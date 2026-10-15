"use client";

import { useState } from "react";
import Image from "next/image";
import { VideoModal } from "@/components/ui/VideoPlayer";
import { cn } from "@/lib/utils";
import { gameConfig } from "@/config/game";
import { Play, Loader2 } from "lucide-react";

export function Trailer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 500);
  };

  return (
    <section id="trailer" className="relative" aria-labelledby="trailer-heading">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-bg-secondary/20 to-transparent" />
      </div>

      <div className="container-custom">
        <header className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 id="trailer-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-6 mt-24">
            SEE FOR YOURSELF
          </h2>
          <p className="text-fg-secondary text-lg md:text-xl leading-relaxed">
            Two minutes of atmospheric horror. Watch the official trailer and decide if you can trust what you see.
          </p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-base bg-bg-tertiary">
            <div className="absolute inset-0">
              <Image
                src={gameConfig.trailerPoster}
                alt="The Wrong Guide - Official Trailer"
                fill
                priority
                className="object-cover transition-transform duration-700"
                style={{
                  filter: "brightness(0.4) contrast(1.2) saturate(0.3)",
                }}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg-primary/80 via-bg-primary/20 to-transparent" />
            </div>

            <button
              onClick={handlePlay}
              disabled={isLoading}
              className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 hover:opacity-100"
              aria-label={isLoading ? "Loading trailer..." : "Watch The Wrong Guide trailer"}
            >
              <div className={cn(
                "relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-accent-red/90 backdrop-blur-sm",
                "hover:bg-accent-red hover:scale-105 transition-all duration-300 cursor-pointer",
                "border-4 border-fg-primary/20",
                isLoading && "animate-pulse pointer-events-none"
              )}>
                {isLoading ? (
                  <Loader2 className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-fg-primary animate-spin" aria-hidden="true" />
                ) : (
                  <Play className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-fg-primary ml-1" aria-hidden="true" />
                )}
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 text-fg-primary/80 text-sm font-medium">
                <span>WATCH TRAILER</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-fg-tertiary text-sm">
              <span className="font-mono tracking-wider">OFFICIAL TRAILER</span>
              <span className="font-mono">1:47</span>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-bg-secondary border border-border-primary rounded-base text-center">
              <div className="font-display font-bold text-3xl md:text-4xl text-fg-primary">100K+</div>
              <div className="text-fg-tertiary text-sm mt-1">VIEWS</div>
            </div>
            <div className="p-4 bg-bg-secondary border border-border-primary rounded-base text-center">
              <div className="font-display font-bold text-3xl md:text-4xl text-fg-primary">98%</div>
              <div className="text-fg-tertiary text-sm mt-1">POSITIVE</div>
            </div>
            <div className="p-4 bg-bg-secondary border border-border-primary rounded-base text-center">
              <div className="font-display font-bold text-3xl md:text-4xl text-fg-primary">50+</div>
              <div className="text-fg-tertiary text-sm mt-1">ARTICLES</div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src={gameConfig.trailerUrl}
        poster={gameConfig.trailerPoster}
        title={`${gameConfig.title} - Official Trailer`}
        autoPlay
      />
    </section>
  );
}