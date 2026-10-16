import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/private/"],
    },
    sitemap: "https://the-wrong-guide.vercel.app/sitemap.xml",
    host: "https://the-wrong-guide.vercel.app",
  };
}