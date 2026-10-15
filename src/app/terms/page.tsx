import { Metadata } from "next";
import Link from "next/link";
import { gameConfig } from "@/config/game";

export const metadata: Metadata = {
  title: "Terms of Service | The Wrong Guide",
  description: "Terms of Service for The Wrong Guide official website. By using this site, you agree to these terms.",
};

const currentDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-bg-primary text-fg-primary">
      <section className="container-custom py-24 md:py-32" aria-labelledby="terms-heading">
        <header className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h1 id="terms-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-6">
            TERMS OF SERVICE
          </h1>
          <p className="text-fg-tertiary text-sm font-mono tracking-wider uppercase">
            Last Updated: {currentDate}
          </p>
        </header>

        <div className="max-w-3xl mx-auto space-y-16">
          <section aria-labelledby="intro-heading" className="prose prose-invert max-w-none">
            <p id="intro-heading" className="text-fg-secondary text-base md:text-lg leading-relaxed">
              Welcome to the official website for <strong>{gameConfig.title}</strong> ("the Site"), operated by <strong>{gameConfig.developer}</strong> ("we," "us," or "our"). By accessing or using the Site, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.
            </p>
          </section>

          <section aria-labelledby="section-1-heading">
            <h2 id="section-1-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                These Terms constitute a legally binding agreement between you and {gameConfig.developer} regarding your use of the Site. By accessing, browsing, or using the Site in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as any applicable laws and regulations.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the Site after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </div>
          </section>

          <section aria-labelledby="section-2-heading">
            <h2 id="section-2-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              2. Intellectual Property
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                All content on the Site — including but not limited to text, graphics, images, logos, artwork, trailers, screenshots, concept art, audio, video, code, and the arrangement thereof — is the exclusive property of <strong>{gameConfig.developer}</strong> and/or <strong>{gameConfig.publisher}</strong> (collectively, the "Rights Holders") and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                <strong>{gameConfig.title}</strong>, its logo, character names, and distinctive visual elements are trademarks of the Rights Holders. Unauthorized use of these trademarks is strictly prohibited.
              </p>
            </div>
          </section>

          <section aria-labelledby="section-3-heading">
            <h2 id="section-3-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              3. Permitted Use
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>Subject to your compliance with these Terms, you are granted a limited, non-exclusive, non-transferable, revocable license to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access and view the Site for personal, non-commercial informational purposes.</li>
                <li>Share links to the Site via social media, messaging, or other personal communication channels.</li>
                <li>Use assets explicitly provided in the <a href="/press-kit" className="text-accent-red hover:underline">Press Kit</a> for editorial coverage, reviews, previews, and news reporting about {gameConfig.title}, in accordance with the usage guidelines stated on that page.</li>
                <li>Embed official trailers via the provided YouTube or Steam links for editorial purposes.</li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="section-4-heading">
            <h2 id="section-4-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              4. Prohibited Use
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>You may not:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Copy, reproduce, distribute, modify, create derivative works from, publicly display, or publicly perform any Site content without prior written permission, except as expressly permitted in Section 3 or the Press Kit guidelines.</li>
                <li>Use any trademarks, logos, or branding of {gameConfig.title}, {gameConfig.developer}, or {gameConfig.publisher} for commercial purposes, merchandise, endorsements, or to imply affiliation or endorsement.</li>
                <li>Scrape, crawl, or extract data from the Site using automated means without permission.</li>
                <li>Attempt to gain unauthorized access to any portion of the Site, its server, or connected systems.</li>
                <li>Use the Site for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Site.</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices from Site content.</li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="section-5-heading">
            <h2 id="section-5-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              5. Disclaimer of Warranties
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that the Site will be uninterrupted, error-free, secure, or free of viruses or other harmful components. We do not warrant the accuracy, completeness, or currency of any information on the Site. Release dates, features, system requirements, and pricing are subject to change without notice.
              </p>
            </div>
          </section>

          <section aria-labelledby="section-6-heading">
            <h2 id="section-6-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              6. Limitation of Liability
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {gameConfig.developer}, {gameConfig.publisher}, OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Your access to or use of, or inability to access or use, the Site;</li>
                <li>Any content, errors, or omissions on the Site;</li>
                <li>Any third-party content or links on the Site;</li>
                <li>Any viruses or malware transmitted through the Site.</li>
              </ul>
              <p>
                Our total liability to you for any claims arising out of or related to these Terms or the Site shall not exceed the amount you paid to access the Site (which is zero).
              </p>
            </div>
          </section>

          <section aria-labelledby="section-7-heading">
            <h2 id="section-7-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              7. Changes to These Terms
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                We may revise these Terms at any time. The updated version will be posted on this page with a new "Last Updated" date. Material changes will be noted with a brief summary of what changed.
              </p>
              <p>
                Your continued use of the Site after the effective date of revised Terms constitutes your acceptance of the changes. If you do not agree to the revised Terms, your sole remedy is to stop using the Site.
              </p>
            </div>
          </section>

          <section aria-labelledby="section-8-heading">
            <h2 id="section-8-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              8. Contact
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                If you have questions about these Terms, please contact us at:
              </p>
              <p>
                <a href="mailto:press@[DOMAIN].com" className="text-accent-red hover:underline font-mono">
                  press@[DOMAIN].com
                </a>
              </p>
            </div>
          </section>

          <div className="pt-8 border-t border-border-primary">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-fg-tertiary hover:text-accent-red transition-colors text-sm font-medium"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}