import {NextRequest,NextResponse} from 'next/server';import {vacancies} from '@/lib/vacancies';
export const runtime='nodejs';const limits=new Map<string,{count:number;reset:number}>();
function fail(error:string,status:number){return NextResponse.json({error},{status,headers:{'Cache-Control':'no-store'}})}
export async function POST(req:NextRequest){const origin=req.headers.get('origin');const host=new URL(req.url).origin;if(!origin||origin!==host&&origin!==process.env.PUBLIC_SITE_ORIGIN)return fail('Invalid origin.',403);if(Number(req.headers.get('content-length')||0)>3700000)return fail('Application is too large.',413);
const key=req.headers.get('x-real-ip')||req.headers.get('x-forwarded-for')?.split(',')[0]||'unknown';const now=Date.now();const old=limits.get(key);if(old&&old.reset>now&&old.count>=3)return fail('Too many attempts. Please try again later.',429);limits.set(key,old&&old.reset>now?{count:old.count+1,reset:old.reset}:{count:1,reset:now+3600000});if(limits.size>3000)limits.clear();
let form:FormData;try{form=await req.formData()}catch{return fail('Invalid application.',400)}
const val=(k:string,n:number)=>{const v=form.get(k);return typeof v==='string'?v.trim().slice(0,n):''};
if(val('website',200))return NextResponse.json({ok:true});
const name=val('name',120),email=val('email',254),phone=val('phone',40),position=val('position',90),experience=val('experience',3000);
if(!name||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||/[\r\n]/.test(email)||!phone||experience.length<20||form.get('consent')!=='yes'||position!=='general'&&!vacancies.some(v=>v.id===position))return fail('Please check required fields.',422);
const cv=form.get('cv');if(!(cv instanceof File)||cv.size<20||cv.size>3000000||cv.type!=='application/pdf'||!cv.name.toLowerCase().endsWith('.pdf'))return fail('Attach a PDF CV under 3 MB.',422);
const bytes=new Uint8Array(await cv.arrayBuffer());if(String.fromCharCode(...bytes.slice(0,5))!=='%PDF-')return fail('Invalid PDF file.',422);
const api=process.env.RESEND_API_KEY,from=process.env.ENQUIRY_FROM_EMAIL,to=process.env.CAREERS_TO_EMAIL||process.env.ENQUIRY_TO_EMAIL;
if(!api||!from||!to)return fail('Online applications are temporarily unavailable. Please contact our team directly.',503);
const selected=vacancies.find(v=>v.id===position);const subject='Career application — '+(selected?.title||'General interest');const content=Buffer.from(bytes).toString('base64');
try{const res=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+api,'Content-Type':'application/json'},body:JSON.stringify({from,to:[to],reply_to:email,subject,text:['Name: '+name,'Email: '+email,'Phone: '+phone,'Role: '+(selected?.title||'General interest'),'Sample profile: '+Boolean(selected),'Experience: '+experience].join('\n'),attachments:[{filename:'candidate-cv.pdf',content}]}),signal:AbortSignal.timeout(12000)});if(!res.ok)return fail('Delivery unavailable. Please try again later.',502);return NextResponse.json({ok:true},{headers:{'Cache-Control':'no-store'}})}catch{return fail('Delivery unavailable. Please try again later.',502)}
}