export type LengthUnit = "m" | "cm" | "mm" | "inch" | "ft";
export type WeightUnit = "kg" | "g" | "lb" | "oz";
export type DataUnit = "B" | "KB" | "MB" | "GB" | "KiB" | "MiB" | "GiB";

const LENGTH_TO_M: Record<LengthUnit, number> = {
  m: 1,
  cm: 0.01,
  mm: 0.001,
  inch: 0.0254,
  ft: 0.3048,
};

const WEIGHT_TO_KG: Record<WeightUnit, number> = {
  kg: 1,
  g: 0.001,
  lb: 0.45359237,
  oz: 0.028349523125,
};

const DATA_TO_BYTES: Record<DataUnit, number> = {
  B: 1,
  KB: 1000,
  MB: 1_000_000,
  GB: 1_000_000_000,
  KiB: 1024,
  MiB: 1024 ** 2,
  GiB: 1024 ** 3,
};

export function convertLength(
  value: number,
  from: LengthUnit,
  to: LengthUnit,
): number {
  const meters = value * LENGTH_TO_M[from];
  return meters / LENGTH_TO_M[to];
}

export function convertWeight(
  value: number,
  from: WeightUnit,
  to: WeightUnit,
): number {
  const kg = value * WEIGHT_TO_KG[from];
  return kg / WEIGHT_TO_KG[to];
}

export function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32;
}

export function fahrenheitToCelsius(f: number): number {
  return ((f - 32) * 5) / 9;
}

export function convertDataSize(
  value: number,
  from: DataUnit,
  to: DataUnit,
): number {
  const bytes = value * DATA_TO_BYTES[from];
  return bytes / DATA_TO_BYTES[to];
}

export function formatNumber(n: number, maxDecimals = 8): string {
  if (!Number.isFinite(n)) return "";
  const rounded = Number(n.toPrecision(12));
  return rounded
    .toFixed(maxDecimals)
    .replace(/\.?0+$/, "")
    .replace(/\.$/, "");
}
