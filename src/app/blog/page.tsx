import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ui } from "@/lib/ui";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Guides on Base64, Unix timestamps, unit conversion, and using browser-based tools.",
  path: "/blog",
});

const PLANNED = [
  {
    slug: "unix-timestamp-explained",
    title: "Unix Timestamp Explained for Beginners",
  },
  {
    slug: "base64-vs-base64url",
    title: "Base64 vs Base64URL: What's the Difference?",
  },
  {
    slug: "mb-vs-mib",
    title: "MB vs MiB: Why File Sizes Look Wrong",
  },
];

export default function BlogPage() {
  return (
    <article className={`${ui.page} py-14`}>
      <p className={ui.captionMono}>Blog</p>
      <h1 className={`${ui.displayLg} mt-2`}>Guides & references</h1>
      <p className={`${ui.bodyMd} mt-3 max-w-xl`}>
        Tutorials for our tools. Articles marked &quot;coming soon&quot; will be
        published for SEO and AdSense review.
      </p>
      <ul className="mt-10 space-y-3">
        {PLANNED.map((post) => (
          <li key={post.slug} className={ui.card}>
            <span className="font-medium text-ink">{post.title}</span>
            <span className={`${ui.caption} ml-2`}>— coming soon</span>
          </li>
        ))}
      </ul>
      <p className={`${ui.bodySm} mt-8`}>
        Meanwhile, try our{" "}
        <Link href="/encode/base64" className="text-link hover:text-link-deep">
          Base64
        </Link>{" "}
        or{" "}
        <Link
          href="/time/unix-timestamp"
          className="text-link hover:text-link-deep"
        >
          Unix timestamp
        </Link>{" "}
        tools.
      </p>
    </article>
  );
}
