import type { Dictionary } from "../types";

const en: Dictionary = {
  site: {
    tagline: "Encode, time, and unit conversion — in your browser.",
    trustLine:
      "Runs entirely in your browser. Your data never leaves this device.",
  },
  meta: {
    homeTitle: "Encode, Time & Unit Tools",
    homeDescription:
      "Free online encoding, Unix timestamp, and unit conversion tools. Runs in your browser — private, fast, no upload.",
  },
  nav: {
    encode: "Encode",
    time: "Time",
    convert: "Convert",
    blog: "Blog",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",
    langEn: "EN",
    langZh: "中文",
  },
  home: {
    heroLabel: "TOOLS",
    tryBase64: "Try Base64 tool",
    browseAll: "Browse all tools",
    categoriesLabel: "Categories",
    categoriesTitle: "Everything you need in one place.",
    openCategory: "Open category →",
  },
  footer: {
    about: "About",
    privacy: "Privacy",
    contact: "Contact",
    blog: "Blog",
  },
  common: {
    copy: "Copy",
    copied: "Copied!",
    clear: "Clear",
    swap: "Swap",
    input: "Input",
    output: "Output",
    result: "Result",
    value: "Value",
    from: "From",
    to: "To",
    now: "Now",
    related: "Related",
    moreTools: "More tools",
    tool: "Tool",
    adPlacement: "ad placement",
    encode: "Encode",
    decode: "Decode",
    comingSoon: "coming soon",
  },
  categories: {
    encode: {
      title: "Encode & Decode",
      description: "Base64, URL, HTML entities, and hex conversions.",
    },
    time: {
      title: "Time & Timestamp",
      description: "Unix timestamps, milliseconds, and date conversion.",
    },
    convert: {
      title: "Unit Convert",
      description: "Length, weight, temperature, and data size units.",
    },
  },
  tools: {
    base64: {
      title: "Base64 Encode and Decode",
      short: "Convert text to Base64 and back instantly.",
      description:
        "Convert plain text to Base64 and back. Useful for APIs, data URIs, and debugging. Everything runs locally in your browser.",
      metaDescription:
        "Free online Base64 encoder and decoder. Convert text instantly in your browser — no upload, no signup.",
    },
    url: {
      title: "URL Encode and Decode",
      short: "Encode or decode URL query strings and paths.",
      description:
        "Percent-encode special characters for URLs, or decode encoded strings back to readable text.",
      metaDescription:
        "Encode or decode URL strings and query parameters online. Fast, free, and private.",
    },
    "html-entity": {
      title: "HTML Entity Encode and Decode",
      short: "Escape or unescape HTML special characters.",
      description:
        "Convert characters like <, >, and & to HTML entities, or decode entities back to plain text.",
      metaDescription:
        "Escape or unescape HTML entities online. Safe for preparing text for HTML documents.",
    },
    hex: {
      title: "Hex ↔ Text Converter",
      short: "Convert between hexadecimal and plain text.",
      description:
        "Encode strings as space-separated hex bytes, or decode hex back to UTF-8 text.",
      metaDescription:
        "Convert text to hexadecimal and hex bytes back to text. Free, browser-based hex encoder.",
    },
    "unix-timestamp": {
      title: "Unix Timestamp Converter",
      short: "Convert Unix time to date and back (seconds & ms).",
      description:
        "Convert between Unix epoch values and calendar dates. Toggle seconds or milliseconds and local or UTC display.",
      metaDescription:
        "Convert Unix timestamp to date and date to Unix time. Supports seconds, milliseconds, local and UTC.",
    },
    "timestamp-units": {
      title: "Seconds ↔ Milliseconds",
      short: "Convert between seconds and milliseconds.",
      description:
        "Quickly convert timestamp values between seconds and milliseconds for APIs and logs.",
      metaDescription:
        "Convert Unix timestamp units between seconds and milliseconds instantly.",
    },
    length: {
      title: "Length Converter",
      short: "cm, m, inch, foot, and more.",
      description: "Convert between meters, centimeters, millimeters, inches, and feet.",
      metaDescription:
        "Convert cm, meters, inches, feet, and more. Free online length conversion calculator.",
    },
    weight: {
      title: "Weight Converter",
      short: "kg, lb, oz, and grams.",
      description: "Convert between kilograms, grams, pounds, and ounces.",
      metaDescription:
        "Convert kg, grams, pounds, and ounces online. Free weight conversion tool.",
    },
    temperature: {
      title: "Temperature Converter",
      short: "Celsius and Fahrenheit.",
      description:
        "Convert between Celsius and Fahrenheit for cooking, weather, and science.",
      metaDescription:
        "Convert °C to °F and °F to °C instantly. Free temperature conversion calculator.",
    },
    "data-size": {
      title: "Data Size Converter",
      short: "KB, MB, GB and binary KiB, MiB, GiB.",
      description:
        "Convert between decimal (KB, MB, GB) and binary (KiB, MiB, GiB) storage units.",
      metaDescription:
        "Convert bytes, KB, MB, GB and binary KiB, MiB, GiB. Understand decimal vs binary sizes.",
    },
  },
  toolUi: {
    base64: {
      encode: "Encode",
      decode: "Decode",
      placeholderEncode: "Text to encode…",
      placeholderDecode: "Base64 to decode…",
    },
    url: { encode: "Encode", decode: "Decode" },
    htmlEntity: { encode: "Encode", decode: "Decode" },
    hex: {
      toHex: "Text → Hex",
      fromHex: "Hex → Text",
      placeholderText: "Plain text…",
      placeholderHex: "Hex bytes (e.g. 48 65 6c 6c 6f)…",
    },
    unix: {
      toDate: "Unix → Date",
      toUnix: "Date → Unix",
      seconds: "Seconds",
      milliseconds: "Milliseconds",
      local: "Local",
      utc: "UTC",
      unixLabel: "Unix timestamp",
      dateLabel: "Date & time",
    },
    timestampUnits: { toMs: "Seconds → ms", toSec: "ms → Seconds" },
    temperature: {
      cToF: "°C → °F",
      fToC: "°F → °C",
      celsius: "Celsius",
      fahrenheit: "Fahrenheit",
    },
  },
  errors: {
    invalidBase64: "Invalid Base64 input",
    invalidUrl: "Invalid URL-encoded string",
    invalidHex: "Invalid hex string",
    invalidTimestamp: "Invalid timestamp",
    invalidDate: "Invalid date",
    invalidNumber: "Enter a valid number",
  },
  pages: {
    about: {
      title: "About",
      p1: "{name} ({domain}) provides free online tools for encoding, Unix timestamps, and unit conversion. Every tool runs entirely in your browser — we do not upload your input to our servers.",
      p2: "Our goal is fast, privacy-friendly utilities for developers and everyday users, with clear pages and helpful guides over time.",
    },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: May 2026",
      p1: "{name} ({domain}) respects your privacy. Tool inputs are processed locally in your web browser and are not sent to our servers for conversion.",
      cookiesTitle: "Cookies & analytics",
      cookiesBody:
        "We may use cookies or similar technologies for essential site function, theme preference, or anonymous analytics. Third-party ad partners (if enabled) may use cookies per their own policies.",
      contactTitle: "Contact",
      contactBody: "Questions? See our",
      contactLink: "contact page",
    },
    contact: {
      title: "Contact",
      heading: "Get in touch",
      body: "For feedback, bug reports, or DMCA notices related to {domain}, email us at {email}. We aim to respond within a few business days.",
    },
    blog: {
      title: "Blog",
      heading: "Guides & references",
      intro:
        'Tutorials for our tools. Articles marked "coming soon" will be published for SEO and AdSense review.',
      meanwhile: "Meanwhile, try our",
      posts: [
        {
          slug: "unix-timestamp-explained",
          title: "Unix Timestamp Explained for Beginners",
        },
        {
          slug: "base64-vs-base64url",
          title: "Base64 vs Base64URL: What's the Difference?",
        },
        { slug: "mb-vs-mib", title: "MB vs MiB: Why File Sizes Look Wrong" },
      ],
    },
  },
};

export default en;
