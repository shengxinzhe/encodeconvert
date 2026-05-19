export function AdPlaceholder({ label }: { label: string }) {
  return (
    <div
      id="ad-container"
      className="mx-auto mt-12 flex h-[90px] max-w-[728px] items-center justify-center rounded-lg border border-dashed border-hairline bg-canvas-soft-2 font-mono text-xs text-mute"
      aria-hidden
    >
      {label}
    </div>
  );
}
