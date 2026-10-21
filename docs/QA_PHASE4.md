# Earndeck — Phase 4 responsive, accessibility and performance QA

This is a **manual browser QA worksheet**, not a claim that the device and Lighthouse tests have been run. Preserve the approved navy, ivory and amber theme.

## Preparation
1. Run `npm run typecheck` and `npm run build` (both already passed on 2026-10-21).
2. Start an isolated preview using `npm run start` after stopping `npm run dev`. Run `npm run seo:audit -- http://localhost:5177` and `npm run qa:assets -- http://localhost:5177` in another terminal.
3. Open Chrome/Edge DevTools > Device Toolbar; test **320, 375, 425, 589, 768, 1024 and 1440 px**. At each size review homepage, Services, a service detail, Port Coverage, each port page, About, Team, Certifications, Careers and Contact.
4. Check horizontal overflow via console: `document.documentElement.scrollWidth > window.innerWidth`. False is the desired result.
5. Confirm no overlapping cards, clipped headlines, overflowing buttons, inaccessible nav elements, or text hidden under the header. Watch the featured homepage Services grid especially.

## Interactive functionality
- Open the mobile navigation: Services starts collapsed; group accordions open/close by click/tap and Escape closes the menu.
- Port list links on Home/About/Ports navigate to the correct new pages; verify keyboard focus.
- On /ports/colombo etc., Arrange Attendance CTA has spacing and navigates to Contact.
- Team portraits render. Certification thumbnail previews open and close via X and Escape, with no horizontal overflow.
- Forms: validate required fields and errors, but **do not submit real messages/CVs when testing production** without consent and a safe test destination.
- Confirm reduced-motion settings disable purely decorative animation where appropriate; confirm keyboard tab order and visible focus.

## Lighthouse / Core Web Vitals
Use Chrome DevTools Lighthouse on a **production build** at both mobile and desktop. Save dated reports for /, /services, /ports/colombo, /team, /certifications and /contact.
- LCP good threshold: <= 2.5s; INP <= 200ms; CLS <= 0.1 at the 75th percentile of real-user observations.
- Lighthouse lab measurements are diagnostics; do not present them as CrUX field data.
- Record waterfall bottlenecks, image optimization, font loading, hydration errors, layout shifts and keyboard accessibility.
- Re-run after changes and compare with saved baselines.

## Search migration / launch dependencies
- Run SEO audits against public production after cutover, not just localhost. Confirm no accidental noindex.
- Submit the sitemap and inspect key page indexing in Google Search Console and Bing Webmaster Tools.
- Export legacy indexed URLs and confirm complete redirect equivalence before replacing the old live site.
- Verify the business office address, available services, port permissions and staff credentials with Earndeck.
- Obtain approval to publish any credential scans; verify sensitive identification has been redacted.

## Results to record
Date, browser/device, viewport width, route, issue description, screenshot, Lighthouse score and reproduction steps. Mark `docs/SEO_TASKS.md` as verified only after actual runs.
