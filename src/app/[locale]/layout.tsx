import type { Metadata } from "next";
import { locales } from "@/i18n/config";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/i18n/server";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${dict.meta.homeTitle} | ${SITE.name}`,
      template: `%s | ${SITE.name}`,
    },
    description: dict.meta.homeDescription,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);

  return (
    <div
      className={`flex min-h-full flex-1 flex-col ${locale === "zh" ? "[font-family:var(--font-noto-sc),var(--font-geist-sans),system-ui,sans-serif]" : ""}`}
    >
      <SetHtmlLang locale={locale} />
      <ThemeProvider>
        <SiteHeader locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} dict={dict} />
      </ThemeProvider>
    </div>
  );
}
