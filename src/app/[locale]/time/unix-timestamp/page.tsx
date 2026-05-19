import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/i18n/server";
import type { ToolSlug } from "@/i18n/types";
import { buildMetadata } from "@/lib/metadata";
import { renderTool } from "@/lib/tool-slug-pages";

const SLUG = "unix-timestamp" as ToolSlug;
const PATH = "/time/unix-timestamp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const tool = dict.tools[SLUG];
  return buildMetadata({
    title: tool.title,
    description: tool.metaDescription,
    path: PATH,
    locale,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  return renderTool(SLUG, locale);
}