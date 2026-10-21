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
  }
};
