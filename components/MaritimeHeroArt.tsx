import { Anchor, Award, BriefcaseBusiness, Compass, FileCheck2, Mail, MapPinned, PackageCheck, ShieldCheck, Ship, Users } from 'lucide-react';
const visuals={
team:Users,people:Users,ports:MapPinned,port:MapPinned,careers:BriefcaseBusiness,career:BriefcaseBusiness,
credentials:Award,certificate:Award,certification:Award,licence:Award,
contact:Mail,touch:Mail,privacy:ShieldCheck,services:Ship,maritime:Ship,
company:Anchor,survey:Compass,cargo:PackageCheck,compliance:FileCheck2
};
export function MaritimeHeroArt({topic}:{topic:string}){
 const label=topic.toLowerCase();
 const match=Object.entries(visuals).find(([key])=>label.includes(key));
 const Symbol=match?.[1]??Compass;
 return <div className="maritime-illustration">
  <div className="maritime-orbit maritime-orbit-outer"/>
  <div className="maritime-orbit maritime-orbit-inner"/>
  <div className="maritime-sweep"/>
  <span className="maritime-point maritime-point-one"/><span className="maritime-point maritime-point-two"/><span className="maritime-point maritime-point-three"/>
  <div className="maritime-illustration-core"><Symbol size={88} strokeWidth={1.2} aria-hidden="true"/></div>
  <span className="maritime-art-label">EARNDECK / MARITIME</span>
  <span className="maritime-art-coordinates">06° 56′ N&nbsp; · &nbsp;79° 51′ E</span>
 </div>;
}
