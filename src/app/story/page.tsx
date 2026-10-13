import { Metadata } from "next";
import { Story } from "@/components/sections";
import { gameConfig } from "@/config/game";

export const metadata: Metadata = {
  title: "The Story",
  description: "Discover the premise of The Wrong Guide - a story-driven atmospheric horror game.",
  openGraph: {
    title: "The Story | The Wrong Guide",
    description: "Discover the premise of The Wrong Guide",
  },
};

export default function StoryPage() {
  return (
    <>
      <div className="mt-12">
        <Story />
        <section className="py-12" aria-labelledby="cta-heading">
          <div className="container-custom text-center">
            <h2 id="cta-heading" className="font-display font-bold text-3xl md:text-4xl text-fg-primary mb-6">
              Ready to Begin?
            </h2>
            <p className="text-fg-secondary text-lg mb-8 max-w-2xl mx-auto">
              The guide is waiting. But remember — the guide may be wrong.
            </p>
            <a href={gameConfig.steamUrl} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-base bg-accent-red text-fg-primary font-medium text-lg hover:bg-accent-red-hover transition-colors cursor-pointer">
                WISHLIST ON STEAM
              </button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}