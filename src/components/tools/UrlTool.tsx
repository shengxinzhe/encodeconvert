"use client";

import { useMemo, useState } from "react";
import { urlDecode, urlEncode } from "@/lib/encode";
import type { Dictionary } from "@/i18n/types";
import { DualPaneTool } from "../DualPaneTool";
import { ModeToggle } from "../ModeToggle";

type Mode = "encode" | "decode";

export function UrlTool({
  labels,
  ui,
  errors,
}: {
  labels: Dictionary["common"];
  ui: Dictionary["toolUi"]["url"];
  errors: Dictionary["errors"];
}) {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("encode");

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: undefined };
    try {
      const out = mode === "encode" ? urlEncode(input) : urlDecode(input);
      return { output: out, error: undefined };
    } catch {
      return { output: "", error: errors.invalidUrl };
    }
  }, [input, mode, errors.invalidUrl]);

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
