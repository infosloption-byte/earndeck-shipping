import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marine Surveyors in Sri Lanka | Earndeck Shipping',
  description: 'Independent marine surveyors in Sri Lanka for draft surveys, bunker quantity checks, cargo inspections and vessel surveys at Colombo, Galle, Hambantota and Trincomalee.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Marine Surveyors in Sri Lanka | Earndeck Shipping', description: 'Independent cargo, vessel and marine survey services across Sri Lanka\'s major ports.', url: '/' },
};
import type { CSSProperties } from 'react';
import { ArrowUpRight, ClipboardCheck, Compass, Ship, ShieldCheck } from 'lucide-react';
import { CtaBand } from '@/components/CtaBand';
import { DraftScale } from '@/components/DraftScale';
import { HeroRing } from '@/components/HeroRing';
import { PortsExplorer } from '@/components/PortsExplorer';
import { ServiceFinder } from '@/components/ServiceFinder';
import { ServiceGrid, type ServiceItem } from '@/components/ServiceGrid';
import { Waves } from '@/components/Waves';
import { BrandMark } from '@/components/Brand';
import { frameworks, ports, process, services } from '@/lib/site';

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

const serviceItems: ServiceItem[] = services.map((s) => ({
  slug: s.slug,
  name: s.name,
  category: s.category,
  group: s.group,
  icon: s.icon,
  description: s.description,
}));

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Independent observations',
    text: 'Impartial findings for owners, charterers, receivers and insurers.',
  },
  {
    icon: ClipboardCheck,
    title: 'Clear documentation',
    text: 'Readings, assumptions and calculations recorded in a structured report.',
  },
  {
    icon: Ship,
    title: 'Maritime focus',
    text: 'A practice built around vessels, cargo, fuel and compliance.',
  },
  {
    icon: Compass,
    title: 'Port attendance',
    text: `Coverage across ${ports.slice(0, -1).join(', ')} and ${ports[ports.length - 1]}, subject to confirmation.`,
  },
];

const principles = [
  { n: '01', title: 'Independent', text: 'Observations recorded as found, with no stake in the commercial outcome.' },
  { n: '02', title: 'Precise', text: 'Careful measurement, stated assumptions and calculations that can be checked.' },
  { n: '03', title: 'Documented', text: 'Findings and supporting records delivered in a form decision-makers can use.' },
];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero on-dark">
        <HeroRing />

        <div className="shell hero-grid">
          <div>
            <div className="eyebrow light reveal">Independent marine survey &amp; consultancy · Sri Lanka</div>
            <h1 className="reveal" style={delay(80)}>
              Precision you can <em>put on record.</em>
            </h1>
            <p className="hero-lede reveal" style={delay(160)}>
              Independent marine surveying, inspection and compliance expertise across Sri Lanka&rsquo;s major ports —
              documented clearly, so commercial and operational decisions rest on facts.
            </p>
            <div className="hero-actions reveal" style={delay(240)}>
              <Link className="btn btn-primary" href="/contact">
                Request a survey <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <Link className="btn btn-ghost" href="/services">
                Explore our services
              </Link>
            </div>
            <div className="hero-facts reveal" style={delay(320)}>
              <div>
                <strong>{services.length}</strong>
                <span>Specialist services</span>
              </div>
              <div>
                <strong>{ports.length}</strong>
                <span>Ports covered</span>
              </div>
              <div>
                <strong style={{ fontSize: 30, paddingTop: 10 }}>Independent</strong>
                <span>Impartial findings</span>
              </div>
            </div>
          </div>

          <div className="reveal" style={delay(200)}>
            <DraftScale />
          </div>
        </div>
        <Waves fill="#f7f4ee" />
      </section>

      {/* ---------- Pillars + intro ---------- */}
      <section className="section-ivory" style={{ paddingBottom: 130 }}>
        <div className="shell">
          <div className="pillars">
            {pillars.map((p, i) => (
              <div key={p.title} className="pillar reveal" style={delay(i * 90)}>
                <span className="pillar-icon">
                  <p.icon size={24} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>

          <div className="intro-grid">
            <div className="reveal">
              <div className="eyebrow">Who we are</div>
              <h2>
                Every detail matters at sea. We <em>record it.</em>
              </h2>
            </div>
            <div className="intro-copy reveal" style={delay(120)}>
              <p className="lead">
                Earndeck Shipping combines practical maritime insight, independent observation and clear documentation.
              </p>
              <p>
                From cargo surveys and bunker measurement to vessel condition assessments and compliance audits, we
                support marine industry stakeholders with specialist services — scoped carefully, delivered
                consistently and reported in plain, verifiable terms.
              </p>
              <Link className="link-arrow" href="/about">
                Discover our company <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="principles">
            {principles.map((p, i) => (
              <div key={p.n} className="principle reveal" style={delay(i * 100)}>
                <span className="num">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section id="services" className="section section-white">
        <div className="shell">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">Our expertise</div>
              <h2 style={{ marginBottom: 0 }}>
                Specialist surveys for <em>every stage</em> of the voyage.
              </h2>
            </div>
            <p>
              Purpose-built surveying and inspection services that bring confidence, transparency and clarity to
              maritime decisions.
            </p>
          </div>
          <div className="reveal" style={delay(100)}>
            <ServiceGrid items={serviceItems} featured finderCard />
          </div>
        </div>
      </section>

      {/* ---------- Finder ---------- */}
      <section id="finder" className="section section-dark on-dark">
        <div className="shell">
          <ServiceFinder />
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section section-ivory">
        <div className="shell">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">How it works</div>
              <h2 style={{ marginBottom: 0 }}>
                From first enquiry to <em>final report.</em>
              </h2>
            </div>
            <p>A simple, transparent process so you always know what is being surveyed, when and why.</p>
          </div>
          <div className="steps">
            {process.map((s, i) => (
              <div key={s.title} className="step reveal" style={delay(i * 110)}>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Ports ---------- */}
      <section id="ports" className="section section-white">
        <div className="shell">
          <PortsExplorer />
        </div>
      </section>

      {/* ---------- Frameworks ---------- */}
      <section className="frameworks-band">
        <div className="shell frameworks-inner">
          <div className="reveal">
            <BrandMark height={46} tone="dark" />
            <h2 style={{ marginTop: 18 }}>
              Reviews referenced to <em>recognised frameworks.</em>
            </h2>
          </div>
          <div className="fw-list reveal" style={delay(120)}>
            {frameworks.map((f) => (
              <div key={f.code} className="fw">
                <strong>{f.code}</strong>
                <span>{f.name}</span>
              </div>
            ))}
            <p className="fw-note">
              Statutory authorisation and certification vary by assignment — please confirm requirements with our team
              before engaging.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
