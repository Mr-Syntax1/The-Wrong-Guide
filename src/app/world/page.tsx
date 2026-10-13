import { Metadata } from "next";
import { World } from "@/components/sections";
import { gameConfig } from "@/config/game";

export const metadata: Metadata = {
  title: "Locations",
  description: "Explore the environments of The Wrong Guide - The Path, The Cabin, The Tower, The Subterrain.",
  openGraph: {
    title: "Locations | The Wrong Guide",
    description: "Explore the environments of The Wrong Guide",
  },
};

export default function WorldPage() {
  return (
    <>
      <div className="mt-24">
        <World />
        <section className="py-16" aria-labelledby="cta-heading">
          <div className="container-custom text-center">
            <h2 id="cta-heading" className="font-display font-bold text-3xl md:text-4xl text-fg-primary mb-6">
              Ready to Explore?
            </h2>
            <p className="text-fg-secondary text-lg mb-8 max-w-2xl mx-auto">
              The path is marked. But the markers may lie.
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