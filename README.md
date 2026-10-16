# THE WRONG GUIDE — Official Website

> *You followed the guide. It led you here.*

The official website for **The Wrong Guide**, a story-driven atmospheric horror game coming to **Steam**. Wishlist it on Steam to be notified the moment the guide becomes available.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![i18n](https://img.shields.io/badge/i18n-5_locales-success)](./messages/)
[![Steam](https://img.shields.io/badge/Steam-Coming_Soon-1b2838?logo=steam&logoColor=white)](https://store.steampowered.com)

---

## About the Game

**The Wrong Guide** is a single-player, offline, story-driven psychological horror game.

You are **Mohsen** — a father, a nature explorer, a man who loves his 9-year-old daughter more than anything in the world. One night, a phone call pulls him out onto an empty desert highway… and he wakes up in an abandoned hospital where the hallways breathe.

A mysterious **guide** speaks through notes, signs, and radio voices, marking the way with paint, light, and crumbs of certainty. You follow — because the alternative is the unknown.

But sometimes the guide hesitates. A marker points two ways. A voice cracks into something else. The map shows a room that isn't there.

> *How far do you follow before you stop?*

**Key facts**

| | |
|---|---|
| **Genre** | Psychological Horror / Narrative Exploration / Story-Driven |
| **Players** | Single-player, offline |
| **Platform** | Steam (Windows) — Steam Deck verification planned |
| **Price** | $7.99 USD (regional pricing on Steam) |
| **Release** | 2027 |
| **Rating** | Mature 17+ |
| **Languages (game)** | English, Persian at launch |

---

## About This Repository

This repo contains the **official website** source code — a fast, fully localized, SEO-friendly site built with the Next.js App Router:

- **Full localization in 5 languages** — English, Persian (RTL), Turkish, Japanese, Russian — via `next-intl`, including game content (features, locations, news, FAQ, press kit, horror micro-effects)
- **Immersive sections** — cinematic hero with typewriter taglines, story chapters, location explorer, feature pillars, trailer, media gallery, FAQ, Steam CTA, news
- **"Wrong Guide" horror effects** — the site itself glitches: text shifts, label flickers, warning flashes, and observed-hints, all translated per locale
- **Press kit** — downloadable asset packages, logos, key art, screenshots, trailers, usage guidelines, and press contact
- **News room** — announcements, trailers, devlogs, and business updates with per-article pages
- **SEO & sharing** — localized metadata, Open Graph / Twitter cards, sitemap, robots
- **Accessibility** — semantic landmarks, ARIA live regions, keyboard navigation, reduced-motion support

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS 4, Framer Motion, lucide-react |
| i18n | next-intl 4 (routing, middleware, localized navigation) |
| Typography FX | TypeIt |
| Language | TypeScript 5 |
| Lint | ESLint (Next.js config) |

---

## Project Structure

```
├── messages/                  # UI translations (next-intl)
│   ├── en.json  fa.json  tr.json  ja.json  ru.json
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (<html>/<body> live here only)
│   │   ├── not-found.tsx      # 404 page
│   │   ├── sitemap.ts         # Localized sitemap (respects `as-needed` prefix)
│   │   └── [locale]/          # All localized routes
│   │       ├── layout.tsx     # Navbar / Footer / providers (no <html> here!)
│   │       ├── page.tsx       # Home: Hero → Story → World → … → News
│   │       ├── story|world|features|media|news|press-kit|privacy|terms/
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, LanguageSwitcher
│   │   ├── sections/          # Hero, Story, World, Features, Trailer, …
│   │   ├── pages/             # PressKitPage
│   │   └── ui/                # Button, Card, Gallery/Lightbox, VideoPlayer, …
│   ├── config/
│   │   ├── game.ts            # Base config + getGameConfig(locale) merger
│   │   └── game.en|fa|tr|ja|ru.ts   # Localized game content per language
│   └── i18n/
│       ├── routing.ts         # Locales, default locale, prefix strategy
│       ├── navigation.ts      # Localized Link / router / pathname helpers
│       └── request.ts         # next-intl server config
└── public/                    # Images, videos, press-kit downloads
```

### How localization works

- **UI strings** → `messages/{locale}.json`, consumed with `useTranslations("namespace")` (client) or `getTranslations({ locale, namespace })` (server).
- **Game content** (features, locations, news, FAQ, press kit texts, horror effects, …) → `src/config/game.{locale}.ts`, merged with non-translatable data (URLs, images, IDs) through **`getGameConfig(locale)`**.
- **Routing** uses `localePrefix: "as-needed"`, so English URLs have no prefix (`/story`) while other locales do (`/fa/story`). Always navigate with the localized helpers from `@/i18n/navigation` (`Link`, `useRouter().replace(pathname, { locale })`) — never hand-build `/${locale}/…` URLs.
- Only `src/app/layout.tsx` renders `<html>`/`<body>`; `src/app/[locale]/layout.tsx` renders providers and chrome only.

---

## Getting Started

**Prerequisites:** Node.js 20+ and npm.

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the middleware resolves the default locale automatically (e.g. `/fa` for Persian).

```bash
# Production build (validates all 70 localized pages)
npm run build

# Serve the production build
npm start

# Lint
npm run lint
```

---

## Press & Business

- **Press inquiries / review codes / interviews:** mrsyntax22@gmail.com
- Everything else creators need — logos, key art, screenshots, trailers, usage guidelines — lives in the **Press Kit** page on the site.

---

## License

© BMS Studio / Sourena Games. All rights reserved.

The game, its title, artwork, trailers, screenshots, and all site content are the exclusive property of the rights holders. Assets in the press kit may be used for editorial coverage of *The Wrong Guide* only, per the usage guidelines on the Press Kit page.

---

*The guide remembers every wrong turn.*
