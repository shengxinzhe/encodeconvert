"use client";

import {
  convertLength,
  type LengthUnit,
} from "@/lib/convert";
import { UnitConverter } from "./UnitConverter";

const UNITS = ["m", "cm", "mm", "inch", "ft"] as const;
const LABELS: Record<LengthUnit, string> = {
  m: "Meters (m)",
  cm: "Centimeters (cm)",
  mm: "Millimeters (mm)",
  inch: "Inches (in)",
  ft: "Feet (ft)",
};

export function LengthTool() {
  return (
    <UnitConverter
      units={UNITS}
      labels={LABELS}
      convert={convertLength}
      defaultFrom="cm"
      defaultTo="inch"
    />
  );
}
