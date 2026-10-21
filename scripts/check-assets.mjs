/**
 * Check that locally rendered Next.js pages reference loadable CSS, JS and image assets.
 * Usage: node scripts/check-assets.mjs http://localhost:5177
 * Run against dev or a running production server; it is not a browser performance test.
 */
const base=new URL((process.argv[2]||'http://localhost:5177').replace(/\/$/,'')+'/');
const pages=['/','/about','/services','/services/draft-survey','/ports','/ports/colombo','/team','/certifications','/careers','/contact'];
const errors=[];const assets=new Set();
for(const path of pages){
 const response=await fetch(new URL(path,base));
 if(!response.ok){errors.push(path+' returned HTTP '+response.status);continue;}
 const html=await response.text();
 // Only requests from static script/style/image tags, not preload speculation or external origins.
 const tags=html.match(/<(?:script|link|img)\b[^>]*>/gi)||[];
 for(const tag of tags){
   const get=name=>tag.match(new RegExp('(?:^|\\s)'+name+'="([^"]+)"','i'))?.[1];
   const src=get('src'),href=get('href'),rel=get('rel')||'';
   const value=src||( /stylesheet|icon|preload/i.test(rel)?href:null);
   if(!value||value.startsWith('data:'))continue;
   const url=new URL(value.replace(/&amp;/g,'&'),base);
   if(url.origin!==base.origin)continue;
   if(url.pathname.startsWith('/_next/')||/\.(?:css|js|png|jpe?g|webp|avif|svg|ico)$/i.test(url.pathname))assets.add(url.href);
 }
}
let checked=0;
for(const url of assets){
 try{
  const response=await fetch(url);
  checked++;
  if(!response.ok)errors.push(new URL(url).pathname+' HTTP '+response.status);
 }catch(error){errors.push(url+': '+error.message);}
}
console.log('Checked '+pages.length+' pages and '+checked+' unique local assets.');
if(errors.length){for(const message of errors)console.error('FAIL '+message);process.exitCode=1;}
else console.log('PASS All referenced local CSS, JavaScript and image assets responded successfully.');
