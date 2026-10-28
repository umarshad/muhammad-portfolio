import { useEffect, useRef, useState } from "react";

// Header behaviour while scrolling: compact after a little scroll, tucked away while reading down,
// back on any scroll up. Page progress is written straight to a CSS variable to avoid re-renders.
export function useHeaderScroll(paused: boolean) {
  const ref = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);
  const holdUntil = useRef(0);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current?.style.setProperty("--progress", String(max > 0 ? Math.min(1, y / max) : 0));
      setScrolled(y > 24);
      const dy = y - last.current;
      if (y < 560 || pausedRef.current || performance.now() < holdUntil.current || dy < -6) setHidden(false);
      else if (dy > 8) setHidden(true);
      last.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // After a nav click the page scrolls on its own; keep the bar visible so the active marker can be seen moving.
  const hold = (ms = 1500) => {
    holdUntil.current = performance.now() + ms;
    setHidden(false);
  };

  return { ref, scrolled, hidden, hold };
}
