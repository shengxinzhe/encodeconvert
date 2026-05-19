export type ToolSlug =
  | "base64"
  | "url"
  | "html-entity"
  | "hex"
  | "unix-timestamp"
  | "timestamp-units"
  | "length"
  | "weight"
  | "temperature"
  | "data-size";

export type Dictionary = {
  site: {
    tagline: string;
    trustLine: string;
  };
  meta: {
    homeTitle: string;
    homeDescription: string;
  };
  nav: {
    encode: string;
    time: string;
    convert: string;
    blog: string;
    themeLight: string;
    themeDark: string;
    langEn: string;
    langZh: string;
  };
  home: {
    heroLabel: string;
    tryBase64: string;
    browseAll: string;
    categoriesLabel: string;
    categoriesTitle: string;
    openCategory: string;
  };
  footer: {
    about: string;
    privacy: string;
    contact: string;
    blog: string;
  };
  common: {
    copy: string;
    copied: string;
    clear: string;
    swap: string;
    input: string;
    output: string;
    result: string;
    value: string;
    from: string;
    to: string;
    now: string;
    related: string;
    moreTools: string;
    tool: string;
    adPlacement: string;
    encode: string;
    decode: string;
    comingSoon: string;
  };
  categories: {
    encode: { title: string; description: string };
    time: { title: string; description: string };
    convert: { title: string; description: string };
  };
  tools: Record<
    ToolSlug,
    {
      title: string;
      short: string;
      description: string;
      metaDescription: string;
    }
  >;
  toolUi: {
    base64: { encode: string; decode: string; placeholderEncode: string; placeholderDecode: string };
    url: { encode: string; decode: string };
    htmlEntity: { encode: string; decode: string };
    hex: { toHex: string; fromHex: string; placeholderText: string; placeholderHex: string };
    unix: {
      toDate: string;
      toUnix: string;
      seconds: string;
      milliseconds: string;
      local: string;
      utc: string;
      unixLabel: string;
      dateLabel: string;
    };
    timestampUnits: { toMs: string; toSec: string };
    temperature: { cToF: string; fToC: string; celsius: string; fahrenheit: string };
  };
  errors: {
    invalidBase64: string;
    invalidUrl: string;
    invalidHex: string;
    invalidTimestamp: string;
    invalidDate: string;
    invalidNumber: string;
  };
  pages: {
    about: { title: string; p1: string; p2: string };
    privacy: {
      title: string;
      updated: string;
      p1: string;
      cookiesTitle: string;
      cookiesBody: string;
      contactTitle: string;
      contactBody: string;
      contactLink: string;
    };
    contact: { title: string; heading: string; body: string };
    blog: {
      title: string;
      heading: string;
      intro: string;
      meanwhile: string;
      posts: { slug: string; title: string }[];
    };
  };
};
