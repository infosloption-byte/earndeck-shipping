import Link from 'next/link';
import { Brand } from './Brand';
import { ports, services, site } from '@/lib/site';

export function Footer() {
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
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/about">About us</Link>
            <Link href="/services">All services</Link>
            <Link href="/about#ports">Port coverage</Link>
            <Link href="/contact">Request a survey</Link>
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
