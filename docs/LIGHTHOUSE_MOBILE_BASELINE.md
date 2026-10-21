# Mobile Lighthouse baseline — 2026-10-21

Source: Six user-provided Lighthouse 13.4.1 JSON reports captured against localhost:5177 production preview. Scores are one-off simulated mobile lab runs, not Google field Core Web Vitals.

| Route | Performance | Accessibility | SEO | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|
| / | 74 | 94 | 100 | 4.5s | 350ms | 0.069 |
| /services/draft-survey | 83 | 96 | 100 | 2.7s | 490ms | 0 |
| /ports/colombo | 73 | 96 | 100 | 3.6s | 670ms | 0 |
| /team | 83 | 96 | 100 | 3.8s | 260ms | 0 |
| /certifications | 78 | 96 | 100 | 4.0s | 340ms | 0 |
| /contact | 87 | 96 | 92 | 3.4s | 220ms | 0 |

## Findings
- LCP exceeds 2.5s on all six pages; homepage 4.5s is worst.
- TBT highest on Colombo port page (670ms); JavaScript main-thread work and render-blocking CSS flagged.
- Image-delivery opportunities estimated by Lighthouse: home 163KiB, draft 93KiB, Colombo 107KiB, team 107KiB, certifications 329KiB, contact 107KiB.
- Shared accessibility findings: low-contrast amber text on light surfaces; brand link accessible label mismatch; certificate preview buttons have label/content mismatch. Home additionally has heading-order warning.
- Contact SEO score 92 due to failed meta-description audit even though source defines metadata: inspect rendered document and Lighthouse node details before making assumptions.
- CLS 0 except homepage 0.069, which still meets good threshold.

## Changes begun
- Adjust light-surface italic heading accent to existing dark amber token, retaining bright amber in dark heroes.
- Improve shared brand and certificate preview control labels.
- Follow up with prioritized LCP diagnostics, image sizing and certificate preview tuning without visual redesign.

## Next validation
1. Run mobile and desktop Lighthouse again three times per page after changes and compare medians.
2. Inspect rendered HTML for Contact description and specific Lighthouse failure.
3. Investigate largest contentful element and its load-delay breakdown for each route before changing loader or assets.
4. Check accessibility contrast visually, certificate buttons and home heading order.
5. Obtain real field Core Web Vitals after deployment; local Lighthouse metrics are only lab simulations.
