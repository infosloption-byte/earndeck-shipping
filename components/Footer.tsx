import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';
import { Brand } from './Brand';
import { ports, services, site } from '@/lib/site';

export function Footer() {
  const hasLicense=fs.existsSync(path.join(process.cwd(),'public','brand','license.webp'));
  return (
    <footer className="footer">
      <div className="footer-word" aria-hidden="true">
        EARNDECK
      </div>
      <div className="shell">
        <div className="footer-grid">
          <div>
            <Brand />
            <p style={{ maxWidth: 340 }}>
              Independent marine surveying, inspection and maritime consultancy across Sri Lanka&rsquo;s major ports.
            </p>
            {hasLicense&&<div className="footer-license"><img src="/brand/license.webp" alt="Earndeck Shipping licence and association emblems" loading="lazy" width="780" height="180"/></div>}
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/about">About us</Link>
            <Link href="/services">All services</Link>
            <Link href="/about#ports">Port coverage</Link>
            <Link href="/contact">Request a survey</Link>
            <Link href="/careers">Marine careers</Link>
            <Link href="/certifications">Certifications</Link>
            <Link href="/privacy">Privacy notice</Link>
          </div>
          <div>
            <h3>Services</h3>
            {services.slice(0, 6).map((s) => (
              <Link key={s.slug} href={'/services/' + s.slug}>
                {s.name}
              </Link>
            ))}
          </div>
          <div>
            <h3>Contact</h3>
            <a href={'mailto:' + site.email}>{site.email}</a>
            <a href={'tel:' + site.phone.replace(/\s/g, '')}>{site.phone}</a>
            <p>{site.address}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} {site.legal}. All rights reserved.
          </span>
          <span>{ports.join(' · ')}</span>
        </div>
      </div>
    </footer>
  );
}
