"use client";

import { useMemo, useState } from "react";
import { formatNumber } from "@/lib/convert";
import { msToSeconds, secondsToMs } from "@/lib/time";
import { ModeToggle } from "../ModeToggle";

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
    <div className="max-w-md space-y-4">
      <ModeToggle
        modes={[
          { id: "toMs", label: "Seconds → ms" },
          { id: "toSec", label: "ms → Seconds" },
        ]}
        value={mode}
        onChange={setMode}
      />
      <label className="block">
        <span className="text-xs font-medium uppercase text-zinc-500">Value</span>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
      </label>
      <label className="block">
        <span className="text-xs font-medium uppercase text-zinc-500">Result</span>
        <output className="mt-1 block rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900/50">
          {output || "—"}
        </output>
      </label>
    </div>
  );
}
