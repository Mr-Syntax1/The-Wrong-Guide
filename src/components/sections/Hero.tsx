"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";
import { gameConfig } from "@/config/game";
import { cn } from "@/lib/utils";
import { Play, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface HeroProps {
  locale: string;
}

export function Hero({ locale: _locale }: HeroProps) {
  const [showContent, setShowContent] = useState(false);
  const t = useTranslations("hero");
  const footerT = useTranslations("footer");

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let typeItInstance: { destroy: () => void } | null = null;
    let timer: ReturnType<typeof setTimeout> | null = null;

    timer = setTimeout(() => {
      const target = document.querySelector(".typewriter");
      if (!target) return;

      import("typeit")
        .then((module) => {
          const TypeIt = module.default;

          const instance = new TypeIt(".typewriter", {
            strings: t.raw("taglines"),
            speed: 80,
            deleteSpeed: 30,
            lifeLike: true,
            cursor: true,
            cursorChar: "|",
            breakLines: false,
            nextStringDelay: 4000,
            loop: true,
            waitUntilVisible: false,
          });

          typeItInstance = instance;
          instance.go();
        })
        .catch((err) => console.error("TypeIt loading error:", err));
    }, 100);

    return () => {
      if (timer) clearTimeout(timer);
      if (typeItInstance) {
        typeItInstance.destroy();
        typeItInstance = null;
      }
    };
  }, [t]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/screenshots/screenshot-02.webp"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{
            filter: "brightness(0.82) contrast(1.12) saturate(0.9)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg-primary/60 via-bg-primary/30 to-bg-primary/80" />
        <div className="absolute inset-0 bg-[radial-linear(ellipse_at_center,_transparent_40%,#030303_100%)]" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none opacity-3" aria-hidden="true">
        <div className="film-grain" style={{ opacity: 0.05 }} />
      </div>

      <div className="relative z-20 container-custom px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className={cn(
              "mb-8 md:mb-12 min-h-[3rem] flex items-center justify-center",
              "transition-all duration-1000 ease-in-out",
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="typewriter text-fg-secondary text-xl md:text-2xl font-light tracking-wide leading-relaxed" />
          </div>

          <h1
            id="hero-title"
            className={cn(
              "font-display font-bold tracking-tight leading-[1.05]",
              "text-5xl md:text-6xl lg:text-7xl xl:text-[7rem]",
              "text-fg-primary",
              "transition-all duration-1000 ease-out delay-200",
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {t("title")}
          </h1>

          <p
            className={cn(
              "mt-6 md:mt-8 max-w-2xl mx-auto",
              "text-fg-tertiary text-base md:text-lg leading-relaxed",
              "transition-all duration-1000 ease-out delay-400",
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {footerT("tagline")}
          </p>

          <div
            className={cn(
              "mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4",
              "transition-all duration-1000 ease-out delay-600",
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            role="group"
            aria-label="Primary actions"
          >
            <Link href={gameConfig.steamUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="xl" className="w-full sm:w-auto min-w-[280px] cursor-pointer" aria-label={`Wishlist ${gameConfig.title} on Steam`}>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                {t("wishlist")}
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
            </Link>

            <Button
              variant="secondary"
              size="xl"
              className="w-full cursor-pointer sm:w-auto min-w-[200px]"
              onClick={() => document.getElementById("trailer")?.scrollIntoView({ behavior: "smooth" })}
              aria-label={t("watchTrailer")}
            >
              <Play className="w-5 h-5 mr-2" aria-hidden="true" />
              {t("watchTrailer")}
            </Button>
          </div>

          <div
            className={cn(
              "mt-16 flex items-center justify-center gap-8 text-fg-tertiary text-sm",
              "transition-all duration-1000 ease-out delay-800",
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            aria-label="Game info"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-red" aria-hidden="true" />
              SINGLE-PLAYER
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-red" aria-hidden="true" />
              OFFLINE
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-red" aria-hidden="true" />
              STORY-DRIVEN
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-red" aria-hidden="true" />
              COMING SOON
            </span>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center gap-3 text-fg-tertiary mt-10">
            <div className="animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <span className="text-xs tracking-widest uppercase">{t("scrollToBegin")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}