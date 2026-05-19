"use client";

import { useCallback, useMemo, useState } from "react";
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

export function UnixTimestampTool() {
  const [mode, setMode] = useState<Mode>("toDate");
  const [unit, setUnit] = useState<Unit>("seconds");
  const [zone, setZone] = useState<TimestampZone>("local");
  const [unixInput, setUnixInput] = useState(String(nowUnixSeconds()));
  const [dateInput, setDateInput] = useState(defaultDatetimeLocalValue());

  const output = useMemo(() => {
    if (mode === "toDate") {
      const n = Number(unixInput);
      if (!unixInput || Number.isNaN(n))
        return { text: "", error: "Enter a valid number" };
      try {
        const text =
          unit === "seconds"
            ? unixSecondsToDate(n, zone)
            : unixMsToDate(n, zone);
        return { text, error: undefined };
      } catch {
        return { text: "", error: "Invalid timestamp" };
      }
    }
    const ms =
      unit === "seconds"
        ? dateToUnixSeconds(dateInput, zone)
        : dateToUnixMs(dateInput, zone);
    if (Number.isNaN(ms)) return { text: "", error: "Invalid date" };
    return { text: String(ms), error: undefined };
  }, [mode, unit, zone, unixInput, dateInput]);

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
            { id: "toDate", label: "Unix → Date" },
            { id: "toUnix", label: "Date → Unix" },
          ]}
          value={mode}
          onChange={setMode}
        />
        <ToggleGroup
          options={[
            { id: "seconds", label: "Seconds" },
            { id: "milliseconds", label: "Milliseconds" },
          ]}
          value={unit}
          onChange={setUnit}
        />
        <ToggleGroup
          options={[
            { id: "local", label: "Local" },
            { id: "utc", label: "UTC" },
          ]}
          value={zone}
          onChange={setZone}
        />
        <button type="button" onClick={useNow} className={ui.btnSecondary}>
          Now
        </button>
      </div>

      {mode === "toDate" ? (
        <label>
          <span className={ui.label}>Unix timestamp</span>
          <input
            type="text"
            value={unixInput}
            onChange={(e) => setUnixInput(e.target.value)}
            className={ui.inputField}
          />
        </label>
      ) : (
        <label>
          <span className={ui.label}>Date & time</span>
          <input
            type="datetime-local"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className={ui.inputField}
          />
        </label>
      )}

      <label>
        <span className={ui.label}>Result</span>
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
