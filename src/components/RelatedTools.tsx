import Link from "next/link";
import { getRelatedTools } from "@/lib/site";

export function RelatedTools({ currentPath }: { currentPath: string }) {
  const related = getRelatedTools(currentPath, 3);
  return (
    <section className="mt-10">
      <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
        Related tools
      </h2>
      <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {related.map((tool) => (
          <li key={tool.path}>
            <Link
              href={tool.path}
              className="inline-flex rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              {tool.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
