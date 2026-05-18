import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About",
  description: `About ${SITE.name} — free browser-based encoding, time, and unit tools.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <ProsePage title="About">
      <p>
        {SITE.name} ({SITE.domain}) provides free online tools for encoding,
        Unix timestamps, and unit conversion. Every tool runs entirely in your
        browser — we do not upload your input to our servers.
      </p>
      <p>
        Our goal is fast, privacy-friendly utilities for developers and everyday
        users, with clear pages and helpful guides over time.
      </p>
    </ProsePage>
  );
}

function ProsePage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <div className="prose prose-zinc mt-6 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {children}
      </div>
    </article>
  );
}
