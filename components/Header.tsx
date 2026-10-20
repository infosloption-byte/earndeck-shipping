'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type FocusEvent } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { Brand } from './Brand';
import { serviceGroups, services } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mega, setMega] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  // solid background once the page scrolls
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menus on navigation
  useEffect(() => {
    setMobile(false);
    setMega(false);
  }, [pathname]);

  // lock scroll behind the mobile menu
  useEffect(() => {
    document.body.classList.toggle('menu-open', mobile);
    return () => document.body.classList.remove('menu-open');
  }, [mobile]);

  // Escape closes menus
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMega(false);
        setMobile(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openMega = () => {
    window.clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMegaSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMega(false), 140);
  };
  const onBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMega(false);
  };

  const is = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  return (
    <>
      <header className={solid || mobile ? 'site-header is-solid' : 'site-header'}>
        <div className="shell nav">
          <Brand />

          <nav className="nav-links" aria-label="Main navigation">
            <div className="nav-item" onMouseEnter={openMega} onMouseLeave={closeMegaSoon} onBlur={onBlur}>
              <button
                type="button"
                className={is('/services') ? 'nav-link active' : 'nav-link'}
                aria-expanded={mega}
                aria-controls="services-menu"
                onClick={() => setMega((v) => !v)}
              >
                Services <ChevronDown size={16} aria-hidden="true" />
              </button>
              <div id="services-menu" className={mega ? 'mega open' : 'mega'}>
                {serviceGroups.map((g) => (
                  <div key={g.name}>
                    <h4>{g.name}</h4>
                    {services
                      .filter((s) => s.group === g.name)
                      .map((s) => (
                        <Link key={s.slug} className="mega-link" href={'/services/' + s.slug}>
                          {s.name}
                        </Link>
                      ))}
                  </div>
                ))}
                <div className="mega-aside">
                  <p>Not sure which survey fits your situation?</p>
                  <Link className="btn btn-primary" href="/services">
                    All services <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
            <Link className={is('/about') ? 'nav-link active' : 'nav-link'} href="/about">
              About
            </Link>
            <Link className="nav-link" href="/about#ports">
              Port coverage
            </Link>
            <Link className="btn btn-primary nav-cta" href="/contact">
              Request a survey <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </nav>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={mobile}
            aria-controls="mobile-menu"
            aria-label={mobile ? 'Close menu' : 'Open menu'}
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={mobile ? 'mobile-menu open' : 'mobile-menu'}>
        <Link href="/services">Services</Link>
        <div className="m-sub">
          {services.map((s) => (
            <Link key={s.slug} href={'/services/' + s.slug}>
              {s.name}
            </Link>
          ))}
        </div>
        <Link href="/about">About</Link>
        <Link href="/about#ports">Port coverage</Link>
        <Link className="btn btn-primary" href="/contact">
          Request a survey <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
