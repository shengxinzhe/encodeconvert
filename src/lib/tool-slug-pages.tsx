import { Base64Tool } from "@/components/tools/Base64Tool";
import { DataSizeTool } from "@/components/tools/DataSizeTool";
import { HexTool } from "@/components/tools/HexTool";
import { HtmlEntityTool } from "@/components/tools/HtmlEntityTool";
import { LengthTool } from "@/components/tools/LengthTool";
import { TemperatureTool } from "@/components/tools/TemperatureTool";
import { TimestampUnitsTool } from "@/components/tools/TimestampUnitsTool";
import { UnixTimestampTool } from "@/components/tools/UnixTimestampTool";
import { UrlTool } from "@/components/tools/UrlTool";
import { WeightTool } from "@/components/tools/WeightTool";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import type { ToolSlug } from "@/i18n/types";
import { ToolPageView } from "@/lib/tool-page-view";

export function renderTool(slug: ToolSlug, locale: Locale) {
  const dict = getDictionary(locale);
  const common = dict.common;
  const errors = dict.errors;

  switch (slug) {
    case "base64":
      return (
        <ToolPageView slug={slug} locale={locale}>
          <Base64Tool labels={common} ui={dict.toolUi.base64} errors={errors} />
        </ToolPageView>
      );
    case "url":
      return (
        <ToolPageView slug={slug} locale={locale}>
          <UrlTool labels={common} ui={dict.toolUi.url} errors={errors} />
        </ToolPageView>
      );
    case "html-entity":
      return (
        <ToolPageView slug={slug} locale={locale}>
          <HtmlEntityTool labels={common} ui={dict.toolUi.htmlEntity} />
        </ToolPageView>
      );
    case "hex":
      return (
        <ToolPageView slug={slug} locale={locale}>
          <HexTool labels={common} ui={dict.toolUi.hex} errors={errors} />
        </ToolPageView>
      );
    case "unix-timestamp":
      return (
        <ToolPageView slug={slug} locale={locale}>
          <UnixTimestampTool
            labels={common}
            ui={dict.toolUi.unix}
            errors={errors}
          />
        </ToolPageView>
      );
    case "timestamp-units":
      return (
        <ToolPageView slug={slug} locale={locale}>
          <TimestampUnitsTool labels={common} ui={dict.toolUi.timestampUnits} />
        </ToolPageView>
      );
    case "length":
      return (
        <ToolPageView slug={slug} locale={locale}>
          <LengthTool labels={common} />
        </ToolPageView>
      );
    case "weight":
      return (
        <ToolPageView slug={slug} locale={locale}>
          <WeightTool labels={common} />
        </ToolPageView>
      );
    case "temperature":
      return (
        <ToolPageView slug={slug} locale={locale}>
          <TemperatureTool labels={common} ui={dict.toolUi.temperature} />
        </ToolPageView>
      );
    case "data-size":
      return (
        <ToolPageView slug={slug} locale={locale}>
          <DataSizeTool labels={common} />
        </ToolPageView>
      );
  }
}
