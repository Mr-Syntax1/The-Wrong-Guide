import { Metadata } from "next";
import { Hero, Story, World, Features, Trailer, Media, SteamCTA, News } from "@/components/sections";
import { gameConfig } from "@/config/game";

export const metadata: Metadata = {
  title: "Official Website",
  description: gameConfig.shortDescription,
  openGraph: {
    title: `${gameConfig.title} | Official Website`,
    description: gameConfig.shortDescription,
    images: ["/images/og-image.png"],
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