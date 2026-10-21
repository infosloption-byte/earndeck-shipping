/** Additional editorial content for priority survey pages. Typical examples only; confirm actual deliverables with Earndeck before publication. */
export const serviceGuidance: Record<string,{preparation:string[];deliverables:string[];limitations:string}> = {
  'draft-survey':{
    preparation:['Vessel name, IMO number and anticipated berth or anchorage','Cargo type and expected start and completion times','Hydrostatic particulars and relevant tank information when available'],
    deliverables:['Recorded initial and final draft observations','Displacement and cargo-quantity calculation summary','Assumptions, corrections and any observed constraints'],
    limitations:'Draft survey results are estimates affected by sea state, access to draft marks, water density, vessel data, trim and tank-condition accuracy.'
  },
  'bunker-quantity-survey':{
    preparation:['Vessel, supplier and barge identification','Fuel grades, nominated quantities and planned transfer window','Tank tables and access for measurement where applicable'],
    deliverables:['Available tank readings and measurement conditions','Calculated fuel quantities and relevant reconciliation notes','Recorded differences and supporting survey observations'],
    limitations:'Fuel quantity surveying does not, by itself, verify chemical fuel quality. Measurement uncertainty, tank calibration and inaccessible tanks may limit the findings.'
  },
  'cargo-survey':{
    preparation:['Commodity and consignment details','Purpose of inspection, including loading, discharge, condition or damage','Relevant shipment records and site access arrangements'],
    deliverables:['Documented observations of accessible cargo','Condition or handling findings within agreed scope','Supporting photographs or records where authorized'],
    limitations:'A visual survey cannot establish concealed damage or condition of cargo not made available for inspection.'
  },
  'container-survey':{
    preparation:['Container number, shipment reference and current location','Reason for inspection and available incident information','Permission for opening and cargo access if required'],
    deliverables:['External and accessible internal-condition observations','Seal, damage and cargo observations where included','Inspection photographs and discrepancy notes as permitted'],
    limitations:'Evidence of contents or concealed damage depends on access and the inspection scope; sealed containers may not be opened without authorization.'
  },
  'on-off-hire-survey':{
    preparation:['Vessel particulars and charter-handover timing','Relevant charterparty instructions and agreed handover scope','Access to fuel tanks, vessel areas and supporting records'],
    deliverables:['Time-specific condition observations','Bunker remaining-on-board measurements where agreed','An inspection record for the handover parties'],
    limitations:'A condition record does not determine legal responsibility, and inaccessible spaces may fall outside the inspection.'
  },
  'cargo-certification': {
    preparation: ["Cargo type and required document or certification wording","Applicable shipping-line or receiving-party requirements","Supporting shipment documents and inspection access"],
    deliverables: ["Inspection findings relevant to the requested record","Document checks and any discrepancies","Authorized documentation only where scope and permission permit"],
    limitations: "Certificate format, authority and acceptance must be confirmed before engagement; a survey report is not automatically a statutory certificate."
  },
  'ism-audit': {
    preparation: ["Company or vessel safety management procedures","Agreed audit criteria and relevant document set","Personnel availability and audit schedule"],
    deliverables: ["Observations against agreed safety-management criteria","Documented nonconformities or improvement opportunities where identified","Findings and follow-up actions within the agreed audit scope"],
    limitations: "Internal ISM review does not replace flag-state, classification or other statutory certification."
  },
  'mlc-inspection': {
    preparation: ["Vessel information and agreed MLC review scope","Applicable crew records and welfare documentation","Permissions for accommodation and relevant interviews"],
    deliverables: ["Observations of accessible living and working conditions","Review notes on available documentation","Follow-up items within the agreed inspection scope"],
    limitations: "MLC-related inspections are not statutory certification unless specifically authorized by the appropriate authority."
  },
  'harmonized-audit': {
    preparation: ["Relevant management frameworks and intended audit scope","Applicable document procedures and previous findings","Audit schedule and staff availability"],
    deliverables: ["Separate observations for each framework reviewed","Consolidated visit notes where practical","Findings with referenced audit criteria"],
    limitations: "Coordinated audit work does not automatically satisfy external audit, statutory or certification requirements."
  },
  'hull-machinery-inspection': {
    preparation: ["Vessel specifications and machinery particulars","Known defects, repair records and desired inspection areas","Access arrangements, shutdowns and any safety permits"],
    deliverables: ["Accessible technical-condition observations","Records of visible defects and supporting photographs where permitted","Repair recommendations or progress notes if included"],
    limitations: "Accessible visual inspection is not equivalent to destructive testing, underwater survey or class approval; concealed defects may remain."
  },
  'pre-purchase-vetting': {
    preparation: ["Vessel identity, history and intended transaction scope","Available technical, class and maintenance records","Access windows and proposed sea trial or specialist checks if relevant"],
    deliverables: ["Recorded condition observations","Documents or maintenance items needing follow-up","Risk observations and explicit inspection limitations"],
    limitations: "Pre-purchase reviews cannot guarantee future performance or identify all hidden defects; specialist tests require separate agreement."
  },
  'compass-adjustment': {
    preparation: ["Vessel position and operational availability","Compass type, relevant diagrams and previous deviation records if available","Required adjustment scope and available safe operating conditions"],
    deliverables: ["Assessment or adjustment observations where performed","Deviation measurements or records within the agreed scope","Recommendations for further checks where applicable"],
    limitations: "Adjustment requires suitable conditions, qualified personnel and vessel access; document issuance is subject to authority and scope."
  },
  'pi-condition-survey': {
    preparation: ["Vessel specifications and requested P&I scope","Previous survey findings and relevant available certificates","Inspection access and operational schedule"],
    deliverables: ["Observed vessel condition and risk findings","Supporting evidence where accessible and authorized","Recommendations or items requiring follow-up"],
    limitations: "A P&I survey is a scoped condition assessment, not a classification or statutory survey and not an insurance coverage determination."
  }
};
