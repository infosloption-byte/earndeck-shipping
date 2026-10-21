import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowUpRight,Check,Plus} from 'lucide-react';
import {PageHero} from '@/components/PageHero';
import {CtaBand} from '@/components/CtaBand';
import {portPages,portSlugs,portServices,type PortSlug} from '@/lib/port-pages';
import {site} from '@/lib/site';
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return portSlugs.map(slug=>({slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params;if(!(slug in portPages))return {};
 const port=portPages[slug as PortSlug];
 const description='Marine survey and vessel inspection enquiries at '+port.name+' Port, Sri Lanka. Explore relevant services, preparation and attendance requirements.';
 return {title:'Marine Surveyors at '+port.name+' Port, Sri Lanka',description,alternates:{canonical:'/ports/'+slug},openGraph:{title:'Marine Surveys in '+port.name+', Sri Lanka',description,url:'/ports/'+slug}};
}
export default async function PortPage({params}:Props){
 const {slug}=await params;if(!(slug in portPages))notFound();
 const port=portPages[slug as PortSlug];const focus=portServices(port.focus);
 const jsonld={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
 {'@type':'ListItem',position:1,name:'Home',item:site.url+'/'},
 {'@type':'ListItem',position:2,name:'Port coverage',item:site.url+'/ports'},
 {'@type':'ListItem',position:3,name:port.name+' Port',item:site.url+'/ports/'+slug}]};
 return <>
 <PageHero eyebrow="Sri Lanka port survey coverage" title={<>{port.name} Port <em>marine surveys.</em></>} sub={'Request independent marine survey and inspection attendance at '+port.name+', subject to confirmation.'} crumbs={[{label:'Home',href:'/'},{label:'Port coverage',href:'/ports'},{label:port.name+' Port'}]}/>
 <section className="section section-ivory"><div className="shell"><div className="eyebrow">Port overview / {port.name}</div><h2>Survey planning in <em>{port.name}.</em></h2><p className="content-lede">{port.context}</p><p>Earndeck Shipping accepts attendance enquiries for {port.name}. Each appointment depends on surveyor availability, access permission, boarding arrangements and an agreed scope.</p><div className="eyebrow" style={{marginTop:48}}>Relevant marine survey services</div><div className="editorial-grid">{focus.map(s=><article className="editorial-tile" key={s.slug}><h3>{s.name}</h3><p>{s.description}</p><Link className="link-arrow" href={'/services/'+s.slug}>Explore service <ArrowUpRight size={17} aria-hidden="true"/></Link></article>)}</div></div></section>
 <section className="section section-white"><div className="shell"><div className="eyebrow">Arrange attendance</div><h2>Details to share <em>before booking.</em></h2><p className="content-lede">{port.planning}</p><ul className="scope-cards">{['Vessel name and IMO number when applicable','Port, berth or anchorage and agent contact','Inspection purpose, cargo or bunker details','Proposed date, operation window and boarding arrangements'].map(item=><li key={item}><Check size={20} aria-hidden="true"/><strong>{item}</strong></li>)}</ul><Link className="btn btn-primary" href={'/contact?port='+encodeURIComponent(port.name)}>Request {port.name} attendance <ArrowUpRight size={18} aria-hidden="true"/></Link></div></section>
 <section className="section section-ivory"><div className="shell"><div className="eyebrow">Common questions</div><h2>{port.name} survey <em>questions.</em></h2><div className="faq">{port.questions.map(item=><details key={item.q}><summary>{item.q}<Plus size={22} aria-hidden="true"/></summary><p>{item.a}</p></details>)}</div><p className="editorial-note" style={{marginTop:26}}>This page provides enquiry guidance, not a guarantee of local office presence, permissions or surveyor availability.</p><Link className="link-arrow" href="/ports">View all Sri Lankan port coverage <ArrowUpRight size={18}/></Link></div></section><CtaBand/>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonld).replace(/</g,'\\u003c')}}/>
 </>;
}
