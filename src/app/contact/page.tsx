import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { ui } from "@/lib/ui";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Contact ${SITE.name} for feedback, corrections, or partnership.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <article className={`${ui.page} py-14`}>
      <p className={ui.captionMono}>Contact</p>
      <h1 className={`${ui.displayLg} mt-2`}>Get in touch</h1>
      <p className={`${ui.bodyMd} mt-4 max-w-xl`}>
        For feedback, bug reports, or DMCA notices related to {SITE.domain},
        email us at{" "}
        <a
          href="mailto:hello@encodeconvert.tool"
          className="font-medium text-link hover:text-link-deep"
        >
          hello@encodeconvert.tool
        </a>
        . We aim to respond within a few business days.
      </p>
    </article>
  );
}
