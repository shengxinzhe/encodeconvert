import type { Metadata } from "next";
import { SITE } from "./site";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title: `${title} | ${SITE.name}`,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${title} | ${SITE.name}`,
      description,
    },
  };
}
