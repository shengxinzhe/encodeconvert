# Open Design Brief — Encode · Time · Convert Toolkit

> Paste this file (or sections) into Open Design when starting a new project.
> Site type: overseas utility tools, English-first, AdSense-ready later.

---

## Product

**Name (working):** ByteKit Tools (change if you pick another domain)

**One-liner:** Free browser-based encode/decode, Unix timestamp, and unit conversion tools. Nothing uploaded — all processing runs locally.

**Audience:** Developers, students, office users searching Google for quick converters.

**Locales:** English UI first; i18n later.

---

## Open Design settings (recommended)

| Setting | Choice | Why |
|---------|--------|-----|
| **Skill** | `web-prototype` | Multi-page marketing + tool UI in HTML |
| **Design system** | `Vercel` or `Linear` | Clean, dev-tool aesthetic; high trust |
| **Visual direction** | **Tech Utility** or **Modern Minimal** | Matches utility/tool sites; not playful |
| **Device** | Desktop (Browser Chrome frame for tool pages) | Primary traffic is desktop search |

---

## Pages to generate (in order)

### Phase 1 — Design system + shell

1. **Home** — Hero, 3 category cards (Encode / Time / Convert), 6 popular tool chips, trust line (“Runs in your browser”), footer (About, Privacy, Contact, Blog).
2. **Category hub ×3** — `/encode`, `/time`, `/convert` — grid of tool cards with one-line descriptions.
3. **Shared tool layout** — Template used by all tool pages:
   - Top nav (logo + categories + dark mode toggle)
   - Page title + short SEO paragraph (2 sentences)
   - Main: split pane — Input (textarea or fields) | Output (read-only + Copy)
   - Actions: Convert / Clear / Swap (where applicable)
   - “Related tools” row (3 links)
   - Ad placeholder: `div#ad-container` below related tools (empty, 728×90 style)
   - Footer

### Phase 2 — MVP tool pages (10)

**Encode**
- Base64 Encode/Decode
- URL Encode/Decode
- HTML Entity Encode/Decode
- Hex ↔ Text

**Time**
- Unix Timestamp Converter (seconds + ms, local + UTC toggle)
- Timestamp unit helper (seconds ↔ milliseconds)

**Convert**
- Length (cm, m, inch, ft)
- Weight (kg, lb, oz)
- Temperature (°C ↔ °F)
- Data size (KB, MB, GB, KiB/MiB note)

### Phase 3 — Content

- **Blog index** — simple list
- **About / Privacy / Contact** — minimal, trustworthy (for AdSense)

---

## UX requirements

- **Instant feedback:** show output on input change (no full page reload in prototype).
- **Copy button** on every output with “Copied!” toast.
- **Dark mode** via `class="dark"` on `<html>`; respect `prefers-color-scheme` default.
- **Mobile:** stack input/output vertically; min tap target 44px.
- **Accessibility:** visible focus rings, labels on inputs, sufficient contrast (WCAG AA).
- **No fake buttons:** no download malware patterns; no popups.

---

## Visual tokens (if customizing beyond Vercel/Linear)

- Background: neutral-50 / dark neutral-950
- Accent: single blue or violet (one primary only)
- Font: system-ui or Geist-like sans
- Radius: `rounded-lg` for cards, `rounded-md` for inputs
- Max content width: `max-w-5xl` for tool area

---

## Copy snippets (English)

**Trust banner:** `Runs entirely in your browser. Your data never leaves this device.`

**Home hero:** `Fast, private online tools for encoding, timestamps, and unit conversion.`

**Encode hub:** `Encode and decode text safely — Base64, URL, HTML entities, and hex.`

**Time hub:** `Convert Unix timestamps to human-readable dates and back.`

**Convert hub:** `Convert length, weight, temperature, and digital storage units.`

---

## SEO (for each tool page)

- H1 = tool name (e.g. “Base64 Encode and Decode”)
- Meta description ~155 chars with primary keyword
- One `<p class="text-muted">` explainer below H1

Example meta (Base64):
`Free online Base64 encoder and decoder. Convert text instantly in your browser — no upload, no signup.`

---

## Anti-patterns (do NOT)

- Purple gradient on white “AI slop” hero
- 12 different accent colors
- Stock photo heroes
- Cluttered sidebars on tool pages
- Modal ads over the convert button

---

## Export → production

After OD approves HTML artifacts:

1. Export ZIP / copy HTML per page.
2. Port layout to **Next.js App Router** or **Astro** + Tailwind.
3. Extract colors/fonts into `tailwind.config` tokens matching active DESIGN.md system.
4. Replace inline JS with shared `lib/` modules per tool.

---

## Session prompts (paste into Open Design chat)

### Session A — Shell + home

```
Using web-prototype skill and Vercel design system, Tech Utility direction.

Build a multi-page HTML prototype for "ByteKit Tools":
- Home with hero, 3 categories (Encode, Time, Convert), 6 tool quick links
- Shared nav/footer, dark mode toggle
- Trust line: browser-only processing, no upload
- Footer links: About, Privacy, Contact, Blog
- Clean developer-tool aesthetic, not generic AI landing page
Read OPEN_DESIGN_BRIEF.md in project for full spec.
```

### Session B — Tool template + Base64 + Unix

```
Continue ByteKit Tools. Use the same design system.

1) Reusable tool page template: title, description, input/output split, Copy/Clear, related tools, ad-container placeholder.
2) Base64 Encode/Decode page
3) Unix Timestamp Converter with Local/UTC toggle and ms support

Interactive in iframe; vanilla JS for conversion logic in prototype.
```

### Session C — Remaining MVP tools + hubs

```
Continue ByteKit Tools. Generate category hub pages and remaining tools:
URL encode, HTML entities, Hex↔Text, length/weight/temperature/data converters.
Use same template. Add category grids on /encode /time /convert hubs.
```

### Session D — Legal + blog shell

```
About, Privacy Policy, Contact pages + minimal Blog index.
Professional, AdSense-friendly. Privacy mentions local-only processing and optional analytics cookies placeholder.
```
