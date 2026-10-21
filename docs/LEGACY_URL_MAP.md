# Earndeck legacy URL migration inventory

Audited 2026-10-21 using publicly indexed legacy service pages. **Not exhaustive**: Google Search Console page export and full legacy crawl are still required before DNS cutover.

| Legacy path | New destination | Evidence | Status |
|---|---|---|---|
| /services/draft/ | /services/draft-survey | indexed legacy service page | Existing Next.js permanent redirect |
| /services/bunker/ | /services/bunker-quantity-survey | indexed legacy service page | Existing redirect |
| /services/cargo/ | /services/cargo-survey | indexed legacy service page | Existing redirect |
| /services/container/ | /services/container-survey | indexed legacy service page | Existing redirect |
| /services/hire/ | /services/on-off-hire-survey | indexed legacy service page | Existing redirect |
| /services/ism/ | /services/ism-audit | indexed legacy service page | Existing redirect |
| /services/mlc/ | /services/mlc-inspection | indexed legacy service page | Existing redirect |
| /services/harmonized/ | /services/harmonized-audit | indexed legacy service page | Existing redirect |
| /services/certification/ | /services/cargo-certification | indexed legacy service page | Existing redirect |
| /marine-careers | /careers | previously supplied legacy page | Existing redirect |
| /marine-certificates | /certifications | previously supplied legacy page | Existing redirect |

## Outstanding investigation
- Export all indexed Pages from Search Console (including query parameters, blog posts, alternate paths, and 404s).
- Crawl legacy sitemap, internal anchors, backlinks and server redirects.
- Confirm trailing slash variants and production 308/301 behavior after cutover.
- Preserve or redirect other indexed pages *only once content equivalence is confirmed*.
- Avoid automatic redirect of all unknown paths to homepage (soft 404 risk).
- Old site contains promotional and statutory certification claims; verify individually before reusing.

## Migration acceptance
Every indexed legacy page must either resolve to materially equivalent current content, redirect permanently to a relevant destination, or intentionally return a correct 404/410 when no equivalent exists.
