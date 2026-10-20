# SEO, AI-discovery and launch checklist

## Content architecture
- Public indexable routes: /, /services, nine /services/[slug] pages, /about, /contact, /privacy.
- Each service has a distinct page, plain-English process, purpose, audience and visible FAQs.
- Metadata and service-specific JSON-LD are server generated. AI discovery relies primarily on accessible, factual page text, not special AI meta tags.
- Verify all statements about certifications, associations, response times, years of experience and statutory authorizations with the client before publication.
- Add real team credentials, dated case studies, authentic photography with alt text and editorial review dates once supplied.

## Technical checks before DNS change
1. Confirm all historical URLs from crawl, Search Console and sitemap, and check complete 301 redirect mapping.
2. Confirm canonical domain; verify redirect chains, HTTP response, robots, sitemap and structured data in production.
3. Check desktop, tablet and mobile at 320 / 375 / 768 / 1024 / 1440px with real browsers; test keyboard navigation and reduced motion.
4. Run npm run typecheck && npm run build; test Lighthouse and actual Core Web Vitals.
5. Provision Resend (or swap provider), verify sending domain, set RESEND_API_KEY, ENQUIRY_FROM_EMAIL, ENQUIRY_TO_EMAIL.
6. Test valid/invalid enquiries, provider outage, 429 response, spam, reply-to and mail deliverability.
7. Replace in-memory throttle with shared production store (Redis / edge rate-limit); add a verified challenge where spam risk requires it. Trust proxy headers only behind a trusted proxy.
8. Have client review/privacy policy before launch, and set up Search Console and analytics under an approved consent policy.

## Security
- Server-only mail API key, no client exposure.
- API input limits, required consent, server validation, honeypot and basic per-instance throttle.
- This is baseline hardening, NOT complete production abuse prevention: use a shared rate limiter and verified anti-bot protection at scale.
