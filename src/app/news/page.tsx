import { Metadata } from "next";
import { News } from "@/components/sections";
import { gameConfig } from "@/config/game";

export const metadata: Metadata = {
  title: "News",
  description: "Latest development updates, announcements, and behind-the-scenes content for The Wrong Guide.",
  openGraph: {
    title: "News | The Wrong Guide",
    description: "Latest development updates and announcements",
  },
};

export default function NewsPage() {
  return (
    <>
      <div className="mt-24">
        <News />
        <section className="py-16" aria-labelledby="cta-heading">
          <div className="container-custom text-center">
            <h2 id="cta-heading" className="font-display font-bold text-3xl md:text-4xl text-fg-primary mb-6">
              Stay Updated
            </h2>
            <p className="text-fg-secondary text-lg mb-8 max-w-2xl mx-auto">
              Wishlist on Steam to be notified when the guide becomes available.
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