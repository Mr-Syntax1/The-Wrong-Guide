import { MetadataRoute } from "next";
import { gameConfig } from "@/config/game";

const locales = ["en", "fa", "tr", "ja", "ru"] as const;
const baseUrl = "https://the-wrong-guide.vercel.app";
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
      
      const staticLanguages: Record<string, string> = {};
      for (const l of locales) {
        staticLanguages[l] =
          l === "en" && path === "" ? baseUrl : `${baseUrl}/${l}${path}`;
      }
      staticLanguages["x-default"] = path === "" ? baseUrl : `${baseUrl}${path}`;
      routes.push({
        url,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: staticLanguages,
        },
      });
    }

    // News routes (default locale "en" has no prefix with `as-needed`)
    for (const post of gameConfig.news) {
      const newsPath = (l: string) =>
        l === "en" ? `/news/${post.slug}` : `/${l}/news/${post.slug}`;
      const url = `${baseUrl}${newsPath(locale)}`;
      const newsLanguages: Record<string, string> = {};
      for (const l of locales) {
        newsLanguages[l] = `${baseUrl}${newsPath(l)}`;
      }
      newsLanguages["x-default"] = `${baseUrl}${newsPath("en")}`;
      routes.push({
        url,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: newsLanguages,
        },
      });
    }
  }

  return routes;
}