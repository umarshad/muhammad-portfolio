import { useEffect, useState } from "react";

// Cycles through phases, staying on each for its duration (ms), then loops.
export function usePhases(durations: readonly number[]) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setPhase((p) => (p + 1) % durations.length), durations[phase]);
    return () => clearTimeout(id);
  }, [phase, durations]);
  return phase;
}
