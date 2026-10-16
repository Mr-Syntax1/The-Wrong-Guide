import { Metadata } from "next";
import { News } from "@/components/sections";
import { gameConfig } from "@/config/game";
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
  const navT = await getTranslations({ locale, namespace: "nav" });
  const metaT = await getTranslations({ locale, namespace: "meta" });

  return pageMetadata({
    locale,
    path: "/news",
    title: navT("news"),
    description: metaT("news"),
  });
}

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  const newsT = await getTranslations({ locale, namespace: "news" });

  return (
    <>
      <div className="mt-24">
        <h1 className="sr-only">{newsT("heading")}</h1>
        <News locale={locale} />
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