import { ToolPage } from "@/components/ToolPage";
import { HtmlEntityTool } from "@/components/tools/HtmlEntityTool";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "HTML Entity Encode and Decode",
  description:
    "Escape or unescape HTML entities online. Safe for preparing text for HTML documents.",
  path: "/encode/html-entity",
});

export default function HtmlEntityPage() {
  return (
    <ToolPage
      title="HTML Entity Encode and Decode"
      description="Convert characters like <, >, and & to HTML entities, or decode entities back to plain text."
      path="/encode/html-entity"
    >
      <HtmlEntityTool />
    </ToolPage>
  );
}
