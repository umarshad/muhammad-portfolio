import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent, TouchEvent } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import type { ProjectImage } from "@/lib/projectImages";
import { PhoneFrame } from "./PhoneFrame";

type Props = { images: ProjectImage[]; index: number; onIndex: (i: number) => void; onClose: () => void; device?: boolean };

// Full-screen viewer: arrows or swipe to move, click to zoom and move the pointer to pan, Esc to close.
export function Lightbox({ images, index, onIndex, onClose, device }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const opener = useRef<Element | null>(null);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const touchX = useRef<number | null>(null);
  const n = images.length;
  const cur = images[index];

  // Plain overlay inside the project dialog: it takes focus, handles Esc itself and hands focus back on close.
  useEffect(() => {
    opener.current = document.activeElement;
    ref.current?.focus();
    return () => (opener.current as HTMLElement | null)?.focus?.();
  }, []);
  useEffect(() => {
    setZoom(false);
    setOrigin("50% 50%");
  }, [index]);

  const go = (d: number) => onIndex((index + d + n) % n);
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      onClose();
      return;
    }
    if (n < 2) return;
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };
  const pan = (e: PointerEvent<HTMLElement>) => {
    if (!zoom) return;
    const r = e.currentTarget.getBoundingClientRect();
    setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
  };
  const onTouchEnd = (e: TouchEvent) => {
    const start = touchX.current;
    touchX.current = null;
    if (start == null || zoom || n < 2) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return (
    <div ref={ref} className="lbox" role="dialog" aria-modal="true" aria-label={cur.label} tabIndex={-1} onKeyDown={onKey}>
      <div className="lbox__bar">
        <span className="lbox__count">{index + 1} / {n}</span>
        <button type="button" onClick={() => setZoom((z) => !z)} aria-label={zoom ? "Zoom out" : "Zoom in"}>{zoom ? <ZoomOut size={20} /> : <ZoomIn size={20} />}</button>
        <button type="button" onClick={onClose} aria-label="Close viewer"><X size={22} /></button>
      </div>

      <figure
        className={`lbox__stage${zoom ? " is-zoom" : ""}`}
        onPointerMove={pan}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {device ? (
          <PhoneFrame
            key={cur.src}
            src={cur.src}
            alt={cur.label}
            eager
            style={{ transformOrigin: origin }}
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
              setZoom((z) => !z);
            }}
          />
        ) : (
          <img
            key={cur.src}
            src={cur.src}
            alt={cur.label}
            style={{ transformOrigin: origin }}
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
              setZoom((z) => !z);
            }}
          />
        )}
        <figcaption>{cur.label}</figcaption>
      </figure>

      {n > 1 && (
        <>
          <button type="button" className="lbox__nav lbox__nav--prev" onClick={() => go(-1)} aria-label="Previous screen"><ChevronLeft size={26} /></button>
          <button type="button" className="lbox__nav lbox__nav--next" onClick={() => go(1)} aria-label="Next screen"><ChevronRight size={26} /></button>
        </>
      )}
    </div>
  );
}
