"use client";

import { useCallback, useState } from "react";

export function DualPaneTool({
  inputLabel = "Input",
  outputLabel = "Output",
  inputValue,
  onInputChange,
  output,
  error,
  onClear,
  onSwap,
  extraControls,
  inputPlaceholder,
  outputPlaceholder = "Result appears here...",
}: {
  inputLabel?: string;
  outputLabel?: string;
  inputValue: string;
  onInputChange: (v: string) => void;
  output: string;
  error?: string;
  onClear?: () => void;
  onSwap?: () => void;
  extraControls?: React.ReactNode;
  inputPlaceholder?: string;
  outputPlaceholder?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  const inputClass =
    "w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 font-mono text-sm text-zinc-900 outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 min-h-[140px] resize-y";

  return (
    <div className="space-y-4">
      {extraControls}
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500">
            {inputLabel}
          </label>
          <textarea
            className={inputClass}
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder={inputPlaceholder}
            rows={6}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500">
            {outputLabel}
          </label>
          <textarea
            readOnly
            className={inputClass}
            value={error ?? output}
            placeholder={outputPlaceholder}
            rows={6}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={copy}
          disabled={!output || !!error}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 dark:bg-zinc-100 dark:text-zinc-900"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
          >
            Clear
          </button>
        )}
        {onSwap && (
          <button
            type="button"
            onClick={onSwap}
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
          >
            Swap
          </button>
        )}
      </div>
    </div>
  );
}
