export const designTokens = {
  colors: {
    background: {
      primary: "#030303",
      secondary: "#0a0a0a",
      tertiary: "#111111",
      elevated: "#1a1a1a",
    },
    foreground: {
      primary: "#fafafa",
      secondary: "#a3a3a3",
      tertiary: "#737373",
      disabled: "#404040",
    },
    accent: {
      red: {
        primary: "#dc2626",
        hover: "#ef4444",
        muted: "#7f1d1d",
        glow: "rgba(220, 38, 38, 0.15)",
      },
      amber: {
        primary: "#f59e0b",
        muted: "#92400e",
      },
    },
    border: {
      primary: "#262626",
      secondary: "#404040",
      focus: "#dc2626",
    },
  },

  typography: {
    fontFamilies: {
      display: "'Space Grotesk', 'Geist', system-ui, sans-serif",
      body: "'Geist', 'Inter', system-ui, sans-serif",
      mono: "'Geist Mono', 'JetBrains Mono', monospace",
      ui: "'Geist', system-ui, sans-serif",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3.5rem",
      "6xl": "5rem",
      "7xl": "7rem",
    },
    fontWeights: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    lineHeights: {
      tight: "1.1",
      snug: "1.35",
      normal: "1.6",
      relaxed: "1.75",
    },
    letterSpacing: {
      tight: "-0.02em",
      normal: "0",
      wide: "0.02em",
      wider: "0.1em",
      tracking: "0.2em",
    },
  },

  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  container: {
    maxWidth: "1400px",
    padding: {
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "3rem",
    },
  },

  borderRadius: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },

  transitions: {
    fast: "150ms ease-out",
    normal: "250ms ease-out",
    slow: "400ms ease-out",
    slower: "600ms ease-out",
  },

  zIndex: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    modal: 300,
    popover: 400,
    tooltip: 500,
    toast: 600,
  },
} as const;

export type DesignTokens = typeof designTokens;