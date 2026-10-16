import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

/** Canonical production URL of the site. */
export const SITE_URL = "https://the-wrong-guide.vercel.app";

export const SITE_NAME = "The Wrong Guide";

/** Default share image (700x700). Used in Open Graph / Twitter metadata. */
export const OG_IMAGE = {
  url: "/images/icon.webp",
  width: 700,
  height: 700,
  alt: "The Wrong Guide",
};

const OG_LOCALES: Record<string, string> = {
  en: "en_US",
  fa: "fa_IR",
  tr: "tr_TR",
  ja: "ja_JP",
  ru: "ru_RU",
};

export function ogLocale(locale: string): string {
  return OG_LOCALES[locale] ?? "en_US";
}

/**
 * Localized path for a route, respecting `localePrefix: "as-needed"`
 * (default locale "en" has no prefix).
 */
export function localizedPath(locale: string, path: string): string {
  const normalized = path === "/" ? "" : path;
  if (locale === routing.defaultLocale) return normalized === "" ? "/" : normalized;
  return `/${locale}${normalized}`;
}

/** Absolute canonical URL for a localized route. */
export function canonicalUrl(locale: string, path: string): string {
  return `${SITE_URL}${localizedPath(locale, path)}`;
}

/**
 * hreflang alternates for a route, including `x-default`
 * pointing at the default-locale (prefix-less) URL.
 */
export function hreflangAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = canonicalUrl(locale, path);
  }
  languages["x-default"] = canonicalUrl(routing.defaultLocale, path);
  return languages;
}

interface PageSeo {
  locale: string;
  /** Route path without locale prefix, e.g. "/story" or "/news/slug". */
  path: string;
  title: string;
  description: string;
  /** Open Graph type. Defaults to "website". */
  ogType?: "website" | "article";
  /** ISO date for article:published_time. */
  publishedTime?: string;
}

/**
 * Builds the full per-page metadata block: canonical + hreflang,
 * Open Graph and Twitter cards (all sharing icon.webp).
 */
export function pageMetadata({ locale, path, title, description, ogType = "website", publishedTime }: PageSeo): Metadata {
  const url = canonicalUrl(locale, path);
  const images = [OG_IMAGE];

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(path),
    },
    openGraph: {
      type: ogType,
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: ogLocale(locale),
      images,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: "@thewrongguide",
      creator: "@thewrongguide",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/** JSON-LD VideoGame schema for the home page. */
export function videoGameJsonLd(locale: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: SITE_NAME,
    url: canonicalUrl(locale, "/"),
    description,
    inLanguage: locale,
    genre: ["Psychological Horror", "Narrative Exploration", "Story-Driven"],
    gamePlatform: "Steam (Windows)",
    playMode: "SinglePlayer",
    applicationCategory: "Game",
    operatingSystem: "Windows",
    author: { "@type": "Organization", name: "BMS Studio" },
    publisher: { "@type": "Organization", name: "Sourena Games" },
    image: `${SITE_URL}${OG_IMAGE.url}`,
    contentRating: "Mature 17+",
  };
}

/** JSON-LD WebSite schema (locale-independent). */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE.url}`,
};
