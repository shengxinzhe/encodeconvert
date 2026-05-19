"use client";

import { useMemo, useState } from "react";
import { formatNumber } from "@/lib/convert";
import { msToSeconds, secondsToMs } from "@/lib/time";
import { ModeToggle } from "../ModeToggle";
import { ui } from "@/lib/ui";

type Mode = "toMs" | "toSec";

export function TimestampUnitsTool() {
  const [input, setInput] = useState("1");
  const [mode, setMode] = useState<Mode>("toMs");

  const output = useMemo(() => {
    const n = Number(input);
    if (!input || Number.isNaN(n)) return "";
    const result = mode === "toMs" ? secondsToMs(n) : msToSeconds(n);
    return formatNumber(result);
  }, [input, mode]);

  return (
    <div className="max-w-md space-y-5">
      <ModeToggle
        modes={[
          { id: "toMs", label: "Seconds → ms" },
          { id: "toSec", label: "ms → Seconds" },
        ]}
        value={mode}
        onChange={setMode}
      />
      <label>
        <span className={ui.label}>Value</span>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={ui.inputField}
        />
      </label>
      <label>
        <span className={ui.label}>Result</span>
        <output className={ui.outputField}>{output || "-"}</output>
      </label>
    </div>
  );
}
