"use client";

import { useMemo, useState } from "react";
import { formatNumber } from "@/lib/convert";

export function UnitConverter<U extends string>({
  units,
  labels,
  convert,
  defaultFrom,
  defaultTo,
  defaultValue = "1",
}: {
  units: readonly U[];
  labels: Record<U, string>;
  convert: (value: number, from: U, to: U) => number;
  defaultFrom: U;
  defaultTo: U;
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const [from, setFrom] = useState<U>(defaultFrom);
  const [to, setTo] = useState<U>(defaultTo);

  const result = useMemo(() => {
    const n = Number(value);
    if (!value || Number.isNaN(n)) return "";
    return formatNumber(convert(n, from, to));
  }, [value, from, to, convert]);

  const selectClass =
    "rounded-lg border border-zinc-200 bg-white px-2 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900";

  return (
    <div className="max-w-lg space-y-4">
      <div className="grid gap-3 sm:grid-cols-[1fr,auto,1fr] sm:items-end">
        <label className="block">
          <span className="text-xs font-medium uppercase text-zinc-500">From</span>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value as U)}
            className={`mt-1 w-full ${selectClass}`}
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {labels[u]}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          onClick={() => {
            setFrom(to);
            setTo(from);
            if (result) setValue(result);
          }}
          className="rounded-lg border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700"
          aria-label="Swap units"
        >
          ⇄
        </button>
        <label className="block">
          <span className="text-xs font-medium uppercase text-zinc-500">To</span>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value as U)}
            className={`mt-1 w-full ${selectClass}`}
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {labels[u]}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-xs font-medium uppercase text-zinc-500">Value</span>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
      </label>
      <label className="block">
        <span className="text-xs font-medium uppercase text-zinc-500">Result</span>
        <output className="mt-1 block rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-3 font-mono text-lg dark:border-zinc-700 dark:bg-zinc-900/50">
          {result ? `${result} ${labels[to]}` : "—"}
        </output>
      </label>
    </div>
  );
}
