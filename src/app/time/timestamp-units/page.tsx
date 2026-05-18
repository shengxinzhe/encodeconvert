import { ToolPage } from "@/components/ToolPage";
import { TimestampUnitsTool } from "@/components/tools/TimestampUnitsTool";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Seconds to Milliseconds Converter",
  description:
    "Convert Unix timestamp units between seconds and milliseconds instantly.",
  path: "/time/timestamp-units",
});

export default function TimestampUnitsPage() {
  return (
    <ToolPage
      title="Seconds ↔ Milliseconds"
      description="Quickly convert timestamp values between seconds and milliseconds for APIs and logs."
      path="/time/timestamp-units"
    >
      <TimestampUnitsTool />
    </ToolPage>
  );
}
