import { MetadataRoute } from "next";
import { gameConfig } from "@/config/game";

const locales = ["en", "fa", "tr", "ja", "ru"] as const;
const baseUrl = "https://thewrongguide.com";
const currentDate = new Date();

const staticPaths = [
  "",
  "/story",
  "/world",
  "/features",
  "/media",
  "/news",
  "/press-kit",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Add localized routes
  for (const locale of locales) {
    for (const path of staticPaths) {
      const url = locale === "en" && path === "" 
        ? baseUrl 
        : `${baseUrl}/${locale}${path}`;
      
      routes.push({
        url,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              l === "en" && path === "" 
                ? baseUrl 
                : `${baseUrl}/${l}${path}`
            ])
          ),
        },
      });
    }

    // News routes
    for (const post of gameConfig.news) {
      const url = `${baseUrl}/${locale}/news/${post.slug}`;
      routes.push({
        url,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              `${baseUrl}/${l}/news/${post.slug}`
            ])
          ),
        },
      });
    }
  }

  return routes;
}