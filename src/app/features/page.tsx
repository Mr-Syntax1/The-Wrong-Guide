import { Metadata } from "next";
import { Features } from "@/components/sections";
import { gameConfig } from "@/config/game";

export const metadata: Metadata = {
  title: "Features",
  description: "Core pillars that define The Wrong Guide experience - story-driven, single-player, offline, exploration, puzzles, atmospheric horror.",
  openGraph: {
    title: "Features | The Wrong Guide",
    description: "Core pillars that define The Wrong Guide experience",
  },
};

export default function FeaturesPage() {
  return (
    <>

      <Features />
      <section className="py-16" aria-labelledby="cta-heading">
        <div className="container-custom text-center">
          <h2 id="cta-heading" className="font-display font-bold text-3xl md:text-4xl text-fg-primary mb-6">
            Experience It Yourself
          </h2>
          <p className="text-fg-secondary text-lg mb-8 max-w-2xl mx-auto">
            No hand-holding. No false safety. Only the guide.
          </p>
          <a href={gameConfig.steamUrl} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-base bg-accent-red text-fg-primary font-medium text-lg hover:bg-accent-red-hover transition-colors cursor-pointer">
              WISHLIST ON STEAM
            </button>
          </a>
        </div>
      </section>
    </>
  );
}