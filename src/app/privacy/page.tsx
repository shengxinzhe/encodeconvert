import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}. Local processing, cookies, and analytics.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>Last updated: May 2026</p>
        <p>
          {SITE.name} ({SITE.domain}) respects your privacy. Tool inputs are
          processed locally in your web browser and are not sent to our servers
          for conversion.
        </p>
        <h2 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
          Cookies & analytics
        </h2>
        <p>
          We may use cookies or similar technologies for essential site
          function, theme preference, or anonymous analytics. Third-party ad
          partners (if enabled) may use cookies per their own policies.
        </p>
        <h2 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
          Contact
        </h2>
        <p>
          Questions? See our <a href="/contact">contact page</a>.
        </p>
      </div>
    </article>
  );
}
