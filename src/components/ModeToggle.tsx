"use client";

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
    <div className="inline-flex rounded-lg border border-zinc-200 p-0.5 dark:border-zinc-700">
      {modes.map((m) => (
        <button
          key={m.id}
          type="button"
          onClick={() => onChange(m.id)}
          className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
            value === m.id
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
