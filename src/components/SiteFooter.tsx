import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          {SITE.trustLine}
        </p>
        <nav className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            About
          </Link>
          <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Privacy
          </Link>
          <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Blog
          </Link>
        </nav>
        <p className="mt-6 text-center text-xs text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} {SITE.name} · {SITE.domain}
        </p>
      </div>
    </footer>
  );
}
