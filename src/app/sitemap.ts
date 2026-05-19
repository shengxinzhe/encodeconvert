import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { localePath } from "@/i18n/path";
import { SITE, TOOL_ROUTES } from "@/lib/site";

const STATIC = [
  "",
  "/encode",
  "/time",
  "/convert",
  "/about",
  "/privacy",
  "/contact",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [...STATIC, ...TOOL_ROUTES.map((t) => t.path)];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of paths) {
      entries.push({
        url: `${SITE.url}${localePath(locale, path)}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
      });
    }
  }

  return entries;
}
