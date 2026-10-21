# SEO pre-launch verification checklist

1. Check production `https://www.earndeckshipping.com/robots.txt` returns 200 and sitemap URL.
2. Check `/sitemap.xml` returns each public URL exactly once, on canonical HTTPS host.
3. View page source (not just DevTools DOM) for root canonical, title, meta description, business JSON-LD and links to /services.
4. View source for at least three service routes; verify canonical, service JSON-LD, breadcrumb data and real page body.
5. Test old indexed URLs with `curl -I` for 301/308 and the correct final location.
6. Check a nonexistent URL returns 404. Check API endpoints are not included in sitemap.
7. Run schema validation tools and Search Console URL Inspection after deployment.
8. Confirm robots rules and no unwanted noindex/X-Robots-Tag directives.
9. Test on phone and tablet widths and verify LCP, INP and CLS.
10. Record Search Console before/after migration trends; no ranking promises.
