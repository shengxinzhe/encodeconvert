import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/path";
import { resolveLocale } from "@/i18n/server";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { ui } from "@/lib/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return buildMetadata({
    title: dict.pages.privacy.title,
    description: dict.meta.homeDescription,
    path: "/privacy",
    locale,
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const p1 = dict.pages.privacy.p1
    .replace("{name}", SITE.name)
    .replace("{domain}", SITE.domain);

  return (
    <article className={`${ui.page} py-14`}>
      <p className={ui.captionMono}>{dict.footer.privacy}</p>
      <h1 className={`${ui.displayLg} mt-2`}>{dict.pages.privacy.title}</h1>
      <div className={`${ui.bodyMd} mt-6 max-w-2xl space-y-6`}>
        <p className={ui.caption}>{dict.pages.privacy.updated}</p>
        <p>{p1}</p>
        <section>
          <h2 className="text-base font-semibold text-ink">
            {dict.pages.privacy.cookiesTitle}
          </h2>
          <p className="mt-2">{dict.pages.privacy.cookiesBody}</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-ink">
            {dict.pages.privacy.contactTitle}
          </h2>
          <p className="mt-2">
            {dict.pages.privacy.contactBody}{" "}
            <Link
              href={localePath(locale, "/contact")}
              className="text-link hover:text-link-deep"
            >
              {dict.pages.privacy.contactLink}
            </Link>
            {locale === "zh" ? "。" : "."}
          </p>
        </section>
      </div>
    </article>
  );
}
