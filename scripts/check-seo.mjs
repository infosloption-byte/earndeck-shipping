/**
 * Check SEO routing and metadata against a running Next.js server.
 * Usage: node scripts/check-seo.mjs http://localhost:5177
 */
const base = (process.argv[2] || 'http://localhost:5177').replace(/\/$/, '');
const legacy = {
  '/services/draft/':'/services/draft-survey',
  '/services/bunker/':'/services/bunker-quantity-survey',
  '/services/cargo/':'/services/cargo-survey',
  '/services/container/':'/services/container-survey',
  '/services/hire/':'/services/on-off-hire-survey',
  '/services/ism/':'/services/ism-audit',
  '/services/mlc/':'/services/mlc-inspection',
  '/services/harmonized/':'/services/harmonized-audit',
  '/services/certification/':'/services/cargo-certification',
  '/marine-careers':'/careers',
  '/marine-certificates':'/certifications'
};
let failures = 0;
const check = (ok, message) => {
  console.log((ok ? 'PASS ' : 'FAIL ') + message);
  if (!ok) failures++;
};

async function verifyRedirect(from, destination) {
  const visited = new Set();
  let current = new URL(from, base);
  const hops = [];
  for (let i = 0; i < 6; i++) {
    if (visited.has(current.href)) {
      check(false, from + ' redirect loop: ' + hops.join(' -> '));
      return;
    }
    visited.add(current.href);
    const response = await fetch(current, { redirect: 'manual' });
    if (![301, 302, 307, 308].includes(response.status)) {
      check(hops.length > 0 && response.ok && current.pathname === destination,
        from + ' => ' + current.pathname + ' (' + hops.length + ' redirect hops; HTTP ' + response.status + ')');
      return;
    }
    const location = response.headers.get('location');
    if (!location) {
      check(false, from + ' missing Location header');
      return;
    }
    const next = new URL(location, current);
    if (next.origin !== new URL(base).origin) {
      check(false, from + ' redirects to unexpected origin: ' + next.origin);
      return;
    }
    hops.push(response.status + ':' + next.pathname);
    current = next;
  }
  check(false, from + ' excessive redirect chain: ' + hops.join(' -> '));
}
for (const [from, destination] of Object.entries(legacy)) await verifyRedirect(from, destination);
for (const route of ['/', '/services', '/services/draft-survey', '/team', '/ports']) {
  const response = await fetch(base + route);
  const html = await response.text();
  check(response.ok, route + ' HTTP ' + response.status);
  check(/<title>[^<]+<\/title>/i.test(html), route + ' page title');
  check(/rel="canonical"/i.test(html), route + ' canonical');
  check(/application\/ld\+json/i.test(html), route + ' JSON-LD');
}
const [robots, sitemap] = await Promise.all([fetch(base + '/robots.txt'), fetch(base + '/sitemap.xml')]);
check(robots.ok && (await robots.text()).includes('sitemap.xml'), 'robots sitemap declaration');
check(sitemap.ok && (await sitemap.text()).includes('/services/draft-survey'), 'sitemap contains service URL');
const missing = await fetch(base + '/not-a-real-earndeck-page');
check(missing.status === 404, 'unknown page returns 404');
if (failures) {
  console.error(failures + ' SEO checks failed');
  process.exitCode = 1;
} else {
  console.log('All SEO smoke checks passed');
}
