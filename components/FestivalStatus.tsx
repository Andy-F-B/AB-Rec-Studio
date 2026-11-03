"use client";

import { useFestivalPhase } from "@/lib/useFestivalPhase";

type Dates = { startDate: string; endDate?: string };

/** Renders children until the festival has ended. */
export function HideAfterFestival({ startDate, endDate, children }: Dates & { children: React.ReactNode }) {
  const phase = useFestivalPhase(startDate, endDate);
  return phase?.kind === "ended" ? null : <>{children}</>;
}

/** "N days to go" / "Happening now" / optional ended message. */
export function Countdown({ startDate, endDate, endedText }: Dates & { endedText?: string }) {
  const phase = useFestivalPhase(startDate, endDate);
  const text =
    phase === null
      ? " "
      : phase.kind === "ended"
        ? (endedText ?? " ")
        : phase.kind === "live"
          ? "Happening now"
          : `${phase.days} ${phase.days === 1 ? "day" : "days"} to go`;
  return (
    <p className="text-sm font-semibold text-accent" aria-live="polite">
      {text}
    </p>
  );
}

/** Small "Upcoming" pill, shown only while the festival hasn't started. */
export function UpcomingBadge({ startDate, endDate }: Dates) {
  const phase = useFestivalPhase(startDate, endDate);
  if (phase?.kind !== "upcoming") return null;
  return (
    <span className="ml-1.5 rounded-full bg-accent/20 px-1.5 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wide text-accent">
      Soon
    </span>
  );
}
