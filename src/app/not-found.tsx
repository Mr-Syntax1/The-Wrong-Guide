import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: { absolute: "404 — Page Not Found | The Wrong Guide" },
  description: "The page you followed the guide to doesn't exist. Or it did, once.",
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const t = await getTranslations({ locale: "en", namespace: "notFound" });

  return (
    <main className="min-h-screen bg-bg-primary text-fg-primary flex items-center justify-center relative">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,#030303_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/50 to-bg-primary/90" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none opacity-3" aria-hidden="true">
        <div className="film-grain" style={{ opacity: 0.05 }} />
      </div>

      <div className="relative z-20 container-custom px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 md:mb-12 min-h-[3rem] flex items-center justify-center">
            <span className="text-fg-tertiary text-xl font-light tracking-widest uppercase letter-spacing-[0.5em]">
              THE WRONG GUIDE
            </span>
          </div>

          <h1
            id="not-found-heading"
            className="font-display font-bold tracking-tight leading-[1.05] text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] text-fg-primary mb-8"
            aria-level="1"
          >
            404
          </h1>

          <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {t("message")}
          </p>

          <p className="text-fg-tertiary text-sm md:text-base leading-relaxed mb-12 max-w-xl mx-auto">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-base bg-accent-red text-fg-primary font-medium text-lg hover:bg-accent-red-hover transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              {t("returnHome")}
            </Link>

            <Link
              href="/story"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-base bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
            >
              READ THE STORY
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>

          <div className="text-fg-disabled text-xs font-mono tracking-widest uppercase">
            The guide remembers every wrong turn.
          </div>
        </div>
      </div>
    </main>
  );
}