"use client";

import { useMemo, useState } from "react";
import { htmlEntityDecode, htmlEntityEncode } from "@/lib/encode";
import type { Dictionary } from "@/i18n/types";
import { DualPaneTool } from "../DualPaneTool";
import { ModeToggle } from "../ModeToggle";

type Mode = "encode" | "decode";

export function HtmlEntityTool({
  labels,
  ui,
}: {
  labels: Dictionary["common"];
  ui: Dictionary["toolUi"]["htmlEntity"];
}) {
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
      labels={labels}
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
