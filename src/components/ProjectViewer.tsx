import { Maximize2 } from "lucide-react";
import type { ProjectImage } from "@/lib/projectImages";

type Props = { images: ProjectImage[]; active: number; onActive: (i: number) => void; onExpand: () => void };

// Large preview with a thumbnail row; clicking the preview opens the full-screen viewer.
export function ProjectViewer({ images, active, onActive, onExpand }: Props) {
  const cur = images[active];
  return (
    <div className="pview">
      <button type="button" className="pview__main" onClick={onExpand} aria-label={`Enlarge: ${cur.label}`}>
        <img key={cur.src} src={cur.src} alt={cur.label} />
        <span className="pview__hint"><Maximize2 size={15} aria-hidden="true" /> Enlarge</span>
      </button>
      {images.length > 1 && (
        <div className="pview__thumbs" role="group" aria-label="Choose a screen">
          {images.map((im, i) => (
            <button key={im.src} type="button" aria-label={im.label} aria-current={i === active} onClick={() => onActive(i)}>
              <img src={im.src} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}
      <p className="pview__cap">{cur.label}{images.length > 1 && <span> · {active + 1} / {images.length}</span>}</p>
    </div>
  );
}
