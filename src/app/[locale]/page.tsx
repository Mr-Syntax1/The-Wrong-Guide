import { Metadata } from "next";
import { Hero, Story, World, Features, Trailer, Media, SteamCTA, News, FAQ } from "@/components/sections";
import { getGameConfig } from "@/config/game";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common" });
  const heroT = await getTranslations({ locale, namespace: "hero" });
  const storyT = await getTranslations({ locale, namespace: "story" });
  const gameConfig = getGameConfig(locale);

  return {
    title: heroT("title"),
    description: gameConfig.shortDescription,
    openGraph: {
      title: `${gameConfig.title} | The Wrong Guide`,
      description: gameConfig.shortDescription,
      images: ["/images/trailer-poster.webp"],
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <Story locale={locale} />
      <World locale={locale} />
      <Features locale={locale} />
      <Trailer locale={locale} />
      <Media locale={locale} />
      <FAQ locale={locale} />
      <SteamCTA locale={locale} />
      <News locale={locale} />
    </>
  );
}