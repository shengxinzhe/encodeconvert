"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { stripLocalePrefix } from "@/i18n/path";
import { ui } from "@/lib/ui";

export function LocaleSwitcher({
  locale,
  labels,
}: {
  locale: Locale;
  labels: { en: string; zh: string };
}) {
  const pathname = usePathname();
  const base = stripLocalePrefix(pathname);

  return (
    <div className="ml-1 inline-flex rounded-full border border-hairline bg-canvas-soft-2 p-0.5 text-xs font-medium">
      <Link
        href={`/en${base === "/" ? "" : base}`}
        className={`rounded-full px-2 py-1 ${
          locale === "en" ? "bg-primary text-on-primary" : "text-body hover:text-ink"
        }`}
        onClick={() => document.cookie = "NEXT_LOCALE=en; path=/; max-age=31536000"}
      >
        {labels.en}
      </Link>
      <Link
        href={`/zh${base === "/" ? "" : base}`}
        className={`rounded-full px-2 py-1 ${
          locale === "zh" ? "bg-primary text-on-primary" : "text-body hover:text-ink"
        }`}
        onClick={() => document.cookie = "NEXT_LOCALE=zh; path=/; max-age=31536000"}
      >
        {labels.zh}
      </Link>
    </div>
  );
}
