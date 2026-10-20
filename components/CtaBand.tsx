import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { site } from '@/lib/site';

export function CtaBand({ title }: { title?: ReactNode }) {
  return (
    <section className="cta-band">
      <div className="shell cta-inner">
        <div className="reveal">
          <div className="eyebrow light">Get in touch</div>
          <h2>{title ?? <>Need a survey or inspection <em>arranged?</em></>}</h2>
          <p style={{ color: '#c6d6dd', fontSize: 18, maxWidth: 520, margin: '22px 0 34px' }}>
            Share the vessel, port, preferred date and scope. Our operations team will confirm attendance and next steps.
          </p>
          <Link className="btn btn-primary" href="/contact">
            Request a survey <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="cta-side reveal" style={{ '--d': '120ms' } as CSSProperties}>
          <a className="contact-line" href={'mailto:' + site.email}>
            <Mail size={22} aria-hidden="true" /> {site.email}
          </a>
          <a className="contact-line" href={'tel:' + site.phone.replace(/\s/g, '')}>
            <Phone size={22} aria-hidden="true" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
