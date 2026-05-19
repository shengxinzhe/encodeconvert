import { ToolPage } from "@/components/ToolPage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { ToolSlug } from "@/i18n/types";
import { TOOL_ROUTES } from "@/lib/site";

export function ToolPageView({
  slug,
  locale,
  children,
}: {
  slug: ToolSlug;
  locale: Locale;
  children: React.ReactNode;
}) {
  const dict = getDictionary(locale);
  const route = TOOL_ROUTES.find((t) => t.slug === slug)!;
  const tool = dict.tools[slug];

  return (
    <ToolPage
      title={tool.title}
      description={tool.description}
      path={route.path}
      locale={locale}
      dict={dict}
    >
      {children}
    </ToolPage>
  );
}
