import { NextResponse } from 'next/server';
export const runtime = 'nodejs';

// A zero-dependency, text-based PDF edition. Generated on demand, so the report
// remains downloadable from standalone Docker builds without external file hosting.
const chapters: { title: string; paragraphs: string[] }[] = [
{title:'Executive summary',paragraphs:[
'Earndeck Shipping Website Modernization and SEO Readiness Report. Updated 21 October 2026.',
'Previous site: https://www.earndeckshipping.com/',
'New staging site: https://earndeck.ycusriya.online/',
'New codebase: https://github.com/infosloption-byte/earndeck-shipping',
'The new site rebuilds the experience in Next.js 15 and React 19 with rendered HTML, separate service and port pages, machine-readable metadata and repeatable build and deployment checks.',
'The old homepage returned a JavaScript-required shell to a text-based fetch. Legacy service pages are indexed; the old website was not completely invisible to Google.',
'No matched Lighthouse or historical field-speed baseline exists for the old site. Therefore no before-versus-after speed improvement can be proved yet.'
]},
{title:'Old site: key risks',paragraphs:[
'JavaScript-dependent homepage presentation may delay access to immediately readable HTML for some clients; this does not prove that major search crawlers could not render it.',
'Important legacy service URLs such as /services/draft/, /services/bunker/ and /services/cargo/ have content and should retain organic value through relevant permanent redirects.',
'Published promotional or statutory certification claims, coverage and outdated offers must be approved by qualified staff before being transferred.',
'A complete audit of old sitemap, canonical tags, schema, speed, search console history and backlinks is not yet available; treat related gaps as risks to investigate rather than proven failures.'
]},
{title:'New architecture and technical SEO',paragraphs:[
'Platform: Next.js 15, React 19, TypeScript, reusable site components, static-prerendered core/service/port pages and dynamic API validation.',
'Search metadata: per-page titles and descriptions, canonical links, Open Graph metadata, sitemap.xml, robots.txt and semantic heading hierarchy.',
'Structured data: business/professional services entity, Service, BreadcrumbList, and FAQPage information, pending independent validation and client fact checking.',
'Content: thirteen detailed service landing pages, four dedicated port landing pages for Colombo, Galle, Hambantota and Trincomalee, contextual service links and relevant contact forms.',
'Migration: eleven known legacy URL mappings documented, redirects committed in Next configuration. A full Google Search Console URL export and additional redirects are outstanding.'
]},
{title:'Mobile Lighthouse measurements',paragraphs:[
'Measured local production-preview mobile Lighthouse 13.4.1 baseline (laboratory, not actual field Core Web Vitals):',
'Homepage: Performance 74, Accessibility 94, SEO 100; LCP 4.5 seconds; total blocking time 350 ms; CLS 0.069.',
'Draft Survey: Performance 83, Accessibility 96, SEO 100; LCP 2.7 seconds; blocking 490 ms.',
'Colombo Port: Performance 73, Accessibility 96, SEO 100; LCP 3.6 seconds; blocking 670 ms.',
'Team: Performance 83, Accessibility 96, SEO 100; LCP 3.8 seconds; blocking 260 ms.',
'Certifications: Performance 78, Accessibility 96, SEO 100; LCP 4.0 seconds; blocking 340 ms.',
'Contact: Performance 87, Accessibility 96, SEO 92; LCP 3.4 seconds; blocking 220 ms.',
'All six initial LCP figures exceed the recommended 2.5 second threshold. Later Lighthouse runs varied, and optimization requires repeated median-based tests.'
]},
{title:'Quality assurance and Lightsail deployment',paragraphs:[
'The local production build generated 35/35 routes successfully. Automated audit checked 26 intended sitemap URLs and 26 internal destinations with zero warnings and errors.',
'Asset smoke checks verified 57 distinct local static assets across ten routes. These are technical checks, not a substitute for real browser and accessibility audits.',
'Staging runs as a standalone Next.js Docker image bound to 127.0.0.1:5187 and served over HTTPS through Ubuntu Nginx.',
'The staging container was healthy; 11/11 sampled public routes returned HTTP 200. A temporary 502 immediately following container replacement was resolved; later startup and health checks passed.',
'Lets Encrypt certificate issuance and renewal dry-run succeeded. The staging reverse proxy enforces X-Robots-Tag: noindex, nofollow.',
'Email-provider credentials are deliberately not configured on the staging host. Message delivery must be configured before production launch.'
]},
{title:'Remaining code and external SEO roadmap',paragraphs:[
'Code: improve mobile LCP and image delivery, reduce render blocking, investigate JavaScript main-thread work; complete keyboard, screen-reader, reduced-motion and viewport checks.',
'Code: validate live schema, metadata, remaining SEO warnings, all redirects, old-to-new content equivalence, and the professional accuracy of service and certification claims.',
'Outside code: verify Google Search Console and Bing Webmaster Tools ownership; export indexed old URLs, queries, backlinks and baseline traffic.',
'Outside code: confirm Google Business Profile eligibility and consistent public name, address, telephone and service areas; do not invent offices at served ports.',
'At launch: configure primary domain canonicals, HTTPS, permanent redirects, sitemap submissions, analytics and genuine conversion tracking. Keep staging noindex.',
'Ongoing: publish authentic technical case studies; build legitimate maritime directory citations and editorial links; gather genuine client reviews when permitted.',
'Monthly: monitor impressions, non-branded traffic, index coverage, organic qualified enquiries, Core Web Vitals and redirect/404 errors.',
'Important: technical improvements do not guarantee rankings. Source limitations: no historic controlled old-site Lighthouse baseline and no current real-user Core Web Vitals for the new site.'
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
export async function GET(){return new NextResponse(Buffer.from(makePdf()),{status:200,headers:{'Content-Type':'application/pdf','Content-Disposition':'attachment; filename="Earndeck_Website_Modernization_Report.pdf"','Cache-Control':'public, max-age=3600'}})}
