"use client";

import { useMemo, useState } from "react";
import { urlDecode, urlEncode } from "@/lib/encode";
import { DualPaneTool } from "../DualPaneTool";
import { ModeToggle } from "../ModeToggle";

type Mode = "encode" | "decode";

export function UrlTool() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("encode");

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: undefined };
    try {
      const out = mode === "encode" ? urlEncode(input) : urlDecode(input);
      return { output: out, error: undefined };
    } catch {
      return { output: "", error: "Invalid URL-encoded string" };
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
