import { Metadata } from "next";
import Link from "next/link";
import { gameConfig } from "@/config/game";

export const metadata: Metadata = {
  title: "Privacy Policy | The Wrong Guide",
  description: "Privacy Policy for The Wrong Guide official website. This static informational website does not collect personal data from visitors.",
};

const currentDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-bg-primary text-fg-primary">
      <section className="container-custom py-24 md:py-32" aria-labelledby="privacy-heading">
        <header className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h1 id="privacy-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-primary tracking-tight mb-6">
            PRIVACY POLICY
          </h1>
          <p className="text-fg-tertiary text-sm font-mono tracking-wider uppercase">
            Last Updated: {currentDate}
          </p>
        </header>

        <div className="max-w-3xl mx-auto space-y-16">
          <section aria-labelledby="intro-heading" className="prose prose-invert max-w-none">
            <p id="intro-heading" className="text-fg-secondary text-base md:text-lg leading-relaxed">
              This Privacy Policy applies to the official website for <strong>{gameConfig.title}</strong> ("the Site"), operated by <strong>{gameConfig.developer}</strong> ("we," "us," or "our"). The Site is a static informational website showcasing a single-player, offline, story-driven horror game. We respect your privacy and are committed to being transparent about our data practices.
            </p>
          </section>

          <section aria-labelledby="section-1-heading">
            <h2 id="section-1-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              1. Information We Collect
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                The Site does not collect, store, or process any personal data from visitors. We do not use contact forms, newsletter signups, user accounts, or any other mechanism that would require you to provide personal information.
              </p>
              <p>
                When you visit the Site, your browser automatically sends certain technical information to our server (such as your IP address, browser type, operating system, and referring page). This information is handled by our hosting provider and is not stored or analyzed by us.
              </p>
            </div>
          </section>

          <section aria-labelledby="section-2-heading">
            <h2 id="section-2-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              2. Cookies
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                The Site does not use cookies, local storage, session storage, or any similar client-side tracking technologies. We do not set first-party or third-party cookies for analytics, advertising, or functional purposes.
              </p>
              <p>
                If you click external links (such as to Steam, YouTube, or social media), those third-party websites may set their own cookies in accordance with their privacy policies.
              </p>
            </div>
          </section>

          <section aria-labelledby="section-3-heading">
            <h2 id="section-3-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              3. Third-Party Services
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                The Site contains links to third-party services. We do not control these services and are not responsible for their privacy practices. We encourage you to review the privacy policy of each service you visit:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Steam</strong> — <a href="https://store.steampowered.com/privacy_agreement/" target="_blank" rel="noopener noreferrer" className="text-accent-red hover:underline">Steam Privacy Policy</a>
                </li>
                <li>
                  <strong>YouTube / Google</strong> — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-red hover:underline">Google Privacy Policy</a>
                </li>
                <li>
                  <strong>Social Media (Twitter/X, Discord, etc.)</strong> — Each platform has its own privacy policy governing data collected when you interact with their services.
                </li>
              </ul>
              <p>
                We do not embed third-party scripts, tracking pixels, or social media widgets that would collect data on our behalf.
              </p>
            </div>
          </section>

          <section aria-labelledby="section-4-heading">
            <h2 id="section-4-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              4. Analytics
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                The Site does not currently use any analytics or tracking services (such as Google Analytics, Plausible, or similar). No visitor behavior is measured, recorded, or analyzed.
              </p>
              <p className="text-accent-red">
                If analytics are added in the future, this section will be updated to disclose what data is collected, how it is used, and how you can opt out.
              </p>
            </div>
          </section>

          <section aria-labelledby="section-5-heading">
            <h2 id="section-5-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              5. Children&apos;s Privacy
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                The Site is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. The game itself is rated "Mature 17+" and is not intended for children.
              </p>
            </div>
          </section>

          <section aria-labelledby="section-6-heading">
            <h2 id="section-6-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              6. Changes to This Policy
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. The "Last Updated" date at the top of this page will be revised accordingly.
              </p>
              <p>
                We encourage you to review this page periodically. Continued use of the Site after changes are posted constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          <section aria-labelledby="section-7-heading">
            <h2 id="section-7-heading" className="font-display font-semibold text-xl md:text-2xl text-accent-red tracking-wider uppercase mb-4 border-b border-border-primary pb-2">
              7. Contact
            </h2>
            <div className="space-y-4 text-fg-secondary text-base md:text-lg leading-relaxed">
              <p>
                If you have questions or concerns about this Privacy Policy or our data practices, you may contact us at:
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