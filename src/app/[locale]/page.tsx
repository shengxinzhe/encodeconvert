import Link from "next/link";
import { CATEGORY_HREFS, SITE, TOOL_ROUTES } from "@/lib/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/path";
import { resolveLocale } from "@/i18n/server";
import { ui } from "@/lib/ui";

const CATEGORY_ICONS: Record<string, string> = {
  encode: "01",
  time: "02",
  convert: "03",
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const popular = TOOL_ROUTES.slice(0, 6);

  const categories = (
    [
      { id: "encode" as const, href: CATEGORY_HREFS.encode },
      { id: "time" as const, href: CATEGORY_HREFS.time },
      { id: "convert" as const, href: CATEGORY_HREFS.convert },
    ] as const
  ).map((c) => ({ ...c, ...dict.categories[c.id] }));

  return (
    <>
      <section className="hero-mesh border-b border-hairline">
        <div className={`${ui.page} py-20 sm:py-28`}>
          <p className={ui.captionMono}>{dict.home.heroLabel}</p>
          <h1 className={`${ui.displayXl} mt-3 max-w-3xl`}>
            {dict.site.tagline}
          </h1>
          <p className={`${ui.bodyLg} mt-5 max-w-xl`}>{dict.site.trustLine}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={localePath(locale, "/encode/base64")} className={ui.btnPrimary}>
              {dict.home.tryBase64}
            </Link>
            <Link href={localePath(locale, "/encode")} className={ui.btnSecondary}>
              {dict.home.browseAll}
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {popular.map((tool) => (
              <Link
                key={tool.path}
                href={localePath(locale, tool.path)}
                className="rounded-full border border-hairline bg-canvas/80 px-3.5 py-1.5 text-sm tracking-[-0.28px] text-body backdrop-blur-sm transition hover:border-hairline-strong hover:text-ink"
              >
                {dict.tools[tool.slug].title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${ui.page} py-20`}>
        <p className={ui.captionMono}>{dict.home.categoriesLabel}</p>
        <h2 className={`${ui.displayLg} mt-2`}>{dict.home.categoriesTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={localePath(locale, cat.href)}
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
                {dict.home.openCategory}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
