export const growthReport = {
 date:'21 October 2026',
 title:'Earn trust. Win searches. Generate maritime enquiries.',
 mission:'Establish Earndeck Shipping as a credible, highly visible choice when shipowners, agents, charterers and cargo stakeholders search for marine survey services in Sri Lanka.',
 statement:'The objective is sustained first-page visibility for relevant, qualified commercial searches, stronger brand recognition and a measurable increase in genuine survey enquiries. No agency or technical change can guarantee a #1 Google ranking.',
 outcomes:[
 ['Visibility','Appear for high-intent marine-survey searches, not only branded searches.'],
 ['Authority','Demonstrate proven maritime competence with verified credentials, procedures and case evidence.'],
 ['Demand','Turn qualified search visitors into contact requests, quotations and booked surveys.'],
 ['Measurement','Connect organic traffic to enquiries and evaluate rankings and conversions over time.']
 ],
 positions:[
 ['Marine surveyors Sri Lanka','National commercial service hub','/services'],
 ['Draft survey Sri Lanka','Dedicated specialist landing page','/services/draft-survey'],
 ['Bunker quantity survey Sri Lanka','Dedicated specialist landing page','/services/bunker-quantity-survey'],
 ['Cargo survey Sri Lanka','Service-specific page and examples','/services/cargo-survey'],
 ['Marine surveyors Colombo','Port-specific local-intent page','/ports/colombo'],
 ['Marine surveyors Galle / Hambantota / Trincomalee','Distinct location pages with genuine local information','/ports'],
 ['P&I condition survey Sri Lanka','Specialist technical page','/services/pi-condition-survey']
 ],
 completed:[
 ['Premium brand platform','Consistent navy, ivory and amber design, clear service positioning, responsive navigation and contact routes.','Implemented, awaiting final visual approval'],
 ['Search-friendly technical foundation','Next.js prerendered pages, canonical metadata, titles, descriptions, structured data, XML sitemap, robots rules and internal linking.','Implemented in code; production validation pending'],
 ['Industry landing pages','13 service pages and 4 port-focused pages with dedicated content, questions and enquiry guidance.','Built; professional factual approval pending'],
 ['Locally served photography','13 service illustrations and 4 port images saved as WebP assets in the project and checked by build scripts.','Implemented; imagery relevance and licence review pending'],
 ['Controlled migration planning','Known legacy URL redirects and an SEO migration checklist to protect discoverable old service pages.','Partially mapped; complete legacy URL inventory pending'],
 ['Measurable QA foundation','37/37 Next.js build, all 17 photo assets verified, prior 26-URL local SEO audit, staging HTTPS, robots noindex.','Verified local/staging tests; public launch pending']
 ],
 issues:[
 ['Legacy rendering','The earlier homepage returned a JavaScript-required shell to a simple fetch. Indexed legacy service pages do exist; a full historic SEO/technical audit remains necessary.'],
 ['Performance not yet finished','Initial local mobile Lighthouse performance scores ranged 73–87 with LCP 2.7–4.5 seconds. There is no valid matched old-site performance benchmark.'],
 ['Authority gaps','Code cannot independently establish professional trust, citations, earned links, reviews or verified qualifications.'],
 ['Migration risk','The historical domain has SEO signals and URLs that need a complete Search Console/backlink export before cutover.']
 ],
 phases:[
 {window:'Phase 1 • Before public launch',title:'Research, benchmark and secure existing search equity',owner:'SEO lead + client',status:'Priority: immediate',tasks:[
 'Obtain Google Search Console and Bing Webmaster access for the existing domain; export indexed pages, impressions, queries, clicks, CTR and known backlinks.',
 'Audit actual competitors for marine surveyor and high-intent service queries in Sri Lanka; record positions, SERP types and content gaps without assuming current rank.',
 'Build a service-by-service search intent map, prioritizing qualified enquiries over search volume alone.',
 'Crawl old URLs, complete exact equivalent redirects, audit title/meta/schema/robots/canonicals and confirm factual claims with surveyors.',
 'Re-run comparable desktop/mobile Lighthouse tests and address LCP, main-thread work and image delivery.' ]},
 {window:'Phase 2 • Domain launch and first 30 days',title:'Launch the SEO-ready website safely',owner:'Development + SEO',status:'Not started',tasks:[
 'Deploy to www.earndeckshipping.com, preserve SSL and approved canonicals; maintain permanent relevant old-to-new redirects.',
 'Remove noindex from intended production pages only; keep staging noindex and excluded from promotion.',
 'Verify production sitemap, robots, redirects, schema, 404s, mobile usability and Search Console ownership; submit XML sitemap.',
 'Enable real enquiry delivery, conversion events, consent-aware analytics and source attribution.',
 'Review indexing, crawl and conversion reports weekly; fix unexpected traffic or URL losses quickly.' ]},
 {window:'Phase 3 • Months 1–3',title:'Establish marine expertise and local relevance',owner:'Marine surveyors + content/SEO',status:'Planned',tasks:[
 'Publish practitioner-reviewed guides for draft survey calculations, bunker disputes, P&I conditions, cargo damage and charter handovers.',
 'Create approved case studies with real observations, anonymized where required, original photos, credentials and clear methodologies.',
 'Add contextual service-to-port and guide-to-service linking with descriptive headings, alt text and logical navigation.',
 'Confirm Google Business Profile eligibility and accurate legal name, phone, service areas and address; optimize only legitimately eligible profiles.',
 'Secure accurate citations from relevant shipping and marine trade directories; begin legitimate editorial outreach.' ]},
 {window:'Phase 4 • Months 3–6+',title:'Build authority, optimize conversion and expand search coverage',owner:'Marketing + operations',status:'Planned',tasks:[
 'Earn relevant backlinks and mentions through maritime associations, partner publications and useful industry content; never purchase manipulative links.',
 'Gather genuine permitted client reviews, strengthen credentials and refresh service/port content as operations change.',
 'Improve highest-opportunity pages using Search Console CTR and query analysis; test headlines, proof, calls to action and forms.',
 'Monitor Core Web Vitals from field data and aim for p75 LCP ≤2.5s, INP ≤200ms and CLS ≤0.1.',
 'Publish monthly organic search and enquiry performance reports; revise priorities by qualified lead value.' ]}
 ],
 metrics:[
 ['Organic search visibility','Search Console impressions, branded vs non-branded queries and rankings for agreed target keywords'],
 ['Acquisition quality','Organic sessions and landing-page engagement by service and port'],
 ['Business outcomes','Qualified enquiries, quotation requests, booked surveys and organic lead conversion rate'],
 ['Technical performance','Indexed intended URLs, redirect/404 errors and p75 LCP / INP / CLS'],
 ['Brand trust signals','Verified business listings, authentic reviews, earned relevant citations and content approvals']
 ],
 dependencies:['Owner access to historical Search Console, Bing and analytics','Client-approved corporate name, contact, office and coverage information','Verified qualifications, credentials, survey methodologies and permissions','Real case evidence, licensed photography and permission for reviews','Ongoing budget/ownership for editorial production, outreach and analytics'],
 baseline:[
 ['Homepage','74','4.5s'],['Draft survey','83','2.7s'],['Colombo','73','3.6s'],['Team','83','3.8s'],['Certifications','78','4.0s'],['Contact','87','3.4s']
 ]
} as const;
