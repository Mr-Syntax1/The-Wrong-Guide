import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { WrongGuideEffects } from "@/components/ui/WrongGuideEffects";
import { gameConfig } from "@/config/game";
import { ScrollToTop } from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${gameConfig.title} | Official Website`,
    template: `%s | ${gameConfig.title}`,
  },
  description: gameConfig.shortDescription,
  keywords: [
    "The Wrong Guide",
    "horror game",
    "psychological horror",
    "story-driven game",
    "indie game",
    "Steam game",
    "single player horror",
    "atmospheric horror",
  ],
  authors: [{ name: gameConfig.developer }],
  creator: gameConfig.developer,
  publisher: gameConfig.publisher,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thewrongguide.com",
    siteName: gameConfig.title,
    title: `${gameConfig.title} | Official Website`,
    description: gameConfig.shortDescription,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: gameConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thewrongguide",
    creator: "@thewrongguide",
    title: `${gameConfig.title} | Official Website`,
    description: gameConfig.shortDescription,
    images: ["/images/og-image.png"],
  },
  verification: {
    google: "[GOOGLE_SITE_VERIFICATION]",
  },
  category: "games",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://store.steampowered.com" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600;700&display=swap" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-fg-primary">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
        <WrongGuideEffects />
        <div className="film-grain vignette pointer-events-none fixed inset-0 z-[100]" aria-hidden="true" />
      </body>
    </html>
  );
}