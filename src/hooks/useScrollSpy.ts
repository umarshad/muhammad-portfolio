import { useEffect, useState } from "react";

// Which of the given sections the reader is in: the last one whose top has passed a line 38% down the screen.
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id));
    if (!els.some(Boolean)) return;
    const update = () => {
      const line = window.innerHeight * 0.38;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let cur: string | null = null;
      els.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= line) cur = ids[i];
      });
      setActive(atBottom ? ids[ids.length - 1] : cur);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);
  return active;
}
