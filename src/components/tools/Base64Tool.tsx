"use client";

import { useMemo, useState } from "react";
import { base64Decode, base64Encode } from "@/lib/encode";
import type { Dictionary } from "@/i18n/types";
import { DualPaneTool } from "../DualPaneTool";
import { ModeToggle } from "../ModeToggle";

type Mode = "encode" | "decode";

export function Base64Tool({
  labels,
  ui,
  errors,
}: {
  labels: Dictionary["common"];
  ui: Dictionary["toolUi"]["base64"];
  errors: Dictionary["errors"];
}) {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("encode");

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: undefined };
    try {
      const out =
        mode === "encode" ? base64Encode(input) : base64Decode(input);
      return { output: out, error: undefined };
    } catch {
      return { output: "", error: errors.invalidBase64 };
    }
  }, [input, mode, errors.invalidBase64]);

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
          setMode((m) => (m === "encode" ? "decode" : "encode"));
        }
      }}
      inputPlaceholder={
        mode === "encode" ? ui.placeholderEncode : ui.placeholderDecode
      }
      extraControls={
        <ModeToggle
          modes={[
            { id: "encode", label: ui.encode },
            { id: "decode", label: ui.decode },
          ]}
          value={mode}
          onChange={setMode}
        />
      }
    />
  );
}
