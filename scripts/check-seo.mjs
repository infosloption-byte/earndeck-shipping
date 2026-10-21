/**
 * Offline SEO smoke test. Runs against a locally started Next.js production server or deployed URL.
 * Usage: node scripts/check-seo.mjs http://localhost:5177
 * Requires Node 20+; no extra packages.
 */
const base=(process.argv[2]||'http://localhost:5177').replace(/\/$/,'');
const legacy={
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
let failures=0;const check=(ok,msg)=>{console.log((ok?'PASS':'FAIL')+' '+msg);if(!ok)failures++};
for(const [from,to] of Object.entries(legacy)){const res=await fetch(base+from,{redirect:'manual'});const location=res.headers.get('location')||'';check([301,308].includes(res.status)&&new URL(location,base).pathname===to,from+' => '+to+' ('+res.status+')')}
for(const route of ['/','/services','/services/draft-survey','/team','/ports']){const res=await fetch(base+route);const html=await res.text();check(res.ok,route+' HTTP '+res.status);check(/<title>[^<]+<\/title>/i.test(html),route+' page title');check(/rel="canonical"/i.test(html),route+' canonical');check(/application\/ld\+json/i.test(html),route+' JSON-LD')}
const [robots,sitemap]=await Promise.all([fetch(base+'/robots.txt'),fetch(base+'/sitemap.xml')]);check(robots.ok&&(await robots.text()).includes('sitemap.xml'),'robots sitemap declaration');check(sitemap.ok&&(await sitemap.text()).includes('/services/draft-survey'),'sitemap contains service URL');const missing=await fetch(base+'/not-a-real-earndeck-page');check(missing.status===404,'unknown page returns 404');if(failures){console.error(failures+' checks failed');process.exitCode=1}else console.log('SEO smoke checks passed');
