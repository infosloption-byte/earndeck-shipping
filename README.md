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

- Maritime-themed responsive homepage and mobile navigation
- Nine server-rendered individual marine service pages
- About and contact pages
- Per-page SEO metadata, canonical URLs, sitemap and robots directives
- Organization and Service JSON-LD
- Initial legacy redirect examples (not a complete migration map)
- Reduced-motion styling and semantic page markup

## Important pre-launch requirements

- Confirm legal contact details, service scope, claims and port availability with the client
- Replace proof-of-concept external Unsplash photography with properly licensed original imagery and approved brand identity
- Replace the email-client enquiry workaround with a validated secure server-backed contact workflow
- Fully inventory original website URLs and implement/verify 301 redirects before replacing the production site
- Perform browser/responsive/a11y testing; check live Core Web Vitals and crawled source HTML
- Validate metadata, JSON-LD, sitemap and Search Console indexing
- Configure a privacy policy and appropriate analytics/consent before tracking visitors

**Status:** Phase-one source foundation. Not production validated; do not deploy without QA and client fact checks.
