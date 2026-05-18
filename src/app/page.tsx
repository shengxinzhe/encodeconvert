import Link from "next/link";
import { CATEGORIES, SITE, TOOLS } from "@/lib/site";

export default function HomePage() {
  const popular = TOOLS.slice(0, 6);

  return (
    <>
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-medium text-zinc-500">{SITE.domain}</p>
          <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {SITE.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {SITE.trustLine}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {popular.map((tool) => (
              <Link
                key={tool.path}
                href={tool.path}
                className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-800 transition hover:border-zinc-300 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600"
              >
                {tool.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {cat.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {cat.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Browse tools
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
