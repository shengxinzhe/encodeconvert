"use client";

import { useMemo, useState } from "react";
import { base64Decode, base64Encode } from "@/lib/encode";
import { DualPaneTool } from "../DualPaneTool";
import { ModeToggle } from "../ModeToggle";

type Mode = "encode" | "decode";

export function Base64Tool() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("encode");

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: undefined };
    try {
      const out =
        mode === "encode" ? base64Encode(input) : base64Decode(input);
      return { output: out, error: undefined };
    } catch {
      return { output: "", error: "Invalid Base64 input" };
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
          setMode((m) => (m === "encode" ? "decode" : "encode"));
        }
      }}
      inputPlaceholder={mode === "encode" ? "Text to encode…" : "Base64 to decode…"}
      extraControls={
        <ModeToggle
          modes={[
            { id: "encode", label: "Encode" },
            { id: "decode", label: "Decode" },
          ]}
          value={mode}
          onChange={setMode}
        />
      }
    />
  );
}
