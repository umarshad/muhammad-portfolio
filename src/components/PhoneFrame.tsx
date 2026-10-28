import { useState } from "react";
import type { CSSProperties, MouseEvent } from "react";

type Props = { src: string; alt: string; className?: string; style?: CSSProperties; onClick?: (e: MouseEvent<HTMLElement>) => void; eager?: boolean };

// Puts an app screenshot inside a phone body. The screen takes the screenshot's own proportions,
// and the screenshot is scaled up a touch so its built-in margin and rounded corners fall outside the screen.
export function PhoneFrame({ src, alt, className = "", style, onClick, eager }: Props) {
  const [ratio, setRatio] = useState(0.47);
  return (
    <span className={`pdev ${className}`.trim()} style={style} onClick={onClick}>
      <span className="pdev__screen" style={{ aspectRatio: String(ratio) }}>
        <img
          src={src}
          alt={alt}
          decoding="async"
          loading={eager ? "eager" : "lazy"}
          onLoad={(e) => {
            const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
            if (w && h) setRatio(w / h);
          }}
        />
      </span>
    </span>
  );
}
