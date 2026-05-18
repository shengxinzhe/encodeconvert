import { CategoryHub } from "@/components/CategoryHub";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Unix Timestamp Tools",
  description:
    "Convert Unix timestamps to dates and convert between seconds and milliseconds.",
  path: "/time",
});

export default function TimeCategoryPage() {
  return (
    <CategoryHub
      category="time"
      title="Time & Timestamp"
      description="Work with Unix timestamps, milliseconds, and human-readable dates in local or UTC time."
    />
  );
}
