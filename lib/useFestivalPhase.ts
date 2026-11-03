"use client";

import { useEffect, useState } from "react";

export type FestivalPhase = { kind: "upcoming"; days: number } | { kind: "live" } | { kind: "ended" };

function phaseAt(now: Date, start: Date, end: Date): FestivalPhase {
  if (now > end) return { kind: "ended" };
  if (now >= start) return { kind: "live" };
  return { kind: "upcoming", days: Math.ceil((start.getTime() - now.getTime()) / 86_400_000) };
}

/** Festival phase computed in the browser, so the static page stays correct after it was built. Null until mounted. */
export function useFestivalPhase(startDate: string, endDate?: string): FestivalPhase | null {
  const [phase, setPhase] = useState<FestivalPhase | null>(null);

  useEffect(() => {
    const start = new Date(`${startDate}T00:00:00`);
    const end = new Date(`${endDate ?? startDate}T23:59:59`);
    const tick = () => setPhase(phaseAt(new Date(), start, end));
    const first = setTimeout(tick, 0);
    const timer = setInterval(tick, 60_000);
    return () => {
      clearTimeout(first);
      clearInterval(timer);
    };
  }, [startDate, endDate]);

  return phase;
}
