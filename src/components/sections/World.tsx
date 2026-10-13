"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ResponsiveImage } from "@/components/ui";
import { cn } from "@/lib/utils";
import { gameConfig } from "@/config/game";
import { MapPin, ChevronLeft, ChevronRight, AlertTriangle, Eye, Maximize2 } from "lucide-react";

const moodDescriptions = {
  oppressive: { label: "OPPRESSIVE", description: "Heavy atmosphere, constant pressure, feeling watched", color: "text-accent-red" },
  uncanny: { label: "UNCANNY", description: "Familiar yet deeply wrong, subtle distortions", color: "text-accent-amber" },
  vertigo: { label: "VERTIGO", description: "Disorienting verticality, loss of spatial grounding", color: "text-fg-tertiary" },
  claustrophobic: { label: "CLAUSTROPHOBIC", description: "Confined spaces, walls closing in, limited escape", color: "text-accent-red" },
};

export function World() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const locations = gameConfig.locations;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        setSelectedIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
        break;
      case "ArrowRight":
        setSelectedIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        setIsExpanded(!isExpanded);
        break;
      case "Escape":
        setIsExpanded(false);
        break;
    }
  };

  return (
    <section id="world" className="relative" aria-labelledby="world-heading">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/20 to-transparent" />
      </div>

      <div className="container-custom">
        <header className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 id="world-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-6">
            BEYOND THE GUIDE
          </h2>
          <p className="text-fg-secondary text-lg md:text-xl leading-relaxed">
            The environments you&apos;ll traverse. Each location holds its own rules, its own secrets, and its own relationship to the guide.
          </p>
        </header>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
              role="group"
              aria-roledescription="slide"
              aria-label="Locations carousel"
            >
              {locations.map((location, index) => (
                <article
                  key={location.id}
                  className="w-full flex-shrink-0 px-4"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${location.name}, ${index + 1} of ${locations.length}`}
                >
                  <div className="relative aspect-[16/10] lg:aspect-[21/9] overflow-hidden rounded-base bg-bg-tertiary">
                    <ResponsiveImage
                      src={location.image}
                      alt={location.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 100vw"
                      className="object-cover transition-transform duration-1000"
                      style={{
                        filter: "brightness(0.5) contrast(1.15) saturate(0.3)",
                        transform: isExpanded && index === selectedIndex ? "scale(1.02)" : "scale(1)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-bg-primary/20 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,#030303_100%)]" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                          <MapPin className="w-5 h-5 text-accent-red flex-shrink-0" aria-hidden="true" />
                          <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-fg-primary tracking-tight">
                            {location.name.toUpperCase()}
                          </h3>
                        </div>
                        <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-6 line-clamp-3">
                          {location.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <span className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border",
                            moodDescriptions[location.mood as keyof typeof moodDescriptions]?.color || "text-fg-tertiary",
                            moodDescriptions[location.mood as keyof typeof moodDescriptions]?.color?.replace("text-", "border-") || "border-border-primary",
                            "bg-bg-primary/50"
                          )}>
                            <AlertTriangle className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                            {moodDescriptions[location.mood as keyof typeof moodDescriptions]?.label || location.mood.toUpperCase()}
                          </span>
                          <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            onKeyDown={(e) => e.key === "Enter" && setIsExpanded(!isExpanded)}
                            className="flex items-center gap-2 px-4 py-2 rounded-base bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors text-sm font-medium"
                            aria-expanded={isExpanded && index === selectedIndex}
                            aria-label={isExpanded && index === selectedIndex ? "Collapse details" : `Expand ${location.name} details`}
                            tabIndex={0}
                          >
                            {isExpanded && index === selectedIndex ? (
                              <>
                                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                                COLLAPSE
                              </>
                            ) : (
                              <>
                                <Maximize2 className="w-4 h-4" aria-hidden="true" />
                                EXPLORE
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8" role="tablist" aria-label="Location navigation">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => { setSelectedIndex(index); setIsExpanded(false); }}
                onKeyDown={handleKeyDown}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === selectedIndex
                    ? "bg-accent-red w-8"
                    : "bg-border-secondary hover:bg-border-primary"
                )}
                role="tab"
                aria-selected={index === selectedIndex}
                aria-label={`Go to ${location.name}`}
                tabIndex={index === selectedIndex ? 0 : -1}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setSelectedIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1))}
              onKeyDown={handleKeyDown}
              className="p-3 rounded-full bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
              aria-label="Previous location"
              tabIndex={0}
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <div className="text-fg-tertiary text-sm font-mono" aria-live="polite">
              {selectedIndex + 1} / {locations.length}
            </div>
            <button
              onClick={() => setSelectedIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1))}
              onKeyDown={handleKeyDown}
              className="p-3 rounded-full bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
              aria-label="Next location"
              tabIndex={0}
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-12 overflow-hidden"
            role="region"
            aria-label={`${locations[selectedIndex].name} details`}
          >
            <LocationDetail location={locations[selectedIndex]} onClose={() => setIsExpanded(false)} />
          </motion.div>
        )}
      </div>
    </section>
  );
}

function LocationDetail({ location, onClose }: { location: typeof gameConfig.locations[0]; onClose: () => void }) {
  const mood = moodDescriptions[location.mood as keyof typeof moodDescriptions];

  return (
    <div className="relative bg-bg-secondary border border-border-primary rounded-base overflow-hidden">
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
          aria-label="Close details"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-accent-red" aria-hidden="true" />
              <h3 className="font-display font-bold text-3xl md:text-4xl text-fg-primary tracking-tight">
                {location.name.toUpperCase()}
              </h3>
            </div>

            <p className="text-fg-secondary text-lg leading-relaxed mb-8">
              {location.description}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-ui font-semibold text-fg-primary text-sm tracking-wider uppercase mb-3">ATMOSPHERE</h4>
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase border",
                    mood?.color || "text-fg-tertiary",
                    mood?.color?.replace("text-", "border-") || "border-border-primary",
                    "bg-bg-primary/50"
                  )}>
                    <Eye className="w-4 h-4" aria-hidden="true" />
                    {mood?.label || location.mood.toUpperCase()}
                  </span>
                </div>
                <p className="text-fg-tertiary text-sm mt-3">{mood?.description}</p>
              </div>

              <div>
                <h4 className="font-ui font-semibold text-fg-primary text-sm tracking-wider uppercase mb-3">ENVIRONMENTAL STORYTELLING</h4>
                <ul className="space-y-2 text-fg-secondary text-sm" role="list">
                  <li className="flex items-start gap-2">◈ Notes left by previous followers of the guide</li>
                  <li className="flex items-start gap-2">◈ Markers that contradict each other</li>
                  <li className="flex items-start gap-2">◈ Objects placed with deliberate intent</li>
                  <li className="flex items-start gap-2">◈ Audio logs with static interference</li>
                </ul>
              </div>

              <div>
                <h4 className="font-ui font-semibold text-fg-primary text-sm tracking-wider uppercase mb-3">RULES OF THE LOCATION</h4>
                <ul className="space-y-2 text-fg-secondary text-sm" role="list">
                  <li className="flex items-start gap-2">◈ The guide marks the path — but does it mark the truth?</li>
                  <li className="flex items-start gap-2">◈ Safe zones may only appear safe</li>
                  <li className="flex items-start gap-2">◈ Shortcuts often lead to longer journeys</li>
                  <li className="flex items-start gap-2">◈ What you see may not be what is there</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-base">
            <ResponsiveImage
              src={location.image}
              alt={`${location.name} - detailed view`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ filter: "brightness(0.55) contrast(1.2) saturate(0.35)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-fg-tertiary text-sm font-mono tracking-wider">
              LOCATION DATA CLASSIFIED — GUIDE ACCESS ONLY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}