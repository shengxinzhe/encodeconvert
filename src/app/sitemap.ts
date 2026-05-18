import type { MetadataRoute } from "next";
import { SITE, TOOLS } from "@/lib/site";

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
  const paths = [...STATIC, ...TOOLS.map((t) => t.path)];

  return paths.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
