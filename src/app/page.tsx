import Link from "next/link";
import { CATEGORIES, SITE, TOOLS } from "@/lib/site";
import { ui } from "@/lib/ui";

const CATEGORY_ICONS: Record<string, string> = {
  encode: "01",
  time: "02",
  convert: "03",
};

export default function HomePage() {
  const popular = TOOLS.slice(0, 6);

  return (
    <>
      <section className="hero-mesh border-b border-hairline">
        <div className={`${ui.page} py-20 sm:py-28`}>
          <p className={ui.captionMono}>{SITE.domain}</p>
          <h1 className={`${ui.displayXl} mt-3 max-w-3xl`}>{SITE.tagline}</h1>
          <p className={`${ui.bodyLg} mt-5 max-w-xl`}>{SITE.trustLine}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/encode/base64" className={ui.btnPrimary}>
              Try Base64 tool
            </Link>
            <Link href="/encode" className={ui.btnSecondary}>
              Browse all tools
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {popular.map((tool) => (
              <Link
                key={tool.path}
                href={tool.path}
                className="rounded-full border border-hairline bg-canvas/80 px-3.5 py-1.5 text-sm tracking-[-0.28px] text-body backdrop-blur-sm transition hover:border-hairline-strong hover:text-ink"
              >
                {tool.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${ui.page} py-20`}>
        <p className={ui.captionMono}>Categories</p>
        <h2 className={`${ui.displayLg} mt-2`}>Everything you need in one place.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={`${ui.cardLg} group block`}
            >
              <span className="font-mono text-xs text-mute">
                {CATEGORY_ICONS[cat.id]}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-ink">
                {cat.title}
              </h3>
              <p className={`${ui.bodySm} mt-2`}>{cat.description}</p>
              <span className="mt-5 inline-flex text-sm font-medium text-link group-hover:text-link-deep">
                Open category →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
