/** Layered, seamlessly looping waves. The front layer's fill should match the next section's background. */
function wavePath(width: number, height: number, base: number, amp: number, period: number) {
  let d = `M0 ${base}`;
  const count = Math.ceil(width / period);
  for (let i = 0; i < count; i++) {
    d += ` q ${period / 4} ${-amp} ${period / 2} 0 t ${period / 2} 0`;
  }
  return `${d} L${width} ${height} L0 ${height} Z`;
}

export function Waves({ fill = '#f7f4ee' }: { fill?: string }) {
  const W = 2400;
  const H = 170;
  return (
    <div className="waves" aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <path d={wavePath(W, H, 70, 46, 600)} fill="#2f8397" />
      </svg>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <path d={wavePath(W, H, 96, 38, 400)} fill="#123d52" />
      </svg>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <path d={wavePath(W, H, 128, 30, 600)} fill={fill} />
      </svg>
    </div>
  );
}
