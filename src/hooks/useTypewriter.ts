import { useEffect, useState } from "react";

const TYPE_MS = 70;
const DELETE_MS = 34;
const HOLD_MS = 1900;
const FIRST_HOLD_MS = 3200; // let the entrance animation finish before the first change

// First render is the full first phrase so server HTML and hydration match; typing starts after mount.
export function useTypewriter(phrases: string[]) {
  const [text, setText] = useState(phrases[0]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    let n = phrases[0].length;
    let dir: 1 | -1 = -1;
    let id: ReturnType<typeof setTimeout>;

    const step = () => {
      const word = phrases[i];
      n += dir;
      setText(word.slice(0, n));
      if (dir === -1 && n === 0) {
        i = (i + 1) % phrases.length;
        dir = 1;
        setTyping(true);
        id = setTimeout(step, 260);
      } else if (dir === 1 && n === phrases[i].length) {
        dir = -1;
        setTyping(false);
        id = setTimeout(step, HOLD_MS);
      } else {
        setTyping(true);
        id = setTimeout(step, dir === 1 ? TYPE_MS : DELETE_MS);
      }
    };

    id = setTimeout(step, FIRST_HOLD_MS);
    return () => clearTimeout(id);
  }, [phrases]);

  return { text, typing };
}
