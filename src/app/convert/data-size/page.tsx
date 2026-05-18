import { ToolPage } from "@/components/ToolPage";
import { DataSizeTool } from "@/components/tools/DataSizeTool";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Data Size Converter (KB, MB, GB, KiB)",
  description:
    "Convert bytes, KB, MB, GB and binary KiB, MiB, GiB. Understand decimal vs binary sizes.",
  path: "/convert/data-size",
});

export default function DataSizePage() {
  return (
    <ToolPage
      title="Data Size Converter"
      description="Convert between decimal (KB, MB, GB) and binary (KiB, MiB, GiB) storage units."
      path="/convert/data-size"
    >
      <DataSizeTool />
    </ToolPage>
  );
}
