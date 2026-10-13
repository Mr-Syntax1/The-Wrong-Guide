import { Metadata } from "next";
import { Media } from "@/components/sections";
import { gameConfig } from "@/config/game";

export const metadata: Metadata = {
  title: "Media",
  description: "Screenshots, gameplay footage, and concept art from The Wrong Guide.",
  openGraph: {
    title: "Media | The Wrong Guide",
    description: "Screenshots, gameplay footage, and concept art",
  },
};

export default function MediaPage() {
  return (
    <>
      <div className="mt-24">
        <Media />
        <section className="py-16" aria-labelledby="cta-heading">
          <div className="container-custom text-center">
            <h2 id="cta-heading" className="font-display font-bold text-3xl md:text-4xl text-fg-primary mb-6">
              See More
            </h2>
            <p className="text-fg-secondary text-lg mb-8 max-w-2xl mx-auto">
              All media assets are available in the Press Kit for press and content creators.
            </p>
            <a href="/press-kit" className="inline-flex items-center gap-2 px-6 py-3 rounded-base bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors text-sm font-medium">
              VIEW PRESS KIT
            </a>
          </div>
        </section>
      </div>
    </>
  );
}