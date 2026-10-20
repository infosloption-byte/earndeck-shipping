/** Slowly rotating compass-card ring used as hero decoration. */
export function HeroRing() {
  return (
    <div className="hero-ring" aria-hidden="true">
      <svg viewBox="0 0 800 800" fill="none">
        <circle cx="400" cy="400" r="395" stroke="rgba(143,195,207,.25)" />
        <circle cx="400" cy="400" r="300" stroke="rgba(143,195,207,.18)" strokeDasharray="2 10" />
        <circle cx="400" cy="400" r="205" stroke="rgba(242,140,69,.22)" />
        <path d="M5 400H795M400 5V795" stroke="rgba(143,195,207,.14)" />
        {Array.from({ length: 36 }).map((_, i) => (
          <path key={i} d="M400 5v14" stroke="rgba(143,195,207,.35)" transform={`rotate(${i * 10} 400 400)`} />
        ))}
      </svg>
    </div>
  );
}
