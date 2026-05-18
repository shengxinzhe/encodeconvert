import Link from "next/link";
import type { ToolCategory } from "@/lib/site";
import { getToolsByCategory } from "@/lib/site";

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
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <li key={tool.path}>
            <Link
              href={tool.path}
              className="block rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <h2 className="font-medium text-zinc-900 dark:text-zinc-50">
                {tool.title}
              </h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {tool.shortDescription}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
