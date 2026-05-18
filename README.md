# EncodeConvert

Free online tools for **encoding**, **Unix timestamps**, and **unit conversion**.

- **Domain:** [encodeconvert.tool](https://encodeconvert.tool)
- **Stack:** Next.js 16 · App Router · Tailwind CSS 4

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Vercel)

### 方式 A：GitHub 导入（推荐）

1. 打开 [vercel.com/new](https://vercel.com/new) 并登录（国内网络可能需要代理）。
2. **Import Git Repository** → 选择 `shengxinzhe/encodeconvert`。
3. 保持默认：Framework **Next.js**，Root Directory `./`，Build `npm run build`。
4. 点击 **Deploy**，约 1–2 分钟完成。
5. **Settings → Domains** 添加 `encodeconvert.tool`，按提示在域名注册商配置 DNS。

### 方式 B：Vercel CLI

```bash
npm i -g vercel
vercel login
cd encodeconvert
vercel --prod
```

### 环境变量（可选）

| 变量 | 值 |
|------|-----|
| `NEXT_PUBLIC_SITE_URL` | `https://encodeconvert.tool` |

绑定自定义域名后，在 Vercel 项目 **Settings → Environment Variables** 中设置上述变量（Production）。

## Project structure

- `src/lib/site.ts` — tool registry & site config
- `src/components/tools/` — client-side tool UIs
- `src/app/` — routes (one URL per tool for SEO)

All conversions run in the browser; nothing is uploaded.
