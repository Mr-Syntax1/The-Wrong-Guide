"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Gallery } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";
import { Image, Video, Layers, Grid } from "lucide-react";
import { useTranslations } from "next-intl";
import { getGameConfig } from "@/config/game";

const mediaCategories = [
  { id: "screenshots", key: "screenshots", icon: Image, count: 8 },
  { id: "gameplay", key: "gameplay", icon: Video, count: 3 },
  { id: "concept-art", key: "conceptArt", icon: Layers, count: 6 },
];

interface MediaProps {
  locale: string;
}

export function Media({ locale }: MediaProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const t = useTranslations("media");
  const mediaItems = getGameConfig(locale).mediaItems;

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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/20 to-transparent" />
      </div>

      <div className="container-custom">
        <header className="max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <h2 id="media-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mt-24 mb-6">
                {t("heading")}
              </h2>
              <p className="text-fg-secondary text-lg mt-2">{t("subheading")}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 mx-auto gap-4 md:gap-2" role="tablist" aria-label="Media categories">
              <button
                onClick={() => setActiveCategory("all")}
                className={cn(
                  "px-4 py-3 rounded-base text-sm font-medium tracking-wide transition-all",
                  activeCategory === "all"
                    ? "bg-accent-red text-fg-primary"
                    : "bg-bg-tertiary text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated cursor-pointer"
                )}
                role="tab"
                aria-selected={activeCategory === "all"}
                aria-controls="media-panel"
              >
                {t("all")} ({mediaItems.length})
              </button>
              {mediaCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-3 rounded-base text-sm font-medium tracking-wide transition-all",
                    activeCategory === cat.id
                      ? "bg-accent-red text-fg-primary"
                      : "bg-bg-tertiary text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated cursor-pointer"
                  )}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  aria-controls="media-panel"
                >
                  {t(cat.key)} ({cat.count})
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
                <Image className="w-8 h-8" alt="" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-xl text-fg-primary mb-2">No media available</h3>
              <p className="text-fg-secondary">Media for this category will be added soon.</p>
            </div>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-border-primary">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-fg-tertiary text-sm">
              All media assets are available in the <Link href="/press-kit" className="text-accent-red hover:underline">Press Kit</Link> for press and content creators.
            </p>
            <Link
              href="/press-kit"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-base bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors text-sm font-medium"
            >
              <Grid className="w-4 h-4" aria-hidden="true" />
              {t("viewPressKit")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}