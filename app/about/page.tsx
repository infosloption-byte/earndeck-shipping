import type { Metadata } from 'next';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { ArrowUpRight, Eye, FileText, Ruler } from 'lucide-react';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { PortsExplorer } from '@/components/PortsExplorer';
import { frameworks, ports, process, team } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Our Marine Survey Company',
  description:
    'Learn about Earndeck Shipping marine surveys, inspections and consultancy services across Sri Lanka.',
  alternates: { canonical: '/about' },
};

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

const values = [
  {
    icon: Eye,
    title: 'Independence',
    text: 'Observations are recorded as found, to give every party a fair and impartial basis for its decisions.',
  },
  {
    icon: Ruler,
    title: 'Precision',
    text: 'Careful measurement, clearly stated assumptions and calculations that can be reviewed and checked.',
  },
  {
    icon: FileText,
    title: 'Clarity',
    text: 'Scope defined up front, findings documented in plain terms and supporting records kept with the report.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our company"
        title={
          <>
            Independent outlook. <em>Maritime focus.</em>
          </>
        }
        sub="Surveying and inspection services for maritime stakeholders operating in Sri Lanka."
        wavesFill="#fcfbf8"
      />

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="shell">
          <div className="intro-grid">
            <div className="reveal">
              <div className="eyebrow">About Earndeck</div>
              <h2>
                Experience through <em>careful observation.</em>
              </h2>
            </div>
            <div className="intro-copy reveal" style={delay(120)}>
              <p className="lead">
                Earndeck Shipping provides marine surveying, inspection and maritime consultancy services.
              </p>
              <p>
                Our work covers cargo, vessel condition, fuel quantity verification and selected maritime compliance
                reviews. We emphasise clear scope definition and documented findings tailored to the needs of each
                assignment.
              </p>
              <p>
                Listed port coverage includes {ports.join(', ')}. Please confirm scheduling and service availability
                with our operations team.
              </p>
              <Link className="link-arrow" href="/contact">
                Talk to our team <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="shell">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">What we stand for</div>
              <h2 style={{ marginBottom: 0 }}>
                Three principles behind <em>every report.</em>
              </h2>
            </div>
          </div>
          <div className="values">
            {values.map((v, i) => (
              <div key={v.title} className="value reveal" style={delay(i * 100)}>
                <v.icon size={34} strokeWidth={1.5} aria-hidden="true" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">How we work</div>
              <h2 style={{ marginBottom: 0 }}>
                A clear process, <em>start to finish.</em>
              </h2>
            </div>
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

      <section id="ports" className="section section-ivory" style={{ scrollMarginTop: 60 }}>
        <div className="shell">
          <PortsExplorer />
        </div>
      </section>

      <section className="frameworks-band" style={{ background: '#fff' }}>
        <div className="shell frameworks-inner">
          <div className="reveal">
            <h2>
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

      <section className="section section-white" id="team">
        <div className="shell">
          <div className="section-head"><div><div className="eyebrow">The people behind the surveys</div><h2>Meet our <em>marine team.</em></h2></div></div>
          <p className="team-intro">Meet the professionals associated with Earndeck Shipping. The team list and roles are pending final confirmation.</p>
          <div className="team-grid">{team.map((member) => <article className="team-card" key={member.name}>
            <div className="team-avatar" aria-hidden="true">{member.name.split(' ').map(part => part[0]).join('')}</div>
            <div className="team-bio"><h3>{member.name}</h3><span>{member.role}</span><p>{member.description}</p></div>
          </article>)}</div>
          <p className="team-caption">Portrait photographs and detailed biographies will be added once approved by the company.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
