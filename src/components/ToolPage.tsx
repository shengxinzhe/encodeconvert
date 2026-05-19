import { AdPlaceholder } from "./AdPlaceholder";
import { RelatedTools } from "./RelatedTools";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { ui } from "@/lib/ui";

export function ToolPage({
  title,
  description,
  path,
  locale,
  dict,
  children,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <article className={`${ui.page} py-10 sm:py-14`}>
      <header className="mb-8 max-w-2xl">
        <p className={ui.captionMono}>{dict.common.tool}</p>
        <h1 className={`${ui.displayLg} mt-2`}>{title}</h1>
        <p className={`${ui.bodyMd} mt-3`}>{description}</p>
      </header>
      <div className="tool-panel">{children}</div>
      <RelatedTools currentPath={path} locale={locale} dict={dict} />
      <AdPlaceholder label={dict.common.adPlacement} />
    </article>
  );
}
