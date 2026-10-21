import { Logo } from './Brand';

/**
 * Full-screen branded loading state. The company emblem "fills" like a hull taking on water while a
 * compass ring turns around it. Pure markup + CSS (see `.page-loader` in globals.css), so it can be used
 * from both the client-side navigation overlay and Next's route-level loading.tsx.
 */
export function LogoLoader({ label = 'Loading', phase = 'show' }: { label?: string; phase?: 'show' | 'hide' }) {
  return (
    <div className={phase === 'hide' ? 'page-loader is-hiding' : 'page-loader'} role="status" aria-live="polite" aria-label={label}>
      <div className="loader-stack">
        <svg className="loader-ring" viewBox="0 0 200 200" aria-hidden="true" fill="none">
          <circle cx="100" cy="100" r="96" stroke="rgba(143,195,207,.28)" />
          <circle className="loader-arc" cx="100" cy="100" r="96" stroke="#f28c45" strokeWidth="2.5" strokeLinecap="round" pathLength="100" strokeDasharray="22 78" />
          <circle cx="100" cy="100" r="82" stroke="rgba(143,195,207,.18)" strokeDasharray="1.5 7" />
        </svg>
        <div className="loader-logo">
          <span className="loader-logo-base">
            <Logo width={150} alt="" />
          </span>
          <span className="loader-logo-fill" aria-hidden="true">
            <Logo width={150} alt="" />
          </span>
        </div>
      </div>
      <div className="loader-bar" aria-hidden="true" />
      <p>{label}</p>
    </div>
  );
}
