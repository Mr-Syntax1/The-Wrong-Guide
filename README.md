# 🩸 The Wrong Guide

<p align="center">
  <strong>You followed the guide. It led you here.</strong>
  <br />
  An official website for a story-driven psychological horror game by BMS Studio.
  <br /><br />
  <a href="https://the-wrong-guide.vercel.app/">
    <img src="https://img.shields.io/badge/WEBSITE-Live-8B1E2D?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Website" />
  </a>
  <a href="https://store.steampowered.com">
    <img src="https://img.shields.io/badge/STEAM-Coming_Soon-171A21?style=for-the-badge&logo=steam&logoColor=white" alt="Coming to Steam" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Localization-5_Languages-6B7280?style=flat-square" alt="Five Languages" />
  <img src="https://img.shields.io/badge/License-All_Rights_Reserved-8B1E2D?style=flat-square" alt="All Rights Reserved" />
</p>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [About the Game](#-about-the-game)
- [Website Features](#-website-features)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Localization](#-localization)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Press & Business Inquiries](#-press--business)
- [License](#-license)

---

## 🎬 Overview

**The Wrong Guide** is the official website for an atmospheric, story-driven psychological horror game currently in development for PC.

Built with Next.js, React, and TypeScript, the website combines cinematic presentation, narrative-driven content, multilingual navigation, and a dark visual identity inspired by the unsettling world of the game.

The experience extends beyond a conventional game landing page, using subtle visual effects and carefully crafted storytelling to reflect the central theme of the game: **trusting the wrong guide.**

<p align="center">
  <em>Some directions lead you forward. Others lead you somewhere you were never meant to go.</em>
</p>

<p align="center">
  <a href="https://the-wrong-guide.vercel.app/">
    <strong>Explore the Live Website ↗</strong>
  </a>
</p>

---

## 🌒 About the Game

> A father. A mysterious phone call. An abandoned hospital. And a guide that may not want you to escape.

You play as **Mohsen**, a father and nature explorer whose life takes an unexpected turn after a mysterious phone call leads him onto an empty desert highway.

He awakens inside an abandoned hospital where familiar rules no longer seem to apply. Strange notes, painted markers, distorted radio transmissions, and contradictory directions offer a path through the darkness.

But as the environment grows increasingly unfamiliar, one question becomes impossible to ignore:

**What if the guide is the reason you are lost?**

### Game Information

| Detail | Description |
|:--|:--|
| Genre | Psychological Horror / Narrative Exploration |
| Game Mode | Single-player, Offline |
| Platform | PC — Windows |
| Distribution | Steam |
| Developer | BMS Studio |
| Release | Planned for 2027 |

*Release plans and game specifications may change during development.*

---

## ✦ Website Features

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🎥 Cinematic Experience</h3>
      <ul>
        <li>Atmospheric landing page and immersive hero section</li>
        <li>Animated typography and cinematic transitions</li>
        <li>Dark visual design inspired by psychological horror</li>
        <li>Subtle, narrative-driven visual effects</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🗺️ Game Exploration</h3>
      <ul>
        <li>Story and narrative chapters</li>
        <li>Interactive world and location exploration</li>
        <li>Gameplay features and design philosophy</li>
        <li>Trailer, screenshots, and media gallery</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🌍 Internationalization</h3>
      <ul>
        <li>English, Persian, Turkish, Japanese, and Russian</li>
        <li>Right-to-left layout support for Persian</li>
        <li>Localized navigation and page content</li>
        <li>Locale-aware routing and metadata</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>⚙️ Technical Features</h3>
      <ul>
        <li>Reusable and modular UI components</li>
        <li>Localized SEO metadata and sitemap</li>
        <li>Press Kit and development news sections</li>
        <li>Accessibility-focused interaction patterns</li>
      </ul>
    </td>
  </tr>
</table>

---

## 🛠️ Technology Stack

| Technology | Purpose |
|:--|:--|
| [Next.js](https://nextjs.org/) | Application framework and routing |
| [React](https://react.dev/) | Component-based user interface |
| [TypeScript](https://www.typescriptlang.org/) | Static typing and maintainability |
| [Tailwind CSS](https://tailwindcss.com/) | Responsive styling and design system |
| [Framer Motion](https://motion.dev/) | Animations and transitions |
| [TypeIt](https://www.typeitjs.com/) | Typewriter-style text effects |
| [next-intl](https://next-intl.dev/) | Internationalization and localized routing |
| [Lucide React](https://lucide.dev/) | Interface icons |
| [ESLint](https://eslint.org/) | Code quality and linting |

---

## 🏗️ Project Architecture

The project follows a modular structure that separates routing, shared components, localized content, configuration, and static assets.

```text
the-wrong-guide/
├── messages/
│   ├── en.json
│   ├── fa.json
│   ├── tr.json
│   ├── ja.json
│   └── ru.json
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   └── [locale]/
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       └── [localized pages]/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── pages/
│   │   └── ui/
│   │
│   ├── config/
│   │   ├── game.ts
│   │   └── game.[locale].ts
│   │
│   └── i18n/
│       ├── routing.ts
│       ├── navigation.ts
│       └── request.ts
│
└── public/
    ├── images/
    ├── videos/
    └── press-kit/
```

### Architecture Principles

- **Separation of concerns:** UI components, game content, translations, and routing are maintained independently.
- **Reusable components:** Shared layout elements and interface components reduce duplication.
- **Centralized configuration:** Common game data and locale-specific content are managed through dedicated configuration modules.
- **Localized navigation:** Routing helpers provide consistent navigation across supported locales.
- **Maintainability:** The structure supports extending the website as the game evolves.

*The directory tree is a representative overview; individual files and folders may evolve during development.*

---

## 🌐 Localization

The website is designed for an international audience, with support for five interface languages.

| Locale | Language | Layout |
|:--|:--|:--|
| `en` | English | LTR |
| `fa` | Persian | RTL |
| `tr` | Turkish | LTR |
| `ja` | Japanese | LTR |
| `ru` | Russian | LTR |

The localization system uses `next-intl` for translations and locale-aware navigation.

UI translations are maintained in `messages/`, while game-specific content is organized separately to keep presentation, translated text, and shared data manageable.

Localized links should use the project's navigation helpers rather than manually constructing locale-prefixed URLs.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or later
- npm
- Git

### 1. Clone the Repository

```bash
git clone <repository-url>
cd the-wrong-guide
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Create a Production Build

```bash
npm run build
npm start
```

---

## 📜 Available Scripts

| Command | Description |
|:--|:--|
| `npm run dev` | Start the development server |
| `npm run build` | Compile and validate the production build |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## 📰 Press & Business

For press inquiries, review codes, interviews, and business-related questions:

**Email:** [mrsyntax22@gmail.com](mailto:mrsyntax22@gmail.com)

The website's Press Kit section is intended to provide media and content creators with relevant promotional materials and project information.

---

## 🔒 License

**All Rights Reserved.**

© BMS Studio. Game-related intellectual property remains with its respective rights holders, subject to applicable agreements.

The source code, website content, and game assets may not be redistributed or reused beyond the permissions granted by the relevant rights holders.

---

<p align="center">
  <strong>THE WRONG GUIDE</strong>
  <br />
  <em>The guide remembers every wrong turn.</em>
  <br /><br />
  <a href="https://the-wrong-guide.vercel.app/">Website</a>
  ·
  <a href="https://store.steampowered.com">Steam</a>
  ·
  <a href="mailto:mrsyntax22@gmail.com">Contact</a>
</p>
