import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { ServiceFinder } from '@/components/ServiceFinder';
import { ServiceGrid, type ServiceItem } from '@/components/ServiceGrid';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Marine Surveying & Inspection Services in Sri Lanka',
  description:
    'Explore draft surveys, bunker quantity surveys, cargo and container inspections, vessel condition surveys and maritime audits in Sri Lanka.',
  alternates: { canonical: '/services' },
};

const items: ServiceItem[] = services.map((s) => ({
  slug: s.slug,
  name: s.name,
  category: s.category,
  group: s.group,
  icon: s.icon,
  description: s.description,
}));

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our maritime services"
        title={
          <>
            Specialist surveys. <em>Clear decisions.</em>
          </>
        }
        sub="Explore each service, its typical scope, inspection process and frequently asked questions."
        wavesFill="#ffffff"
      />

      <section className="section section-white" style={{ paddingTop: 90 }}>
        <div className="shell">
          <ServiceGrid items={items} headingLevel="h2" />
        </div>
      </section>

      <section id="finder" className="section section-dark on-dark">
        <div className="shell">
          <ServiceFinder />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
