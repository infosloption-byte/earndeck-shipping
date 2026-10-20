import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title={
          <>
            Off the <em>charted route.</em>
          </>
        }
        sub="We couldn't find that page. Let's get you back on course."
        wavesFill="#fcfbf8"
      >
        <div style={{ marginTop: 36 }}>
          <Link className="btn btn-primary" href="/">
            Return to homepage <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </PageHero>
      <div style={{ height: 120 }} />
    </>
  );
}
