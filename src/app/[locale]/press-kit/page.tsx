import { Metadata } from "next";
import { PressKitPage } from "@/components/pages/PressKitPage";
import { getGameConfig } from "@/config/game";
import { routing } from "@/i18n/routing";

export const revalidate = 3600;

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const gameConfig = getGameConfig(locale);

  return {
    title: "Press Kit | The Wrong Guide",
    description: `Official press kit for ${gameConfig.title} - ${gameConfig.shortDescription}`,
    openGraph: {
      title: `Press Kit | ${gameConfig.title}`,
      description: `Official press kit for ${gameConfig.title}`,
      type: "website",
    },
  };
}

export default async function PressKit({ params }: Props) {
  const { locale: _locale } = await params;

  return <PressKitPage locale={_locale} />;
}