"use client";

import { useCallback, useState } from "react";
import type { Dictionary } from "@/i18n/types";
import { ui } from "@/lib/ui";

export function DualPaneTool({
  labels,
  inputLabel,
  outputLabel,
  inputValue,
  onInputChange,
  output,
  error,
  onClear,
  onSwap,
  extraControls,
  inputPlaceholder,
  outputPlaceholder,
}: {
  labels: Dictionary["common"];
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

  return (
    <div className="space-y-5">
      {extraControls}
      <div className="grid gap-5 lg:grid-cols-2">
        <div>
          <label className={ui.label}>{inputLabel ?? labels.input}</label>
          <textarea
            className={`${ui.input} mt-1.5`}
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder={inputPlaceholder}
            rows={6}
          />
        </div>
        <div>
          <label className={ui.label}>{outputLabel ?? labels.output}</label>
          <textarea
            readOnly
            className={`${ui.input} mt-1.5 ${error ? "text-error" : ""}`}
            value={error ?? output}
            placeholder={outputPlaceholder ?? labels.result}
            rows={6}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={copy}
          disabled={!output || !!error}
          className={`${ui.btnPrimary} disabled:opacity-40`}
        >
          {copied ? labels.copied : labels.copy}
        </button>
        {onClear && (
          <button type="button" onClick={onClear} className={ui.btnSecondary}>
            {labels.clear}
          </button>
        )}
        {onSwap && (
          <button type="button" onClick={onSwap} className={ui.btnSecondary}>
            {labels.swap}
          </button>
        )}
      </div>
    </div>
  );
}
