import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { servicePhotos } from '@/lib/service-photos';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check, Mail, MapPin, Phone, Plus, Users } from 'lucide-react';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { ServiceGrid, type ServiceItem } from '@/components/ServiceGrid';
import { ServiceIcon } from '@/components/ServiceIcon';
import { ports, services, site } from '@/lib/site';
import { content } from '@/lib/service-content';
import { serviceGuidance } from '@/lib/service-guidance';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.name + ' in Sri Lanka',
    description: s.description + ' Service information, survey process, FAQs and enquiry options.',
    alternates: { canonical: '/services/' + s.slug },
    openGraph: { title: s.name + ' | Earndeck Shipping', description: s.description },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const photo = servicePhotos[slug];
  const info = content[slug];
  const guidance = serviceGuidance[slug];
  if (!info) notFound();

  const related: ServiceItem[] = [
    ...services.filter((x) => x.group === s.group && x.slug !== s.slug),
    ...services.filter((x) => x.group !== s.group),
  ]
    .slice(0, 3)
    .map((x) => ({
      slug: x.slug,
      name: x.name,
      category: x.category,
      group: x.group,
      icon: x.icon,
      description: x.description,
    }));

  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        serviceType: s.name,
        url: site.url + '/services/' + s.slug,
        provider: { '@id': site.url + '/#business' },
        areaServed: { '@type': 'Country', name: 'Sri Lanka' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url + '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: site.url + '/services' },
          { '@type': 'ListItem', position: 3, name: s.name, item: site.url + '/services/' + s.slug },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: info.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <PageHero
        eyebrow={s.category}
        title={
          <>
            {s.name}
            <em>.</em>
          </>
        }
        sub={s.description}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: s.name }]}
        wavesFill="#fcfbf8"
        art={<ServiceIcon name={s.icon} size={92} />}
      >
        <div className="hero-chips">
          <span className="chip">
            <Check size={16} aria-hidden="true" /> {s.group}
          </span>
          <span className="chip">
            <MapPin size={16} aria-hidden="true" /> {ports.join(' · ')}
          </span>
        </div>
      </PageHero>

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="shell detail-layout">
          <article className="detail-main">
            {photo && <figure className="service-detail-photo reveal"><div className="service-detail-photo-frame"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1000px) 100vw, 760px" quality={75} /></div><figcaption>Illustrative maritime photography · {photo.credit}. Not an Earndeck assignment photograph.</figcaption></figure>}
            <section id="overview" className="reveal">
              <div className="eyebrow">Overview</div>
              <h2>
                What this survey <em>covers.</em>
              </h2>
              <p className="lead">{info.intro}</p>
            </section>

            <section id="scope" className="reveal">
              <div className="eyebrow">Scope</div>
              <h2>Typical inspection scope</h2>
              <ul className="scope-cards">
                {s.points.map((p) => (
                  <li key={p}>
                    <Check size={22} aria-hidden="true" />
                    <strong>{p}</strong>
                  </li>
                ))}
              </ul>
            </section>

            <section id="process" className="reveal">
              <div className="eyebrow">Process</div>
              <h2>How the work is carried out</h2>
              <ol className="timeline">
                {info.process.map((p, i) => (
                  <li key={p}>
                    <span className="n">{String(i + 1).padStart(2, '0')}</span>
                    <p>{p}</p>
                  </li>
                ))}
              </ol>
            </section>

            {guidance && (
              <section id="preparation" className="reveal">
                <div className="eyebrow">Planning and reporting</div>
                <h2>Before the survey &amp; typical deliverables</h2>
                <h3>What to prepare</h3>
                <ul>{guidance.preparation.map(item => <li key={item}>{item}</li>)}</ul>
                <h3>What the report may include</h3>
                <ul>{guidance.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
                <p><strong>Important limitations:</strong> {guidance.limitations}</p>
                <p>Exact attendance, methods and deliverables are agreed with the operations team for each assignment.</p>
              </section>
            )}
            <section id="who" className="reveal">
              <div className="eyebrow">Who requests this</div>
              <h2>Who this service is for</h2>
              <div className="audience-card">
                <Users size={28} aria-hidden="true" />
                <p>{info.audience}</p>
              </div>
            </section>

            <section id="faq" className="reveal">
              <div className="eyebrow">FAQ</div>
              <h2>Frequently asked questions</h2>
              <div className="faq">
                {info.faqs.map((f) => (
                  <details key={f.q}>
                    <summary>
                      {f.q}
                      <Plus size={22} aria-hidden="true" />
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
              <p style={{ marginTop: 34, fontSize: 15 }}>
                Enquiries are welcome for {ports.join(', ')} and selected anchorage attendance, subject to operational
                confirmation. Exact deliverables, credentials, regulatory acceptance, cost and attendance are confirmed
                for each assignment.
              </p>
            </section>
            <section className="reveal">
              <div className="eyebrow">Explore further</div>
              <h2>Explore our Sri Lanka marine survey team</h2>
              <p>Learn about our marine surveying professionals, their documented qualifications, and our port attendance coverage.</p>
              <p><Link className="link-arrow" href="/team">Meet the survey team <ArrowUpRight size={18} aria-hidden="true" /></Link></p>
              <p><Link className="link-arrow" href="/ports">Sri Lanka port coverage <ArrowUpRight size={18} aria-hidden="true" /></Link></p>
              <p><Link className="link-arrow" href="/certifications">Certificates and licences <ArrowUpRight size={18} aria-hidden="true" /></Link></p>
            </section>
          </article>

          <aside className="detail-aside">
            <div className="quote-card">
              <div className="eyebrow light" style={{ marginBottom: 18 }}>
                Enquire
              </div>
              <h3>Request a survey quotation</h3>
              <p>Share the vessel name, port, attendance date and required scope.</p>
              <Link
                className="btn btn-primary btn-block"
                href={'/contact?service=' + encodeURIComponent(s.name)}
              >
                Request quotation <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <div className="contact-mini">
                <a href={'mailto:' + site.email}>
                  <Mail size={15} style={{ display: 'inline', marginRight: 8, verticalAlign: '-2px' }} aria-hidden="true" />
                  {site.email}
                </a>
                <a href={'tel:' + site.phone.replace(/\s/g, '')}>
                  <Phone size={15} style={{ display: 'inline', marginRight: 8, verticalAlign: '-2px' }} aria-hidden="true" />
                  {site.phone}
                </a>
              </div>
            </div>
            <nav className="toc" aria-label="On this page">
              <h4>On this page</h4>
              <a href="#overview">Overview</a>
              <a href="#scope">Scope</a>
              <a href="#process">Process</a>
              {guidance && <a href="#preparation">Preparation &amp; reporting</a>}
              <a href="#who">Who it&rsquo;s for</a>
              <a href="#faq">FAQ</a>
            </nav>
          </aside>
        </div>
      </section>

      <section className="related">
        <div className="shell">
          <h2>
            Related <em>services</em>
          </h2>
          <ServiceGrid items={related} filters={false} />
        </div>
      </section>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld).replace(/</g, '\\u003c') }}
      />
    </>
  );
}
