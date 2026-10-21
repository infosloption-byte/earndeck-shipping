import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const site = fs.readFileSync(path.join(root,'lib/site.ts'),'utf8');
const photos = fs.readFileSync(path.join(root,'lib/service-photos.ts'),'utf8');
const slugs = [...site.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map(m=>m[1]);
const map = new Map([...photos.matchAll(/'([a-z0-9-]+)':\s*\{src:'([^']+)'/g)].map(m=>[m[1],m[2]]));
const errors = [];
for (const slug of slugs) {
 const src = map.get(slug);
 if (!src || !src.startsWith('/images/services/') || !src.endsWith('.webp')) { errors.push(slug+': missing or nonlocal image'); continue; }
 const file = path.join(root,'public',src.substring(1));
 if (!fs.existsSync(file)) { errors.push(slug+': missing '+src); continue; }
 const bytes = fs.readFileSync(file);
 if (bytes.length<2000 || bytes.toString('ascii',0,4)!=='RIFF' || bytes.toString('ascii',8,12)!=='WEBP') errors.push(slug+': invalid WebP '+src);
}
if (errors.length) { console.error('Service image audit FAILED:\n'+errors.join('\n')); process.exit(1); }
console.log('Service image audit: '+slugs.length+'/'+slugs.length+' routes with valid local WebP.');
