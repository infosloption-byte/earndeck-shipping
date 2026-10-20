import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { EnquiryForm } from '@/components/EnquiryForm';
import { PageHero } from '@/components/PageHero';
import { ports, services, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact & Request a Marine Survey',
  description:
    'Contact Earndeck Shipping for marine survey attendance, cargo inspection, bunker surveys or maritime audits in Sri Lanka.',
  alternates: { canonical: '/contact' },
};

export default async function Contact({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const query = await searchParams;
  const selected = services.some((s) => s.name === query.service) ? (query.service ?? '') : '';

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Tell us what <em>you need surveyed.</em>
          </>
        }
        sub="Share your vessel, port, preferred date and inspection scope."
        wavesFill="#fcfbf8"
      />

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="shell contact-grid">
          <div className="reveal">
            <div className="eyebrow">Operations desk</div>
            <h2>
              Let&rsquo;s start a <em>conversation.</em>
            </h2>
            <p>
              For attendance requests or service enquiries, send the form or contact our operations team directly.
              Please confirm scheduling with the team before relying on attendance.
            </p>
            <div className="info-cards">
              <a className="info-card" href={'mailto:' + site.email}>
                <Mail size={22} aria-hidden="true" />
                <div>
                  <span>Email</span>
                  <strong>{site.email}</strong>
                </div>
              </a>
              <a className="info-card" href={'tel:' + site.phone.replace(/\s/g, '')}>
                <Phone size={22} aria-hidden="true" />
                <div>
                  <span>Phone</span>
                  <strong>{site.phone}</strong>
                </div>
              </a>
              <div className="info-card">
                <MapPin size={22} aria-hidden="true" />
                <div>
                  <span>Office</span>
                  <address>{site.address}</address>
                </div>
              </div>
            </div>
            <p style={{ marginTop: 28, fontSize: 14 }}>Port coverage: {ports.join(' · ')}</p>
          </div>

          <div className="reveal" style={{ '--d': '120ms' } as CSSProperties}>
            <EnquiryForm service={selected} />
          </div>
        </div>
      </section>
    </>
  );
}
