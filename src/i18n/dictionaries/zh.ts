import type { Dictionary } from "../types";

const zh: Dictionary = {
  site: {
    tagline: "编解码、时间戳与单位换算 — 在浏览器中完成。",
    trustLine: "完全在浏览器本地运行，数据不会上传到服务器。",
  },
  meta: {
    homeTitle: "编解码 · 时间戳 · 单位换算工具",
    homeDescription:
      "免费在线编解码、Unix 时间戳与单位换算工具。浏览器本地处理，快速、私密、无需上传。",
  },
  nav: {
    encode: "编解码",
    time: "时间",
    convert: "换算",
    blog: "博客",
    themeLight: "切换到浅色模式",
    themeDark: "切换到深色模式",
    langEn: "EN",
    langZh: "中文",
  },
  home: {
    heroLabel: "在线工具",
    tryBase64: "试用 Base64 工具",
    browseAll: "浏览全部工具",
    categoriesLabel: "分类",
    categoriesTitle: "常用工具，一站集齐。",
    openCategory: "进入分类 →",
  },
  footer: {
    about: "关于",
    privacy: "隐私政策",
    contact: "联系我们",
    blog: "博客",
  },
  common: {
    copy: "复制",
    copied: "已复制！",
    clear: "清空",
    swap: "交换",
    input: "输入",
    output: "输出",
    result: "结果",
    value: "数值",
    from: "从",
    to: "到",
    now: "当前时间",
    related: "相关工具",
    moreTools: "更多工具",
    tool: "工具",
    adPlacement: "广告位",
    encode: "编码",
    decode: "解码",
    comingSoon: "即将发布",
  },
  categories: {
    encode: {
      title: "编解码",
      description: "Base64、URL、HTML 实体与十六进制转换。",
    },
    time: {
      title: "时间与时间戳",
      description: "Unix 时间戳、毫秒与日期互转。",
    },
    convert: {
      title: "单位换算",
      description: "长度、重量、温度与数据存储单位。",
    },
  },
  tools: {
    base64: {
      title: "Base64 编解码",
      short: "文本与 Base64 即时互转。",
      description:
        "在纯文本与 Base64 之间转换，适用于 API、Data URI 与调试。全部在浏览器本地完成。",
      metaDescription:
        "免费在线 Base64 编码与解码，浏览器本地处理，无需上传与注册。",
    },
    url: {
      title: "URL 编解码",
      short: "编码或解码 URL 查询串与路径。",
      description: "对 URL 特殊字符进行百分号编码，或将编码字符串还原为可读文本。",
      metaDescription: "在线 URL 编码与解码，快速、免费、保护隐私。",
    },
    "html-entity": {
      title: "HTML 实体编解码",
      short: "转义或还原 HTML 特殊字符。",
      description:
        "将 <、>、& 等字符转为 HTML 实体，或将实体还原为普通文本。",
      metaDescription: "在线 HTML 实体编码与解码，便于编写 HTML 内容。",
    },
    hex: {
      title: "十六进制 ↔ 文本",
      short: "十六进制与纯文本互转。",
      description: "将字符串编码为空格分隔的十六进制字节，或从十六进制解码为 UTF-8 文本。",
      metaDescription: "文本与十六进制互转，免费浏览器端工具。",
    },
    "unix-timestamp": {
      title: "Unix 时间戳转换",
      short: "Unix 时间与日期互转（秒 / 毫秒）。",
      description:
        "在 Unix 纪元值与日历日期之间转换，支持秒或毫秒、本地或 UTC 显示。",
      metaDescription:
        "Unix 时间戳与日期互转，支持秒、毫秒、本地时间与 UTC。",
    },
    "timestamp-units": {
      title: "秒 ↔ 毫秒",
      short: "秒与毫秒之间换算。",
      description: "在秒与毫秒之间快速换算，便于 API 与日志处理。",
      metaDescription: "Unix 时间戳单位：秒与毫秒即时换算。",
    },
    length: {
      title: "长度换算",
      short: "厘米、米、英寸、英尺等。",
      description: "在米、厘米、毫米、英寸、英尺之间换算。",
      metaDescription: "在线长度单位换算：厘米、米、英寸、英尺等。",
    },
    weight: {
      title: "重量换算",
      short: "千克、克、磅、盎司。",
      description: "在千克、克、磅、盎司之间换算。",
      metaDescription: "在线重量单位换算：kg、克、磅、盎司。",
    },
    temperature: {
      title: "温度换算",
      short: "摄氏与华氏。",
      description: "摄氏与华氏温度互转，适用于烹饪、天气等场景。",
      metaDescription: "摄氏 ℃ 与华氏 ℉ 在线换算。",
    },
    "data-size": {
      title: "数据大小换算",
      short: "KB、MB、GB 与 KiB、MiB、GiB。",
      description: "在十进制（KB、MB、GB）与二进制（KiB、MiB、GiB）存储单位间换算。",
      metaDescription: "字节、KB、MB、GB 与 KiB、MiB、GiB 换算。",
    },
  },
  toolUi: {
    base64: {
      encode: "编码",
      decode: "解码",
      placeholderEncode: "待编码文本…",
      placeholderDecode: "待解码 Base64…",
    },
    url: { encode: "编码", decode: "解码" },
    htmlEntity: { encode: "编码", decode: "解码" },
    hex: {
      toHex: "文本 → 十六进制",
      fromHex: "十六进制 → 文本",
      placeholderText: "纯文本…",
      placeholderHex: "十六进制（如 48 65 6c 6c 6f）…",
    },
    unix: {
      toDate: "Unix → 日期",
      toUnix: "日期 → Unix",
      seconds: "秒",
      milliseconds: "毫秒",
      local: "本地",
      utc: "UTC",
      unixLabel: "Unix 时间戳",
      dateLabel: "日期时间",
    },
    timestampUnits: { toMs: "秒 → 毫秒", toSec: "毫秒 → 秒" },
    temperature: {
      cToF: "℃ → ℉",
      fToC: "℉ → ℃",
      celsius: "摄氏",
      fahrenheit: "华氏",
    },
  },
  errors: {
    invalidBase64: "无效的 Base64 输入",
    invalidUrl: "无效的 URL 编码字符串",
    invalidHex: "无效的十六进制字符串",
    invalidTimestamp: "无效的时间戳",
    invalidDate: "无效的日期",
    invalidNumber: "请输入有效数字",
  },
  pages: {
    about: {
      title: "关于我们",
      p1: "{name}（{domain}）提供免费在线编解码、Unix 时间戳与单位换算工具。所有处理均在浏览器本地完成，不会将输入上传到服务器。",
      p2: "我们致力于为开发者与普通用户提供快速、注重隐私的工具，并持续完善教程与页面内容。",
    },
    privacy: {
      title: "隐私政策",
      updated: "最后更新：2026 年 5 月",
      p1: "{name}（{domain}）重视您的隐私。工具输入在浏览器本地处理，不会发送至我们的服务器进行转换。",
      cookiesTitle: "Cookie 与分析",
      cookiesBody:
        "我们可能使用 Cookie 或类似技术以实现基本功能、主题偏好或匿名分析。若启用第三方广告，其 Cookie 政策以对方为准。",
      contactTitle: "联系",
      contactBody: "如有疑问，请访问",
      contactLink: "联系页面",
    },
    contact: {
      title: "联系我们",
      heading: "与我们取得联系",
      body: "有关 {domain} 的反馈、问题报告或 DMCA 通知，请发送邮件至 {email}。我们通常会在几个工作日内回复。",
    },
    blog: {
      title: "博客",
      heading: "教程与参考",
      intro:
        "工具使用教程与参考文章。标注「即将发布」的文章将陆续上线。",
      meanwhile: "可先试用",
      posts: [
        { slug: "unix-timestamp-explained", title: "Unix 时间戳入门说明" },
        { slug: "base64-vs-base64url", title: "Base64 与 Base64URL 有何区别？" },
        { slug: "mb-vs-mib", title: "MB 与 MiB：文件大小为何对不上？" },
      ],
    },
  },
};

export default zh;
