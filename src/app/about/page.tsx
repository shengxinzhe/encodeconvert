import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { ui } from "@/lib/ui";

export const metadata = buildMetadata({
  title: "About",
  description: `About ${SITE.name} — free browser-based encoding, time, and unit tools.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className={`${ui.page} py-14`}>
      <p className={ui.captionMono}>About</p>
      <h1 className={`${ui.displayLg} mt-2`}>About {SITE.name}</h1>
      <div className={`${ui.bodyMd} mt-6 max-w-2xl space-y-4`}>
        <p>
          {SITE.name} ({SITE.domain}) provides free online tools for encoding,
          Unix timestamps, and unit conversion. Every tool runs entirely in your
          browser — we do not upload your input to our servers.
        </p>
        <p>
          Our goal is fast, privacy-friendly utilities for developers and everyday
          users, with clear pages and helpful guides over time.
        </p>
      </div>
    </article>
  );
}
