export const gameConfig = {
  title: "The Wrong Guide",

  shortDescription:
    "A father. A phone call. A guide that was never meant to save him. A story-driven atmospheric horror game about misplaced trust and the price of following instructions.",

  longDescription: `You are Mohsen. A father. A nature explorer. A man who loves his 9-year-old daughter more than anything in the world.

One night, after an argument with his wife, Mohsen drives out to clear his head. His car runs out of gas. He stops at a lonely gas station on an empty desert highway. While he's filling the tank, his phone rings.

The voice on the other end is familiar. Too familiar. It's the man his wife left him for years ago — a man with a dark past, a man who was once something else entirely.

"If you're a good father," the voice says, "come save your daughter."

Mohsen rushes to leave. But before he can reach his car, someone strikes him from behind.

He wakes up in an abandoned hospital. The lights flicker. The hallways breathe. And somewhere in this decaying place, his daughter is waiting.

The guide is watching. The guide is leading. But the guide was wrong from the very beginning.`,

  genre: "Psychological Horror / Narrative Exploration / Story-Driven",

  developer: "BMS Studio",  // یا اسم واقعی استودیوت
  publisher: "Sourena Games",  // placeholder

  platforms: ["Steam (Windows)"],
  releaseStatus: "Coming Soon",
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
    telegram: "https://t.me/TheBMSstudio"
  },

  ageRating: "Mature 17+",
  languages: ["English", "Persian"],

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
        "A deeply personal narrative about a father searching for his daughter. Every clue, every note, every whisper brings you closer to the truth — and further from safety.",
      icon: "book-open",
    },
    {
      id: "single-player",
      title: "SINGLE-PLAYER",
      description:
        "A focused, intimate horror experience designed to be played alone. No co-op, no multiplayer — just you, the hospital, and the voice guiding you through it.",
      icon: "user",
    },
    {
      id: "offline",
      title: "OFFLINE",
      description:
        "No internet connection required. Play anywhere, anytime, without DRM or always-online requirements.",
      icon: "wifi-off",
    },
    {
      id: "exploration",
      title: "EXPLORATION",
      description:
        "Navigate abandoned hospital wings, forgotten basements, and impossible corridors. The world rewards careful observation — but punishes blind trust.",
      icon: "compass",
    },
    {
      id: "puzzles",
      title: "PUZZLES",
      description:
        "Pay attention. The hospital has rules. The guide has instructions. But some doors are locked from the outside — and some signs were written by someone who didn't want you to leave.",
      icon: "puzzle",
    },
    {
      id: "atmospheric-horror",
      title: "ATMOSPHERIC HORROR",
      description:
        "Build tension through environment, sound, and uncertainty. No jump scares — only the slow, creeping dread of a father realizing he may never leave this place.",
      icon: "eye",
    },
  ],
  
  locations: [
  {
    id: "the-path",
    name: "The Path",
    description: "A narrow trail through a dead forest. The guide says stay on it. But the trees lean inward — and somewhere ahead, a child is crying.",
    image: "/images/locations/the-path.webp",
    mood: "oppressive",
  },
  {
    id: "the-cabin",
    name: "The Cabin",
    description: "A decaying structure in a clearing. Mohsen remembers this place — but not from this life. The door opens inward. The lock is on the outside.",
    image: "/images/locations/the-cabin.webp",
    mood: "uncanny",
  },
  {
    id: "the-tower",
    name: "The Tower",
    description: "A monolith rising from the fog. The guide says climb it for a better view. But the higher Mohsen climbs, the clearer he sees: his daughter is not at the top.",
    image: "/images/locations/the-tower.webp",
    mood: "vertigo",
  },
  {
    id: "the-subterrain",
    name: "The Subterrain",
    description: "Tunnels beneath everything. The guide says this is the shortcut. But the walls breathe, the map lies, and somewhere in the dark, a man is waiting.",
    image: "/images/locations/the-subterrain.webp",
    mood: "claustrophobic",
  },
],

  news: [
    {
      id: "steam-page-live",
      date: "2026-10-15",
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
      image: "/images/news/steam-page.webp",
      slug: "steam-page-live",
    },
    {
      id: "first-trailer",
      date: "2026-10-09",
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
      image: "/images/news/story-4.webp",
      slug: "first-trailer",
    },
    {
      id: "devlog-1",
      date: "2026-09-21",
      title: "Devlog #1: The Father, The Guide, and The Lie",
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
      image: "/images/news/devlog-1.webp",
      slug: "devlog-1-concept",
    },
    {
      id: "publisher-announcement",
      date: "2026-09-05",
      title: "Publisher Announced",
      excerpt:
        "We're proud to announce our partnership with Sourena Games for the global release of The Wrong Guide on Steam.",
      content: `We're proud to announce our partnership with Sourena Games for the global release of The Wrong Guide on Steam.

After months of searching for the right partner, we've found a publisher who shares our vision for The Wrong Guide. Sourena Games has a proven track record with atmospheric, narrative-driven indie games, and they understand the unique challenges of marketing a game that defies easy categorization.

This partnership means:
- Global Steam distribution and regional pricing
- Marketing support for the wishlist campaign and launch
- QA and localization support for multiple languages
- Steam Deck verification assistance
- Post-launch support and update pipeline

We're excited to work with a team that respects the game's artistic vision while helping us reach the widest possible audience. The Wrong Guide is a game that demands to be experienced on its own terms, and Sourena Games understands that.

More details about the release timeline and marketing plans will be shared in the coming months. In the meantime, development continues at full speed — we're in the final stages of content creation and moving into polish and optimization.

Thank you for your patience and support. The guide is almost ready.`,
      category: "Business",
      image: "/images/news/publisher.webp",
      slug: "publisher-announcement",
    },
  ],
  pressKit: {
    logos: [
      {
        name: "Logo - Horizontal",
        file: "logo-horizontal.webp",
        formats: ["PNG", "SVG"],
        description: "Primary horizontal logo for header usage",
      },
      {
        name: "Logo - Vertical",
        file: "logo-vertical.webp",
        formats: ["PNG", "SVG"],
        description: "Stacked logo for square formats",
      },
      {
        name: "Logo - Icon Only",
        file: "logo-icon.webp",
        formats: ["PNG", "SVG"],
        description: "Minimal icon for favicon and social avatars",
      },
    ],
    keyArt: [
      {
        name: "Key Art - Main",
        file: "key-art-main.webp",
        resolution: "3840x2160",
        description: "Primary marketing artwork",
      },
      {
        name: "Key Art - Vertical",
        file: "key-art-vertical.webp",
        resolution: "2160x3840",
        description: "Vertical format for mobile and poster use",
      },
      {
        name: "Key Art - Capsule",
        file: "key-art-capsule.webp",
        resolution: "616x353",
        description: "Steam capsule art format",
      },
    ],
    screenshots: [
      { file: "screenshot-01.webp", caption: "The Path - First steps into the unknown" },
      { file: "screenshot-02.webp", caption: "The Cabin - Safety or trap?" },
      { file: "screenshot-03.webp", caption: "The Tower - Ascending into fog" },
      { file: "screenshot-04.webp", caption: "Environmental puzzle - Read the signs carefully" },
      { file: "screenshot-05.webp", caption: "The Subterrain - Below the surface" },
      { file: "screenshot-06.webp", caption: "The Guide's instructions - Follow them?" },
      { file: "screenshot-07.webp", caption: "Atmospheric interior - Light and shadow" },
      { file: "screenshot-08.webp", caption: "A moment of wrongness - Something changed" },
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
      { file: "concept-01.webp", caption: "Early Path environment concept" },
      { file: "concept-02.webp", caption: "Cabin interior mood study" },
      { file: "concept-03.webp", caption: "Tower architecture exploration" },
      { file: "concept-04.webp", caption: "Subterrain tunnel system" },
      { file: "concept-05.webp", caption: "Guide UI/UX iterations" },
      { file: "concept-06.webp", caption: "Character silhouette studies" },
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

  faq: [
  {
    question: "What platforms will the game be on?",
    answer: "Steam (Windows). Steam Deck verification is planned. Console ports are [TO BE ANNOUNCED].",
  },
  {
    question: "How much will it cost?",
    answer: "$7.99 USD. Regional pricing applies on Steam.",
  },
  {
    question: "When does it release?",
    answer: "2027. A specific date will be announced when the guide is ready.",
  },
  {
    question: "What languages are supported?",
    answer: "English and Persian at launch. Additional localizations are planned post-release.",
  },
  {
    question: "Is the game multiplayer?",
    answer: "No. The Wrong Guide is a single-player, offline experience. You follow the guide alone.",
  },
  {
    question: "How long is the game?",
    answer: "Approximately 4-6 hours for the main story. The guide knows the exact number. It isn't telling.",
  },
  {
    question: "Is there combat?",
    answer: "No. The game focuses on exploration, environmental puzzles, and atmosphere. Your only weapons are observation and doubt.",
  },
  {
    question: "What accessibility options exist?",
    answer: "Adjustable text size, subtitle scaling, colorblind modes, reduced motion toggle, and a content warning screen at startup. The guide adapts. You can too.",
  },
  {
    question: "Does it support controllers?",
    answer: "Full controller support (Xbox / DualSense / Steam Input). Keyboard & mouse also fully supported.",
  },
  {
    question: "Is it verified for Steam Deck?",
    answer: "Steam Deck verification is a launch target. The guide fits in your hands.",
  },
  {
    question: "How scary is it?",
    answer: "Mature 17+. Psychological horror — dread, uncertainty, and the terror of misplaced trust. No jump scares. No gore. The horror lives in what you don't see.",
  },
  {
    question: "Will there be DLC or a sequel?",
    answer: "The guide does not answer that question. Yet.",
  },
],

  mediaItems: [
    {
      id: "scr-1",
      type: "image" as const,
      src: "/images/screenshots/screenshot-01.webp",
      thumbnail: "/images/screenshots/screenshot-01.webp",
      alt: "The Path - First steps into the unknown",
      caption: "The Path - First steps into the unknown",
      width: 1920,
      height: 1080,
    },
    {
      id: "scr-2",
      type: "image" as const,
      src: "/images/screenshots/screenshot-02.webp",
      thumbnail: "/images/screenshots/screenshot-02.webp",
      alt: "The Cabin - Safety or trap?",
      caption: "The Cabin - Safety or trap?",
      width: 1920,
      height: 1080,
    },
    {
      id: "scr-3",
      type: "image" as const,
      src: "/images/screenshots/screenshot-03.webp",
      thumbnail: "/images/screenshots/screenshot-03.webp",
      alt: "The Tower - Ascending into fog",
      caption: "The Tower - Ascending into fog",
      width: 1920,
      height: 1080,
    },
    {
      id: "scr-4",
      type: "image" as const,
      src: "/images/screenshots/screenshot-04.webp",
      thumbnail: "/images/screenshots/screenshot-04.webp",
      alt: "Environmental puzzle - Read the signs carefully",
      caption: "Environmental puzzle - Read the signs carefully",
      width: 1920,
      height: 1080,
    },
    {
      id: "scr-5",
      type: "image" as const,
      src: "/images/screenshots/screenshot-05.webp",
      thumbnail: "/images/screenshots/screenshot-05.webp",
      alt: "The Subterrain - Below the surface",
      caption: "The Subterrain - Below the surface",
      width: 1920,
      height: 1080,
    },
    {
      id: "scr-6",
      type: "image" as const,
      src: "/images/screenshots/screenshot-06.webp",
      thumbnail: "/images/screenshots/screenshot-06.webp",
      alt: "The Guide's instructions - Follow them?",
      caption: "The Guide's instructions - Follow them?",
      width: 1920,
      height: 1080,
    },
    {
      id: "scr-7",
      type: "image" as const,
      src: "/images/screenshots/screenshot-07.webp",
      thumbnail: "/images/screenshots/screenshot-07.webp",
      alt: "Atmospheric interior - Light and shadow",
      caption: "Atmospheric interior - Light and shadow",
      width: 1920,
      height: 1080,
    },
    {
      id: "scr-8",
      type: "image" as const,
      src: "/images/screenshots/screenshot-08.webp",
      thumbnail: "/images/screenshots/screenshot-08.webp",
      alt: "A moment of wrongness - Something changed",
      caption: "A moment of wrongness - Something changed",
      width: 1920,
      height: 1080,
    },
    {
      id: "gp-1",
      type: "video" as const,
      src: "/videos/gameplay-01.mp4",
      thumbnail: "/images/gameplay/thumb-gp-04.webp",
      alt: "Gameplay footage - Path exploration",
      caption: "Gameplay: Path exploration",
      width: 1920,
      height: 1080,
    },
    // {
    //   id: "gp-2",
    //   type: "video" as const,
    //   src: "/videos/gameplay-02.mp4",
    //   thumbnail: "/images/gameplay/thumb-gp-02.webp",
    //   alt: "Gameplay footage - Cabin interior",
    //   caption: "Gameplay: Cabin interior",
    //   width: 1920,
    //   height: 1080,
    // },
    // {
    //   id: "gp-3",
    //   type: "video" as const,
    //   src: "/videos/gameplay-03.mp4",
    //   thumbnail: "/images/gameplay/thumb-gp-03.webp",
    //   alt: "Gameplay footage - Puzzle solving",
    //   caption: "Gameplay: Puzzle solving",
    //   width: 1920,
    //   height: 1080,
    // },
    // {
    //   id: "ca-1",
    //   type: "image" as const,
    //   src: "/images/concept-art/concept-01.webp",
    //   thumbnail: "/images/concept-art/thumb-ca-01.webp",
    //   alt: "Early Path environment concept",
    //   caption: "Early Path environment concept",
    //   width: 1920,
    //   height: 1080,
    // },
    // {
    //   id: "ca-2",
    //   type: "image" as const,
    //   src: "/images/concept-art/concept-02.webp",
    //   thumbnail: "/images/concept-art/thumb-ca-02.webp",
    //   alt: "Cabin interior mood study",
    //   caption: "Cabin interior mood study",
    //   width: 1920,
    //   height: 1080,
    // },
    // {
    //   id: "ca-3",
    //   type: "image" as const,
    //   src: "/images/concept-art/concept-03.webp",
    //   thumbnail: "/images/concept-art/thumb-ca-03.webp",
    //   alt: "Tower architecture exploration",
    //   caption: "Tower architecture exploration",
    //   width: 1920,
    //   height: 1080,
    // },
    // {
    //   id: "ca-4",
    //   type: "image" as const,
    //   src: "/images/concept-art/concept-04.webp",
    //   thumbnail: "/images/concept-art/thumb-ca-04.webp",
    //   alt: "Subterrain tunnel system",
    //   caption: "Subterrain tunnel system",
    //   width: 1920,
    //   height: 1080,
    // },
    // {
    //   id: "ca-5",
    //   type: "image" as const,
    //   src: "/images/concept-art/concept-05.webp",
    //   thumbnail: "/images/concept-art/thumb-ca-05.webp",
    //   alt: "Guide UI/UX iterations",
    //   caption: "Guide UI/UX iterations",
    //   width: 1920,
    //   height: 1080,
    // },
    // {
    //   id: "ca-6",
    //   type: "image" as const,
    //   src: "/images/concept-art/concept-06.webp",
    //   thumbnail: "/images/concept-art/thumb-ca-06.webp",
    //   alt: "Character silhouette studies",
    //   caption: "Character silhouette studies",
    //   width: 1920,
    //   height: 1080,
    // },
  ]
} as const;

export type GameConfig = typeof gameConfig;