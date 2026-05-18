import { AdPlaceholder } from "./AdPlaceholder";
import { RelatedTools } from "./RelatedTools";

export function ToolPage({
  title,
  description,
  path,
  children,
}: {
  title: string;
  description: string;
  path: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </header>
      {children}
      <RelatedTools currentPath={path} />
      <AdPlaceholder />
    </article>
  );
}
