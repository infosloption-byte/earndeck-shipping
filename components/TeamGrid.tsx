import type { CSSProperties } from 'react';
import { initialsOf, portraitFor, team } from '@/lib/team';

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

export function TeamGrid() {
  return (
    <div className="team-grid">
      {team.map((m, i) => {
        const photo = portraitFor(m.slug);
        return (
          <article key={m.slug} className="team-card reveal" style={delay((i % 3) * 90)}>
            {photo ? (
              <div className="team-photo">
                <img className="portrait" src={photo} alt={`${m.name}, ${m.role}`} loading="lazy" decoding="async" />
              </div>
            ) : (
              <div className="team-photo is-monogram" aria-hidden="true">
                <span>{initialsOf(m.name)}</span>
              </div>
            )}
            <div className="team-bio">
              <h3>{m.name}</h3>
              <span className="team-role">{m.role}</span>
              <p>{m.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
