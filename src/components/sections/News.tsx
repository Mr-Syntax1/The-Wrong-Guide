"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ResponsiveImage } from "@/components/ui";
import { cn, formatDate } from "@/lib/utils";
import { gameConfig } from "@/config/game";
import { ChevronRight, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui";

const categories = ["All", "Announcement", "Trailer", "Development", "Business"];

export function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayCount, setDisplayCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const filteredNews = activeCategory === "All"
    ? gameConfig.news
    : gameConfig.news.filter((post) => post.category === activeCategory);

  const displayedNews = filteredNews.slice(0, displayCount);
  const hasMore = displayCount < filteredNews.length;

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount((prev) => prev + 3);
      setIsLoading(false);
    }, 500);
  };

  return (
    <section id="news" className="relative" aria-labelledby="news-heading">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/20 to-transparent" />
      </div>

      <div className="container-custom">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <h2 id="news-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-2">
              NEWS
            </h2>
            <p className="text-fg-secondary text-lg">Development updates, announcements, and behind-the-scenes content.</p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="News categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setDisplayCount(3); }}
                className={cn(
                  "px-4 py-2 rounded-base text-sm font-medium tracking-wide transition-all whitespace-nowrap",
                  activeCategory === cat
                    ? "bg-accent-red text-fg-primary"
                    : "bg-bg-tertiary text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated"
                )}
                role="tab"
                aria-selected={activeCategory === cat}
                aria-controls="news-panel"
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div id="news-panel" role="tabpanel" aria-label={`${activeCategory} news`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedNews.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group"
              >
                <Link
                  href={`/news/${post.slug}`}
                  className="block bg-bg-secondary border border-border-primary rounded-base overflow-hidden transition-all duration-500 hover:border-accent-red/50 hover:shadow-[0_20px_40px_-20px_rgba(220,38,38,0.15)]"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ResponsiveImage
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{
                        filter: "brightness(0.5) contrast(1.15) saturate(0.4)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-accent-red/20 border border-accent-red/30 text-accent-red text-xs font-medium tracking-wider uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <time className="text-fg-tertiary text-xs font-mono tracking-wider block mb-3" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>

                    <h3 className="font-display font-bold text-xl text-fg-primary tracking-tight mb-3 group-hover:text-accent-red transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-fg-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border-primary">
                      <span className="flex items-center gap-2 text-fg-tertiary text-sm font-medium text-accent-red group-hover:gap-3 transition-all">
                        READ MORE
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                      <ExternalLink className="w-4 h-4 text-fg-tertiary hover:text-accent-red transition-colors" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}

            {filteredNews.length === 0 && (
              <div className="col-span-full text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bg-tertiary text-fg-tertiary mb-4">
                  <Loader2 className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-xl text-fg-primary mb-2">No news in this category</h3>
                <p className="text-fg-secondary">Check back later for updates.</p>
              </div>
            )}
          </div>

          {hasMore && (
            <div className="text-center mt-12">
              <Button
                variant="secondary"
                size="lg"
                onClick={loadMore}
                disabled={isLoading}
                className="min-w-[200px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" aria-hidden="true" />
                    LOADING...
                  </>
                ) : (
                  <>
                    LOAD MORE
                    <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </>
                )}
              </Button>
            </div>
          )}

          {!hasMore && displayedNews.length > 0 && (
            <div className="text-center mt-12">
              <p className="text-fg-tertiary text-sm">That&apos;s all for now. Check back soon for more updates.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}