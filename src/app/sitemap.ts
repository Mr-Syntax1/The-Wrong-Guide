import { MetadataRoute } from "next";
import { gameConfig } from "@/config/game";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thewrongguide.com";
  const currentDate = new Date();

  const staticRoutes = [
    "",
    "/story",
    "/world",
    "/features",
    "/media",
    "/news",
    "/press-kit",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const newsRoutes = gameConfig.news.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}