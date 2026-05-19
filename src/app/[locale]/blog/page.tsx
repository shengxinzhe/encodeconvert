import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/path";
import { resolveLocale } from "@/i18n/server";
import { buildMetadata } from "@/lib/metadata";
import { ui } from "@/lib/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return buildMetadata({
    title: dict.pages.blog.title,
    description: dict.meta.homeDescription,
    path: "/blog",
    locale,
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const blog = dict.pages.blog;

  return (
    <article className={`${ui.page} py-14`}>
      <p className={ui.captionMono}>{blog.title}</p>
      <h1 className={`${ui.displayLg} mt-2`}>{blog.heading}</h1>
      <p className={`${ui.bodyMd} mt-3 max-w-xl`}>{blog.intro}</p>
      <ul className="mt-10 space-y-3">
        {blog.posts.map((post) => (
          <li key={post.slug} className={ui.card}>
            <span className="font-medium text-ink">{post.title}</span>
            <span className={`${ui.caption} ml-2`}>
              — {dict.common.comingSoon}
            </span>
          </li>
        ))}
      </ul>
      <p className={`${ui.bodySm} mt-8`}>
        {blog.meanwhile}{" "}
        <Link
          href={localePath(locale, "/encode/base64")}
          className="text-link hover:text-link-deep"
        >
          Base64
        </Link>{" "}
        {locale === "zh" ? "或" : "or"}{" "}
        <Link
          href={localePath(locale, "/time/unix-timestamp")}
          className="text-link hover:text-link-deep"
        >
          {locale === "zh" ? "Unix 时间戳" : "Unix timestamp"}
        </Link>
        {locale === "zh" ? "工具。" : " tools."}
      </p>
    </article>
  );
}
