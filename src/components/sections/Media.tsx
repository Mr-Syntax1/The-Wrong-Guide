"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gallery } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";
import { Image as ImageIcon, Video, Layers, Grid } from "lucide-react";

const mediaCategories = [
  { id: "screenshots", label: "SCREENSHOTS", icon: ImageIcon, count: 8 },
  { id: "gameplay", label: "GAMEPLAY", icon: Video, count: 3 },
  { id: "concept-art", label: "CONCEPT ART", icon: Layers, count: 6 },
];

const mediaItems = [
  {
    id: "scr-1",
    type: "image" as const,
src: "/images/screenshots/screenshot-01.webp",
      thumbnail: "/images/screenshots/screenshot-01.webp",
    alt: "The Path - First steps into the unknown",
    caption: "The Path - First steps into the unknown",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-2",
    type: "image" as const,
src: "/images/screenshots/screenshot-02.webp",
      thumbnail: "/images/screenshots/screenshot-02.webp",
    alt: "The Cabin - Safety or trap?",
    caption: "The Cabin - Safety or trap?",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-3",
    type: "image" as const,
src: "/images/screenshots/screenshot-03.webp",
      thumbnail: "/images/screenshots/screenshot-03.webp",
    alt: "The Tower - Ascending into fog",
    caption: "The Tower - Ascending into fog",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-4",
    type: "image" as const,
src: "/images/screenshots/screenshot-04.webp",
      thumbnail: "/images/screenshots/screenshot-04.webp",
    alt: "Environmental puzzle - Read the signs carefully",
    caption: "Environmental puzzle - Read the signs carefully",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-5",
    type: "image" as const,
src: "/images/screenshots/screenshot-05.webp",
      thumbnail: "/images/screenshots/screenshot-05.webp",
    alt: "The Subterrain - Below the surface",
    caption: "The Subterrain - Below the surface",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-6",
    type: "image" as const,
src: "/images/screenshots/screenshot-06.webp",
      thumbnail: "/images/screenshots/screenshot-06.webp",
    alt: "The Guide's instructions - Follow them?",
    caption: "The Guide's instructions - Follow them?",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-7",
    type: "image" as const,
src: "/images/screenshots/screenshot-07.webp",
      thumbnail: "/images/screenshots/screenshot-07.webp",
    alt: "Atmospheric interior - Light and shadow",
    caption: "Atmospheric interior - Light and shadow",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-8",
    type: "image" as const,
src: "/images/screenshots/screenshot-08.webp",
      thumbnail: "/images/screenshots/screenshot-08.webp",
    alt: "A moment of wrongness - Something changed",
    caption: "A moment of wrongness - Something changed",
    width: 1920,
    height: 1080,
  },
  {
    id: "gp-1",
    type: "video" as const,
    src: "/videos/gameplay-01.mp4",
    thumbnail: "/images/gameplay/thumb-gp-04.webp",
    alt: "Gameplay footage - Path exploration",
    caption: "Gameplay: Path exploration",
    width: 1920,
    height: 1080,
  },
  // {
  //   id: "gp-2",
  //   type: "video" as const,
  //   src: "/videos/gameplay-02.mp4",
  //   thumbnail: "/images/gameplay/thumb-gp-02.webp",
  //   alt: "Gameplay footage - Cabin interior",
  //   caption: "Gameplay: Cabin interior",
  //   width: 1920,
  //   height: 1080,
  // },
  // {
  //   id: "gp-3",
  //   type: "video" as const,
  //   src: "/videos/gameplay-03.mp4",
  //   thumbnail: "/images/gameplay/thumb-gp-03.webp",
  //   alt: "Gameplay footage - Puzzle solving",
  //   caption: "Gameplay: Puzzle solving",
  //   width: 1920,
  //   height: 1080,
  // },
  // {
  //   id: "ca-1",
  //   type: "image" as const,
  //   src: "/images/concept-art/concept-01.webp",
  //   thumbnail: "/images/concept-art/thumb-ca-01.webp",
  //   alt: "Early Path environment concept",
  //   caption: "Early Path environment concept",
  //   width: 1920,
  //   height: 1080,
  // },
  // {
  //   id: "ca-2",
  //   type: "image" as const,
  //   src: "/images/concept-art/concept-02.webp",
  //   thumbnail: "/images/concept-art/thumb-ca-02.webp",
  //   alt: "Cabin interior mood study",
  //   caption: "Cabin interior mood study",
  //   width: 1920,
  //   height: 1080,
  // },
  // {
  //   id: "ca-3",
  //   type: "image" as const,
  //   src: "/images/concept-art/concept-03.webp",
  //   thumbnail: "/images/concept-art/thumb-ca-03.webp",
  //   alt: "Tower architecture exploration",
  //   caption: "Tower architecture exploration",
  //   width: 1920,
  //   height: 1080,
  // },
  // {
  //   id: "ca-4",
  //   type: "image" as const,
  //   src: "/images/concept-art/concept-04.webp",
  //   thumbnail: "/images/concept-art/thumb-ca-04.webp",
  //   alt: "Subterrain tunnel system",
  //   caption: "Subterrain tunnel system",
  //   width: 1920,
  //   height: 1080,
  // },
  // {
  //   id: "ca-5",
  //   type: "image" as const,
  //   src: "/images/concept-art/concept-05.webp",
  //   thumbnail: "/images/concept-art/thumb-ca-05.webp",
  //   alt: "Guide UI/UX iterations",
  //   caption: "Guide UI/UX iterations",
  //   width: 1920,
  //   height: 1080,
  // },
  // {
  //   id: "ca-6",
  //   type: "image" as const,
  //   src: "/images/concept-art/concept-06.webp",
  //   thumbnail: "/images/concept-art/thumb-ca-06.webp",
  //   alt: "Character silhouette studies",
  //   caption: "Character silhouette studies",
  //   width: 1920,
  //   height: 1080,
  // },
];

export function Media() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? mediaItems
    : mediaItems.filter((item) => {
        if (activeCategory === "screenshots") return item.id.startsWith("scr-");
        if (activeCategory === "gameplay") return item.id.startsWith("gp-");
        if (activeCategory === "concept-art") return item.id.startsWith("ca-");
        return true;
      });

return (
    <section id="media" className="relative" aria-labelledby="media-heading">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-bg-secondary/20 to-transparent" />
      </div>

      <div className="container-custom">
        <header className="max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <h2 id="media-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mt-24 mb-6">
                MEDIA
              </h2>
              <p className="text-fg-secondary text-lg mt-2">Screenshots, gameplay footage, and concept art.</p>
            </div>
            <div className="flex items-center gap-2" role="tablist" aria-label="Media categories">
              <button
                onClick={() => setActiveCategory("all")}
                className={cn(
                  "px-4 py-2 rounded-base text-sm font-medium tracking-wide transition-all",
                  activeCategory === "all"
                    ? "bg-accent-red text-fg-primary"
                    : "bg-bg-tertiary text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated"
                )}
                role="tab"
                aria-selected={activeCategory === "all"}
                aria-controls="media-panel"
              >
                ALL ({mediaItems.length})
              </button>
              {mediaCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 rounded-base text-sm font-medium tracking-wide transition-all cursor-pointer",
                    activeCategory === cat.id
                      ? "bg-accent-red text-fg-primary"
                      : "bg-bg-tertiary text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated"
                  )}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  aria-controls="media-panel"
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </header>

        <div id="media-panel" role="tabpanel" aria-label={`${activeCategory} media gallery`}>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Gallery
              items={filteredItems}
              columns={4}
              gap={4}
              className="min-h-[400px]"
            />
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bg-tertiary text-fg-tertiary mb-4">
                <ImageIcon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-xl text-fg-primary mb-2">No media available</h3>
              <p className="text-fg-secondary">Media for this category will be added soon.</p>
            </div>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-border-primary">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-fg-tertiary text-sm">
              All media assets are available in the <a href="/press-kit" className="text-accent-red hover:underline">Press Kit</a> for press and content creators.
            </p>
            <a
              href="/press-kit"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-base bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors text-sm font-medium"
            >
              <Grid className="w-4 h-4" aria-hidden="true" />
              VIEW PRESS KIT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}