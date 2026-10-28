import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Maximize2 } from "lucide-react";
import { BrowserFrame } from "../BrowserFrame";

type Props = {
  project: string;
  kind: string;
  url: string;
  images: { src: string; label: string; title: string }[];
  onExpand: (i: number) => void;
};

// One browser window at a comfortable size, with a selector for the other screens.
// Every window stays in the page (only the active one is visible) so the images and captions remain crawlable.
export function ScreenShowcase({ project, kind, url, images, onExpand }: Props) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    const d = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const i = (active + d + images.length) % images.length;
    setActive(i);
    tabs.current[i]?.focus();
  };

  return (
    <div className="cs-show">
      <div className="cs-show__stage">
        {images.map((im, i) => (
          <figure key={im.src} className="cs-show__shot" data-active={i === active ? "" : undefined} aria-hidden={i !== active}>
            <button type="button" className="cs-show__btn" tabIndex={i === active ? 0 : -1} onClick={() => onExpand(i)} aria-label={`Enlarge: ${im.label}`}>
              <BrowserFrame src={im.src} alt={`${project} ${kind.toLowerCase()}: ${im.label}`} url={url} />
              <span className="cs-show__hint"><Maximize2 size={15} aria-hidden="true" /> Enlarge</span>
            </button>
          </figure>
        ))}
      </div>
      <div className="cs-show__tabs" role="tablist" aria-label={`${kind} screens`} onKeyDown={onKey}>
        {images.map((im, i) => (
          <button
            key={im.src}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            className="cs-show__tab"
            onClick={() => setActive(i)}
            onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
          >
            <span className="cs-show__n">{String(i + 1).padStart(2, "0")}</span>
            <span>
              <b>{im.title}</b>
              <small>{im.label}</small>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
