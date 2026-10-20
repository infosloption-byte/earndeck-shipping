export const site = {
  name: 'Earndeck Shipping',
  legal: 'Earndeck Shipping Pvt Ltd',
  url: 'https://www.earndeckshipping.com',
  email: 'ops@earndeckshipping.com',
  phone: '+94 77 308 1208',
  address: 'No. 5/5 Nagahawatha Road, Wathtegedara, Maharagama 10280, Sri Lanka',
};

export const ports = ['Colombo', 'Galle', 'Trincomalee', 'Hambantota'];

export type ServiceGroup = 'Cargo & Quantity' | 'Vessel & Fuel' | 'Compliance & Audit';
export type IconName =
  | 'scale'
  | 'fuel'
  | 'package'
  | 'container'
  | 'filecheck'
  | 'ship'
  | 'shield'
  | 'lifebuoy'
  | 'layers';

export const serviceGroups: { name: ServiceGroup; blurb: string }[] = [
  { name: 'Cargo & Quantity', blurb: 'Quantity, condition and certification of cargo.' },
  { name: 'Vessel & Fuel', blurb: 'Bunkers, vessel inspections, purchase decisions and handover records.' },
  { name: 'Compliance & Audit', blurb: 'Safety, labour and management-system reviews.' },
];

export const services = [
  {
    slug: 'draft-survey',
    name: 'Draft Surveys',
    category: 'Cargo & Quantity',
    group: 'Cargo & Quantity',
    icon: 'scale',
    description: 'Bulk cargo quantity verification through vessel displacement measurements.',
    details:
      'Draft surveys estimate bulk cargo loaded or discharged by comparing vessel displacement before and after cargo operations.',
    points: [
      'Arrival and departure draft readings',
      'Quantity and displacement calculations',
      'Supporting survey documentation',
    ],
  },
  {
    slug: 'bunker-quantity-survey',
    name: 'Bunker Quantity Surveys',
    category: 'Fuel & Operations',
    group: 'Vessel & Fuel',
    icon: 'fuel',
    description: 'Independent marine fuel quantity verification and documentation.',
    details:
      'Bunker quantity surveys document fuel measurements and help parties verify the quantities delivered or remaining on board.',
    points: ['Tank sounding and measurement', 'Quantity reconciliation', 'Transfer documentation'],
  },
  {
    slug: 'cargo-survey',
    name: 'Cargo Surveys & Inspections',
    category: 'Cargo & Condition',
    group: 'Cargo & Quantity',
    icon: 'package',
    description: 'Careful cargo condition, handling, stowage and damage inspections.',
    details:
      'Independent cargo condition observations assist owners, shippers, receivers and insurers in understanding cargo handling, stowage or damage.',
    points: ['Cargo condition inspection', 'Stowage observations', 'Photographic records'],
  },
  {
    slug: 'container-survey',
    name: 'Container Surveys',
    category: 'Container & Cargo',
    group: 'Cargo & Quantity',
    icon: 'container',
    description: 'Container condition and shipment inspections with documented findings.',
    details:
      'Container inspections help document the condition of transport equipment and cargo when damage, handling concerns or shipment discrepancies occur.',
    points: ['Physical condition checks', 'Damage assessments', 'Inspection records'],
  },
  {
    slug: 'cargo-certification',
    name: 'Cargo Certification',
    category: 'Documentation',
    group: 'Cargo & Quantity',
    icon: 'filecheck',
    description: 'Inspection-based cargo verification and associated documentation.',
    details:
      'Supporting cargo verification and documentation based on the applicable commodity, vessel, port and inspection requirements.',
    points: ['Cargo verification', 'Supporting documentation', 'Scope-specific reporting'],
  },
  {
    slug: 'on-off-hire-survey',
    name: 'On-Hire / Off-Hire Surveys',
    category: 'Vessel Condition',
    group: 'Vessel & Fuel',
    icon: 'ship',
    description: 'Vessel handover condition and bunker documentation.',
    details:
      'At charter handover, condition and bunker surveys document relevant observations and remaining-on-board quantities.',
    points: ['Condition observations', 'Bunker inventory', 'Handover records'],
  },
  {
    slug: 'ism-audit',
    name: 'Internal ISM Audits',
    category: 'Maritime Compliance',
    group: 'Compliance & Audit',
    icon: 'shield',
    description: 'Reviews of marine safety management systems and implementation.',
    details:
      'Internal ISM audits assess safety management documentation, procedures and practical implementation against applicable requirements.',
    points: ['Safety management review', 'Document examination', 'Findings and follow-up'],
  },
  {
    slug: 'mlc-inspection',
    name: 'MLC Inspections',
    category: 'Maritime Compliance',
    group: 'Compliance & Audit',
    icon: 'lifebuoy',
    description: 'Reviews relating to seafarer living and working conditions.',
    details:
      'MLC inspections focus on relevant seafarer welfare, working conditions, accommodation and supporting records.',
    points: ['Crew welfare observations', 'Accommodation review', 'Relevant documentation'],
  },
  {
    slug: 'harmonized-audit',
    name: 'Harmonized Marine Audits',
    category: 'Maritime Compliance',
    group: 'Compliance & Audit',
    icon: 'layers',
    description: 'Coordinated marine audit reviews when scope and authorization allow.',
    details:
      'Coordinated audits may combine relevant ISM, ISPS and MLC review activities based on the vessel and agreed audit scope.',
    points: ['Combined audit planning', 'Coordinated site review', 'Consolidated observations'],
  },
  {
    slug: 'hull-machinery-inspection',
    name: 'Hull & Machinery Inspections',
    category: 'Vessel Technical Condition',
    group: 'Vessel & Fuel',
    icon: 'ship',
    description: 'Independent hull, machinery condition and repair-progress inspections.',
    details: 'Technical condition observations covering accessible hull and machinery components, damage and repair works.',
    points: ['Hull and machinery condition checks','Damage documentation','Repair monitoring and reporting'],
  },
  {
    slug: 'pre-purchase-vetting',
    name: 'Pre-Purchase Inspections & Ship Vetting',
    category: 'Vessel Acquisition',
    group: 'Vessel & Fuel',
    icon: 'shield',
    description: 'Technical condition and operational document reviews supporting vessel acquisition decisions.',
    details: 'Pre-purchase surveys and ship vetting assess agreed technical, operational and compliance aspects before an acquisition or charter decision.',
    points: ['Condition and machinery review','Operational records and documentation','Observations for purchase due diligence'],
  },
  {
    slug: 'compass-adjustment',
    name: 'Compass Adjustment & Magnetic Correction',
    category: 'Navigation & Safety',
    group: 'Vessel & Fuel',
    icon: 'ship',
    description: 'Magnetic compass adjustment, deviation assessment and navigation-related reporting.',
    details: 'Compass adjustment supports the reliability of a vessel’s magnetic heading reference through agreed inspection and correction work.',
    points: ['Compass and deviation assessment','Adjustment and magnetic correction','Applicable observation and reporting records'],
  },
  {
    slug: 'pi-condition-survey',
    name: 'P&I Condition Surveys',
    category: 'Vessel Risk & Condition',
    group: 'Vessel & Fuel',
    icon: 'shield',
    description: 'Independent vessel condition inspections for marine risk and protection-and-indemnity considerations.',
    details: 'P&I condition surveys document observable vessel conditions and risks according to the agreed scope for owners, managers and marine insurers.',
    points: ['Accessible vessel condition inspection','Relevant equipment and risk observations','Evidence-based condition reporting'],
  },
] as const;

export type Service = (typeof services)[number];

/** "Find your survey" selector: situations mapped to the services that fit them. */
export const scenarios: { id: string; label: string; hint: string; slugs: Service['slug'][] }[] = [
  {
    id: 'bulk',
    label: 'Bulk cargo is being loaded or discharged',
    hint: 'You need an independent quantity figure for the cargo operation.',
    slugs: ['draft-survey', 'cargo-survey'],
  },
  {
    id: 'bunkers',
    label: 'Fuel is being delivered to a vessel',
    hint: 'You want the bunker quantity measured and documented.',
    slugs: ['bunker-quantity-survey'],
  },
  {
    id: 'charter',
    label: 'A vessel is changing charterers',
    hint: 'You need a time-specific record of condition and bunkers at handover.',
    slugs: ['on-off-hire-survey', 'bunker-quantity-survey'],
  },
  {
    id: 'damage',
    label: 'Cargo or a container arrived damaged',
    hint: 'You need independent observations and evidence of condition.',
    slugs: ['cargo-survey', 'container-survey'],
  },
  {
    id: 'paperwork',
    label: 'A shipment needs verification paperwork',
    hint: 'You need inspection-based cargo verification and supporting records.',
    slugs: ['cargo-certification', 'container-survey'],
  },
  {
    id: 'compliance',
    label: 'We need a safety or compliance review',
    hint: 'You want your safety, labour or management systems reviewed.',
    slugs: ['ism-audit', 'mlc-inspection', 'harmonized-audit'],
  },
];

export const team = [
  { name: 'G. Thusith Fonseka', role: 'Managing Director / Deputy Principal Marine Surveyor', description: 'Marine surveying leadership and operations coordination, as listed on the legacy company website.' },
  { name: 'Ajith Fernando', role: 'Director of Operations', description: 'Operations leadership and marine industry coordination.' },
  { name: 'Hasitha Sandaruwan', role: 'Head of Operations', description: 'Operational planning and survey coordination.' },
  { name: 'Prasanga Mallawaarachchi', role: 'Marine Surveyor', description: 'Marine surveying and vessel-related inspections.' },
  { name: 'Clishal Perera', role: 'Marine Surveyor', description: 'Marine inspection and survey assignments.' },
] as const;
// Team roster is based on publicly available profiles and must be confirmed by the company before launch.

export const process = [
  {
    title: 'Enquire',
    text: 'Send us the vessel, port, preferred date and the scope you need surveyed.',
  },
  {
    title: 'Confirm scope',
    text: 'We confirm attendance, deliverables and any authorisation needed for the assignment.',
  },
  {
    title: 'Attend & survey',
    text: 'Our surveyor attends, takes readings and records condition and evidence against the agreed scope.',
  },
  {
    title: 'Report',
    text: 'You receive a structured, observation-based report with the supporting records.',
  },
];

export const frameworks = [
  { code: 'ISM', name: 'International Safety Management Code' },
  { code: 'ISPS', name: 'International Ship and Port Facility Security Code' },
  { code: 'MLC', name: 'Maritime Labour Convention' },
];
