"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES, SITE } from "@/lib/site";
import { ui } from "@/lib/ui";
import { useTheme } from "./ThemeProvider";

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/90 backdrop-blur-md">
      <div className={`${ui.page} flex h-16 items-center justify-between gap-4`}>
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-[-0.02em] text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-xs font-bold text-on-primary">
            EC
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>

        <nav className="flex items-center gap-0.5">
          {CATEGORIES.map((cat) => {
            const active =
              pathname === cat.href || pathname.startsWith(`${cat.href}/`);
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className={active ? ui.btnNavActive : ui.btnGhost}
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
            className={
              pathname.startsWith("/blog") ? ui.btnNavActive : ui.btnGhost
            }
          >
            Blog
          </Link>
          <button
            type="button"
            onClick={toggle}
            className={`${ui.btnGhost} ml-1 !w-8 !px-0`}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2m0 14v2M5.64 5.64l1.41 1.41m10.1 10.1l1.41 1.41M3 12h2m14 0h2M5.64 18.36l1.41-1.41m10.1-10.1l1.41-1.41"
      />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  );
}
