'use client';
import {usePathname} from 'next/navigation';
import {useEffect,useState} from 'react';
export function NavigationProgress(){
 const pathname=usePathname();const [loading,setLoading]=useState(false);
 useEffect(()=>{setLoading(false)},[pathname]);
 useEffect(()=>{
  const onClick=(event:MouseEvent)=>{
   const target=event.target;
   if(!(target instanceof Element))return;
   const anchor=target.closest<HTMLAnchorElement>('a[href]');
   if(!anchor||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||anchor.target==='_blank')return;
   const url=new URL(anchor.href,window.location.href);
   if(url.origin!==window.location.origin||url.pathname===window.location.pathname)return;
   setLoading(true);
  };
  document.addEventListener('click',onClick);
  return()=>document.removeEventListener('click',onClick);
 },[]);
 useEffect(()=>{if(!loading)return;const timeout=window.setTimeout(()=>setLoading(false),12000);return()=>window.clearTimeout(timeout)},[loading]);
 return loading?<div className="route-progress" role="status" aria-live="polite" aria-label="Loading page"><img src="/earndeck-logo.png" alt="Earndeck Shipping"/><div className="route-progress-line"/><p>Navigating to your destination</p></div>:null;
}