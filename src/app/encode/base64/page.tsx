import { ToolPage } from "@/components/ToolPage";
import { Base64Tool } from "@/components/tools/Base64Tool";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Base64 Encode and Decode",
  description:
    "Free online Base64 encoder and decoder. Convert text instantly in your browser — no upload, no signup.",
  path: "/encode/base64",
});

export default function Base64Page() {
  return (
    <ToolPage
      title="Base64 Encode and Decode"
      description="Convert plain text to Base64 and back. Useful for APIs, data URIs, and debugging. Everything runs locally in your browser."
      path="/encode/base64"
    >
      <Base64Tool />
    </ToolPage>
  );
}
