# Earndeck Shipping — website rebuild

Premium, responsive **Next.js / React / TypeScript** rebuild for marine surveying and maritime consultancy.

## Local development

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:5177. For production checks, run `npm run typecheck` and `npm run build`.

## Features

- Editorial design system (Fraunces / Manrope / IBM Plex Mono via `next/font`, navy + amber palette) in a readable `app/globals.css`
- Homepage: animated draft-scale hero, filterable service grid, "Survey finder", process timeline, Sri Lanka port map, frameworks band
- Services menu in the header, mobile menu, scroll-reveal animation (content stays visible without JS)
- Nine server-rendered service pages (scope, process, audience, FAQ, related services) with FAQPage JSON-LD
- About, contact (service prefill from `?service=`) and privacy pages
- All visuals are custom SVG: no stock photography or licensing needed
- Per-page SEO metadata, canonical URLs, sitemap and robots directives
- Organization and Service JSON-LD
- Initial legacy redirect examples (not a complete migration map)
- Reduced-motion styling and semantic page markup

## Important pre-launch requirements

- Confirm legal contact details, service scope, claims and port availability with the client
- Replace the placeholder logo mark with the client's approved brand identity; add real photography/team/case studies when supplied (the design works without them)
- Confirm the hero's "Independent" positioning and the ISM/ISPS/MLC wording with the client
- Replace the email-client enquiry workaround with a validated secure server-backed contact workflow
- Fully inventory original website URLs and implement/verify 301 redirects before replacing the production site
- Perform browser/responsive/a11y testing; check live Core Web Vitals and crawled source HTML
- Validate metadata, JSON-LD, sitemap and Search Console indexing
- Configure a privacy policy and appropriate analytics/consent before tracking visitors

**Status:** Phase-one source foundation. Not production validated; do not deploy without QA and client fact checks.
