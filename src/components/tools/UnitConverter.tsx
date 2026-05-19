"use client";

import { useMemo, useState } from "react";
import { formatNumber } from "@/lib/convert";
import { ui } from "@/lib/ui";

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

  return (
    <div className="max-w-lg space-y-5">
      <div className="grid gap-3 sm:grid-cols-[1fr,auto,1fr] sm:items-end">
        <label>
          <span className={ui.label}>From</span>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value as U)}
            className={ui.select}
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
          className={ui.btnSecondary}
          aria-label="Swap units"
        >
          ⇄
        </button>
        <label>
          <span className={ui.label}>To</span>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value as U)}
            className={ui.select}
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {labels[u]}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span className={ui.label}>Value</span>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={ui.inputField}
        />
      </label>
      <label>
        <span className={ui.label}>Result</span>
        <output className={`${ui.outputField} text-lg`}>
          {result ? `${result} ${labels[to]}` : "-"}
        </output>
      </label>
    </div>
  );
}
