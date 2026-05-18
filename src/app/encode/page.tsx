import { CategoryHub } from "@/components/CategoryHub";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Encode & Decode Tools",
  description:
    "Free online Base64, URL, HTML entity, and hex encoding tools. Private browser-side processing.",
  path: "/encode",
});

export default function EncodeCategoryPage() {
  return (
    <CategoryHub
      category="encode"
      title="Encode & Decode"
      description="Encode and decode text safely — Base64, URL, HTML entities, and hex. All processing runs in your browser."
    />
  );
}
