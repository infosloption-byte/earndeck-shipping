import { NextResponse } from 'next/server';
import {growthReport as r} from '@/lib/seo-growth-report';
export const runtime = 'nodejs';
const chapters: {title:string; paragraphs:string[]}[] = [
 {title:'Executive strategy and purpose',paragraphs:[
 'EARNDECK SHIPPING | ORGANIC SEARCH GROWTH AND BRAND VISIBILITY STRATEGY | '+r.date,
 r.mission,r.statement,
 'Previously: https://www.earndeckshipping.com/ | New staging: https://earndeck.ycusriya.online/',
 ...r.outcomes.map(([a,b])=>a+': '+b)]},
 {title:'Search opportunity and landing page plan',paragraphs:[
 'Focus on transactional marine surveying keywords, Sri Lankan port geography, demonstrated professional experience and enquiries.',
 ...r.positions.map(([a,b,c])=>a+' | '+b+' | '+c),
 'The keyword shortlist is proposed, not measured current rankings. Validate with Google Search Console, competitors and conversion evidence.'
 ]},
 {title:'Previous-site risks and shortcomings',paragraphs:[
 ...r.issues.map(([a,b])=>a+': '+b),
 'Legacy indexed service pages should be migrated with correct equivalent permanent redirects. A like-for-like speed comparison does not yet exist.'
 ]},
 {title:'Improvements completed in the new website',paragraphs:[
 ...r.completed.map(([a,b,status])=>a+': '+b+' | Status: '+status),
 'Staging HTTPS is enabled and the staging domain remains intentionally noindex.'
 ]},
 ...r.phases.map(p=>({title:p.window+' | '+p.title,paragraphs:[
 'Owner: '+p.owner+' | Status: '+p.status,...p.tasks
 ]})),
 {title:'Performance baseline and optimization',paragraphs:[
 'Local simulated mobile Lighthouse tests (not actual field Core Web Vitals):',
 ...r.baseline.map(([name,score,lcp])=>name+' | Performance '+score+'/100 | LCP '+lcp),
 'Next: investigate LCP elements, render blocking and mobile scripting, retest repeated runs, then measure real-user p75 LCP / INP / CLS.'
 ]},
 {title:'Measurement and business KPIs',paragraphs:[
 ...r.metrics.map(([a,b])=>a+': '+b),
 'No ranking or traffic outcomes have been claimed. Agree quantified business targets after receiving historical traffic and enquiry data.'
 ]},
 {title:'Client participation and strategic conclusion',paragraphs:[
 ...r.dependencies,
 'The website modernization provides a search-friendly platform. Long-term commercial search visibility also requires expert content, legitimate industry mentions, real reviews, accurate business data, migration accuracy and sustained optimization.',
 'Ranking at number one cannot be guaranteed. The success measure is stronger qualified visibility and genuine marine survey enquiries.'
 ]}
];
const escape = (value:string) => value.replace(/[\\()]/g, x => '\\'+x);
function makePdf(): Uint8Array {
 const pages:string[][]=[];let lines:string[]=[];
 for(const chapter of chapters){const block=['',chapter.title.toUpperCase(),''];for(const paragraph of chapter.paragraphs){const words=paragraph.replace(/[^\x20-\x7e]/g,'-').split(/\s+/);let line='';for(const w of words){if((line+' '+w).length>91){block.push(line);line=w}else line=line?line+' '+w:w}if(line)block.push(line);block.push('');}
 if(lines.length+block.length>49 && lines.length){pages.push(lines);lines=[]}
 for(const l of block){if(lines.length>=49){pages.push(lines);lines=[]}lines.push(l)}
 }if(lines.length)pages.push(lines);
 const objects:string[]=[];const add=(s:string)=>{objects.push(s);return objects.length};
 const catalog=add('');const root=add('');const font=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');const pageRefs:number[]=[];
 for(const page of pages){const commands=['BT','/F1 10 Tf','15 TL','46 786 Td',...page.map((s,i)=>i===0?'('+escape(s)+') Tj':'T* ('+escape(s)+') Tj'),'ET'];const stream=commands.join('\n');const contents=add('<< /Length '+new TextEncoder().encode(stream).length+' >>\nstream\n'+stream+'\nendstream');pageRefs.push(add('<< /Type /Page /Parent '+root+' 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 '+font+' 0 R >> >> /Contents '+contents+' 0 R >>'))}
 objects[catalog-1]='<< /Type /Catalog /Pages '+root+' 0 R >>';objects[root-1]='<< /Type /Pages /Kids ['+pageRefs.map(i=>i+' 0 R').join(' ')+'] /Count '+pageRefs.length+' >>';
 const enc=new TextEncoder();let output='%PDF-1.4\n';const offsets=[0];for(let i=0;i<objects.length;i++){offsets.push(enc.encode(output).length);output+=(i+1)+' 0 obj\n'+objects[i]+'\nendobj\n'}const xref=enc.encode(output).length;output+='xref\n0 '+(objects.length+1)+'\n0000000000 65535 f \n'+offsets.slice(1).map(n=>String(n).padStart(10,'0')+' 00000 n \n').join('')+'trailer\n<< /Size '+(objects.length+1)+' /Root '+catalog+' 0 R >>\nstartxref\n'+xref+'\n%%EOF';return enc.encode(output);
}
export async function GET(){return new NextResponse(Buffer.from(makePdf()),{status:200,headers:{'Content-Type':'application/pdf','Content-Disposition':'attachment; filename="Earndeck_SEO_Growth_Strategy.pdf"','Cache-Control':'public, max-age=3600'}})}
