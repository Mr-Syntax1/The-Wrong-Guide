import { Metadata } from "next";
import { Hero, Story, World, Features, Trailer, Media, SteamCTA, News, FAQ } from "@/components/sections";
import { getGameConfig } from "@/config/game";
import { SITE_NAME, pageMetadata, videoGameJsonLd } from "@/config/seo";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const heroT = await getTranslations({ locale, namespace: "hero" });
  const gameConfig = getGameConfig(locale);

  // Avoid "THE WRONG GUIDE | The Wrong Guide" duplication:
  // the root template already appends "| The Wrong Guide".
  const base = pageMetadata({
    locale,
    path: "/",
    title: heroT("title"),
    description: gameConfig.shortDescription,
  });

  if (locale === "en") {
    const absoluteTitle = `${SITE_NAME} | Official Website`;
    return {
      ...base,
      title: { absolute: absoluteTitle },
      openGraph: { ...base.openGraph, title: absoluteTitle },
      twitter: { ...base.twitter, title: absoluteTitle },
    };
  }
  return base;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const gameConfig = getGameConfig(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoGameJsonLd(locale, gameConfig.shortDescription)),
        }}
      />
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
