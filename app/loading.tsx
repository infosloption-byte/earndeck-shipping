import { LogoLoader } from '@/components/LogoLoader';

/** Shown by Next.js while a route's content is still being prepared on the server. */
export default function Loading() {
  return <LogoLoader label="Loading page" />;
}
