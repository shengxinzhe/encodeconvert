"use client";

import type { Dictionary } from "@/i18n/types";
import { convertDataSize, type DataUnit } from "@/lib/convert";
import { UnitConverter } from "./UnitConverter";

const UNITS = ["B", "KB", "MB", "GB", "KiB", "MiB", "GiB"] as const;
const UNIT_LABELS: Record<DataUnit, string> = {
  B: "Bytes",
  KB: "Kilobytes (KB, decimal)",
  MB: "Megabytes (MB, decimal)",
  GB: "Gigabytes (GB, decimal)",
  KiB: "Kibibytes (KiB)",
  MiB: "Mebibytes (MiB)",
  GiB: "Gibibytes (GiB)",
};

export function DataSizeTool({ labels }: { labels: Dictionary["common"] }) {
  return (
    <UnitConverter
      labels={labels}
      units={UNITS}
      unitLabels={UNIT_LABELS}
      convert={convertDataSize}
      defaultFrom="MB"
      defaultTo="MiB"
    />
  );
}
