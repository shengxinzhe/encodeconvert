"use client";

import { useMemo, useState } from "react";
import { formatNumber } from "@/lib/convert";
import type { Dictionary } from "@/i18n/types";
import { ui } from "@/lib/ui";

export function UnitConverter<U extends string>({
  labels,
  units,
  unitLabels,
  convert,
  defaultFrom,
  defaultTo,
  defaultValue = "1",
}: {
  labels: Dictionary["common"];
  units: readonly U[];
  unitLabels: Record<U, string>;
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
          <span className={ui.label}>{labels.from}</span>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value as U)}
            className={ui.select}
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {unitLabels[u]}
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
          aria-label={labels.swap}
        >
          ⇄
        </button>
        <label>
          <span className={ui.label}>{labels.to}</span>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value as U)}
            className={ui.select}
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {unitLabels[u]}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span className={ui.label}>{labels.value}</span>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={ui.inputField}
        />
      </label>
      <label>
        <span className={ui.label}>{labels.result}</span>
        <output className={`${ui.outputField} text-lg`}>
          {result ? `${result} ${unitLabels[to]}` : "-"}
        </output>
      </label>
    </div>
  );
}
