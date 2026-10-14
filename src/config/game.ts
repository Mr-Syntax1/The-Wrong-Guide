export const gameConfig = {
  title: "The Wrong Guide",
  shortDescription:
    "A story-driven atmospheric horror game where the guide you follow may not be what it seems.",
  longDescription: `You were given instructions. They were supposed to keep you safe. Follow them. Don't question them. And whatever happens... don't leave the path.

But what if the guide was wrong?

The Wrong Guide is a single-player, offline, story-driven horror experience that explores the terror of misplaced trust. Navigate through mysterious environments where every instruction, every sign, every guiding voice might be leading you somewhere you never intended to go.`,
  genre: "Psychological Horror / Narrative Exploration",
  developer: "[DEVELOPER NAME]",
  publisher: "[PUBLISHER NAME]",
  platforms: ["Steam (Windows)"],
  releaseStatus: "Coming Soon",
  releaseDate: "[RELEASE DATE]",
  price: "$7.99",
   steamUrl: "https://store.steampowered.com", 
  steamAppId: "[STEAM APP ID]",
  trailerUrl: "/videos/trailer.mp4",
  trailerPoster: "/images/trailer-poster.jpg",
  pressEmail: "press@[DOMAIN].com",
  businessEmail: "business@[DOMAIN].com",
  social: {
    steam: "https://store.steampowered.com/app/[STEAM APP ID]",
    youtube: "[YOUTUBE CHANNEL URL]",
    twitter: "[TWITTER/X URL]",
    discord: "[DISCORD INVITE URL]",
  },
  ageRating: "Mature 17+",
  languages: ["English"],
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
  features: [
    {
      id: "story-driven",
      title: "STORY-DRIVEN",
      description:
        "Explore a mysterious narrative where not everything is what it seems. Uncover the truth behind the guide through environmental storytelling and subtle narrative clues.",
      icon: "book-open",
    },
    {
      id: "single-player",
      title: "SINGLE-PLAYER",
      description:
        "A focused individual horror experience designed to be played alone. No co-op, no multiplayer — just you and the guide.",
      icon: "user",
    },
    {
      id: "offline",
      title: "OFFLINE",
      description:
        "No internet connection required to experience the game. Play anywhere, anytime, without DRM or always-online requirements.",
      icon: "wifi-off",
    },
    {
      id: "exploration",
      title: "EXPLORATION",
      description:
        "Discover environments and clues at your own pace. The world rewards careful observation and patience.",
      icon: "compass",
    },
    {
      id: "puzzles",
      title: "PUZZLES",
      description:
        "Pay attention. The world may be telling you something. Solve environmental puzzles that require you to question what you see and hear.",
      icon: "puzzle",
    },
    {
      id: "atmospheric-horror",
      title: "ATMOSPHERIC HORROR",
      description:
        "Build tension through environment, sound, uncertainty, and anticipation. No jump scares — only dread.",
      icon: "eye",
    },
  ],
  locations: [
    {
      id: "the-path",
      name: "The Path",
      description:
        "A narrow trail winding through ancient woods. The guide says stay on it. But the trees seem to lean inward, watching.",
      image: "/images/locations/the-path.jpg",
      mood: "oppressive",
    },
    {
      id: "the-cabin",
      name: "The Cabin",
      description:
        "A solitary structure in a clearing. The guide marks it as a safe haven. But the door opens inward, and the lock is on the outside.",
      image: "/images/locations/the-cabin.jpg",
      mood: "uncanny",
    },
    {
      id: "the-tower",
      name: "The Tower",
      description:
        "A concrete monolith rising from the fog. The guide says climb it for a better view. But the higher you go, the less you can see.",
      image: "/images/locations/the-tower.jpg",
      mood: "vertigo",
    },
    {
      id: "the-subterrain",
      name: "The Subterrain",
      description:
        "Tunnels beneath the surface. The guide says this is the shortcut. But the walls breathe, and the map doesn't match the territory.",
      image: "/images/locations/the-subterrain.jpg",
      mood: "claustrophobic",
    },
  ],
  news: [
    {
      id: "steam-page-live",
      date: "2025-01-15",
      title: "Steam Page Now Live",
      excerpt:
        "The Wrong Guide has officially landed on Steam. Add it to your wishlist to be notified when the guide becomes available.",
      content: `The Wrong Guide has officially landed on Steam. Add it to your wishlist to be notified when the guide becomes available.

We're thrilled to announce that The Wrong Guide now has its official Steam store page live. This marks a major milestone in our development journey.

What you'll find on the Steam page:
- Official game description and features
- System requirements (minimum and recommended)
- Screenshots showcasing the game's atmospheric environments
- The official trailer
- Wishlist button to get notified when the game releases

We've been working hard to create an atmospheric horror experience that respects your intelligence and rewards careful observation. The Steam page is just the beginning — we'll be sharing more development updates, behind-the-scenes content, and gameplay footage in the coming months.

Add The Wrong Guide to your wishlist today to be notified the moment the guide becomes available.`,
      category: "Announcement",
      image: "/images/news/steam-page.jpg",
      slug: "steam-page-live",
    },
    {
      id: "first-trailer",
      date: "2024-11-20",
      title: "First Trailer Released",
      excerpt:
        "Watch the official reveal trailer for The Wrong Guide. Two minutes of atmospheric horror that asks: can you trust what you see?",
      content: `Watch the official reveal trailer for The Wrong Guide. Two minutes of atmospheric horror that asks: can you trust what you see?

Our first trailer showcases the atmospheric world of The Wrong Guide — a place where the guide you follow may not be what it seems. The trailer features:

- Cinematic footage of The Path, The Cabin, The Tower, and The Subterrain
- Glimpses of the guide's mysterious instructions
- The game's distinctive visual style and atmospheric lighting
- Hints at the environmental puzzles and narrative mysteries

The trailer was crafted to give you a taste of the game's atmosphere without spoiling any of its mysteries. We wanted to capture the feeling of uncertainty and dread that permeates the experience.

Watch it now and decide for yourself: can you trust the guide?`,
      category: "Trailer",
      image: "/images/news/story-4.jpg",
      slug: "first-trailer",
    },
    {
      id: "devlog-1",
      date: "2024-09-10",
      title: "Devlog #1: The Concept of the Guide",
      excerpt:
        "A behind-the-scenes look at the core design philosophy: what happens when the player's only source of guidance becomes their greatest threat?",
      content: `A behind-the-scenes look at the core design philosophy: what happens when the player's only source of guidance becomes their greatest threat?

In this first development log, we're pulling back the curtain on the core concept behind The Wrong Guide.

The idea started with a simple question: what if the only thing keeping you alive in a horror game was also the thing leading you to your doom? Traditional horror games give you clear objectives, clear paths, clear enemies. But what if the very system designed to help you — the objective markers, the guide voice, the path markers — was fundamentally unreliable?

This became the central pillar of The Wrong Guide's design. Every mechanic serves this theme:
- The guide's instructions appear helpful but may lead you astray
- Environmental markers contradict each other
- Audio cues shift subtly when you deviate from the "intended" path
- The map shows rooms that don't exist

We've iterated on this concept extensively. Early prototypes had the guide as an explicit antagonist, but we found that ambiguity is far more unsettling. The player should never be entirely sure if the guide is malfunctioning, malevolent, or if they're simply misinterpreting it.

This philosophy extends to every aspect of the game — level design, audio, UI, narrative. The result is an experience that gets under your skin not through jump scares, but through the slow, creeping realization that you can't trust the very thing you've been trained to trust in games.

More devlogs coming soon, covering environmental storytelling, audio design, and the technical challenges of building an unreliable guide system.`,
      category: "Development",
      image: "/images/news/devlog-1.jpg",
      slug: "devlog-1-concept",
    },
    {
      id: "publisher-announcement",
      date: "2024-07-15",
      title: "Publisher Announced",
      excerpt:
        "We're proud to announce our partnership with [PUBLISHER NAME] for the global release of The Wrong Guide on Steam.",
      content: `We're proud to announce our partnership with [PUBLISHER NAME] for the global release of The Wrong Guide on Steam.

After months of searching for the right partner, we've found a publisher who shares our vision for The Wrong Guide. [PUBLISHER NAME] has a proven track record with atmospheric, narrative-driven indie games, and they understand the unique challenges of marketing a game that defies easy categorization.

This partnership means:
- Global Steam distribution and regional pricing
- Marketing support for the wishlist campaign and launch
- QA and localization support for multiple languages
- Steam Deck verification assistance
- Post-launch support and update pipeline

We're excited to work with a team that respects the game's artistic vision while helping us reach the widest possible audience. The Wrong Guide is a game that demands to be experienced on its own terms, and [PUBLISHER NAME] understands that.

More details about the release timeline and marketing plans will be shared in the coming months. In the meantime, development continues at full speed — we're in the final stages of content creation and moving into polish and optimization.

Thank you for your patience and support. The guide is almost ready.`,
      category: "Business",
      image: "/images/news/publisher.jpg",
      slug: "publisher-announcement",
    },
  ],
  pressKit: {
    logos: [
      {
        name: "Logo - Horizontal",
        file: "logo-horizontal.png",
        formats: ["PNG", "SVG"],
        description: "Primary horizontal logo for header usage",
      },
      {
        name: "Logo - Vertical",
        file: "logo-vertical.png",
        formats: ["PNG", "SVG"],
        description: "Stacked logo for square formats",
      },
      {
        name: "Logo - Icon Only",
        file: "logo-icon.png",
        formats: ["PNG", "SVG"],
        description: "Minimal icon for favicon and social avatars",
      },
    ],
    keyArt: [
      {
        name: "Key Art - Main",
        file: "key-art-main.jpg",
        resolution: "3840x2160",
        description: "Primary marketing artwork",
      },
      {
        name: "Key Art - Vertical",
        file: "key-art-vertical.jpg",
        resolution: "2160x3840",
        description: "Vertical format for mobile and poster use",
      },
      {
        name: "Key Art - Capsule",
        file: "key-art-capsule.jpg",
        resolution: "616x353",
        description: "Steam capsule art format",
      },
    ],
    screenshots: [
      { file: "screenshot-01.jpg", caption: "The Path - First steps into the unknown" },
      { file: "screenshot-02.jpg", caption: "The Cabin - Safety or trap?" },
      { file: "screenshot-03.jpg", caption: "The Tower - Ascending into fog" },
      { file: "screenshot-04.jpg", caption: "Environmental puzzle - Read the signs carefully" },
      { file: "screenshot-05.jpg", caption: "The Subterrain - Below the surface" },
      { file: "screenshot-06.jpg", caption: "The Guide's instructions - Follow them?" },
      { file: "screenshot-07.jpg", caption: "Atmospheric interior - Light and shadow" },
      { file: "screenshot-08.jpg", caption: "A moment of wrongness - Something changed" },
    ],
    trailers: [
      {
        name: "Announce Trailer",
        file: "trailer-announce.mp4",
        duration: "1:47",
        resolution: "1920x1080",
        description: "Official reveal trailer",
      },
      {
        name: "Gameplay Teaser",
        file: "trailer-gameplay.mp4",
        duration: "0:52",
        resolution: "1920x1080",
        description: "Raw gameplay footage",
      },
    ],
    conceptArt: [
      { file: "concept-01.jpg", caption: "Early Path environment concept" },
      { file: "concept-02.jpg", caption: "Cabin interior mood study" },
      { file: "concept-03.jpg", caption: "Tower architecture exploration" },
      { file: "concept-04.jpg", caption: "Subterrain tunnel system" },
      { file: "concept-05.jpg", caption: "Guide UI/UX iterations" },
      { file: "concept-06.jpg", caption: "Character silhouette studies" },
    ],
    downloads: {
      pressKitZip: "/press-kit/the-wrong-guide-press-kit.zip",
      logoZip: "/press-kit/logos/the-wrong-guide-logos.zip",
      keyArtZip: "/press-kit/key-art/the-wrong-guide-key-art.zip",
      screenshotsZip: "/press-kit/screenshots/the-wrong-guide-screenshots.zip",
      trailersZip: "/press-kit/trailers/the-wrong-guide-trailers.zip",
      conceptArtZip: "/press-kit/concept-art/the-wrong-guide-concept-art.zip",
    },
  },
} as const;

export type GameConfig = typeof gameConfig;