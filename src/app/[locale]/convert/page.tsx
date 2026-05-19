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
  const cat = dict.categories.convert;
  return buildMetadata({
    title: cat.title,
    description: cat.description,
    path: "/convert",
    locale,
  });
}

export default async function ConvertCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return (
    <CategoryHub category="convert" locale={locale} dict={dict} />
  );
}
