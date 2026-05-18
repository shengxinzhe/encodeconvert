import { ToolPage } from "@/components/ToolPage";
import { TemperatureTool } from "@/components/tools/TemperatureTool";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Celsius to Fahrenheit Converter",
  description:
    "Convert °C to °F and °F to °C instantly. Free temperature conversion calculator.",
  path: "/convert/temperature",
});

export default function TemperaturePage() {
  return (
    <ToolPage
      title="Temperature Converter"
      description="Convert between Celsius and Fahrenheit for cooking, weather, and science."
      path="/convert/temperature"
    >
      <TemperatureTool />
    </ToolPage>
  );
}
