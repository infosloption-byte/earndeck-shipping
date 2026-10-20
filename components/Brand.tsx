import Link from 'next/link';

/** Plimsoll-style load-line mark: a ring crossed by a waterline. */
export function BrandMark({ size = 44 }: { size?: number }) {
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="22" cy="22" r="15" stroke="#f28c45" strokeWidth="1.8" />
      <path d="M22 22 h15 a15 15 0 0 1 -15 15 a15 15 0 0 1 -15 -15 Z" fill="#f28c45" opacity="0.22" />
      <path d="M3 22 H41" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 15.5 V22 M35 22 V28.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="brand" aria-label="Earndeck Shipping — home" onClick={onClick}>
      <BrandMark />
      <span className="brand-text">
        <strong>EARNDECK</strong>
        <small>SHIPPING</small>
      </span>
    </Link>
  );
}
