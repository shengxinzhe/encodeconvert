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

1. Push this repo to GitHub.
2. Import in [Vercel](https://vercel.com).
3. Add custom domain `encodeconvert.tool` and configure DNS at your registrar.
4. Set production URL if needed: `NEXT_PUBLIC_SITE_URL=https://encodeconvert.tool`

## Project structure

- `src/lib/site.ts` — tool registry & site config
- `src/components/tools/` — client-side tool UIs
- `src/app/` — routes (one URL per tool for SEO)

All conversions run in the browser; nothing is uploaded.
