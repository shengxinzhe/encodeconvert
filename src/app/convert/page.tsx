import { CategoryHub } from "@/components/CategoryHub";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Unit Conversion Tools",
  description:
    "Convert length, weight, temperature, and digital storage units online for free.",
  path: "/convert",
});

export default function ConvertCategoryPage() {
  return (
    <CategoryHub
      category="convert"
      title="Unit Convert"
      description="Convert between common measurement and data size units with clear decimal and binary options."
    />
  );
}
