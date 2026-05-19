import Link from "next/link";
import { SITE } from "@/lib/site";
import { ui } from "@/lib/ui";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-hairline bg-canvas">
      <div className={`${ui.page} py-16`}>
        <p className={`${ui.bodySm} text-center`}>{SITE.trustLine}</p>
        <nav className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
          <Link href="/about" className={`${ui.bodySm} hover:text-link`}>
            About
          </Link>
          <Link href="/privacy" className={`${ui.bodySm} hover:text-link`}>
            Privacy
          </Link>
          <Link href="/contact" className={`${ui.bodySm} hover:text-link`}>
            Contact
          </Link>
          <Link href="/blog" className={`${ui.bodySm} hover:text-link`}>
            Blog
          </Link>
        </nav>
        <p className={`${ui.caption} mt-8 text-center`}>
          © {new Date().getFullYear()} {SITE.name} · {SITE.domain}
        </p>
      </div>
    </footer>
  );
}
