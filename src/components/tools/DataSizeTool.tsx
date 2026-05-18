"use client";

import { convertDataSize, type DataUnit } from "@/lib/convert";
import { UnitConverter } from "./UnitConverter";

const UNITS = ["B", "KB", "MB", "GB", "KiB", "MiB", "GiB"] as const;
const LABELS: Record<DataUnit, string> = {
  B: "Bytes",
  KB: "Kilobytes (KB, decimal)",
  MB: "Megabytes (MB, decimal)",
  GB: "Gigabytes (GB, decimal)",
  KiB: "Kibibytes (KiB)",
  MiB: "Mebibytes (MiB)",
  GiB: "Gibibytes (GiB)",
};

export function DataSizeTool() {
  return (
    <UnitConverter
      units={UNITS}
      labels={LABELS}
      convert={convertDataSize}
      defaultFrom="MB"
      defaultTo="MiB"
    />
  );
}
