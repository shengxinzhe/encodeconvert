import { CategoryHub } from "@/components/CategoryHub";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/i18n/server";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const cat = dict.categories.encode;
  return buildMetadata({
    title: cat.title,
    description: cat.description,
    path: "/encode",
    locale,
  });
}

export default async function EncodeCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return (
    <CategoryHub category="encode" locale={locale} dict={dict} />
  );
}
