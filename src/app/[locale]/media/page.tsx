import { Metadata } from "next";
import { Media } from "@/components/sections";
import { Link } from "@/i18n/navigation";
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
    path: "/media",
    title: navT("media"),
    description: metaT("media"),
  });
}

export default async function MediaPage({ params }: Props) {
  const { locale: _locale } = await params;
  const mediaT = await getTranslations({ locale: _locale, namespace: "media" });

  return (
    <>
      <div className="mt-24">
        <h1 className="sr-only">{mediaT("heading")}</h1>
        <Media locale={_locale} />
        <section className="py-16" aria-labelledby="cta-heading">
          <div className="container-custom text-center">
            <h2 id="cta-heading" className="font-display font-bold text-3xl md:text-4xl text-fg-primary mb-6">
              See More
            </h2>
            <p className="text-fg-secondary text-lg mb-8 max-w-2xl mx-auto">
              All media assets are available in the Press Kit for press and content creators.
            </p>
            <Link href="/press-kit" className="inline-flex items-center gap-2 px-6 py-3 rounded-base bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors text-sm font-medium">
              VIEW PRESS KIT
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}