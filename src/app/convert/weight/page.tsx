import { ToolPage } from "@/components/ToolPage";
import { WeightTool } from "@/components/tools/WeightTool";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Weight Unit Converter",
  description: "Convert kg, grams, pounds, and ounces online. Free weight conversion tool.",
  path: "/convert/weight",
});

export default function WeightPage() {
  return (
    <ToolPage
      title="Weight Converter"
      description="Convert between kilograms, grams, pounds, and ounces."
      path="/convert/weight"
    >
      <WeightTool />
    </ToolPage>
  );
}
