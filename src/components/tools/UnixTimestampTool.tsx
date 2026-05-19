"use client";

import { useCallback, useMemo, useState } from "react";
import type { Dictionary } from "@/i18n/types";
import {
  dateToUnixMs,
  dateToUnixSeconds,
  defaultDatetimeLocalValue,
  nowUnixMs,
  nowUnixSeconds,
  type TimestampZone,
  unixMsToDate,
  unixSecondsToDate,
} from "@/lib/time";
import { ui } from "@/lib/ui";

type Mode = "toDate" | "toUnix";
type Unit = "seconds" | "milliseconds";

export function UnixTimestampTool({
  labels,
  ui: tui,
  errors,
}: {
  labels: Dictionary["common"];
  ui: Dictionary["toolUi"]["unix"];
  errors: Dictionary["errors"];
}) {
  const [mode, setMode] = useState<Mode>("toDate");
  const [unit, setUnit] = useState<Unit>("seconds");
  const [zone, setZone] = useState<TimestampZone>("local");
  const [unixInput, setUnixInput] = useState(String(nowUnixSeconds()));
  const [dateInput, setDateInput] = useState(defaultDatetimeLocalValue());

  const output = useMemo(() => {
    if (mode === "toDate") {
      const n = Number(unixInput);
      if (!unixInput || Number.isNaN(n))
        return { text: "", error: errors.invalidNumber };
      try {
        const text =
          unit === "seconds"
            ? unixSecondsToDate(n, zone)
            : unixMsToDate(n, zone);
        return { text, error: undefined };
      } catch {
        return { text: "", error: errors.invalidTimestamp };
      }
    }
    const ms =
      unit === "seconds"
        ? dateToUnixSeconds(dateInput, zone)
        : dateToUnixMs(dateInput, zone);
    if (Number.isNaN(ms)) return { text: "", error: errors.invalidDate };
    return { text: String(ms), error: undefined };
  }, [mode, unit, zone, unixInput, dateInput, errors]);

  const useNow = useCallback(() => {
    if (mode === "toDate") {
      setUnixInput(
        String(unit === "seconds" ? nowUnixSeconds() : nowUnixMs()),
      );
    } else {
      setDateInput(defaultDatetimeLocalValue());
    }
  }, [mode, unit]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        <ToggleGroup
          options={[
            { id: "toDate", label: tui.toDate },
            { id: "toUnix", label: tui.toUnix },
          ]}
          value={mode}
          onChange={setMode}
        />
        <ToggleGroup
          options={[
            { id: "seconds", label: tui.seconds },
            { id: "milliseconds", label: tui.milliseconds },
          ]}
          value={unit}
          onChange={setUnit}
        />
        <ToggleGroup
          options={[
            { id: "local", label: tui.local },
            { id: "utc", label: tui.utc },
          ]}
          value={zone}
          onChange={setZone}
        />
        <button type="button" onClick={useNow} className={ui.btnSecondary}>
          {labels.now}
        </button>
      </div>

      {mode === "toDate" ? (
        <label>
          <span className={ui.label}>{tui.unixLabel}</span>
          <input
            type="text"
            value={unixInput}
            onChange={(e) => setUnixInput(e.target.value)}
            className={ui.inputField}
          />
        </label>
      ) : (
        <label>
          <span className={ui.label}>{tui.dateLabel}</span>
          <input
            type="datetime-local"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className={ui.inputField}
          />
        </label>
      )}

      <label>
        <span className={ui.label}>{labels.result}</span>
        <output className={ui.outputField}>
          {(output.error ?? output.text) || "-"}
        </output>
      </label>
    </div>
  );
}

function ToggleGroup<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className={ui.toggleGroup}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onChange(o.id)}
          className={value === o.id ? ui.toggleActive : ui.toggleIdle}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
