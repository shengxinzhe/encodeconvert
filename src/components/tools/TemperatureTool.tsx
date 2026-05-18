"use client";

import { useMemo, useState } from "react";
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  formatNumber,
} from "@/lib/convert";
import { ModeToggle } from "../ModeToggle";

type Mode = "cToF" | "fToC";

export function TemperatureTool() {
  const [value, setValue] = useState("0");
  const [mode, setMode] = useState<Mode>("cToF");

  const result = useMemo(() => {
    const n = Number(value);
    if (!value || Number.isNaN(n)) return "";
    const out =
      mode === "cToF" ? celsiusToFahrenheit(n) : fahrenheitToCelsius(n);
    return formatNumber(out);
  }, [value, mode]);

  const unit = mode === "cToF" ? "°F" : "°C";

  return (
    <div className="max-w-md space-y-4">
      <ModeToggle
        modes={[
          { id: "cToF", label: "°C → °F" },
          { id: "fToC", label: "°F → °C" },
        ]}
        value={mode}
        onChange={setMode}
      />
      <label className="block">
        <span className="text-xs font-medium uppercase text-zinc-500">
          {mode === "cToF" ? "Celsius" : "Fahrenheit"}
        </span>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
      </label>
      <output className="block rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-3 font-mono text-lg dark:border-zinc-700 dark:bg-zinc-900/50">
        {result ? `${result} ${unit}` : "—"}
      </output>
    </div>
  );
}
