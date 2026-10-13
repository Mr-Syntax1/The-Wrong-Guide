"use client";

import Link from "next/link";
import { gameConfig } from "@/config/game";
import { cn } from "@/lib/utils";
import { Video, X, MessageSquare, Mail, Monitor } from "lucide-react";

const socialLinks = [
  { platform: "Steam", url: gameConfig.social.steam, label: "Steam", icon: Monitor },
  { platform: "YouTube", url: gameConfig.social.youtube, label: "YouTube", icon: Video },
  { platform: "Twitter", url: gameConfig.social.twitter, label: "Twitter / X", icon: X },
  { platform: "Discord", url: gameConfig.social.discord, label: "Discord", icon: MessageSquare },
].filter((link) => link.url && !link.url.includes("["));

const footerLinks = {
  game: [
    { label: "The Story", href: "/story", external: false },
    { label: "Locations", href: "/world", external: false },
    { label: "Features", href: "/features", external: false },
    { label: "Media", href: "/media", external: false },
  ],
  community: [
    { label: "News", href: "/news", external: false },
    { label: "Press Kit", href: "/press-kit", external: false },
    { label: "Steam Page", href: gameConfig.steamUrl, external: true },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy", external: false },
    { label: "Terms of Service", href: "/terms", external: false },
    { label: "Cookie Policy", href: "/cookies", external: false },
  ],
  contact: [
    { label: "General Inquiries", href: `mailto:${gameConfig.businessEmail}` },
    { label: "Press Inquiries", href: `mailto:${gameConfig.pressEmail}` },
    { label: "Business Inquiries", href: `mailto:${gameConfig.businessEmail}` },
  ],
};

export function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-bg-secondary border-t border-border-primary" role="contentinfo">
      <div className="container-custom py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl md:text-3xl text-fg-primary tracking-tight" aria-label={`${gameConfig.title} - Home`}>
              THE WRONG GUIDE
            </Link>
            <p className="mt-4 text-fg-secondary text-base max-w-xs leading-relaxed">
              A story-driven atmospheric horror game where the guide you follow may not be what it seems.
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

          <nav aria-label="Game">
            <h3 className="font-ui font-semibold text-fg-primary tracking-wide uppercase text-sm mb-4">THE GAME</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.game.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fg-secondary hover:text-accent-red transition-colors text-sm"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Community">
            <h3 className="font-ui font-semibold text-fg-primary tracking-wide uppercase text-sm mb-4">COMMUNITY</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fg-secondary hover:text-accent-red transition-colors text-sm"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="font-ui font-semibold text-fg-primary tracking-wide uppercase text-sm mb-4">LEGAL</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fg-secondary hover:text-accent-red transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-ui font-semibold text-fg-primary tracking-wide uppercase text-sm mb-4">CONTACT</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.contact.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-fg-secondary hover:text-accent-red transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    <span>{link.label.replace(" Inquiries", "").replace("General ", "")}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-border-primary">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-fg-tertiary text-sm">
              &copy; {currentYear} {gameConfig.title}. {gameConfig.developer} / {gameConfig.publisher}. All rights reserved.
            </p>
            <p className="text-fg-tertiary text-sm font-mono tracking-wider">
              THE GUIDE IS WRONG
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}