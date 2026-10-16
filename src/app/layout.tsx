import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { OG_IMAGE, SITE_NAME, SITE_URL, websiteJsonLd } from "@/config/seo";
import { SetHtmlLang } from "@/components/SetHtmlLang";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Official Website`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "A story-driven atmospheric horror game where the guide you follow may not be what it seems.",
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
  verification: {
    google: "MpwHhMRv-VMRRNTWV0qOb1kocjpJIpwIE7aKHYPrQoA",
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/icon-v2.webp", type: "image/webp" },
    ],
    apple: "/images/icon-v2.webp",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Official Website`,
    description:
      "A story-driven atmospheric horror game where the guide you follow may not be what it seems.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thewrongguide",
    creator: "@thewrongguide",
    title: `${SITE_NAME} | Official Website`,
    description:
      "A story-driven atmospheric horror game where the guide you follow may not be what it seems.",
    images: [OG_IMAGE.url],
  },
  category: "games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-fg-primary">
        <SetHtmlLang />
        {children}
      </body>
    </html>
  );
}