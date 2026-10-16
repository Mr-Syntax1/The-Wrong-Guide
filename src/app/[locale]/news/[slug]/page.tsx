import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ResponsiveImage } from "@/components/ui";
import { gameConfig, getGameConfig } from "@/config/game";
import { SITE_URL, pageMetadata } from "@/config/seo";
import { cn, formatDate } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Suspense } from "react";
import NewsArticleSkeleton from "./NewsArticleContent";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export default function NewsArticle({ params }: Props) {
  return (
    <Suspense fallback={<NewsArticleSkeleton />}>
      <NewsArticleContent params={params} />
    </Suspense>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getGameConfig(locale).news.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found", robots: { index: false, follow: false } };

  const base = pageMetadata({
    locale,
    path: `/news/${post.slug}`,
    title: post.title,
    description: post.excerpt,
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1920, height: 1080, alt: post.title }],
    },
  };
}

export async function generateStaticParams() {
  return gameConfig.news.map((post) => ({ slug: post.slug }));
}

async function NewsArticleContent({ params }: Props) {
  const { locale, slug } = await params;
  const post = getGameConfig(locale).news.find((p) => p.slug === slug);
  const t = await getTranslations({ locale, namespace: "common" });

  if (!post) notFound();

  // Canonical share URL (default locale "en" has no prefix with localePrefix: "as-needed")
  const shareUrl = `${SITE_URL}${locale === "en" ? "" : `/${locale}`}/news/${post.slug}`;

  const categoryColors: Record<string, string> = {
    Announcement: "bg-accent-red/20 border-accent-red/30 text-accent-red",
    Trailer: "bg-accent-amber/20 border-accent-amber/30 text-accent-amber",
    Development: "bg-blue-500/20 border-blue-500/30 text-blue-400",
    Business: "bg-purple-500/20 border-purple-500/30 text-purple-400",
  };

  const categoryStyle = categoryColors[post.category] || "bg-bg-tertiary border-border-primary text-fg-secondary";

  return (
    <article className="min-h-screen">
      <section className="relative pb-16 pt-14 md:pb-24" aria-labelledby="article-heading">

        <div className="container-custom relative z-10">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-base bg-bg-secondary/80 backdrop-blur-sm border border-border-primary text-fg-secondary hover:text-fg-primary hover:bg-bg-tertiary transition-colors text-sm mb-8"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            {t("backToNews")}
          </Link>

          <header className="max-w-3xl mx-auto text-center">
            <span className={cn(
              "inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase mb-6",
              categoryStyle
            )}>
              {post.category}
            </span>
            <h1 id="article-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-6">
              {post.title}
            </h1>
            <time className="text-fg-tertiary text-sm font-mono tracking-wider" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </header>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-label="Article content">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video overflow-hidden rounded-base mb-12">
              <ResponsiveImage
                src={post.image}
                alt={post.title}
                fill
                sizes="100vw"
                className="object-cover"
                style={{ filter: "brightness(0.8) contrast(1.1) saturate(0.8)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
            </div>

            <div className="prose prose-invert max-w-none space-y-8 text-fg-secondary leading-relaxed">
              <p className="text-lg text-fg-primary font-medium">{post.excerpt}</p>
              <div className="whitespace-pre-wrap text-base">
                {post.content || `
This is a placeholder for the full article content. In a production environment, this would contain the complete news article, development update, or announcement details.

The Wrong Guide development continues at a steady pace. Our team has been focused on refining the core gameplay loop, particularly the interaction between the player and the guide system. We've implemented several iterations of the guide's visual language — the markers, the notes, the audio cues — to ensure they feel both helpful and subtly unsettling.

Environmental storytelling remains a key pillar. Each location (The Path, The Cabin, The Tower, The Subterrain) has been designed with multiple layers of narrative information. Players who observe carefully will piece together a story that exists alongside, and sometimes in contradiction to, what the guide tells them.

Audio design deserves special mention. The soundscape shifts dynamically based on the player's relationship with the guide. When following instructions, the world feels relatively normal. When deviating — or when the guide itself behaves erratically — the audio subtly distorts, creating an uncanny valley effect that operates below conscious perception.

We're targeting a Steam release in the coming months. The wishlist campaign will launch alongside our next major trailer, which will showcase actual gameplay footage for the first time.

Thank you for following the guide. Or not following it. The choice, as always, is yours.
                `}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border-primary flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-fg-tertiary text-sm">{t("share")}</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-base bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.24-3.308.867L10.92 13.105l-4.297 4.557-3.307-.867 8.503-9.24zM15.594 18.54l5.993-5.112L7.221 1.76 1.227 6.872l10.367 11.668z" />
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-base bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-base bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-base bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors text-sm font-medium"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                {t("allNews")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}