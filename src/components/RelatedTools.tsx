import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/path";
import type { Dictionary } from "@/i18n/types";
import { getRelatedTools } from "@/lib/site";
import { ui } from "@/lib/ui";

export function RelatedTools({
  currentPath,
  locale,
  dict,
}: {
  currentPath: string;
  locale: Locale;
  dict: Dictionary;
}) {
  const related = getRelatedTools(currentPath, 3);
  return (
    <section className="mt-12">
      <p className={ui.captionMono}>{dict.common.related}</p>
      <h2 className="mt-1 text-base font-medium text-ink">
        {dict.common.moreTools}
      </h2>
      <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {related.map((tool) => (
          <li key={tool.path}>
            <Link
              href={localePath(locale, tool.path)}
              className={`${ui.card} inline-flex px-4 py-2.5 text-sm font-medium text-body hover:text-link`}
            >
              {dict.tools[tool.slug].title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
