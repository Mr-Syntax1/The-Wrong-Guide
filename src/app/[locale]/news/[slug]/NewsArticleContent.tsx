"use client";

import { motion } from "framer-motion";

export default function NewsArticleSkeleton() {
  return (
    <article className="min-h-screen">
      <section className="relative pb-16 pt-14 md:pb-24" aria-labelledby="article-heading">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, height: 24 }}
              animate={{ opacity: 1, height: 24 }}
              className="h-6 bg-bg-tertiary rounded animate-pulse mb-4 mx-auto max-w-md"
            />
            <motion.div
              initial={{ opacity: 0, height: 48 }}
              animate={{ opacity: 1, height: 48 }}
              className="h-12 bg-bg-tertiary rounded animate-pulse mb-4 mx-auto max-w-xl"
            />
            <motion.div
              initial={{ opacity: 0, height: 16 }}
              animate={{ opacity: 1, height: 16 }}
              className="h-4 bg-bg-tertiary rounded animate-pulse mx-auto max-w-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-label="Article content">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, height: 400 }}
              animate={{ opacity: 1, height: 400 }}
              className="relative aspect-video overflow-hidden rounded-base mb-12 bg-bg-tertiary animate-pulse"
            />
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, height: 24 }}
                animate={{ opacity: 1, height: 24 }}
                className="h-6 bg-bg-tertiary rounded animate-pulse max-w-md"
              />
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, height: 16 }}
                  animate={{ opacity: 1, height: 16 }}
                  className="h-4 bg-bg-tertiary rounded animate-pulse"
                  style={{ width: i === 8 ? "60%" : "100%" }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}