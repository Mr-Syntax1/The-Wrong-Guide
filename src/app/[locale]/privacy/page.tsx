import { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getGameConfig } from "@/config/game";
import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  const footerT = await getTranslations({ locale, namespace: "footer" });
  const gameConfig = getGameConfig(locale);

  return {
    title: `${footerT("privacy")} | ${gameConfig.title}`,
    description: t("metaDescription", { title: gameConfig.title }),
  };
}

export default async function PrivacyPolicy({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  const footerT = await getTranslations({ locale, namespace: "footer" });
  const commonT = await getTranslations({ locale, namespace: "common" });
  const gameConfig = getGameConfig(locale);

  const values = {
    title: gameConfig.title,
    developer: gameConfig.developer,
    publisher: gameConfig.publisher,
  };
  const rich = {
    ...values,
    b: (chunks: ReactNode) => <strong>{chunks}</strong>,
  };

  return (
    <main className="min-h-screen bg-bg-primary text-fg-primary">
      <section className="container-custom py-24 md:py-32" aria-labelledby="privacy-heading">
        <header className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h1 id="privacy-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-6 uppercase">
            {footerT("privacy")}
          </h1>
          <p className="text-fg-tertiary text-sm font-mono tracking-wider uppercase">
            {t("lastUpdatedLabel")}: {t("date")}
          </p>
        </header>

        <div className="max-w-3xl mx-auto space-y-16">
          <section aria-labelledby="intro-heading" className="prose prose-invert max-w-none">
            <p id="intro-heading" className="text-fg-secondary text-base md:text-lg leading-relaxed">
              {t.rich("intro", rich)}
            </p>
          </section>

          <section aria-labelledby="section-1-heading">
            <h2 id="section-1-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              {t("s1Heading")}
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>{t("s1P1")}</p>
              <p>{t("s1P2")}</p>
            </div>
          </section>

          <section aria-labelledby="section-2-heading">
            <h2 id="section-2-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              {t("s2Heading")}
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>{t("s2P1")}</p>
              <p>{t("s2P2")}</p>
            </div>
          </section>

          <section aria-labelledby="section-3-heading">
            <h2 id="section-3-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              {t("s3Heading")}
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>{t("s3P1")}</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>{t("s3Li1Label")}</strong> — <a href="https://store.steampowered.com/privacy_agreement/" target="_blank" rel="noopener noreferrer" className="text-accent-red hover:underline">{t("s3Li1Link")}</a>
                </li>
                <li>
                  <strong>{t("s3Li2Label")}</strong> — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-red hover:underline">{t("s3Li2Link")}</a>
                </li>
                <li>{t("s3Li3")}</li>
              </ul>
              <p>{t("s3P2")}</p>
            </div>
          </section>

          <section aria-labelledby="section-4-heading">
            <h2 id="section-4-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              {t("s4Heading")}
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>{t("s4P1")}</p>
              <p className="text-accent-red">{t("s4P2")}</p>
            </div>
          </section>

          <section aria-labelledby="section-5-heading">
            <h2 id="section-5-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              {t("s5Heading")}
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>{t("s5P1")}</p>
            </div>
          </section>

          <section aria-labelledby="section-6-heading">
            <h2 id="section-6-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              {t("s6Heading")}
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>{t("s6P1")}</p>
              <p>{t("s6P2")}</p>
            </div>
          </section>

          <section aria-labelledby="section-7-heading">
            <h2 id="section-7-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              {t("s7Heading")}
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>{t("s7P1")}</p>
              <p>
                <a href={`mailto:${gameConfig.pressEmail}`} className="text-accent-red hover:underline font-mono">
                  {gameConfig.pressEmail}
                </a>
              </p>
            </div>
          </section>

          <div className="pt-8 border-t border-border-primary">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-fg-tertiary hover:text-accent-red transition-colors text-sm font-medium"
            >
              ← {commonT("backToHome")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
