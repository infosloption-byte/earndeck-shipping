/**
 * Crawl the public sitemap and check structural SEO readiness.
 * Usage: node scripts/audit-site.mjs http://localhost:5177
 * Requires Node 20+. Does not modify data, send forms or use external services.
 *
 * Note: This is source-HTML/static audit, not a real-browser, Lighthouse,
 * accessibility, Rich Results Test, or Search Console verification.
 */
const base = new URL((process.argv[2] || 'http://localhost:5177').replace(/\/$/, '') + '/');
const origin = base.origin;
let errors = 0;
let warnings = 0;
const fail = message => { errors++; console.error('FAIL ' + message); };
const warn = message => { warnings++; console.warn('WARN ' + message); };
const pass = message => console.log('PASS ' + message);
const matches = (html, pattern) => [...html.matchAll(pattern)].map(match => match[1]);
function decoded(text) { return text.replace(/&amp;/g, '&').replace(/&#39;|&apos;/g,"'").replace(/&quot;/g,'"'); }
function attr(tag, key) {
  const match = tag.match(new RegExp(key + '="([^"]*)"', 'i'));
  return match?.[1] || null;
}
let sitemap;
try {
  const response = await fetch(new URL('/sitemap.xml', base));
  if (!response.ok) throw Error('HTTP ' + response.status);
  sitemap = await response.text();
} catch (error) {
  console.error('Could not load sitemap:', error.message);
  process.exit(1);
}
const sitemapUrls = matches(sitemap, /<loc>\s*([^<]+)\s*<\/loc>/gi).map(decoded);
if (!sitemapUrls.length) fail('Sitemap has no URLs');
else pass('Found ' + sitemapUrls.length + ' sitemap URLs');
const paths = new Set();
for (const url of sitemapUrls) {
  const parsed = new URL(url);
  if (paths.has(parsed.pathname)) fail('Duplicate sitemap path: ' + parsed.pathname);
  paths.add(parsed.pathname);
}
const internalTargets = new Set();
for (const entry of sitemapUrls) {
  const expected = new URL(entry);
  const route = expected.pathname;
  let response, html;
  try {
    response = await fetch(new URL(route, base), {redirect:'follow'});
    html = await response.text();
  } catch (error) {
    fail(route + ' unavailable: ' + error.message);
    continue;
  }
  if (!response.ok) { fail(route + ' HTTP ' + response.status); continue; }
  if (new URL(response.url).pathname !== route) fail(route + ' unexpectedly redirects to ' + response.url);
  const title = matches(html, /<title[^>]*>([^<]+)<\/title>/gi)[0] || '';
  if (!title || title.length < 12) fail(route + ' missing/short title');
  const metas = html.match(/<meta\b[^>]*>/gi) || [];
  const description = metas.find(tag => attr(tag,'name')?.toLowerCase() === 'description');
  if (!description || !attr(description,'content')) fail(route + ' missing description');
  const canonicals = (html.match(/<link\b[^>]*>/gi) || [])
    .filter(tag => attr(tag,'rel')?.toLowerCase() === 'canonical')
    .map(tag => attr(tag,'href'));
  if (canonicals.length !== 1) fail(route + ' requires exactly one canonical; found ' + canonicals.length);
  else {
    const canonical = new URL(canonicals[0], base);
    if (canonical.href !== expected.href) fail(route + ' canonical ' + canonical.href + ' differs from sitemap ' + expected.href);
  }
  const headings = (html.match(/<h1\b[^>]*>/gi) || []).length;
  if (headings !== 1) fail(route + ' should have exactly one H1; found ' + headings);
  if (!/<main\b[^>]*id=["']main["']/i.test(html) && !/<main\b[^>]*>/i.test(html))
    fail(route + ' missing main landmark');
  if (!/<html\b[^>]*lang=["']en["']/i.test(html)) warn(route + ' missing English language attribute');
  for (const tag of html.match(/<a\b[^>]*>/gi) || []) {
    const href = attr(tag,'href');
    if (!href || href.startsWith('#') || /^(mailto:|tel:|javascript:)/i.test(href)) continue;
    try {
      const target = new URL(href, base);
      if (target.origin === origin && !target.pathname.startsWith('/api/')) internalTargets.add(target.pathname);
    } catch {}
  }
  for (const tag of html.match(/<img\b[^>]*>/gi) || [])
    if (attr(tag, 'alt') === null) warn(route + ' image missing alt attribute');
  pass(route + ' metadata / canonical / H1');
}
for (const path of internalTargets) {
  if (paths.has(path) || path === '/sitemap.xml' || path === '/robots.txt') continue;
  // Also checks legitimate non-sitemap links, including missing pages.
  try {
    const response = await fetch(new URL(path,base), { method:'GET' });
    if (!response.ok) fail('Internal link ' + path + ' HTTP ' + response.status);
    else warn('Internal link ' + path + ' exists but is absent from sitemap');
  } catch (error) { fail('Internal link ' + path + ': ' + error.message); }
}
console.log('\nAudit: ' + paths.size + ' sitemap pages; ' + internalTargets.size + ' internal destinations; ' + errors + ' errors; ' + warnings + ' warnings');
if (errors) process.exitCode = 1;
