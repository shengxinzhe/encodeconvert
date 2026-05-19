import Link from "next/link";
import { getRelatedTools } from "@/lib/site";
import { ui } from "@/lib/ui";

export function RelatedTools({ currentPath }: { currentPath: string }) {
  const related = getRelatedTools(currentPath, 3);
  return (
    <section className="mt-12">
      <p className={ui.captionMono}>Related</p>
      <h2 className="mt-1 text-base font-medium text-ink">More tools</h2>
      <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {related.map((tool) => (
          <li key={tool.path}>
            <Link
              href={tool.path}
              className={`${ui.card} inline-flex px-4 py-2.5 text-sm font-medium text-body hover:text-link`}
            >
              {tool.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
