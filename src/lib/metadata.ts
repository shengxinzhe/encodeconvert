import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/path";
import { SITE } from "./site";

export function buildMetadata({
  title,
  description,
  path,
  locale,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
}): Metadata {
  const localized = localePath(locale, path);
  const url = `${SITE.url}${localized}`;
  const languages: Record<string, string> = {};
  for (const loc of ["en", "zh"] as const) {
    languages[loc] = `${SITE.url}${localePath(loc, path)}`;
  }

  return {
    title: `${title} | ${SITE.name}`,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
    },
    twitter: {
      card: "summary",
      title: `${title} | ${SITE.name}`,
      description,
    },
  };
}
