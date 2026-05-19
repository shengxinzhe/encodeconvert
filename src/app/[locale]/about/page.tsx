import { getDictionary } from "@/i18n/get-dictionary";
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
    title: dict.pages.about.title,
    description: dict.meta.homeDescription,
    path: "/about",
    locale,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const p1 = dict.pages.about.p1
    .replace("{name}", SITE.name)
    .replace("{domain}", SITE.domain);
  const p2 = dict.pages.about.p2;

  return (
    <article className={`${ui.page} py-14`}>
      <p className={ui.captionMono}>{dict.footer.about}</p>
      <h1 className={`${ui.displayLg} mt-2`}>
        {dict.pages.about.title} {SITE.name}
      </h1>
      <div className={`${ui.bodyMd} mt-6 max-w-2xl space-y-4`}>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
    </article>
  );
}
