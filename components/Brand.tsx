import Link from 'next/link';
/** Uses the approved company artwork. Place the provided logo at public/earndeck-logo.webp. */
export function BrandMark({size=44}:{size?:number}){return <span className="brand-symbol" style={{width:size,height:size}}><img src="/earndeck-logo.webp" alt="" width={size} height={size}/></span>}
export function Brand({onClick}:{onClick?:()=>void}){return <Link href="/" className="brand" aria-label="Earndeck Shipping — home" onClick={onClick}><BrandMark/><span className="brand-text"><strong>EARNDECK</strong><small>SHIPPING</small></span></Link>}
