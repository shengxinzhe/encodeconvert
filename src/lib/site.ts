import type { ToolSlug } from "@/i18n/types";

export const SITE = {
  name: "EncodeConvert",
  domain: "encodeconvert.tool",
  url: "https://encodeconvert.tool",
} as const;

export type ToolCategory = "encode" | "time" | "convert";

export type ToolRoute = {
  slug: ToolSlug;
  category: ToolCategory;
  path: string;
};

export const CATEGORY_HREFS: Record<ToolCategory, string> = {
  encode: "/encode",
  time: "/time",
  convert: "/convert",
};

export const TOOL_ROUTES: ToolRoute[] = [
  { slug: "base64", category: "encode", path: "/encode/base64" },
  { slug: "url", category: "encode", path: "/encode/url" },
  { slug: "html-entity", category: "encode", path: "/encode/html-entity" },
  { slug: "hex", category: "encode", path: "/encode/hex" },
  { slug: "unix-timestamp", category: "time", path: "/time/unix-timestamp" },
  { slug: "timestamp-units", category: "time", path: "/time/timestamp-units" },
  { slug: "length", category: "convert", path: "/convert/length" },
  { slug: "weight", category: "convert", path: "/convert/weight" },
  { slug: "temperature", category: "convert", path: "/convert/temperature" },
  { slug: "data-size", category: "convert", path: "/convert/data-size" },
];

export function getToolsByCategory(category: ToolCategory): ToolRoute[] {
  return TOOL_ROUTES.filter((t) => t.category === category);
}

export function getToolByPath(path: string): ToolRoute | undefined {
  return TOOL_ROUTES.find((t) => t.path === path);
}

export function getRelatedTools(path: string, limit = 3): ToolRoute[] {
  const current = getToolByPath(path);
  if (!current) return TOOL_ROUTES.slice(0, limit);
  const same = TOOL_ROUTES.filter(
    (t) => t.category === current.category && t.path !== path,
  );
  const rest = TOOL_ROUTES.filter((t) => t.category !== current.category);
  return [...same, ...rest].slice(0, limit);
}
