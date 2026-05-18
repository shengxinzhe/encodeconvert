"use client";

import { useMemo, useState } from "react";
import { hexToText, textToHex } from "@/lib/encode";
import { DualPaneTool } from "../DualPaneTool";
import { ModeToggle } from "../ModeToggle";

type Mode = "toHex" | "fromHex";

export function HexTool() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("toHex");

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: undefined };
    try {
      const out = mode === "toHex" ? textToHex(input) : hexToText(input);
      return { output: out, error: undefined };
    } catch {
      return { output: "", error: "Invalid hex string" };
    }
  }, [input, mode]);

  return (
    <DualPaneTool
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
        mode === "toHex" ? "Plain text…" : "Hex bytes (e.g. 48 65 6c 6c 6f)…"
      }
      extraControls={
        <ModeToggle
          modes={[
            { id: "toHex", label: "Text → Hex" },
            { id: "fromHex", label: "Hex → Text" },
          ]}
          value={mode}
          onChange={setMode}
        />
      }
    />
  );
}
