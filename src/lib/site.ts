export const SITE = {
  name: "EncodeConvert",
  domain: "encodeconvert.tool",
  url: "https://encodeconvert.tool",
  tagline: "Encode, time, and unit conversion — in your browser.",
  trustLine: "Runs entirely in your browser. Your data never leaves this device.",
} as const;

export type ToolCategory = "encode" | "time" | "convert";

export type ToolDef = {
  slug: string;
  title: string;
  shortDescription: string;
  category: ToolCategory;
  path: string;
};

export const CATEGORIES: {
  id: ToolCategory;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    id: "encode",
    title: "Encode & Decode",
    description: "Base64, URL, HTML entities, and hex conversions.",
    href: "/encode",
  },
  {
    id: "time",
    title: "Time & Timestamp",
    description: "Unix timestamps, milliseconds, and date conversion.",
    href: "/time",
  },
  {
    id: "convert",
    title: "Unit Convert",
    description: "Length, weight, temperature, and data size units.",
    href: "/convert",
  },
];

export const TOOLS: ToolDef[] = [
  {
    slug: "base64",
    title: "Base64 Encode & Decode",
    shortDescription: "Convert text to Base64 and back instantly.",
    category: "encode",
    path: "/encode/base64",
  },
  {
    slug: "url",
    title: "URL Encode & Decode",
    shortDescription: "Encode or decode URL query strings and paths.",
    category: "encode",
    path: "/encode/url",
  },
  {
    slug: "html-entity",
    title: "HTML Entity Encode & Decode",
    shortDescription: "Escape or unescape HTML special characters.",
    category: "encode",
    path: "/encode/html-entity",
  },
  {
    slug: "hex",
    title: "Hex ↔ Text",
    shortDescription: "Convert between hexadecimal and plain text.",
    category: "encode",
    path: "/encode/hex",
  },
  {
    slug: "unix-timestamp",
    title: "Unix Timestamp Converter",
    shortDescription: "Convert Unix time to date and back (seconds & ms).",
    category: "time",
    path: "/time/unix-timestamp",
  },
  {
    slug: "timestamp-units",
    title: "Seconds ↔ Milliseconds",
    shortDescription: "Convert between seconds and milliseconds.",
    category: "time",
    path: "/time/timestamp-units",
  },
  {
    slug: "length",
    title: "Length Converter",
    shortDescription: "cm, m, inch, foot, and more.",
    category: "convert",
    path: "/convert/length",
  },
  {
    slug: "weight",
    title: "Weight Converter",
    shortDescription: "kg, lb, oz, and grams.",
    category: "convert",
    path: "/convert/weight",
  },
  {
    slug: "temperature",
    title: "Temperature Converter",
    shortDescription: "Celsius and Fahrenheit.",
    category: "convert",
    path: "/convert/temperature",
  },
  {
    slug: "data-size",
    title: "Data Size Converter",
    shortDescription: "KB, MB, GB and binary KiB, MiB, GiB.",
    category: "convert",
    path: "/convert/data-size",
  },
];

export function getToolsByCategory(category: ToolCategory): ToolDef[] {
  return TOOLS.filter((t) => t.category === category);
}

export function getToolByPath(path: string): ToolDef | undefined {
  return TOOLS.find((t) => t.path === path);
}

export function getRelatedTools(path: string, limit = 3): ToolDef[] {
  const current = getToolByPath(path);
  if (!current) return TOOLS.slice(0, limit);
  const same = TOOLS.filter(
    (t) => t.category === current.category && t.path !== path,
  );
  const rest = TOOLS.filter((t) => t.category !== current.category);
  return [...same, ...rest].slice(0, limit);
}
