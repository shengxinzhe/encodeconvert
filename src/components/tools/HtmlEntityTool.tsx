"use client";

import { useMemo, useState } from "react";
import { htmlEntityDecode, htmlEntityEncode } from "@/lib/encode";
import { DualPaneTool } from "../DualPaneTool";
import { ModeToggle } from "../ModeToggle";

type Mode = "encode" | "decode";

export function HtmlEntityTool() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("encode");

  const output = useMemo(() => {
    if (!input) return "";
    return mode === "encode"
      ? htmlEntityEncode(input)
      : htmlEntityDecode(input);
  }, [input, mode]);

  return (
    <DualPaneTool
      inputValue={input}
      onInputChange={setInput}
      output={output}
      onClear={() => setInput("")}
      onSwap={() => {
        if (output) {
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
