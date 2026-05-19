import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/i18n/server";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { ui } from "@/lib/ui";

const EMAIL = "hello@encodeconvert.tool";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return buildMetadata({
    title: dict.pages.contact.title,
    description: dict.meta.homeDescription,
    path: "/contact",
    locale,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const text = dict.pages.contact.body
    .replace("{domain}", SITE.domain)
    .replace("{email}", EMAIL);
  const [before, after] = text.split(EMAIL);

  return (
    <article className={`${ui.page} py-14`}>
      <p className={ui.captionMono}>{dict.footer.contact}</p>
      <h1 className={`${ui.displayLg} mt-2`}>{dict.pages.contact.heading}</h1>
      <p className={`${ui.bodyMd} mt-4 max-w-xl`}>
        {before}
        <a
          href={`mailto:${EMAIL}`}
          className="font-medium text-link hover:text-link-deep"
        >
          {EMAIL}
        </a>
        {after}
      </p>
    </article>
  );
}
