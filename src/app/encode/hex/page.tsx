import { ToolPage } from "@/components/ToolPage";
import { HexTool } from "@/components/tools/HexTool";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Hex to Text Converter",
  description:
    "Convert text to hexadecimal and hex bytes back to text. Free, browser-based hex encoder.",
  path: "/encode/hex",
});

export default function HexPage() {
  return (
    <ToolPage
      title="Hex ↔ Text Converter"
      description="Encode strings as space-separated hex bytes, or decode hex back to UTF-8 text."
      path="/encode/hex"
    >
      <HexTool />
    </ToolPage>
  );
}
