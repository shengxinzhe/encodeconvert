"use client";

import type { Dictionary } from "@/i18n/types";
import { convertWeight, type WeightUnit } from "@/lib/convert";
import { UnitConverter } from "./UnitConverter";

const UNITS = ["kg", "g", "lb", "oz"] as const;
const UNIT_LABELS: Record<WeightUnit, string> = {
  kg: "Kilograms (kg)",
  g: "Grams (g)",
  lb: "Pounds (lb)",
  oz: "Ounces (oz)",
};

export function WeightTool({ labels }: { labels: Dictionary["common"] }) {
  return (
    <UnitConverter
      labels={labels}
      units={UNITS}
      unitLabels={UNIT_LABELS}
      convert={convertWeight}
      defaultFrom="kg"
      defaultTo="lb"
    />
  );
}
