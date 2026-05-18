import { ToolPage } from "@/components/ToolPage";
import { UrlTool } from "@/components/tools/UrlTool";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "URL Encode and Decode",
  description:
    "Encode or decode URL strings and query parameters online. Fast, free, and private.",
  path: "/encode/url",
});

export default function UrlPage() {
  return (
    <ToolPage
      title="URL Encode and Decode"
      description="Percent-encode special characters for URLs, or decode encoded strings back to readable text."
      path="/encode/url"
    >
      <UrlTool />
    </ToolPage>
  );
}
