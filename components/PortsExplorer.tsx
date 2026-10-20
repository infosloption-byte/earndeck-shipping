'use client';

import { useState, type CSSProperties } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LANKA_PATH, LANKA_VIEWBOX, PORT_POSITIONS } from '@/lib/lanka';
import { ports } from '@/lib/site';

export function PortsExplorer() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="ports-grid">
      <div className="reveal">
        <div className="map-card">
          <svg viewBox={LANKA_VIEWBOX} role="img" aria-label="Schematic map of Sri Lanka marking the ports of Colombo, Galle, Hambantota and Trincomalee">
            <defs>
              <pattern id="land-dots" width="9" height="9" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.1" fill="rgba(143,195,207,.35)" />
              </pattern>
            </defs>
            <path d={LANKA_PATH} fill="rgba(143,195,207,.07)" stroke="none" />
            <path d={LANKA_PATH} fill="url(#land-dots)" stroke="rgba(143,195,207,.6)" strokeWidth="1.4" strokeLinejoin="round" />
            {ports.map((p) => {
              const pos = PORT_POSITIONS[p];
              if (!pos) return null;
              const [x, y] = pos;
              const on = active === p;
              return (
                <g
                  key={p}
                  className={on ? 'port-pin active' : 'port-pin'}
                  onMouseEnter={() => setActive(p)}
                  onMouseLeave={() => setActive(null)}
                >
                  <circle className="pulse" cx={x} cy={y} r="7" fill="#f28c45" opacity="0.5" />
                  <circle cx={x} cy={y} r="6" fill="#f28c45" stroke="#04131e" strokeWidth="2" />
                  <text
                    x={x + 16}
                    y={y + 5}
                    fontSize="16"
                    fill="#fff"
                    letterSpacing="1.5"
                    style={{ fontFamily: 'var(--font-mono), monospace' }}
                  >
                    {p.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>
          <p className="map-note">Schematic · not for navigation</p>
        </div>
      </div>

      <div className="reveal" style={{ '--d': '120ms' } as CSSProperties}>
        <div className="eyebrow">Port coverage</div>
        <h2>
          Local knowledge. <em>Ocean-wide thinking.</em>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 520 }}>
          Survey attendance is arranged across Sri Lanka&rsquo;s major ports and, subject to confirmation, selected
          offshore locations.
        </p>
        <ul className="port-list">
          {ports.map((p, i) => (
            <li
              key={p}
              className={active === p ? 'active' : undefined}
              onMouseEnter={() => setActive(p)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="n">0{i + 1}</span>
              <strong>{p}</strong>
              <ArrowUpRight size={22} aria-hidden="true" />
            </li>
          ))}
        </ul>
        <p className="ports-note">Please confirm scheduling and availability with our operations team.</p>
      </div>
    </div>
  );
}
