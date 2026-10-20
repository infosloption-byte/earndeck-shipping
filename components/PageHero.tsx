import Link from 'next/link';
import type { ReactNode } from 'react';
import { HeroRing } from './HeroRing';
import { Waves } from './Waves';

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  crumbs?: Crumb[];
  /** Colour of the front wave: match the background of the section that follows. */
  wavesFill?: string;
  /** Optional large decorative element shown on the right (e.g. a service icon). */
  art?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, sub, crumbs, wavesFill = '#fcfbf8', art, children }: Props) {
  return (
    <section className="page-hero on-dark">
      <HeroRing />
      {art && (
        <div className="page-art" aria-hidden="true">
          {art}
        </div>
      )}
      <div className="shell">
        {crumbs && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={c.label}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
                {i < crumbs.length - 1 ? ' /' : ''}
              </span>
            ))}
          </nav>
        )}
        <div className="eyebrow light">{eyebrow}</div>
        <h1>{title}</h1>
        {sub && <p className="sub">{sub}</p>}
        {children}
      </div>
      <Waves fill={wavesFill} />
    </section>
  );
}
