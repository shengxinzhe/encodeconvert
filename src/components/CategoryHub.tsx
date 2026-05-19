import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/path";
import type { Dictionary } from "@/i18n/types";
import type { ToolCategory } from "@/lib/site";
import { getToolsByCategory } from "@/lib/site";
import { ui } from "@/lib/ui";

export function CategoryHub({
  category,
  locale,
  dict,
}: {
  category: ToolCategory;
  locale: Locale;
  dict: Dictionary;
}) {
  const tools = getToolsByCategory(category);
  const cat = dict.categories[category];

  return (
    <div className={`${ui.page} py-12 sm:py-16`}>
      <header className="max-w-2xl">
        <p className={ui.captionMono}>{category}</p>
        <h1 className={`${ui.displayLg} mt-2`}>{cat.title}</h1>
        <p className={`${ui.bodyLg} mt-3`}>{cat.description}</p>
      </header>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => {
          const meta = dict.tools[tool.slug];
          return (
            <li key={tool.path}>
              <Link
                href={localePath(locale, tool.path)}
                className={`${ui.card} group block`}
              >
                <h2 className="text-base font-medium tracking-[-0.02em] text-ink group-hover:text-link">
                  {meta.title}
                </h2>
                <p className={`${ui.bodySm} mt-1.5`}>{meta.short}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
