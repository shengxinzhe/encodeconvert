import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Contact ${SITE.name} for feedback, corrections, or partnership.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
        For feedback, bug reports, or DMCA notices related to {SITE.domain},
        email us at{" "}
        <a
          href="mailto:hello@encodeconvert.tool"
          className="font-medium text-zinc-900 underline dark:text-zinc-100"
        >
          hello@encodeconvert.tool
        </a>
        . We aim to respond within a few business days.
      </p>
    </article>
  );
}
