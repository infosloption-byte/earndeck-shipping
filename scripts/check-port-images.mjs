import fs from 'node:fs';import path from 'node:path';
const root=process.cwd(), names=['colombo','galle','hambantota','trincomalee'];const errors=[];
const meta=fs.readFileSync(path.join(root,'lib/port-photos.ts'),'utf8');
for(const name of names){const rel='/images/ports/'+name+'.webp';if(!meta.includes(rel))errors.push(name+': missing mapping');const file=path.join(root,'public',rel.slice(1));if(!fs.existsSync(file)){errors.push(name+': missing file');continue;}const buf=fs.readFileSync(file);if(buf.length<2000||buf.toString('ascii',0,4)!=='RIFF'||buf.toString('ascii',8,12)!=='WEBP')errors.push(name+': invalid WebP');}
if(errors.length){console.error('Port image audit failed:\n'+errors.join('\n'));process.exit(1);}
console.log('Port image audit: 4/4 matching local assets verified.');
