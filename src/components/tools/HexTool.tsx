"use client";

import { useMemo, useState } from "react";
import { hexToText, textToHex } from "@/lib/encode";
import type { Dictionary } from "@/i18n/types";
import { DualPaneTool } from "../DualPaneTool";
import { ModeToggle } from "../ModeToggle";

type Mode = "toHex" | "fromHex";

export function HexTool({
  labels,
  ui,
  errors,
}: {
  labels: Dictionary["common"];
  ui: Dictionary["toolUi"]["hex"];
  errors: Dictionary["errors"];
}) {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("toHex");

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: undefined };
    try {
      const out = mode === "toHex" ? textToHex(input) : hexToText(input);
      return { output: out, error: undefined };
    } catch {
      return { output: "", error: errors.invalidHex };
    }
  }, [input, mode, errors.invalidHex]);

  return (
    <DualPaneTool
      labels={labels}
      inputValue={input}
      onInputChange={setInput}
      output={output}
      error={error}
      onClear={() => setInput("")}
      onSwap={() => {
        if (output && !error) {
          setInput(output);
          setMode((m) => (m === "toHex" ? "fromHex" : "toHex"));
        }
      }}
      inputPlaceholder={
        mode === "toHex" ? ui.placeholderText : ui.placeholderHex
      }
      extraControls={
        <ModeToggle
          modes={[
            { id: "toHex", label: ui.toHex },
            { id: "fromHex", label: ui.fromHex },
          ]}
          value={mode}
          onChange={setMode}
        />
      }
    />
  );
}
