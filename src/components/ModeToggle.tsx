"use client";

import { ui } from "@/lib/ui";

export function ModeToggle<T extends string>({
  modes,
  value,
  onChange,
}: {
  modes: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-hairline bg-canvas-soft-2 p-1">
      {modes.map((m) => (
        <button
          key={m.id}
          type="button"
          onClick={() => onChange(m.id)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium tracking-[-0.28px] transition ${
            value === m.id
              ? "bg-primary text-on-primary shadow-sm"
              : "text-body hover:text-ink"
          }`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
