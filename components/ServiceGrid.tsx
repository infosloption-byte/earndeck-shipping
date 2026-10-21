'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import { serviceGroups, type IconName } from '@/lib/site';
import { servicePhotos } from '@/lib/service-photos';

export type ServiceItem = {
  slug: string;
  name: string;
  category: string;
  group: string;
  icon: IconName;
  description: string;
};

type Props = {
  items: ServiceItem[];
  /** Make the first card a large feature card (home page). */
  featured?: boolean;
  /** Show the "not sure?" card that links to the survey finder. */
  finderCard?: boolean;
  /** Show group filter tabs. */
  filters?: boolean;
  headingLevel?: 'h2' | 'h3';
};

export function ServiceGrid({ items, featured = false, finderCard = false, filters = true, headingLevel = 'h3' }: Props) {
  const [active, setActive] = useState<string>('All');
  const Heading = headingLevel;
  const all = active === 'All';
  // Cells used by the cards before the finder card (a featured first card spans two columns).
  const cells = featured ? items.length + 1 : items.length;
  const ctaClass = (cells + 1) % 3 === 0 ? 'svc-card svc-cta-card cta-1' : 'svc-card svc-cta-card';

  return (
    <>
      {filters && (
        <div className="filter-tabs" role="group" aria-label="Filter services by area">
          {['All', ...serviceGroups.map((g) => g.name)].map((name) => {
            const count = name === 'All' ? items.length : items.filter((i) => i.group === name).length;
            return (
              <button
                key={name}
                type="button"
                className="filter-tab"
                aria-pressed={active === name}
                onClick={() => setActive(name)}
              >
                {name}
                <span className="count">{String(count).padStart(2, '0')}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className={featured && all ? 'svc-grid featured' : 'svc-grid'}>
        {items.map((s) => (
          <Link
            key={s.slug}
            href={'/services/' + s.slug}
            className={all || s.group === active ? (featured ? 'svc-card svc-photo-card' : 'svc-card') : 'svc-card hidden'}
          >
            {featured && <div className="svc-photo" aria-hidden="true"><Image src={servicePhotos[s.slug].src} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" quality={75} loading="lazy" /></div>}
            <div className="svc-top">
              <span className="svc-icon">
                <ServiceIcon name={s.icon} />
              </span>
              <span className="svc-arrow" aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="svc-body">
              <span className="svc-cat">{s.category}</span>
              <Heading>{s.name}</Heading>
              <p>{s.description}</p>
            </div>
          </Link>
        ))}
        {finderCard && (
          <a href="#finder" className={all ? ctaClass : ctaClass + ' hidden'}>
            <div className="svc-top">
              <span className="svc-icon">
                <ArrowRight size={24} strokeWidth={1.6} aria-hidden="true" />
              </span>
            </div>
            <div className="svc-body">
              <span className="svc-cat">Not sure?</span>
              <Heading>Tell us what&rsquo;s happening and we&rsquo;ll point you to the right survey.</Heading>
            </div>
          </a>
        )}
      </div>
    </>
  );
}
