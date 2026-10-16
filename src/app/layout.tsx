import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "The Wrong Guide | Official Website",
    template: `%s | The Wrong Guide`,
  },
  description: "A story-driven atmospheric horror game where the guide you follow may not be what it seems.",
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
  authors: [{ name: "BMS Studio" }],
  creator: "BMS Studio",
  publisher: "Sourena Games",
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
    siteName: "The Wrong Guide",
    title: "The Wrong Guide | Official Website",
    description: "A story-driven atmospheric horror game where the guide you follow may not be what it seems.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Wrong Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thewrongguide",
    creator: "@thewrongguide",
    title: "The Wrong Guide | Official Website",
    description: "A story-driven atmospheric horror game where the guide you follow may not be what it seems.",
    images: ["/images/og-image.png"],
  },
  verification: {
    google: "[GOOGLE_SITE_VERIFICATION]",
  },
  category: "games",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
       
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-fg-primary">
        {children}
      </body>
    </html>
  );
}