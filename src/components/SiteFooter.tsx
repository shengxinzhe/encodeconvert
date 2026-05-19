import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/path";
import type { Dictionary } from "@/i18n/types";
import { SITE } from "@/lib/site";
import { ui } from "@/lib/ui";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="mt-auto border-t border-hairline bg-canvas">
      <div className={`${ui.page} py-16`}>
        <p className={`${ui.bodySm} text-center`}>{dict.site.trustLine}</p>
        <nav className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
          <Link
            href={localePath(locale, "/about")}
            className={`${ui.bodySm} hover:text-link`}
          >
            {dict.footer.about}
          </Link>
          <Link
            href={localePath(locale, "/privacy")}
            className={`${ui.bodySm} hover:text-link`}
          >
            {dict.footer.privacy}
          </Link>
          <Link
            href={localePath(locale, "/contact")}
            className={`${ui.bodySm} hover:text-link`}
          >
            {dict.footer.contact}
          </Link>
          <Link
            href={localePath(locale, "/blog")}
            className={`${ui.bodySm} hover:text-link`}
          >
            {dict.footer.blog}
          </Link>
        </nav>
        <p className={`${ui.caption} mt-8 text-center`}>
          © {new Date().getFullYear()} {SITE.name} · {SITE.domain}
        </p>
      </div>
    </footer>
  );
}
