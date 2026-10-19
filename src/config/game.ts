import { gameLocaleContent as enContent } from "./game.en";
import { gameLocaleContent as faContent } from "./game.fa";
import { gameLocaleContent as trContent } from "./game.tr";
import { gameLocaleContent as jaContent } from "./game.ja";
import { gameLocaleContent as ruContent } from "./game.ru";

const localeContents = {
  en: enContent,
  fa: faContent,
  tr: trContent,
  ja: jaContent,
  ru: ruContent,
} as const;

export type GameLocale = keyof typeof localeContents;

export function getLocaleContent(locale: string) {
  if (locale === "fa" || locale === "tr" || locale === "ja" || locale === "ru") {
    return localeContents[locale];
  }
  return localeContents.en;
}

// ---------------------------------------------------------------------------
// Non-translatable base data (ids, urls, images, files, dates, prices).
// All user-facing texts live in game.{locale}.ts and are merged by id/file.
// ---------------------------------------------------------------------------

const baseFeatures = [
  { id: "story-driven", icon: "book-open" },
  { id: "single-player", icon: "user" },
  { id: "offline", icon: "wifi-off" },
  { id: "exploration", icon: "compass" },
  { id: "puzzles", icon: "puzzle" },
  { id: "atmospheric-horror", icon: "eye" },
] as const;

const baseLocations = [
  {
    id: "the-path",
    image: "/images/locations/the-path.webp",
    mood: "oppressive",
  },
  {
    id: "the-cabin",
    image: "/images/locations/the-cabin.webp",
    mood: "uncanny",
  },
  {
    id: "the-tower",
    image: "/images/locations/the-tower.webp",
    mood: "vertigo",
  },
  {
    id: "the-subterrain",
    image: "/images/locations/the-subterrain.webp",
    mood: "claustrophobic",
  },
] as const;

const baseNews = [
  // {
  //   id: "steam-page-live",
  //   date: "2026-10-15",
  //   image: "/images/news/steam-page.webp",
  //   slug: "steam-page-live",
  // },
  {
    id: "first-trailer",
    date: "2026-10-09",
    image: "/images/news/story-4.webp",
    slug: "first-trailer",
  },
  {
    id: "devlog-1",
    date: "2026-09-21",
    image: "/images/news/devlog-1.webp",
    slug: "devlog-1-concept",
  },
  {
    id: "publisher-announcement",
    date: "2026-09-05",
    image: "/images/news/publisher.webp",
    slug: "publisher-announcement",
  },
] as const;

const baseMediaItems = [
  {
    id: "scr-1",
    type: "image" as const,
    src: "/images/screenshots/screenshot-01.webp",
    thumbnail: "/images/screenshots/screenshot-01.webp",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-2",
    type: "image" as const,
    src: "/images/screenshots/screenshot-02.webp",
    thumbnail: "/images/screenshots/screenshot-02.webp",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-3",
    type: "image" as const,
    src: "/images/screenshots/screenshot-03.webp",
    thumbnail: "/images/screenshots/screenshot-03.webp",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-4",
    type: "image" as const,
    src: "/images/screenshots/screenshot-04.webp",
    thumbnail: "/images/screenshots/screenshot-04.webp",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-5",
    type: "image" as const,
    src: "/images/screenshots/screenshot-05.webp",
    thumbnail: "/images/screenshots/screenshot-05.webp",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-6",
    type: "image" as const,
    src: "/images/screenshots/screenshot-06.webp",
    thumbnail: "/images/screenshots/screenshot-06.webp",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-7",
    type: "image" as const,
    src: "/images/screenshots/screenshot-07.webp",
    thumbnail: "/images/screenshots/screenshot-07.webp",
    width: 1920,
    height: 1080,
  },
  {
    id: "scr-8",
    type: "image" as const,
    src: "/images/screenshots/screenshot-08.webp",
    thumbnail: "/images/screenshots/screenshot-08.webp",
    width: 1920,
    height: 1080,
  },
  {
    id: "gp-1",
    type: "video" as const,
    src: "/videos/gameplay-01.mp4",
    thumbnail: "/images/gameplay/thumb-gp-04.webp",
    width: 1920,
    height: 1080,
  },
] as const;

const basePressKit = {
  logos: [
    { file: "logo-horizontal.webp", formats: ["PNG", "SVG"] },
    { file: "logo-vertical.webp", formats: ["PNG", "SVG"] },
    { file: "logo-icon.webp", formats: ["PNG", "SVG"] },
  ],
  keyArt: [
    { file: "key-art-main.webp", resolution: "3840x2160" },
    { file: "key-art-vertical.webp", resolution: "2160x3840" },
    { file: "key-art-capsule.webp", resolution: "616x353" },
  ],
  screenshots: [
    { file: "screenshot-01.webp" },
    { file: "screenshot-02.webp" },
    { file: "screenshot-03.webp" },
    { file: "screenshot-04.webp" },
    { file: "screenshot-05.webp" },
    { file: "screenshot-06.webp" },
    { file: "screenshot-07.webp" },
    { file: "screenshot-08.webp" },
  ],
  trailers: [
    {
      file: "trailer-announce.mp4",
      duration: "1:47",
      resolution: "1920x1080",
    },
    {
      file: "trailer-gameplay.mp4",
      duration: "0:52",
      resolution: "1920x1080",
    },
  ],
  conceptArt: [
    { file: "concept-01.webp" },
    { file: "concept-02.webp" },
    { file: "concept-03.webp" },
    { file: "concept-04.webp" },
    { file: "concept-05.webp" },
    { file: "concept-06.webp" },
  ],
  downloads: {
    pressKitZip: "/press-kit/the-wrong-guide-press-kit.zip",
    logoZip: "/press-kit/logos/the-wrong-guide-logos.zip",
    keyArtZip: "/press-kit/key-art/the-wrong-guide-key-art.zip",
    screenshotsZip: "/press-kit/screenshots/the-wrong-guide-screenshots.zip",
    trailersZip: "/press-kit/trailers/the-wrong-guide-trailers.zip",
    conceptArtZip: "/press-kit/concept-art/the-wrong-guide-concept-art.zip",
  },
} as const;

function pickText<T extends { id: string }>(items: readonly T[], id: string, fallback: readonly T[]): T {
  return items.find((item) => item.id === id) ?? fallback.find((item) => item.id === id)!;
}

/**
 * Returns the full game config with all user-facing texts in the
 * requested locale. Falls back to English for unknown locales.
 * Works on both server and client components.
 */
export function getGameConfig(locale: string) {
  const content = getLocaleContent(locale);

  const features = baseFeatures.map((base) => ({
    ...base,
    ...pickText(content.features, base.id, enContent.features),
  }));

  const locations = baseLocations.map((base) => ({
    ...base,
    ...pickText(content.locations, base.id, enContent.locations),
  }));

  const news = baseNews.map((base) => ({
    ...base,
    ...pickText(content.news, base.id, enContent.news),
  }));

  const mediaItems = baseMediaItems.map((base) => ({
    ...base,
    ...(content.mediaCaptions[base.id] ?? enContent.mediaCaptions[base.id]),
  }));

  const pressKitText = content.pressKit;
  const pressKitTextEn = enContent.pressKit;

  const withAssetText = <T extends { file: string }>(items: readonly T[]) =>
    items.map((item) => ({
      ...item,
      ...(pressKitText.assets[item.file] ?? pressKitTextEn.assets[item.file]),
    }));

  const pressKit = {
    logos: withAssetText(basePressKit.logos),
    keyArt: withAssetText(basePressKit.keyArt),
    screenshots: basePressKit.screenshots.map((item) => ({
      ...item,
      caption:
        pressKitText.screenshotCaptions[item.file] ??
        pressKitTextEn.screenshotCaptions[item.file],
    })),
    trailers: withAssetText(basePressKit.trailers),
    conceptArt: basePressKit.conceptArt.map((item) => ({
      ...item,
      caption:
        pressKitText.conceptCaptions[item.file] ??
        pressKitTextEn.conceptCaptions[item.file],
    })),
    downloads: basePressKit.downloads,
  };

  return {
    title: "The Wrong Guide",

    shortDescription: content.shortDescription,
    longDescription: content.longDescription,
    genre: content.genre,

    developer: "BMS Studio",
    publisher: "Sourena Games",

    platforms: ["Steam (Windows)"],
    releaseStatus: content.releaseStatus,
    releaseDate: "2027",
    price: "$7.99",

    steamUrl: "https://store.steampowered.com",
    steamAppId: "[STEAM APP ID]",

    trailerUrl: "/videos/trailer.mp4",
    trailerPoster: "/images/trailer-poster.webp",

    pressEmail: "mrsyntax22@gmail.com",
    // businessEmail: "business@[DOMAIN].com",

    social: {
      steam: "https://store.steampowered.com/app/[STEAM APP ID]",
      // youtube: "[YOUTUBE CHANNEL URL]",
      // twitter: "[TWITTER/X URL]",
      discord: "https://discord.gg/tzygHRbmD",
      telegram: "https://t.me/TheBMSstudio",
    },

    ageRating: "Mature 17+",
    languages: content.languages,

    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6400 / AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 970 / AMD RX 570 (4GB VRAM)",
        directX: "Version 11",
        storage: "15 GB available space",
        notes: "SSD recommended",
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K / AMD Ryzen 7 3700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2070 / AMD RX 6700 XT (8GB VRAM)",
        directX: "Version 12",
        storage: "15 GB available space",
        notes: "SSD required",
      },
    },
    features,
    locations,
    coreDesign: content.coreDesign,
    moods: content.moods,
    steamFeatures: content.steamFeatures,
    news,
    categoryLabels: content.categoryLabels,
    faq: content.faq,
    mediaItems,
    pressKit,
    effects: content.effects,
  };
}

/** Default (English) config — keeps existing `gameConfig` imports working. */
export const gameConfig = getGameConfig("en");

export type GameConfig = typeof gameConfig;
