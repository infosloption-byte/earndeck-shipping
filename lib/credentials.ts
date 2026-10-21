export type Credential = {kind:'certificate'|'licence';slug:string;title:string;holder:string;date:string;image:string};
export const credentials:Credential[]=[
  {
    "kind": "certificate",
    "slug": "thusith-bunker",
    "title": "Marine Surveying & Bunker Survey",
    "holder": "G. Thusith Fonseka",
    "date": "2026-01-16",
    "image": "/certifications/thusith-bunker.webp"
  },
  {
    "kind": "certificate",
    "slug": "thusith-compass",
    "title": "Magnetic Compass Adjuster",
    "holder": "G. Thusith Fonseka",
    "date": "2025-11-15",
    "image": "/certifications/thusith-compass.webp"
  },
  {
    "kind": "certificate",
    "slug": "ajith-draught",
    "title": "Draught Surveying",
    "holder": "Capt. Ajith U Fernando",
    "date": "2021-06-08",
    "image": "/certifications/ajith-draught.webp"
  },
  {
    "kind": "certificate",
    "slug": "ajith-bunker",
    "title": "Bunker Surveying",
    "holder": "Capt. Ajith U Fernando",
    "date": "2021-07-08",
    "image": "/certifications/ajith-bunker.webp"
  },
  {
    "kind": "certificate",
    "slug": "clishal-draught",
    "title": "Certificate in Draught Survey",
    "holder": "Clishal L. Perera",
    "date": "2026-01-30",
    "image": "/certifications/clishal-draught.webp"
  },
  {
    "kind": "certificate",
    "slug": "clishal-on-off-hire",
    "title": "On/Off-Hire Condition & Bunker ROB Survey",
    "holder": "Clishal L. Perera",
    "date": "2025-11-21",
    "image": "/certifications/clishal-on-off-hire.webp"
  },
  {
    "kind": "certificate",
    "slug": "thusith-draft-2022",
    "title": "Draught Survey",
    "holder": "G. Thusith Fonseka",
    "date": "2022-02-21",
    "image": "/certifications/thusith-draft-2022.webp"
  },
  {
    "kind": "certificate",
    "slug": "ajith-hull",
    "title": "Hull Damage Claims Surveying",
    "holder": "Capt. Ajith U Fernando",
    "date": "2021-03-26",
    "image": "/certifications/ajith-hull.webp"
  },
  {
    "kind": "certificate",
    "slug": "ajith-lead-auditor-document",
    "title": "ISM, ISPS & MLC Maritime Lead Auditor",
    "holder": "Capt. Ajith U Fernando",
    "date": "2021-11-01",
    "image": "/certifications/ajith-lead-auditor-document.webp"
  },
  {
    "kind": "certificate",
    "slug": "ajith-lead-auditor-badge",
    "title": "Maritime Lead Auditor Badge",
    "holder": "Capt. Ajith U Fernando",
    "date": "2021-11-01",
    "image": "/certifications/ajith-lead-auditor-badge.webp"
  },
  {
    "kind": "certificate",
    "slug": "ajith-iamcs",
    "title": "IAMCS Full Membership",
    "holder": "Capt. Ajith U Fernando",
    "date": "2021-03-26",
    "image": "/certifications/ajith-iamcs.webp"
  },
  {
    "kind": "licence",
    "slug": "thusith-chamber",
    "title": "Ceylon Chamber Surveyor Appointment",
    "holder": "G. Thusith Fonseka",
    "date": "2026-01-01",
    "image": "/certifications/thusith-chamber.webp"
  },
  {
    "kind": "licence",
    "slug": "ajith-chamber",
    "title": "Ceylon Chamber Surveyor Appointment",
    "holder": "Capt. Ajith U Fernando",
    "date": "2025-01-01",
    "image": "/certifications/ajith-chamber.webp"
  },
  {
    "kind": "licence",
    "slug": "clishal-chamber",
    "title": "Ceylon Chamber Surveyor Appointment",
    "holder": "Clishal L. Perera",
    "date": "2026-07-10",
    "image": "/certifications/clishal-chamber.webp"
  },
  {
    "kind": "licence",
    "slug": "hips-surveyor",
    "title": "HIPG Port Surveyor Licence",
    "holder": "Earndeck Shipping (Pvt) Ltd",
    "date": "2026-01-01",
    "image": "/certifications/hips-surveyor.webp"
  },
  {
    "kind": "licence",
    "slug": "form-b",
    "title": "Sri Lanka Ports Authority Form B",
    "holder": "Earndeck Shipping (Pvt) Ltd",
    "date": "2026-01-01",
    "image": "/certifications/form-b.webp"
  },
  {
    "kind": "licence",
    "slug": "form-c",
    "title": "Sri Lanka Ports Authority Form C",
    "holder": "Earndeck Shipping (Pvt) Ltd",
    "date": "2026-01-01",
    "image": "/certifications/form-c.webp"
  },
  {
    "kind": "licence",
    "slug": "dias-chamber",
    "title": "Ceylon Chamber Surveyor Appointment",
    "holder": "G. F. Dias",
    "date": "2025-01-01",
    "image": "/certifications/dias-chamber.webp"
  },
  {
    "kind": "licence",
    "slug": "prasanga-chamber",
    "title": "Ceylon Chamber Surveyor Appointment",
    "holder": "S. Prasanga",
    "date": "2025-01-01",
    "image": "/certifications/prasanga-chamber.webp"
  },
  {
    "kind": "licence",
    "slug": "sandaruwan-chamber",
    "title": "Ceylon Chamber Surveyor Appointment",
    "holder": "T. H. Sandaruwan",
    "date": "2025-01-01",
    "image": "/certifications/sandaruwan-chamber.webp"
  }
];
export const certificates=credentials.filter(x=>x.kind==='certificate');
export const licences=credentials.filter(x=>x.kind==='licence');
