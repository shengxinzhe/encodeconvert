import { ToolPage } from "@/components/ToolPage";
import { LengthTool } from "@/components/tools/LengthTool";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Length Unit Converter",
  description:
    "Convert cm, meters, inches, feet, and more. Free online length conversion calculator.",
  path: "/convert/length",
});

export default function LengthPage() {
  return (
    <ToolPage
      title="Length Converter"
      description="Convert between meters, centimeters, millimeters, inches, and feet."
      path="/convert/length"
    >
      <LengthTool />
    </ToolPage>
  );
}
