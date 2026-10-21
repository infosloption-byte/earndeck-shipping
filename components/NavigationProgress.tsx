'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { LogoLoader } from './LogoLoader';

/** The loader stays at least this long once shown, so it never flashes. */
const MIN_VISIBLE_MS = 600;
/** Give up waiting for images/fonts after this long and reveal the page anyway. */
const READY_TIMEOUT_MS = 5000;
/** Absolute fail-safe, in case a navigation never completes. */
const FAILSAFE_MS = 15000;
const FADE_MS = 350;

type Phase = 'idle' | 'show' | 'hide';

const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => r()));

/** Resolves once web fonts and the page's images have loaded (or a timeout passes). */
async function pageReady() {
  await nextFrame();
  await nextFrame(); // new route has committed and painted
  const waits: Promise<unknown>[] = [];
  if (document.fonts?.ready) waits.push(document.fonts.ready);
  document.querySelectorAll<HTMLImageElement>('main img, footer img').forEach((img) => {
    if (!img.complete) {
      waits.push(new Promise((r) => { img.addEventListener('load', r, { once: true }); img.addEventListener('error', r, { once: true }); }));
    } else if (img.decode) {
      waits.push(img.decode().catch(() => undefined));
    }
  });
  await Promise.race([Promise.all(waits), new Promise((r) => setTimeout(r, READY_TIMEOUT_MS))]);
}

/**
 * Shows the logo loader the moment a menu / internal link is clicked, and keeps it up until the destination
 * page has rendered AND its fonts and images are ready — not merely until the URL changes.
 */
export function NavigationProgress() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>('idle');
  const startedAt = useRef(0);
  const pathRef = useRef(pathname);
  const timers = useRef<number[]>([]);

  const clearTimers = () => { timers.current.forEach((t) => window.clearTimeout(t)); timers.current = []; };
  const later = (fn: () => void, ms: number) => { timers.current.push(window.setTimeout(fn, ms)); };

  // 1) a click on an internal link to a different page starts the loader
  useEffect(() => {
    // Registered in the CAPTURE phase on purpose: next/link calls preventDefault() on its own click handler,
    // so by the bubble phase `event.defaultPrevented` is already true for every client-side navigation.
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      clearTimers();
      startedAt.current = Date.now();
      setPhase('show');
      later(() => setPhase('idle'), FAILSAFE_MS); // fail-safe
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // 2) when the new route has arrived, wait until it is genuinely ready, then fade out
  useEffect(() => {
    if (pathRef.current === pathname) return;
    pathRef.current = pathname;
    let cancelled = false;
    (async () => {
      await pageReady();
      if (cancelled) return;
      const remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - startedAt.current));
      clearTimers();
      later(() => { setPhase('hide'); later(() => setPhase('idle'), FADE_MS); }, remaining);
    })();
    return () => { cancelled = true; };
  }, [pathname]);

  // lock page scroll while the loader is up
  useEffect(() => {
    document.documentElement.classList.toggle('is-loading', phase !== 'idle');
    return () => document.documentElement.classList.remove('is-loading');
  }, [phase]);

  useEffect(() => clearTimers, []);

  if (phase === 'idle') return null;
  return <LogoLoader phase={phase} label="Loading page" />;
}
