"use client";

import { useMemo, useState } from "react";
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  formatNumber,
} from "@/lib/convert";
import type { Dictionary } from "@/i18n/types";
import { ModeToggle } from "../ModeToggle";
import { ui } from "@/lib/ui";

type Mode = "cToF" | "fToC";

export function TemperatureTool({
  labels,
  ui: tui,
}: {
  labels: Dictionary["common"];
  ui: Dictionary["toolUi"]["temperature"];
}) {
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
    <div className="max-w-md space-y-5">
      <ModeToggle
        modes={[
          { id: "cToF", label: tui.cToF },
          { id: "fToC", label: tui.fToC },
        ]}
        value={mode}
        onChange={setMode}
      />
      <label>
        <span className={ui.label}>
          {mode === "cToF" ? tui.celsius : tui.fahrenheit}
        </span>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={ui.inputField}
        />
      </label>
      <output className={`${ui.outputField} text-lg`}>
        {result ? `${result} ${unit}` : "-"}
      </output>
    </div>
  );
}
