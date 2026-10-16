import { Metadata } from "next";
import { PressKitPage } from "@/components/pages/PressKitPage";
import { getGameConfig } from "@/config/game";
import { pageMetadata } from "@/config/seo";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

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
  const pressT = await getTranslations({ locale, namespace: "pressKit" });

  return pageMetadata({
    locale,
    path: "/press-kit",
    title: pressT("heading"),
    description: pressT("subheading"),
  });
}

export default async function PressKit({ params }: Props) {
  const { locale: _locale } = await params;

  return <PressKitPage locale={_locale} />;
}