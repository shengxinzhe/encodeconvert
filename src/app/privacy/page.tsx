import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { ui } from "@/lib/ui";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}. Local processing, cookies, and analytics.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className={`${ui.page} py-14`}>
      <p className={ui.captionMono}>Legal</p>
      <h1 className={`${ui.displayLg} mt-2`}>Privacy Policy</h1>
      <div className={`${ui.bodyMd} mt-6 max-w-2xl space-y-6`}>
        <p className={ui.caption}>Last updated: May 2026</p>
        <p>
          {SITE.name} ({SITE.domain}) respects your privacy. Tool inputs are
          processed locally in your web browser and are not sent to our servers
          for conversion.
        </p>
        <section>
          <h2 className="text-base font-semibold text-ink">Cookies & analytics</h2>
          <p className="mt-2">
            We may use cookies or similar technologies for essential site
            function, theme preference, or anonymous analytics. Third-party ad
            partners (if enabled) may use cookies per their own policies.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-ink">Contact</h2>
          <p className="mt-2">
            Questions? See our{" "}
            <a href="/contact" className="text-link hover:text-link-deep">
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
