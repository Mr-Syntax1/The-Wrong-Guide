"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getGameConfig } from "@/config/game";
import { Download, Copy, ExternalLink, ChevronDown, ChevronUp, Image, Video, Layers, FileText } from "lucide-react";
import { useTranslations } from "next-intl";

interface PressKitPageProps {
  locale: string;
}

export function PressKitPage({ locale }: PressKitPageProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["logos", "key-art"]);
  const t = useTranslations("pressKit");
  const gameConfig = getGameConfig(locale);
  const pressKit = gameConfig.pressKit;
  const businessEmail = (gameConfig as { businessEmail?: string }).businessEmail;

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const sectionConfig = {
    logos: { title: t("logos"), icon: Image, description: t("officialLogoFiles") },
    "key-art": { title: t("keyArt"), icon: Image, description: t("highResArtwork") },
    screenshots: { title: t("screenshots"), icon: Image, description: t("inGameScreenshots") },
    trailers: { title: t("trailers"), icon: Video, description: t("officialVideoContent") },
    "concept-art": { title: t("conceptArt"), icon: Layers, description: t("developmentArtwork") },
    downloads: { title: t("downloads"), icon: FileText, description: t("completePressKitPackages") },
  };

  const sectionDownloads: Record<string, string | undefined> = {
    logos: pressKit.downloads.logoZip,
    "key-art": pressKit.downloads.keyArtZip,
    screenshots: pressKit.downloads.screenshotsZip,
    trailers: pressKit.downloads.trailersZip,
    "concept-art": pressKit.downloads.conceptArtZip,
  };

  const usageRules = t.raw("usageRules") as string[];

  return (
    <div className="min-h-screen">
      <section className="relative pb-16 mt-24 md:pb-24" aria-labelledby="press-kit-heading">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/20 to-transparent" />
        </div>

        <div className="container-custom">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h1 id="press-kit-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-6">
              {t("heading")}
            </h1>
            <p className="text-fg-secondary text-lg md:text-xl leading-relaxed">
              {t("subheading")}
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-bg-secondary border border-border-primary rounded-base">
              <h3 className="font-display font-semibold text-xl text-fg-primary mb-2">{t("gameTitle")}</h3>
              <p className="text-fg-primary font-mono text-lg">{gameConfig.title}</p>
            </div>
            <div className="p-6 bg-bg-secondary border border-border-primary rounded-base">
              <h3 className="font-display font-semibold text-xl text-fg-primary mb-2">{t("genre")}</h3>
              <p className="text-fg-secondary">{gameConfig.genre}</p>
            </div>
            <div className="p-6 bg-bg-secondary border border-border-primary rounded-base">
              <h3 className="font-display font-semibold text-xl text-fg-primary mb-2">{t("platforms")}</h3>
              <p className="text-fg-secondary">{gameConfig.platforms.join(", ")}</p>
            </div>
          </div>

          <section className="mb-16" aria-labelledby="team-credits-heading">
            <h2 id="team-credits-heading" className="font-display font-bold text-2xl text-fg-primary mb-6">{t("teamCredits")}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-bg-secondary border border-border-primary rounded-base">
                <h3 className="font-display font-semibold text-xl text-fg-primary mb-2">{t("gameDeveloper")}</h3>
                <p className="text-fg-secondary">{t("gameDeveloperName")}</p>
              </div>
              <div className="p-6 bg-bg-secondary border border-border-primary rounded-base">
                <h3 className="font-display font-semibold text-xl text-fg-primary mb-2">{t("websiteDesigner")}</h3>
                <p className="text-fg-secondary">{t("websiteDesignerName")}</p>
              </div>
              <div className="p-6 bg-bg-secondary border border-border-primary rounded-base">
                <h3 className="font-display font-semibold text-xl text-fg-primary mb-2">{t("modeler3D")}</h3>
                <p className="text-fg-secondary">{t("modeler3DName")}</p>
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 bg-bg-secondary border border-border-primary rounded-base">
              <h3 className="font-display font-semibold text-xl text-fg-primary mb-2">{t("developers")}</h3>
              <p className="text-fg-secondary">{gameConfig.developer}</p>
            </div>
            <div className="p-6 bg-bg-secondary border border-border-primary rounded-base">
              <h3 className="font-display font-semibold text-xl text-fg-primary mb-2">{t("publisher")}</h3>
              <p className="text-fg-secondary">{gameConfig.publisher}</p>
            </div>
            <div className="p-6 bg-bg-secondary border border-border-primary rounded-base md:col-span-2">
              <h3 className="font-display font-semibold text-xl text-fg-primary mb-2">{t("releaseStatus")}</h3>
              <p className="text-fg-secondary">{gameConfig.releaseStatus}</p>
              {gameConfig.releaseDate !== "[RELEASE DATE]" && (
                <p className="text-fg-secondary mt-1">{t("releaseDate")}: {gameConfig.releaseDate}</p>
              )}
              {gameConfig.price && (
                <p className="text-fg-secondary mt-1">{t("price")}: {gameConfig.price}</p>
              )}
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="font-display font-semibold text-2xl text-fg-primary mb-4">{t("shortDescription")}</h3>
            <p className="text-fg-secondary leading-relaxed mb-8">{gameConfig.shortDescription}</p>

            <h3 className="font-display font-semibold text-2xl text-fg-primary mb-4">{t("longDescription")}</h3>
            <div className="text-fg-secondary leading-relaxed whitespace-pre-wrap">{gameConfig.longDescription}</div>
          </div>
        </div>
      </section>

      <div className="container-custom pb-24">
        <nav className="mb-12" aria-label="Press kit sections">
          <ul className="flex flex-wrap gap-2" role="list">
            {Object.entries(sectionConfig).map(([id, config]) => (
              <li key={id}>
                <button
                  onClick={() => toggleSection(id)}
                  className={cn(
                    "px-4 py-2 rounded-base text-sm font-medium tracking-wide transition-all flex items-center gap-2",
                    expandedSections.includes(id)
                      ? "bg-accent-red text-fg-primary"
                      : "bg-bg-tertiary text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated"
                  )}
                  aria-expanded={expandedSections.includes(id)}
                  aria-controls={`section-${id}`}
                >
                  <config.icon className="w-4 h-4" aria-hidden="true" />
                  {config.title}
                  {expandedSections.includes(id) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-8">
          {Object.entries(sectionConfig).map(([id, config]) => (
            <motion.section
              key={id}
              id={`section-${id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: expandedSections.includes(id) ? "auto" : 0, opacity: expandedSections.includes(id) ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
              aria-labelledby={`heading-${id}`}
            >
              <div className="bg-bg-secondary border border-border-primary rounded-base overflow-hidden">
                <div className="p-6 border-b border-border-primary">
                  <header className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <config.icon className="w-6 h-6 text-accent-red" aria-hidden="true" />
                      <div>
                        <h2 id={`heading-${id}`} className="font-display font-bold text-2xl text-fg-primary">
                          {config.title}
                        </h2>
                        <p className="text-fg-tertiary text-sm">{config.description}</p>
                      </div>
                    </div>
                    {sectionDownloads[id] && (
                      <a
                        href={sectionDownloads[id]}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-base bg-accent-red/10 border border-accent-red/30 text-accent-red text-sm font-medium hover:bg-accent-red hover:text-fg-primary transition-colors"
                        download
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        {t("downloadAll")} ({config.title})
                      </a>
                    )}
                  </header>
                </div>

                <div className="p-6" role="list" aria-label={`${config.title} assets`}>
                  {id === "logos" && pressKit.logos.map((asset) => (
                    <motion.div
                      key={asset.file}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-bg-tertiary rounded-base mb-4"
                      role="listitem"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-bg-primary border border-border-primary rounded-base flex items-center justify-center flex-shrink-0">
                          <Image className="w-8 h-8 text-fg-tertiary" alt="" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary">{asset.name}</h4>
                          <p className="text-fg-tertiary text-sm">{asset.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            {asset.formats?.map((fmt) => (
                              <span key={fmt} className="px-2 py-0.5 rounded bg-bg-primary border border-border-primary text-xs font-mono text-fg-secondary">{fmt}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={pressKit.downloads.logoZip}
                          className="p-2 rounded-base bg-bg-primary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
                          aria-label={`${t("download")} ${asset.name}`}
                          download
                        >
                          <Download className="w-4 h-4" aria-hidden="true" />
                        </a>
                        <button
                          onClick={() => copyToClipboard(`/press-kit/logos/${asset.file}`)}
                          className="p-2 rounded-base bg-bg-primary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
                          aria-label={t("copyPath")}
                        >
                          <Copy className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    </motion.div>
                  ))}

                  {id === "key-art" && pressKit.keyArt.map((asset) => (
                    <motion.div
                      key={asset.file}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-bg-tertiary rounded-base mb-4"
                      role="listitem"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-16 md:w-32 md:h-20 bg-bg-primary border border-border-primary rounded-base flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <Image className="w-full h-full object-cover" style={{ filter: "brightness(0.4) saturate(0.5)" }} alt="" />
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary">{asset.name}</h4>
                          <p className="text-fg-tertiary text-sm">{asset.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="px-2 py-0.5 rounded bg-bg-primary border border-border-primary text-xs font-mono text-fg-secondary">{asset.resolution}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={pressKit.downloads.keyArtZip}
                          className="p-2 rounded-base bg-bg-primary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
                          aria-label={`${t("download")} ${asset.name}`}
                          download
                        >
                          <Download className="w-4 h-4" aria-hidden="true" />
                        </a>
                        <button
                          onClick={() => copyToClipboard(`/press-kit/key-art/${asset.file}`)}
                          className="p-2 rounded-base bg-bg-primary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
                          aria-label={t("copyPath")}
                        >
                          <Copy className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    </motion.div>
                  ))}

                  {id === "screenshots" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
                      {pressKit.screenshots.map((asset, index) => (
                        <motion.div
                          key={asset.file}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="group relative aspect-[16/9] bg-bg-tertiary rounded-base overflow-hidden"
                          role="listitem"
                        >
                          <div className="absolute inset-0 bg-bg-primary/50 flex items-center justify-center">
                            <Image className="w-10 h-10 text-fg-tertiary" alt="" aria-hidden="true" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-fg-primary text-sm font-medium truncate">{asset.caption}</p>
                            <p className="text-fg-tertiary text-xs">{asset.file}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {id === "trailers" && pressKit.trailers.map((asset) => (
                    <motion.div
                      key={asset.file}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-bg-tertiary rounded-base mb-4"
                      role="listitem"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-bg-primary border border-border-primary rounded-base flex items-center justify-center flex-shrink-0 relative">
                          <Video className="w-8 h-8 text-fg-tertiary" aria-hidden="true" />
                          <span className="absolute bottom-1 right-1 bg-bg-primary/90 text-xs font-mono text-fg-tertiary px-1">{asset.duration}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-fg-primary">{asset.name}</h4>
                          <p className="text-fg-tertiary text-sm">{asset.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="px-2 py-0.5 rounded bg-bg-primary border border-border-primary text-xs font-mono text-fg-secondary">{asset.resolution}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={pressKit.downloads.trailersZip}
                          className="p-2 rounded-base bg-bg-primary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
                          aria-label={`${t("download")} ${asset.name}`}
                          download
                        >
                          <Download className="w-4 h-4" aria-hidden="true" />
                        </a>
                        <button
                          onClick={() => copyToClipboard(`/press-kit/trailers/${asset.file}`)}
                          className="p-2 rounded-base bg-bg-primary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
                          aria-label={t("copyPath")}
                        >
                          <Copy className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    </motion.div>
                  ))}

                  {id === "concept-art" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
                      {pressKit.conceptArt.map((asset, index) => (
                        <motion.div
                          key={asset.file}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="group relative aspect-[4/3] bg-bg-tertiary rounded-base overflow-hidden"
                          role="listitem"
                        >
                          <div className="absolute inset-0 bg-bg-primary/50 flex items-center justify-center">
                            <Layers className="w-10 h-10 text-fg-tertiary" aria-hidden="true" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-fg-primary text-sm font-medium truncate">{asset.caption}</p>
                            <p className="text-fg-tertiary text-xs">{asset.file}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {id === "downloads" && (
                    <div className="space-y-3" role="list">
                      {Object.entries(pressKit.downloads).map(([key, url]) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center justify-between p-4 bg-bg-tertiary rounded-base"
                          role="listitem"
                        >
                          <div className="flex items-center gap-4">
                            <FileText className="w-6 h-6 text-accent-red flex-shrink-0" aria-hidden="true" />
                            <div>
                              <p className="font-medium text-fg-primary">{key.replace("Zip", ` ${t("downloads")}`).replace(/^\w/, (c) => c.toUpperCase())}</p>
                              <p className="text-fg-tertiary text-sm">ZIP</p>
                            </div>
                          </div>
                          <a
                            href={url}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-base bg-accent-red/10 border border-accent-red/30 text-accent-red text-sm font-medium hover:bg-accent-red hover:text-fg-primary transition-colors"
                            download
                          >
                            <Download className="w-4 h-4" aria-hidden="true" />
                            {t("download")}
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <section className="mt-16 pt-12 border-t border-border-primary" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="font-display font-bold text-2xl text-fg-primary mb-6">{t("pressContact")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-bg-secondary border border-border-primary rounded-base">
              <h3 className="font-display font-semibold text-xl text-fg-primary mb-4">{t("pressInquiries")}</h3>
              <p className="text-fg-secondary mb-4">{t("forReviewCodes")}</p>
              <a
                href={`mailto:${gameConfig.pressEmail}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-base bg-accent-red/10 border border-accent-red/30 text-accent-red font-medium hover:bg-accent-red hover:text-fg-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                {gameConfig.pressEmail}
              </a>
            </div>
            {businessEmail && (
              <div className="p-6 bg-bg-secondary border border-border-primary rounded-base">
                <h3 className="font-display font-semibold text-xl text-fg-primary mb-4">{t("businessInquiries")}</h3>
                <p className="text-fg-secondary mb-4">{t("forPartnership")}</p>
                <a
                  href={`mailto:${businessEmail}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-base bg-bg-tertiary border border-border-primary text-fg-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  {businessEmail}
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="mt-12 pt-12 border-t border-border-primary" aria-labelledby="guidelines-heading">
          <h2 id="guidelines-heading" className="font-display font-bold text-2xl text-fg-primary mb-6">{t("usageGuidelines")}</h2>
          <div className="prose prose-invert max-w-none space-y-4 text-fg-secondary">
            <p>{t("assetsProvidedFor")}</p>
            <ul className="list-disc list-inside space-y-2">
              {usageRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
            <p>{t("forOtherUses")} <a href={`mailto:${gameConfig.pressEmail}`} className="text-accent-red hover:underline">{gameConfig.pressEmail}</a>.</p>
          </div>
        </section>
      </div>
    </div>
  );
}