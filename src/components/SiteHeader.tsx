"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES, SITE } from "@/lib/site";
import { useTheme } from "./ThemeProvider";

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
            EC
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>

        <nav className="flex items-center gap-1 text-sm">
          {CATEGORIES.map((cat) => {
            const active =
              pathname === cat.href || pathname.startsWith(`${cat.href}/`);
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className={`rounded-md px-3 py-1.5 transition-colors ${
                  active
                    ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                }`}
              >
                {cat.id === "encode"
                  ? "Encode"
                  : cat.id === "time"
                    ? "Time"
                    : "Convert"}
              </Link>
            );
          })}
          <Link
            href="/blog"
            className={`rounded-md px-3 py-1.5 transition-colors ${
              pathname.startsWith("/blog")
                ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            }`}
          >
            Blog
          </Link>
          <button
            type="button"
            onClick={toggle}
            className="ml-1 rounded-md p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <SunIcon />
            ) : (
              <MoonIcon />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5.64 5.64l1.41 1.41m10.1 10.1l1.41 1.41M3 12h2m14 0h2M5.64 18.36l1.41-1.41m10.1-10.1l1.41-1.41" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}
