"use client";

import { useFestivalPhase } from "@/lib/useFestivalPhase";

type Dates = { startDate: string; endDate?: string };

/** Renders children until the festival has ended. */
export function HideAfterFestival({ startDate, endDate, children }: Dates & { children: React.ReactNode }) {
  const phase = useFestivalPhase(startDate, endDate);
  return phase?.kind === "ended" ? null : <>{children}</>;
}

/** "N days to go" / "Happening now"; empty once ended. */
export function Countdown({ startDate, endDate }: Dates) {
  const phase = useFestivalPhase(startDate, endDate);
  const text =
    phase === null || phase.kind === "ended"
      ? " "
      : phase.kind === "live"
        ? "Happening now"
        : `${phase.days} ${phase.days === 1 ? "day" : "days"} to go`;
  return (
    <p className="text-sm font-semibold text-accent" aria-live="polite">
      {text}
    </p>
  );
}
