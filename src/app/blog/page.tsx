import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

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
    <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Tutorials and references for our tools. Articles marked “coming soon”
        will be published for SEO and AdSense review.
      </p>
      <ul className="mt-8 space-y-4">
        {PLANNED.map((post) => (
          <li
            key={post.slug}
            className="rounded-lg border border-zinc-200 px-4 py-3 dark:border-zinc-800"
          >
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              {post.title}
            </span>
            <span className="ml-2 text-xs text-zinc-400">— coming soon</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-zinc-500">
        Meanwhile, try our{" "}
        <Link href="/encode/base64" className="underline">
          Base64
        </Link>{" "}
        or{" "}
        <Link href="/time/unix-timestamp" className="underline">
          Unix timestamp
        </Link>{" "}
        tools.
      </p>
    </article>
  );
}
