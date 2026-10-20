'use client';

import Link from 'next/link';
import { useState, type CSSProperties } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { scenarios, services } from '@/lib/site';

export function ServiceFinder() {
  const [selected, setSelected] = useState<string | null>(null);
  const scenario = scenarios.find((s) => s.id === selected);
  const recommended = scenario
    ? scenario.slugs.map((slug) => services.find((s) => s.slug === slug)).filter((s) => s !== undefined)
    : [];

  return (
    <div className="finder">
      <div className="finder-intro reveal">
        <div className="eyebrow light">Survey finder</div>
        <h2>
          Not sure which survey <em>you need?</em>
        </h2>
        <p>
          Choose the situation closest to yours and we&rsquo;ll show the services that usually fit. Scope is always
          confirmed with our team before attendance.
        </p>
      </div>

      <div className="reveal" style={{ '--d': '120ms' } as CSSProperties}>
        <div className="finder-opts" role="group" aria-label="Choose your situation">
          {scenarios.map((s) => (
            <button
              key={s.id}
              type="button"
              className="finder-opt"
              aria-pressed={selected === s.id}
              onClick={() => setSelected(s.id)}
            >
              <span className="dot" aria-hidden="true" />
              {s.label}
            </button>
          ))}
        </div>

        <div className="finder-result" aria-live="polite" key={selected ?? 'none'}>
          {scenario ? (
            <>
              <p className="hint">{scenario.hint}</p>
              <span className="label">Recommended services</span>
              {recommended.map((s) => (
                <Link key={s.slug} href={'/services/' + s.slug} className="finder-rec">
                  {s.name}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              ))}
              <Link
                className="btn btn-primary"
                href={'/contact?service=' + encodeURIComponent(recommended[0]?.name ?? '')}
              >
                Request a quotation <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </>
          ) : (
            <p className="hint" style={{ margin: 0 }}>
              Select a situation above to see the surveys that fit.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
