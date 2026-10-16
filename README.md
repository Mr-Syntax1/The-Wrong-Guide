<div align="center">

# 🩸 THE WRONG GUIDE 🩸

### *You followed the guide. It led you here.* 👀

**The official website for The Wrong Guide — a story-driven atmospheric horror game coming to Steam** 🎮

[![Wishlist on Steam](https://img.shields.io/badge/🎮_WISHLIST_ON_STEAM-Coming_Soon-1b2838?style=for-the-badge&logo=steam&logoColor=white)](https://store.steampowered.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)

![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![next-intl](https://img.shields.io/badge/i18n-5_Languages-success)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-FF0080?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-All_Rights_Reserved-red)

**🌍 English · فارسی · Türkçe · 日本語 · Русский | 📱 RTL Ready | ⚡ Turbopack | 🔍 SEO Optimized**

</div>

---

## 📖 Table of Contents

- [🎬 About the Game](#-about-the-game)
- [✨ Website Features](#-website-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🗂️ Project Structure](#️-project-structure)
- [🌍 Localization System](#-localization-system)
- [🚀 Getting Started](#-getting-started)
- [📰 Press & Business](#-press--business)
- [📜 License](#-license)

---

## 🎬 About the Game

<div align="center">

### 🌙 *A father. A phone call. A guide that was never meant to save him.* 📞

</div>

**The Wrong Guide** is a **single-player, offline, story-driven psychological horror game** — a real commercial title currently in development for **Steam**! 🚀

> You are **Mohsen** — a father 👨‍👧, a nature explorer 🏕️, a man who loves his 9-year-old daughter more than anything in the world. One night, a mysterious phone call pulls him onto an empty desert highway… and he wakes up in an **abandoned hospital** 🏥 where the hallways breathe.
>
> A strange **guide** 🧭 speaks through notes 📝, signs 🪧, and radio voices 📻 — marking the way with paint, light, and crumbs of certainty. You follow… because the alternative is the unknown. 🌫️
>
> But sometimes the guide **hesitates** 😨. A marker points **two ways** ↔️. A voice cracks into **something else** 🔊. The map shows a room that **doesn't exist** 🚪.
>
> ### *How far do you follow before you stop?* 🛑

<div align="center">

| 🎮 Fact | 📋 Details |
|:---|:---|
| 🎭 **Genre** | Psychological Horror / Narrative Exploration / Story-Driven |
| 👤 **Players** | Single-player, offline 🔌 |
| 🖥️ **Platform** | Steam (Windows) — Steam Deck verification planned ✅ |
| 💰 **Price** | $7.99 USD (regional pricing on Steam) |
| 📅 **Release** | 2027 🗓️ |
| 🔞 **Rating** | Mature 17+ |
| 🗣️ **Languages** | 🇬🇧 English, 🇮🇷 Persian at launch |
| 🏢 **Developer** | BMS Studio |
| 📢 **Publisher** | Sourena Games |

</div>

---

## ✨ Website Features

<table>
<tr>
<td width="50%">

### 🌍 Full Localization
- 🇬🇧 English
- 🇮🇷 Persian **(RTL support!)** ↔️
- 🇹🇷 Turkish
- 🇯🇵 Japanese
- 🇷🇺 Russian
- One-click language switcher in the navbar 🔄

### 🎥 Immersive Sections
- 🎞️ Cinematic hero with typewriter taglines ⌨️
- 📚 Story chapters
- 🗺️ Interactive location explorer
- 💎 Feature pillars + core design
- 🎬 Trailer + media gallery 🖼️
- ❓ FAQ + Steam CTA + News 📰

</td>
<td width="50%">

### 👻 "Wrong Guide" Horror FX
The site itself is haunted! 😱
- ✏️ Text shifts & corrections
- 💡 Label flickers
- ⚠️ Warning flashes
- 👀 "You are being observed" hints
- *…all translated per locale!* 🌍

### 🛠️ Everything Else
- 💼 Press kit with downloadable assets 📦
- 📰 Newsroom with per-article pages
- 🔍 SEO: localized metadata, OG cards, sitemap
- ♿ A11y: ARIA, keyboard nav, reduced-motion
- 🌗 Dark atmospheric design 🎨

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|:---:|:---|
| ⚡ **Framework** | Next.js 16 (App Router + Turbopack) |
| ⚛️ **UI** | React 19 |
| 🎨 **Styling** | Tailwind CSS 4 |
| 🎞️ **Animation** | Framer Motion |
| 🔤 **Typography FX** | TypeIt |
| 🌍 **i18n** | next-intl 4 |
| 🎯 **Icons** | lucide-react |
| 📘 **Language** | TypeScript 5 |
| 🧹 **Lint** | ESLint |

</div>

---

## 🗂️ Project Structure

```
📁 the-wrong-guide/
├── 🌍 messages/                  # UI translations (next-intl)
│   ├── 🇬🇧 en.json  🇮🇷 fa.json  🇹🇷 tr.json  🇯🇵 ja.json  🇷🇺 ru.json
├── 📁 src/
│   ├── 📁 app/
│   │   ├── layout.tsx            # ⚠️ Root layout (<html>/<body> live HERE ONLY)
│   │   ├── not-found.tsx         # 🔍 404 page
│   │   ├── sitemap.ts            # 🗺️ Localized sitemap
│   │   └── [locale]/             # 🌍 All localized routes
│   │       ├── layout.tsx        # Navbar / Footer / providers (no <html>!)
│   │       ├── page.tsx          # 🏠 Home: Hero → Story → World → … → News
│   │       └── story|world|features|media|news|press-kit|privacy|terms/
│   ├── 🧩 components/
│   │   ├── layout/               # Navbar, Footer, LanguageSwitcher 🔄
│   │   ├── sections/             # Hero 🎬 Story 📚 World 🗺️ Features 💎 …
│   │   ├── pages/                # PressKitPage 💼
│   │   └── ui/                   # Button, Gallery 🖼️, VideoPlayer 🎥, …
│   ├── ⚙️ config/
│   │   ├── game.ts               # Base config + getGameConfig(locale) merger 🔀
│   │   └── game.en|fa|tr|ja|ru.ts  # 📝 Localized game content per language
│   └── 🌐 i18n/
│       ├── routing.ts            # Locales, default locale, prefix strategy
│       ├── navigation.ts         # Localized Link / router helpers 🔗
│       └── request.ts            # next-intl server config 🖥️
└── 🖼️ public/                    # Images, videos, press-kit downloads 📦
```

---

## 🌍 Localization System

> 💡 **Golden rule:** never hand-build `/${locale}/…` URLs! Always use the localized helpers from `@/i18n/navigation` (`Link`, `useRouter().replace(pathname, { locale })`).

<details>
<summary><b>📝 UI strings — click to expand</b></summary>

<br>

- 📂 Files: `messages/{locale}.json`
- 🪝 Client: `useTranslations("namespace")`
- 🖥️ Server: `getTranslations({ locale, namespace })`

</details>

<details>
<summary><b>🎮 Game content — click to expand</b></summary>

<br>

- 📂 Files: `src/config/game.{locale}.ts` (features 💎, locations 🗺️, news 📰, FAQ ❓, press kit 💼, horror effects 👻, …)
- 🔀 Merged with non-translatable data (URLs 🔗, images 🖼️, IDs) through **`getGameConfig(locale)`**

</details>

<details>
<summary><b>🔗 Routing strategy — click to expand</b></summary>

<br>

- `localePrefix: "as-needed"` → English has **no** prefix (`/story`), others do (`/fa/story`)
- ⚠️ Only `src/app/layout.tsx` renders `<html>`/`<body>` — never in `[locale]/layout.tsx`!

</details>

---

## 🚀 Getting Started

> **Prerequisites:** Node.js 20+ and npm 📦

```bash
# 📥 Install dependencies
npm install

# ⚡ Run the development server
npm run dev
```

🌐 Open [http://localhost:3000](http://localhost:3000) — the middleware resolves your locale automatically (e.g. `/fa` for Persian 🇮🇷).

```bash
# 🏗️ Production build (validates all 70 localized pages ✅)
npm run build

# ▶️ Serve the production build
npm start

# 🧹 Lint
npm run lint
```

---

## 📰 Press & Business

- ✉️ **Press inquiries / review codes / interviews:** mrsyntax22@gmail.com
- 📦 Everything else creators need — logos, key art, screenshots, trailers, usage guidelines — lives in the **Press Kit** page on the site 💼

---

## 📜 License

© BMS Studio / Sourena Games. **All rights reserved.** 🔒

The game, its title, artwork, trailers, screenshots, and all site content are the exclusive property of the rights holders. Assets in the press kit may be used for **editorial coverage** of *The Wrong Guide* only, per the usage guidelines on the Press Kit page. 📰

---

<div align="center">

### 🩸 *The guide remembers every wrong turn.* 🩸

**⭐ If you like this project, give it a star! ⭐**

🎮 *Wishlist The Wrong Guide on Steam — if you trust the guide…* 👀

</div>
