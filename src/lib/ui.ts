/** Tailwind class bundles aligned with design/design-md/vercel/DESIGN.md */

export const ui = {
  page: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
  displayXl:
    "text-[2.5rem] font-semibold leading-[3rem] tracking-[-2.4px] text-ink sm:text-5xl sm:leading-[3rem]",
  displayLg:
    "text-2xl font-semibold leading-8 tracking-[-0.04em] text-ink sm:text-[2rem] sm:leading-10 sm:tracking-[-1.28px]",
  bodyLg: "text-lg leading-7 text-body",
  bodyMd: "text-base leading-6 text-body",
  bodySm: "text-sm leading-5 tracking-[-0.28px] text-body",
  caption: "text-xs leading-4 text-mute",
  captionMono:
    "font-mono text-xs leading-4 uppercase tracking-normal text-mute",
  card: "card-surface rounded-lg p-6 transition-[box-shadow,border-color] duration-200 hover:border-hairline-strong",
  cardLg: "card-surface rounded-xl p-8 transition-[box-shadow,border-color] duration-200 hover:border-hairline-strong",
  btnPrimary:
    "inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-on-primary transition hover:opacity-90",
  btnSecondary:
    "inline-flex h-10 items-center justify-center rounded-full border border-hairline bg-canvas px-5 text-sm font-medium text-ink transition hover:bg-canvas-soft-2",
  btnGhost:
    "inline-flex h-8 items-center justify-center rounded-full px-3 text-sm font-medium text-body transition hover:bg-canvas-soft-2 hover:text-ink",
  btnNavActive:
    "inline-flex h-8 items-center justify-center rounded-full bg-canvas-soft-2 px-3 text-sm font-medium text-ink",
  input:
    "w-full rounded-md border border-hairline bg-canvas px-3 py-2.5 font-mono text-[13px] leading-5 text-ink outline-none transition placeholder:text-mute focus:border-hairline-strong focus:ring-2 focus:ring-link/20 min-h-[140px] resize-y",
  inputField:
    "mt-1.5 w-full rounded-md border border-hairline bg-canvas px-3 py-2 font-mono text-[13px] text-ink outline-none transition focus:border-hairline-strong focus:ring-2 focus:ring-link/20",
  outputField:
    "mt-1.5 block w-full rounded-md border border-hairline bg-canvas-soft-2 px-3 py-3 font-mono text-sm text-ink",
  select:
    "mt-1.5 w-full rounded-md border border-hairline bg-canvas px-2 py-2 text-sm text-ink outline-none focus:border-hairline-strong focus:ring-2 focus:ring-link/20",
  label: "block font-mono text-xs leading-4 text-mute",
  toggleGroup:
    "inline-flex rounded-full border border-hairline bg-canvas-soft-2 p-1",
  toggleActive: "rounded-full bg-primary px-3 py-1 text-xs font-medium text-on-primary",
  toggleIdle:
    "rounded-full px-3 py-1 text-xs font-medium text-body hover:text-ink",
} as const;
