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

## Phase 3 — Port-based local SEO pages (IN PROGRESS)
- [x] Add /ports/colombo, /ports/galle, /ports/hambantota and /ports/trincomalee with existing PageHero/components.
- [x] Add differentiated port descriptions, enquiry planning advice, questions and relevant service links (client review pending).
- [x] Add port-specific metadata, canonicals, breadcrumb schema and sitemap entries.
- [x] Link shared PortsExplorer list to dedicated port pages across homepage, About and Ports.
- [x] Fix Arrange Attendance button spacing and add mobile layout safeguards (browser QA still required).
- [ ] Confirm port attendance eligibility, service scope, addresses and any permissions with client.

## Phase 4 — Performance, testing and measurement (IN PROGRESS)
- [x] Extend smoke tests to check all four port pages, canonical markup, sitemap inclusion and shared navigation links (user verified all passed on localhost:5177).
- [x] Add scripts/audit-site.mjs to crawl sitemap pages for titles, descriptions, single canonical, H1, HTML lang, internal links and image alt presence (user ran: 26 URLs, 0 errors; 105 alt warnings were caused by the audit treating `alt=""` as missing).
- [x] Correct audit parser to accept intentional decorative `alt=""`; user reran successfully: 26 sitemap URLs, 26 internal destinations, 0 errors, 0 warnings.
- [ ] Browser QA at 320, 375, 425, 589, 768, 1024 and 1440px.
- [ ] Lighthouse and CrUX LCP/INP/CLS baseline, optimize real largest contentful images and avoid layout shifts.
- [x] Add scripts/check-assets.mjs to audit response status for referenced local JS, CSS and image assets (execution pending).
- [x] Document reproducible viewport/keyboard/Lighthouse acceptance procedure in docs/QA_PHASE4.md (execution pending).
- [ ] Verify no hydration errors or 404 static assets in real browsers; check image preview performance.
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
- 2026-10-21: User confirmed 35/35 build and clean audit of 26 sitemap pages (0 errors, 0 warnings). Added asset-loading smoke test and browser QA procedure; field performance and visual QA still pending.
- 2026-10-21: User confirmed 35/35 build and all SEO smoke checks. Site audit: 26 sitemap URLs, 0 errors, 105 false-positive image-alt warnings. Corrected empty-alt handling; rerun pending.
- 2026-10-21: User verified all 35 pages build and all SEO smoke tests pass, including port links. Added site-wide SEO crawl audit; browser QA and Core Web Vitals remain pending.
- 2026-10-21: Confirmed user build 35/35. Connected shared port section to port pages, adjusted CTA margin/mobile CSS, and expanded SEO smoke tests; local browser QA pending.
- 2026-10-21: Phase 3 starter: four port landing pages and internal directory links, metadata and sitemap; client operational review pending.
- 2026-10-21: User confirmed successful build and SEO smoke tests. Expanded editorial preparation/reporting guidance to all 13 service pages; pending qualified surveyor review.
- 2026-10-21: User verified all local SEO smoke checks pass and production build succeeds (31/31 pages). Phase 2 initial service-content enhancements committed; client verification pending.
- 2026-10-21: Legacy audit pass — mapped known indexed service URLs, added SEO regression script; complete Search Console audit remains outstanding.
- 2026-10-21: Phase 1 starter commit — homepage canonical/metadata, local-business structured data, service entity references, sitemap and robots adjustments. Existing visual theme untouched.
