/**
 * Hero illustration: a vessel's painted draft marks with a tide-like waterline —
 * the exact reading a draft survey is built on. Purely decorative (illustrative values).
 */
const MARKS = [12, 11, 10, 9, 8, 7, 6];

export function DraftScale() {
  const top = 84; // y of the 12 m mark
  const step = 66; // px per metre
  const yFor = (m: number) => top + (12 - m) * step;
  const waterY = 300;

  return (
    <figure className="hero-art" style={{ margin: 0 }}>
      <svg
        viewBox="0 0 430 570"
        role="img"
        aria-label="Illustration of a ship's draft marks with the waterline rising and falling"
      >
        <defs>
          <linearGradient id="ds-frame" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#10384d" />
            <stop offset="1" stopColor="#071d2e" />
          </linearGradient>
          <linearGradient id="ds-plate" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1a526b" />
            <stop offset="1" stopColor="#0e3447" />
          </linearGradient>
          <linearGradient id="ds-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3aa0b6" stopOpacity="0.62" />
            <stop offset="1" stopColor="#06202f" stopOpacity="0.92" />
          </linearGradient>
          <clipPath id="ds-clip">
            <rect x="0" y="0" width="430" height="570" rx="28" />
          </clipPath>
        </defs>

        <g clipPath="url(#ds-clip)">
          <rect width="430" height="570" fill="url(#ds-frame)" />

          {/* hull plate */}
          <rect x="34" y="34" width="196" height="502" rx="10" fill="url(#ds-plate)" stroke="rgba(255,255,255,.14)" />
          {[52, 520].flatMap((y) => [50, 214].map((x) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2.6" fill="rgba(255,255,255,.28)" />
          )))}

          {/* draft marks */}
          {MARKS.map((m) => (
            <g key={m}>
              <text
                x="56"
                y={yFor(m) + 14}
                fontSize="42"
                fontWeight="600"
                fill="#fff"
                opacity="0.94"
                style={{ fontFamily: 'var(--font-mono), monospace' }}
              >
                {m}
              </text>
              <path d={`M150 ${yFor(m)} H226`} stroke="#fff" strokeOpacity=".75" strokeWidth="2" />
              {[1, 2, 3, 4].map((i) => (
                <path
                  key={i}
                  d={`M198 ${yFor(m) + (i * step) / 5} H226`}
                  stroke="#fff"
                  strokeOpacity=".32"
                  strokeWidth="1.5"
                />
              ))}
            </g>
          ))}

          {/* water + waterline (animated) */}
          <g className="draft-water">
            <rect x="0" y={waterY} width="430" height="400" fill="url(#ds-water)" />
            <path
              d={`M0 ${waterY} q 27 -9 54 0 t 54 0 t 54 0 t 54 0 t 54 0 t 54 0 t 54 0 t 54 0`}
              fill="none"
              stroke="#ffb27a"
              strokeWidth="2"
            />
            {/* reading pointer */}
            <path d={`M230 ${waterY} H262`} stroke="#f28c45" strokeWidth="2" />
            <path d={`M262 ${waterY} l8 -5 v10 Z`} fill="#f28c45" />
            <text
              x="276"
              y={waterY + 4}
              fontSize="11"
              letterSpacing="2"
              fill="#f28c45"
              style={{ fontFamily: 'var(--font-mono), monospace' }}
            >
              WATERLINE
            </text>
          </g>

          {/* floating readout cards */}
          <g className="draft-readout">
            <rect x="196" y="96" width="206" height="118" rx="16" fill="#071d2e" fillOpacity=".94" stroke="rgba(255,255,255,.16)" />
            <text x="216" y="126" fontSize="10.5" letterSpacing="2.2" fill="#8fc3cf" style={{ fontFamily: 'var(--font-mono), monospace' }}>
              DRAFT READING
            </text>
            <text x="216" y="170" fontSize="40" fill="#fff" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>
              8.42<tspan fontSize="20" fill="#8fc3cf"> m</tspan>
            </text>
            <text x="216" y="196" fontSize="11" fill="#8fc3cf" style={{ fontFamily: 'var(--font-body), sans-serif' }}>
              Recorded · Illustrative
            </text>
          </g>

          <g className="draft-readout" style={{ animationDelay: '-3.5s' }}>
            <rect x="196" y="400" width="206" height="94" rx="16" fill="#fff" />
            <circle cx="230" cy="447" r="17" fill="#f28c45" />
            <path d="M222 447 l6 6 l11 -12" stroke="#04131e" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="258" y="441" fontSize="15" fontWeight="700" fill="#0f2230" style={{ fontFamily: 'var(--font-body), sans-serif' }}>
              Survey report
            </text>
            <text x="258" y="461" fontSize="12.5" fill="#5b7280" style={{ fontFamily: 'var(--font-body), sans-serif' }}>
              Ready for review
            </text>
          </g>
        </g>
        <rect x="0.5" y="0.5" width="429" height="569" rx="27.5" fill="none" stroke="rgba(255,255,255,.16)" />
      </svg>
      <figcaption className="caption">Draft marks · the reading every survey starts from</figcaption>
    </figure>
  );
}
