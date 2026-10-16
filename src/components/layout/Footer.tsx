"use client";

import { Link } from "@/i18n/navigation";
import { gameConfig } from "@/config/game";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { DiscordIcon, SteamIcon, TelegramIcon } from "../ui/icons";

const socialLinks = [
  { platform: "Steam", url: "https://store.steampowered.com", label: "Steam", icon: SteamIcon },
  // { platform: "YouTube", url: gameConfig.social.youtube, label: "YouTube", icon: Video },
  // { platform: "Twitter", url: gameConfig.social.twitter, label: "Twitter / X", icon: X },
  { platform: "Discord", url: gameConfig.social.discord, label: "Discord", icon: DiscordIcon },
  { platform: "Telegram", url: gameConfig.social.telegram, label: "Telegram", icon: TelegramIcon },
].filter((link) => link.url && !link.url.includes("["));

interface FooterProps {
  locale: string;
}

export function Footer({ locale: _locale }: FooterProps) {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    game: [
      { key: "story", href: "/story" },
      { key: "world", href: "/world" },
      { key: "features", href: "/features" },
      { key: "media", href: "/media" },
    ],
    community: [
      { key: "news", href: "/news" },
      { key: "pressKit", href: "/press-kit" },
      { key: "steam", href: gameConfig.steamUrl, external: true },
    ],
    legal: [
      { key: "privacy", href: "/privacy" },
      { key: "terms", href: "/terms" },
    ],
    contact: [
      { label: "General", href: `mailto:${gameConfig.pressEmail}` },
      // { label: "Press", href: `mailto:${gameConfig.pressEmail}` },
      // { label: "Business", href: `mailto:${gameConfig.pressEmail}` },
    ],
  };

  return (
    <footer className="bg-bg-secondary border-t border-border-primary" role="contentinfo">
      <div className="container-custom py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl md:text-3xl text-fg-primary tracking-tight" aria-label={`${gameConfig.title} - Home`}>
              THE WRONG GUIDE
            </Link>
            <p className="mt-4 text-fg-secondary text-base max-w-xs leading-relaxed">
              {t("tagline")}
            </p>
            {socialLinks.length > 0 && (
              <div className="mt-8 flex items-center gap-4" role="list" aria-label="Social links">
                {socialLinks.map(({ platform, url, label, icon: Icon }) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2 rounded-base bg-bg-tertiary text-fg-secondary",
                      "hover:text-accent-red hover:bg-bg-elevated transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
                    )}
                    aria-label={label}
                    role="listitem"
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <nav aria-label={t("theGame")}>
            <h3 className="font-ui font-semibold text-fg-primary tracking-wide uppercase text-sm mb-4">{t("theGame")}</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.game.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-fg-secondary hover:text-accent-red transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("community")}>
            <h3 className="font-ui font-semibold text-fg-primary tracking-wide uppercase text-sm mb-4">{t("community")}</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.community.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-fg-secondary hover:text-accent-red transition-colors text-sm"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("legal")}>
            <h3 className="font-ui font-semibold text-fg-primary tracking-wide uppercase text-sm mb-4">{t("legal")}</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-fg-secondary hover:text-accent-red transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-ui font-semibold text-fg-primary tracking-wide uppercase text-sm mb-4">{t("contact")}</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-fg-secondary hover:text-accent-red transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-border-primary">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-fg-tertiary text-sm">
              &copy; {currentYear} {gameConfig.title}. {gameConfig.developer} / {gameConfig.publisher}. {t("allRightsReserved")}
            </p>
            <p className="text-fg-tertiary text-sm font-mono tracking-wider">
              {t("guideIsWrong")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}