import fs from 'node:fs';import path from 'node:path';
export type TeamMember={slug:string;name:string;role:string;credentials:string[]};
export const team:TeamMember[]=[
{slug:'thusith-fonseka',name:'G. Thusith Fonseka',role:'Managing Director / Deputy Principal Marine Surveyor',credentials:['Chief Operations Manager Coordinator','Custom House Agent, ICS Ship Broker','Magnetic Compass Adjuster']},
{slug:'ajith-fernando',name:'Capt. Ajith U Fernando',role:'Director / Principal Mariner Surveyor',credentials:['Chamber of Commerce Panel Surveyor (SL)','Lead Auditor (ISM, ISPS, MLC) — Lloyds Maritime','Hull Damage Claims Surveying, Bunker and Draught','IAMCS Full Member']},
{slug:'gf-dias',name:'G. F. Dias',role:'Director / Marine Surveyor',credentials:['Marine Engineer']},
{slug:'hasitha-sandaruwan',name:'Hasitha Sandaruwan',role:'Operations Manager / Marine Surveyor',credentials:['IFIA Qualified Petroleum Inspector']},
{slug:'clishal-perera',name:'Clishal L. Perera',role:'Marine Surveyor',credentials:['Ceylon Chamber of Commerce Panel Surveyor']},
{slug:'vidura-wijewickrama',name:'Vidura Wijewickrama',role:'Assistant Marine Surveyor',credentials:[]},
{slug:'thuhina-gimhan',name:'Thuhina Gimhan',role:'Assistant Marine Surveyor',credentials:[]},
{slug:'shashika-rajapaksha',name:'Shashika Rajapaksha',role:'Assistant Marine Surveyor',credentials:[]},
{slug:'vathila-thevinu',name:'Vathila Thevinu',role:'Assistant Marine Surveyor',credentials:[]},
{slug:'komuthu-fernando',name:'Komuthu Fernando',role:'IT Specialist',credentials:['BSc (Hons) Information Technology — University of Moratuwa']}
];
export function portraitFor(slug:string){const p=path.join(process.cwd(),'public','team',slug+'.webp');return fs.existsSync(p)?'/team/'+slug+'.webp':undefined}
export function initialsOf(name:string){return name.split(/\s+/).filter(p=>!/^[A-Z]\.$/.test(p)).map(p=>p[0]).slice(-2).join('').toUpperCase()}
