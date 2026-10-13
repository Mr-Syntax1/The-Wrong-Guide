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
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24" aria-labelledby="page-heading">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/20 to-transparent" />
        </div>
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 id="page-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-6">
            THE STORY
          </h1>
          <p className="text-fg-secondary text-lg md:text-xl leading-relaxed">
            What kind of experience is this? What is the player doing? What is the &ldquo;guide&rdquo;? Why should the player care? What feels wrong?
          </p>
        </div>
      </section>
      <Story />
      <section className="py-16" aria-labelledby="cta-heading">
        <div className="container-custom text-center">
          <h2 id="cta-heading" className="font-display font-bold text-3xl md:text-4xl text-fg-primary mb-6">
            Ready to Begin?
          </h2>
          <p className="text-fg-secondary text-lg mb-8 max-w-2xl mx-auto">
            The guide is waiting. But remember — the guide may be wrong.
          </p>
          <a href={gameConfig.steamUrl} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-base bg-accent-red text-fg-primary font-medium text-lg hover:bg-accent-red-hover transition-colors">
              WISHLIST ON STEAM
            </button>
          </a>
        </div>
      </section>
    </>
  );
}