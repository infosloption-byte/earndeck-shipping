import fs from 'node:fs';
import path from 'node:path';

/**
 * Team directory shown on the About page.
 *
 * PORTRAITS: drop a photo into `public/team/` named after the member's `slug`
 * (e.g. `public/team/thusith-fonseka.jpg`; .jpg, .jpeg, .png or .webp). It is picked up automatically at
 * build time — no code change needed. Until a photo exists a branded monogram card is shown.
 *
 * CONTENT: names, roles and descriptions below must match the company's own roster. Edit them freely.
 */
export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  description: string;
};

export const team: TeamMember[] = [
  {
    slug: 'thusith-fonseka',
    name: 'G. Thusith Fonseka',
    role: 'Managing Director / Deputy Principal Marine Surveyor',
    description: 'Marine surveying leadership and operations coordination.',
  },
  {
    slug: 'ajith-fernando',
    name: 'Ajith Fernando',
    role: 'Director of Operations',
    description: 'Operations leadership and marine industry coordination.',
  },
  {
    slug: 'hasitha-sandaruwan',
    name: 'Hasitha Sandaruwan',
    role: 'Head of Operations',
    description: 'Operational planning and survey coordination.',
  },
  {
    slug: 'prasanga-mallawaarachchi',
    name: 'Prasanga Mallawaarachchi',
    role: 'Marine Surveyor',
    description: 'Marine surveying and vessel-related inspections.',
  },
  {
    slug: 'clishal-perera',
    name: 'Clishal Perera',
    role: 'Marine Surveyor',
    description: 'Marine inspection and survey assignments.',
  },
];

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

/** Public URL of a member's portrait if a file for them exists in public/team, otherwise undefined. */
export function portraitFor(slug: string): string | undefined {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(process.cwd(), 'public', 'team', `${slug}.${ext}`))) return `/team/${slug}.${ext}`;
  }
  return undefined;
}

/** Initials for the monogram: first and last name, ignoring "G."-style initials. */
export function initialsOf(name: string): string {
  const parts = name.split(/\s+/).filter((p) => !/^[A-Z]\.$/.test(p));
  const use = parts.length > 1 ? [parts[0], parts[parts.length - 1]] : parts;
  return use.map((p) => p[0]).join('').toUpperCase();
}
