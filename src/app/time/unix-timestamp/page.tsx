import { ToolPage } from "@/components/ToolPage";
import { UnixTimestampTool } from "@/components/tools/UnixTimestampTool";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Unix Timestamp Converter",
  description:
    "Convert Unix timestamp to date and date to Unix time. Supports seconds, milliseconds, local and UTC.",
  path: "/time/unix-timestamp",
});

export default function UnixTimestampPage() {
  return (
    <ToolPage
      title="Unix Timestamp Converter"
      description="Convert between Unix epoch values and calendar dates. Toggle seconds or milliseconds and local or UTC display."
      path="/time/unix-timestamp"
    >
      <UnixTimestampTool />
    </ToolPage>
  );
}
