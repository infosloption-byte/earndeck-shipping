import Link from 'next/link';

/**
 * Company logo, shipped in two colourways so it is always legible:
 *   tone="light" → white artwork, for dark backgrounds (header, footer, hero, loader)
 *   tone="dark"  → navy artwork, for light backgrounds
 * Source artwork: public/brand/*.png (generated from the client's supplied logo).
 */
export type Tone = 'light' | 'dark';

const EMBLEM_RATIO = 866 / 602; // width / height of emblem-*.png
const LOGO_RATIO = 866 / 702; // width / height of logo-*.png (emblem + wordmark)

/** The wheel-and-anchor emblem on its own. */
export function BrandMark({ height = 52, tone = 'light' }: { height?: number; tone?: Tone }) {
  return (
    <img
      className="brand-mark"
      src={`/brand/emblem-${tone}.png`}
      alt=""
      width={Math.round(height * EMBLEM_RATIO)}
      height={height}
      decoding="async"
    />
  );
}

/** The complete logo lockup (emblem + EARNDECK SHIPPING wordmark) exactly as supplied. */
export function Logo({ width = 220, tone = 'light', alt = 'Earndeck Shipping' }: { width?: number; tone?: Tone; alt?: string }) {
  return (
    <img
      className="brand-logo"
      src={`/brand/logo-${tone}.png`}
      alt={alt}
      width={width}
      height={Math.round(width / LOGO_RATIO)}
      decoding="async"
    />
  );
}

/** Header / footer lockup: emblem + wordmark text, coloured for the surface it sits on. */
export function Brand({ tone = 'light', onClick }: { tone?: Tone; onClick?: () => void }) {
  return (
    <Link href="/" className={tone === 'dark' ? 'brand brand-on-light' : 'brand'} onClick={onClick}>
      <BrandMark tone={tone} />
      <span className="brand-text">
        <strong>EARNDECK</strong>
        <small>SHIPPING</small>
      </span>
    </Link>
  );
}
