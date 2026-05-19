"use client";

import type { Dictionary } from "@/i18n/types";
import { convertLength, type LengthUnit } from "@/lib/convert";
import { UnitConverter } from "./UnitConverter";

const UNITS = ["m", "cm", "mm", "inch", "ft"] as const;
const UNIT_LABELS: Record<LengthUnit, string> = {
  m: "Meters (m)",
  cm: "Centimeters (cm)",
  mm: "Millimeters (mm)",
  inch: "Inches (in)",
  ft: "Feet (ft)",
};

export function LengthTool({ labels }: { labels: Dictionary["common"] }) {
  return (
    <UnitConverter
      labels={labels}
      units={UNITS}
      unitLabels={UNIT_LABELS}
      convert={convertLength}
      defaultFrom="cm"
      defaultTo="inch"
    />
  );
}
