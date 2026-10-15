import { Metadata } from "next";
import { Hero, Story, World, Features, Trailer, Media, SteamCTA, News } from "@/components/sections";
import { gameConfig } from "@/config/game";

export const metadata: Metadata = {
  title: "The Wrong Guide",
  description: gameConfig.shortDescription,
  openGraph: {
    title: `${gameConfig.title} | The Wrong Guide`,
    description: gameConfig.shortDescription,
    images: ["/images/trailer-poster.webp"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <World />
      <Features />
      <Trailer />
      <Media />
      <SteamCTA />
      <News />
    </>
  );
}