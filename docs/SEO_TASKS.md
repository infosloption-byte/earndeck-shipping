# Earndeck Shipping — SEO Implementation Tracker

Updated: 2026-10-21. Owner: website development team.
Theme guardrail: **preserve the approved navy / ivory / amber visual identity, navigation, animations and responsive layout.** SEO changes may expand editorial content but must reuse existing components.

Status legend: [x] committed to GitHub, [ ] pending; "validate" means not yet tested on production. A source-code change is not proof of indexing or ranking.

## Phase 1 — Technical SEO foundation (IN PROGRESS)
- [x] Explicit homepage canonical and search-intent metadata.
- [x] Enhanced organization / local professional business JSON-LD with stable entity ID, service topics, business contact and port areas (client verification required).
- [x] Link service structured data to the site's business identity.
- [x] Refine sitemap to intended public URLs and avoid fabricated modification dates.
- [x] Explicit robots policy for crawlable public pages; disallow API paths.
- [x] Document SEO tracking and launch checks.
- [x] Document 11 known legacy URLs and proposed equivalents in docs/LEGACY_URL_MAP.md (public discovery only).
- [ ] Complete **full** live legacy crawl and export indexed URLs from Google Search Console (partial discovery is not exhaustive).
- [x] Confirm known legacy service mappings already exist in next.config.ts; no speculative wildcard redirects.
- [ ] Implement remaining redirect mappings discovered from complete audit.
- [x] Add scripts/check-seo.mjs for local/server redirect, metadata, sitemap and response tests.
- [x] Improve redirect test to follow trailing-slash normalization and reject loops; configure Next.js image quality 80.
- [ ] Run automated checks against production after cutover and validate JSON-LD in Google testing tools.
- [ ] Verify business phone, physical address, name, office eligibility and port service areas before launch.
- [ ] Test mobile/desktop performance and accessibility; check metadata for every indexable page.
- [ ] Confirm Google Search Console and Bing Webmaster Tools, submit production sitemap after cutover.

## Phase 2 — Service content and AI discovery (IN PROGRESS)
- [x] Add source-derived preparation, deliverable examples and clear limitations for five priority service pages (client review required).
- [x] Add contextual links to /team, /ports and /certifications from service detail pages.
- [x] Add preparation, example deliverables and limitations to all 13 service pages (editorial only; professional review pending).
- [ ] Professionally review methodologies, evidence requirements and existing FAQs against real operating procedures.
- [ ] Review existing certificate and survey claims with named qualified staff; do not describe expired certificates as current.
- [ ] Create approved technical guides and case studies with genuine first-party expertise.
- [ ] Add contextual internal links between related services, ports, team credentials and survey guides.
- [ ] Validate descriptions against client's real service offering; avoid keyword stuffing or made-up claims.

## Phase 3 — Port-based local SEO pages (NOT STARTED)
- [ ] Design /ports/colombo, /ports/galle, /ports/hambantota and /ports/trincomalee with existing PageHero/components.
- [ ] Add distinct, verified port-operational content, useful questions and service links; avoid duplicate doorway pages.
- [ ] Add metadata, canonicals, breadcrumbs and sitemap entries after publishing each page.
- [ ] Confirm port attendance eligibility, service scope, addresses and any permissions with client.

## Phase 4 — Performance, testing and measurement (NOT STARTED)
- [ ] Browser QA at 320, 375, 425, 589, 768, 1024 and 1440px.
- [ ] Lighthouse and CrUX LCP/INP/CLS baseline, optimize real largest contentful images and avoid layout shifts.
- [ ] Verify no hydration errors or 404 static assets; check image alt text and document preview performance.
- [ ] Run accessibility keyboard, screen-reader and reduced-motion checks.
- [ ] Track qualified organic enquiries with privacy-respecting analytics and consent.
- [ ] Monitor Search Console queries, indexed pages, positions, CTR and organic conversions monthly.

## Off-code launch dependencies
- [ ] Access to historical Search Console data and current Google Business Profile.
- [ ] Claim/verify eligible business profile and ensure name/address/phone consistency.
- [ ] Obtain client-approved credentials, real maritime operation imagery and original case studies.
- [ ] Build legitimate maritime association/directory citations and earn editorial links.
- [ ] Collect genuine (not purchased/incentivized) customer reviews with permission.

## Developer acceptance commands
```powershell
npm install
npm run typecheck
npm run build
npm audit
npm run dev
```
Then inspect the HTML and Google tools in the deployment environment. Do **not** run dev and build concurrently with a shared output directory.

## Change log
- 2026-10-21: User confirmed successful build and SEO smoke tests. Expanded editorial preparation/reporting guidance to all 13 service pages; pending qualified surveyor review.
- 2026-10-21: User verified all local SEO smoke checks pass and production build succeeds (31/31 pages). Phase 2 initial service-content enhancements committed; client verification pending.
- 2026-10-21: Legacy audit pass — mapped known indexed service URLs, added SEO regression script; complete Search Console audit remains outstanding.
- 2026-10-21: Phase 1 starter commit — homepage canonical/metadata, local-business structured data, service entity references, sitemap and robots adjustments. Existing visual theme untouched.
