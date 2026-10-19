import type { GameLocaleContent } from "./game.en";

export const gameLocaleContent: GameLocaleContent = {
  shortDescription:
    "A father. A phone call. A guide that was never meant to save him. A psychological horror game about a man trapped in an endless loop, guided by the monster who destroyed his past — where prayer pages hold the keys to his daughter's salvation, and every instruction is a lie.",

  longDescription: `You are Mohsen. An Iranian father. A nature explorer. A man who loves his 9-year-old daughter more than anything in the world.

One night, after a bitter argument with his wife, Mohsen drives out to clear his head. His car runs out of gas on a desolate desert highway. He stops at a lone gas station in the middle of nowhere. While filling the tank, his phone rings.

The voice on the other end is familiar. Painfully familiar. It's the man his wife left him for years ago — a man with a dark past, a man who was once something else entirely. A man known only as the Booklet Man. The Notebook Keeper. He holds secrets.

"If you're a good father," the voice says, "come save your daughter."

Mohsen rushes to leave, desperate to reach his car and find her. But before he can, someone strikes him from behind. Darkness takes him.

He wakes in an abandoned hospital. Lights flicker. Hallways breathe. And somewhere in this decaying place, his daughter is waiting.

The Guide is watching. The Guide is leading. But the Guide was wrong from the very beginning.

Mohsen is trapped in a loop that never ends — because from that very blow, the world went dark. (It's unclear if this is reality or not.) The man with the dark past, the Booklet Man, the Notebook Keeper — he holds the secrets. Mohsen calls him The Guide, but Mohsen knows what a wretch he truly is.

He has scattered pages throughout the hospital, the courtyard, the surrounding environments — pages of prayer writing, blackened family names (the Iranian tradition of dua-nevisi). These pages are the keys. His motive? His own twisted amusement. A twisted revenge for a past that already happened.

Mohsen must give everything for his daughter. Otherwise, a bitterness will take root that he never wanted...

This path is just a wrong guide...`,

  genre: "Psychological Horror / Narrative Exploration / Story-Driven",

  releaseStatus: "Coming Soon",

  languages: ["English", "Persian"],

  features: [
    {
      id: "story-driven",
      title: "STORY-DRIVEN",
      description:
        "A deeply personal narrative about a father trapped in a nightmare loop, hunting for prayer pages to save his daughter. Every clue, every blackened name, every whisper brings you closer to the truth — and further from salvation.",
    },
    {
      id: "single-player",
      title: "SINGLE-PLAYER",
      description:
        "A focused, intimate horror experience designed to be played alone. No co-op, no multiplayer — just you, the hospital, and the voice of the man who ruined your life guiding you through it.",
    },
    {
      id: "offline",
      title: "OFFLINE",
      description:
        "No internet connection required. Play anywhere, anytime, without DRM or always-online requirements.",
    },
    {
      id: "exploration",
      title: "EXPLORATION",
      description:
        "Navigate abandoned hospital wings, forgotten courtyards, and impossible corridors. The world rewards careful observation — but punishes blind trust in the Guide.",
    },
    {
      id: "puzzles",
      title: "PUZZLES",
      description:
        "Pay attention. The hospital has rules. The Guide has instructions. But some doors are locked from the outside — and the prayer pages were scattered by someone who didn't want you to leave.",
    },
    {
      id: "atmospheric-horror",
      title: "ATMOSPHERIC HORROR",
      description:
        "Build tension through environment, sound, and uncertainty. No jump scares — only the slow, creeping dread of a father realizing the Guide was never meant to save him.",
    },
  ],

  locations: [
    {
      id: "the-path",
      name: "The Path",
      description:
        "A narrow trail through a dead forest. The Guide says stay on it. But the trees lean inward — and somewhere ahead, a child is crying. The prayer pages flutter in wind that shouldn't exist.",
    },
    {
      id: "the-cabin",
      name: "The Cabin",
      description:
        "A decaying structure in a clearing. Mohsen remembers this place — but not from this life. The door opens inward. The lock is on the outside. A stack of blackened pages sits on the table.",
    },
    {
      id: "the-tower",
      name: "The Tower",
      description:
        "A monolith rising from the fog. The Guide says climb it for a better view. But the higher Mohsen climbs, the clearer he sees: his daughter is not at the top. The Notebook Keeper is watching from the window.",
    },
    {
      id: "the-subterrain",
      name: "The Subterrain",
      description:
        "Tunnels beneath everything. The Guide says this is the shortcut. But the walls breathe, the map lies, and somewhere in the dark, the Booklet Man is waiting with the final pages.",
    },
  ],

  coreDesign: {
    label: "CORE DESIGN",
    heading: "No Hand-Holding. No False Safety.",
    paragraph1:
      "The Wrong Guide respects your intelligence. There are no objective markers, no quest logs, no highlighted interactables. The world communicates through environmental cues, audio, and the Guide itself — which may or may not be reliable.",
    paragraph2:
      "Every mechanic serves the narrative. Puzzles emerge from observation. Horror emerges from uncertainty. The Guide emerges from the question: what happens when the only thing keeping you alive might be the thing leading you to your end?",
  },

  moods: {
    oppressive: {
      label: "OPPRESSIVE",
      description: "Heavy atmosphere, constant pressure, feeling watched",
    },
    uncanny: {
      label: "UNCANNY",
      description: "Familiar yet deeply wrong, subtle distortions",
    },
    vertigo: {
      label: "VERTIGO",
      description: "Disorienting verticality, loss of spatial grounding",
    },
    claustrophobic: {
      label: "CLAUSTROPHOBIC",
      description: "Confined spaces, walls closing in, limited escape",
    },
  },

  steamFeatures: [
    { label: "Single Player", description: "Focused solo experience" },
    { label: "Offline Play", description: "No internet required" },
    { label: "Steam Deck Verified", description: "Optimized for handheld" },
    { label: "No DRM", description: "Play anywhere, anytime" },
    { label: "Cloud Saves", description: "Progress follows you" },
    { label: "Full Controller Support", description: "Play your way" },
  ],

  news: [
    {
      id: "first-trailer",
      title: "First Trailer Released",
      excerpt:
        "Watch the official reveal trailer for The Wrong Guide. Two minutes of atmospheric horror that asks: can you trust what you see?",
      content: `Watch the official reveal trailer for The Wrong Guide. Two minutes of atmospheric horror that asks: can you trust what you see?

Our first trailer showcases the atmospheric world of The Wrong Guide — a place where the guide you follow may not be what it seems. The trailer features:

- Cinematic footage of The Path, The Cabin, The Tower, and The Subterrain
- Glimpses of the Guide's mysterious instructions
- The game's distinctive visual style and atmospheric lighting
- Hints at the prayer page puzzles and narrative mysteries

The trailer was crafted to give you a taste of the game's atmosphere without spoiling any of its mysteries. We wanted to capture the feeling of uncertainty and dread that permeates the experience.

Watch it now and decide for yourself: can you trust the Guide?`,
      category: "Trailer",
    },
    {
      id: "devlog-1",
      title: "Devlog #1: The Father, The Guide, and The Lie",
      excerpt:
        "A behind-the-scenes look at the core design philosophy: what happens when the player's only source of guidance becomes their greatest threat?",
      content: `A behind-the-scenes look at the core design philosophy: what happens when the player's only source of guidance becomes their greatest threat?

In this first development log, we're pulling back the curtain on the core concept behind The Wrong Guide.

The idea started with a simple question: what if the only thing keeping you alive in a horror game was also the thing leading you to your doom? Traditional horror games give you clear objectives, clear paths, clear enemies. But what if the very system designed to help you — the objective markers, the guide voice, the path markers — was fundamentally unreliable?

This became the central pillar of The Wrong Guide's design. Every mechanic serves this theme:
- The Guide's instructions appear helpful but may lead you astray
- Environmental markers contradict each other
- Audio cues shift subtly when you deviate from the "intended" path
- The map shows rooms that don't exist
- The prayer pages (dua-nevisi) are both keys and traps

We've iterated on this concept extensively. Early prototypes had the Guide as an explicit antagonist, but we found that ambiguity is far more unsettling. The player should never be entirely sure if the Guide is malfunctioning, malevolent, or if they're simply misinterpreting it.

This philosophy extends to every aspect of the game — level design, audio, UI, narrative. The result is an experience that gets under your skin not through jump scares, but through the slow, creeping realization that you can't trust the very thing you've been trained to trust in games.

More devlogs coming soon, covering environmental storytelling, audio design, and the technical challenges of building an unreliable guide system.`,
      category: "Development",
    },
    {
      id: "publisher-announcement",
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

Thank you for your patience and support. The Guide is almost ready.`,
      category: "Business",
    },
  ],

  categoryLabels: {
    All: "All",
    Announcement: "Announcement",
    Trailer: "Trailer",
    Development: "Development",
    Business: "Business",
  },

  faq: [
    {
      question: "What platforms will the game be on?",
      answer:
        "Steam (Windows). Steam Deck verification is planned. No console ports.",
    },
    {
      question: "How much will it cost?",
      answer: "$7.99 USD. Regional pricing applies on Steam.",
    },
    {
      question: "When does it release?",
      answer: "2027. A specific date will be announced when the Guide is ready.",
    },
    {
      question: "What languages are supported?",
      answer:
        "Persian, English, Turkish, Japanese, and Russian at launch.",
    },
    {
      question: "Is the game multiplayer?",
      answer:
        "No. The Wrong Guide is a single-player, offline experience. You follow the Guide alone.",
    },
    {
      question: "How long is the game?",
      answer:
        "Approximately 2-4 hours for the main story. The Guide knows the exact number. It isn't telling.",
    },
    {
      question: "Is there combat?",
      answer:
        "Yes, with firearms but minimal. The game focuses on exploration, environmental puzzles, and atmosphere.",
    },
    {
      question: "What accessibility options exist?",
      answer:
        "Adjustable text size, subtitle scaling, colorblind modes, reduced motion toggle, and a content warning screen at startup. The Guide adapts. You can too.",
    },
    {
      question: "Does it support controllers?",
      answer:
        "Full controller support (Xbox / DualSense / Steam Input). Keyboard & mouse also fully supported.",
    },
    {
      question: "Is it verified for Steam Deck?",
      answer:
        "Steam Deck verification is a launch target. The Guide fits in your hands.",
    },
    {
      question: "How scary is it?",
      answer:
        "Mature 17+. Psychological horror — dread, uncertainty, and the terror of misplaced trust. No jump scares. No gore. The horror lives in what you don't see.",
    },
    {
      question: "Will there be DLC or a sequel?",
      answer: "The Guide does not answer that question. Yet.",
    },
  ],

  mediaCaptions: {
    "scr-1": {
      alt: "The Path - First steps into the unknown",
      caption: "The Path - First steps into the unknown",
    },
    "scr-2": {
      alt: "The Cabin - Safety or trap?",
      caption: "The Cabin - Safety or trap?",
    },
    "scr-3": {
      alt: "The Tower - Ascending into fog",
      caption: "The Tower - Ascending into fog",
    },
    "scr-4": {
      alt: "Environmental puzzle - Read the signs carefully",
      caption: "Environmental puzzle - Read the signs carefully",
    },
    "scr-5": {
      alt: "The Subterrain - Below the surface",
      caption: "The Subterrain - Below the surface",
    },
    "scr-6": {
      alt: "The Guide's instructions - Follow them?",
      caption: "The Guide's instructions - Follow them?",
    },
    "scr-7": {
      alt: "Atmospheric interior - Light and shadow",
      caption: "Atmospheric interior - Light and shadow",
    },
    "scr-8": {
      alt: "A moment of wrongness - Something changed",
      caption: "A moment of wrongness - Something changed",
    },
    "gp-1": {
      alt: "Gameplay footage - Path exploration",
      caption: "Gameplay: Path exploration",
    },
  },

  pressKit: {
    assets: {
      "logo-horizontal.webp": {
        name: "Logo - Horizontal",
        description: "Primary horizontal logo for header usage",
      },
      "logo-vertical.webp": {
        name: "Logo - Vertical",
        description: "Stacked logo for square formats",
      },
      "logo-icon.webp": {
        name: "Logo - Icon Only",
        description: "Minimal icon for favicon and social avatars",
      },
      "key-art-main.webp": {
        name: "Key Art - Main",
        description: "Primary marketing artwork",
      },
      "key-art-vertical.webp": {
        name: "Key Art - Vertical",
        description: "Vertical format for mobile and poster use",
      },
      "key-art-capsule.webp": {
        name: "Key Art - Capsule",
        description: "Steam capsule art format",
      },
      "trailer-announce.mp4": {
        name: "Announce Trailer",
        description: "Official reveal trailer",
      },
      "trailer-gameplay.mp4": {
        name: "Gameplay Teaser",
        description: "Raw gameplay footage",
      },
    },
    screenshotCaptions: {
      "screenshot-01.webp": "The Path - First steps into the unknown",
      "screenshot-02.webp": "The Cabin - Safety or trap?",
      "screenshot-03.webp": "The Tower - Ascending into fog",
      "screenshot-04.webp": "Environmental puzzle - Read the signs carefully",
      "screenshot-05.webp": "The Subterrain - Below the surface",
      "screenshot-06.webp": "The Guide's instructions - Follow them?",
      "screenshot-07.webp": "Atmospheric interior - Light and shadow",
      "screenshot-08.webp": "A moment of wrongness - Something changed",
    },
    conceptCaptions: {
      "concept-01.webp": "Early Path environment concept",
      "concept-02.webp": "Cabin interior mood study",
      "concept-03.webp": "Tower architecture exploration",
      "concept-04.webp": "Subterrain tunnel system",
      "concept-05.webp": "Guide UI/UX iterations",
      "concept-06.webp": "Character silhouette studies",
    },
  },

  effects: {
    textShifts: [
      { original: "You are safe.", shifted: "You were safe." },
      { original: "The Guide protects you.", shifted: "The Guide protects itself." },
      { original: "Keep moving forward.", shifted: "Keep moving forward. It's closer now." },
      { original: "The path is clear.", shifted: "The path was clear." },
      { original: "You are alone.", shifted: "You are not alone." },
      { original: "Don't look back.", shifted: "Don't look back. It's already behind you." },
      { original: "The exit is ahead.", shifted: "The exit was ahead." },
      { original: "Trust the Guide.", shifted: "Trust the Guide. Trust the Guide. Trust the Guide." },
      { original: "Follow the light.", shifted: "Follow the light. It knows your name." },
      { original: "You will survive.", shifted: "You will survive. For now." },
      { original: "The door is locked.", shifted: "The door is locked from the outside." },
      { original: "She is waiting for you.", shifted: "She has been waiting for a long time." },
    ],
    labelFlickers: [
      { original: "WISHLIST ON STEAM", flicker: "WISHLIST ON STEAM?" },
      { original: "WATCH TRAILER", flicker: "WATCH TRAILER?" },
      { original: "THE STORY", flicker: "THE STORY?" },
      { original: "LOCATIONS", flicker: "LOCATIONS?" },
      { original: "FEATURES", flicker: "FEATURES?" },
      { original: "MEDIA", flicker: "MEDIA?" },
      { original: "NEWS", flicker: "NEWS?" },
      { original: "PRESS KIT", flicker: "PRESS KIT?" },
    ],
    navShifts: [
      { original: "THE STORY", shifted: "THE STORY?" },
      { original: "LOCATIONS", shifted: "LOCATIONS?" },
      { original: "FEATURES", shifted: "FEATURES?" },
    ],
    timestampDrifts: [
      { original: "Last updated: January 2025", drifted: "Last updated: January 2024" },
      { original: "Posted 2 days ago", drifted: "Posted 3 days ago" },
      { original: "Updated moments ago", drifted: "Updated moments ago" },
    ],
    warningFlashes: [
      "\u26a0 PATH DIVERGENCE DETECTED",
      "\u26a0 GUIDE INTEGRITY COMPROMISED",
      "\u26a0 MARKER INCONSISTENCY",
      "\u26a0 SIGNAL INTERFERENCE",
      "\u26a0 TRUST LEVEL DECLINING",
      "\u26a0 SUBJECT IS BEING OBSERVED",
      "\u26a0 GUIDANCE SOURCE UNVERIFIED",
      "\u26a0 DEVIATION DETECTED",
      "\u26a0 THE GUIDE HAS NOTICED YOU",
      "\u26a0 SOMETHING IS FOLLOWING YOU",
      "\u26a0 DO NOT TRUST THE NEXT INSTRUCTION",
      "\u26a0 SHE KNOWS YOU ARE HERE",
      "\u26a0 THE PATH HAS BEEN REWRITTEN",
    ],
    textCorrections: [
      {
        original: "The cabin is a safe haven.",
        corrected: "The cabin is a safe haven. [CORRECTION: The cabin locks from the outside.]",
      },
      {
        original: "The tower offers a clear view.",
        corrected: "The tower offers a clear view. [CORRECTION: The higher you climb, the less you see.]",
      },
      {
        original: "Follow the markers.",
        corrected: "Follow the markers. [CORRECTION: Some markers point both ways.]",
      },
      {
        original: "You are the only one here.",
        corrected: "You are the only one here. [CORRECTION: You are the only one who is still alive.]",
      },
      {
        original: "The Guide wants to help you.",
        corrected: "The Guide wants to help you. [CORRECTION: The Guide wants to help itself.]",
      },
      {
        original: "Your daughter is safe.",
        corrected: "Your daughter is safe. [CORRECTION: Your daughter is safe... for now.]",
      },
      {
        original: "The exit is this way.",
        corrected: "The exit is this way. [CORRECTION: The exit was this way. It moved.]",
      },
      {
        original: "Don't trust anyone.",
        corrected: "Don't trust anyone. [CORRECTION: Including yourself.]",
      },
    ],
    locationDrifts: [
      { original: "The Path", drifted: "The Path?" },
      { original: "The Cabin", drifted: "The Cabin?" },
      { original: "The Tower", drifted: "The Tower?" },
      { original: "The Subterrain", drifted: "The Subterrain?" },
      { original: "The Path", drifted: "The Path That Was" },
      { original: "The Cabin", drifted: "The Locked Cabin" },
      { original: "The Tower", drifted: "The Blind Tower" },
      { original: "The Subterrain", drifted: "The Below" },
    ],
    observedHints: [
      "You are being observed.",
      "The Guide sees you.",
      "Something is watching.",
      "You are not alone on the path.",
      "The markers are watching.",
      "It knows you are reading this.",
      "You should not be here.",
      "The Guide remembers your face.",
      "You have been here before.",
      "She can hear you breathing.",
      "The path was never meant for you.",
      "You are being guided. Not saved.",
      "Someone is reading over your shoulder.",
      "The Guide is closer than you think.",
    ],
  },
};

export type GameLocaleContent = typeof gameLocaleContent;