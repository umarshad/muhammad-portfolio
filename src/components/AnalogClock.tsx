// A round clock face for one time zone. The hands follow the real time there, the face goes darker at night,
// and the whole thing is described in text for screen readers. Before the browser knows the time, hands rest at 12.
type Props = { h: number; m: number; s: number; label: string; night?: boolean; size?: number; className?: string };

const ticks = Array.from({ length: 12 }, (_, i) => i);

export function AnalogClock({ h, m, s, label, night, size = 64, className = "" }: Props) {
  const sec = s * 6;
  const min = m * 6 + s * 0.1;
  const hour = (h % 12) * 30 + m * 0.5;
  return (
    <svg
      className={`aclock${night ? " aclock--night" : ""} ${className}`.trim()}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label={label}
    >
      <circle className="aclock__face" cx="50" cy="50" r="47" />
      {ticks.map((i) => (
        <line key={i} className={`aclock__tick${i % 3 === 0 ? " aclock__tick--major" : ""}`} x1="50" y1={i % 3 === 0 ? 8 : 10} x2="50" y2={i % 3 === 0 ? 16 : 14} transform={`rotate(${i * 30} 50 50)`} />
      ))}
      <line className="aclock__hour" x1="50" y1="54" x2="50" y2="29" transform={`rotate(${hour} 50 50)`} />
      <line className="aclock__min" x1="50" y1="56" x2="50" y2="18" transform={`rotate(${min} 50 50)`} />
      <g className="aclock__sec" transform={`rotate(${sec} 50 50)`}>
        <line x1="50" y1="60" x2="50" y2="14" />
      </g>
      <circle className="aclock__pin" cx="50" cy="50" r="3.2" />
    </svg>
  );
}
