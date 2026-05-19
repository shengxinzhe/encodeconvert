import Link from "next/link";
import type { ToolCategory } from "@/lib/site";
import { getToolsByCategory } from "@/lib/site";
import { ui } from "@/lib/ui";

export function CategoryHub({
  category,
  title,
  description,
}: {
  category: ToolCategory;
  title: string;
  description: string;
}) {
  const tools = getToolsByCategory(category);

  return (
    <div className={`${ui.page} py-12 sm:py-16`}>
      <header className="max-w-2xl">
        <p className={ui.captionMono}>{category}</p>
        <h1 className={`${ui.displayLg} mt-2`}>{title}</h1>
        <p className={`${ui.bodyLg} mt-3`}>{description}</p>
      </header>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <li key={tool.path}>
            <Link href={tool.path} className={`${ui.card} group block`}>
              <h2 className="text-base font-medium tracking-[-0.02em] text-ink group-hover:text-link">
                {tool.title}
              </h2>
              <p className={`${ui.bodySm} mt-1.5`}>{tool.shortDescription}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
