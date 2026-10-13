import { Metadata } from "next";
import { PressKitPage } from "@/components/pages/PressKitPage";
import { gameConfig } from "@/config/game";

export const metadata: Metadata = {
  title: "Press Kit",
  description: `Official press kit for ${gameConfig.title} - ${gameConfig.shortDescription}`,
  openGraph: {
    title: `Press Kit | ${gameConfig.title}`,
    description: `Official press kit for ${gameConfig.title}`,
    type: "website",
  },
};

export default function PressKit() {
  return <PressKitPage />;
}