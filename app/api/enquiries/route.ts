import {NextRequest,NextResponse} from 'next/server';
export const runtime='nodejs';
const attempts=new Map<string,{count:number;until:number}>();
function reject(error:string,status:number){return NextResponse.json({error},{status,headers:{'Cache-Control':'no-store'}})}
function val(o:Record<string,unknown>,k:string,max:number){return typeof o[k]==='string'?o[k].trim().slice(0,max):''}
export async function POST(req:NextRequest){
const origin=req.headers.get('origin');const url=new URL(req.url);if(origin&&origin!==url.origin&&origin!==process.env.PUBLIC_SITE_ORIGIN)return reject('Invalid request origin.',403);
if(Number(req.headers.get('content-length')||'0')>15000)return reject('Request too large.',413);
let data:Record<string,unknown>;try{data=await req.json();if(!data||Array.isArray(data)||typeof data!=='object')return reject('Invalid payload.',400)}catch{return reject('Invalid JSON.',400)}
if(val(data,'website',200))return NextResponse.json({ok:true});
const name=val(data,'name',120),email=val(data,'email',254),company=val(data,'company',150),phone=val(data,'phone',50),service=val(data,'service',120),port=val(data,'port',140),date=val(data,'date',12),message=val(data,'message',4000);
if(!name||!service||message.length<15||data.consent!=='yes'||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.includes('\r')||email.includes('\n'))return reject('Check the required form fields.',422);
if(date&&!/^\d{4}-\d{2}-\d{2}$/.test(date))return reject('Invalid date.',422);
const forwarded=req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();const ip=(forwarded||'unknown').slice(0,90);
const now=Date.now();const entry=attempts.get(ip);if(entry&&entry.until>now&&entry.count>=5)return reject('Too many enquiries. Please try again later.',429);attempts.set(ip,entry&&entry.until>now?{count:entry.count+1,until:entry.until}:{count:1,until:now+3600000});if(attempts.size>2000){for(const [key,item] of attempts)if(item.until<now)attempts.delete(key)}
const apiKey=process.env.RESEND_API_KEY,from=process.env.ENQUIRY_FROM_EMAIL,to=process.env.ENQUIRY_TO_EMAIL;
if(!apiKey||!from||!to){console.error('Enquiry mail integration is not configured');return reject('Online enquiries are temporarily unavailable. Please email our operations team.',503)}
const body=[['Name',name],['Email',email],['Company',company],['Phone',phone],['Service',service],['Port',port],['Requested date',date],['Message',message]].map(([k,v])=>k+': '+v).join('\n');
try{const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+apiKey,'Content-Type':'application/json'},body:JSON.stringify({from,to:[to],reply_to:email,subject:'New maritime survey enquiry – '+service.replace(/[\r\n]/g,' '),text:body}),signal:AbortSignal.timeout(10000)});if(!response.ok){console.error('Mail provider error',response.status);return reject('Unable to send right now. Please contact operations directly.',502)}return NextResponse.json({ok:true},{status:200,headers:{'Cache-Control':'no-store'}})}catch{console.error('Mail provider request failed');return reject('Unable to send right now. Please contact operations directly.',502)}
}
