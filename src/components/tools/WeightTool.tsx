"use client";

import { convertWeight, type WeightUnit } from "@/lib/convert";
import { UnitConverter } from "./UnitConverter";

const UNITS = ["kg", "g", "lb", "oz"] as const;
const LABELS: Record<WeightUnit, string> = {
  kg: "Kilograms (kg)",
  g: "Grams (g)",
  lb: "Pounds (lb)",
  oz: "Ounces (oz)",
};

export function WeightTool() {
  return (
    <UnitConverter
      units={UNITS}
      labels={LABELS}
      convert={convertWeight}
      defaultFrom="kg"
      defaultTo="lb"
    />
  );
}
