// Read-only helpers over the hard-coded content in /content. See ai/api.md.
import { aboutSections } from "@/content/about";
import { festival } from "@/content/festival";
import { musicians } from "@/content/musicians";
import { studio } from "@/content/studio";
import type { AboutSection, Festival, LineupSlot, Musician, StudioInfo } from "@/lib/types";

if (process.env.NODE_ENV !== "production") {
  const slugs = musicians.map((m) => m.slug);
  const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
  if (dupes.length > 0) throw new Error(`Duplicate musician slugs in content/musicians.ts: ${dupes.join(", ")}`);
}

export function getStudio(): StudioInfo {
  return studio;
}

export function mailtoHref(subject?: string): string {
  const base = `mailto:${studio.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

export function listMusicians(filter?: { genre?: string; featured?: boolean }): Musician[] {
  return musicians.filter(
    (m) =>
      (filter?.genre === undefined || m.genre === filter.genre) &&
      (filter?.featured === undefined || m.featured === filter.featured),
  );
}

export function getMusicianBySlug(slug: string): Musician | undefined {
  return musicians.find((m) => m.slug === slug);
}

export function getLineupForMusician(slug: string): LineupSlot[] {
  return festival.lineup.filter((s) => s.musicianSlug === slug);
}

export function listAboutSections(): AboutSection[] {
  return aboutSections;
}

export function getFestival(): Festival {
  return festival;
}

/** Start of the first day and end of the last day, in local time. */
export function festivalWindow(f: Festival = festival): { start: Date; end: Date } {
  const start = new Date(`${f.startDate}T00:00:00`);
  const end = new Date(`${f.endDate ?? f.startDate}T23:59:59`);
  return { start, end };
}

export function isFestivalUpcoming(now: Date = new Date(), f: Festival = festival): boolean {
  return now < festivalWindow(f).start;
}

export function formatFestivalDates(f: Festival = festival): string {
  const { start, end } = festivalWindow(f);
  const fmt = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" });
  return f.endDate && f.endDate !== f.startDate ? fmt.formatRange(start, end) : fmt.format(start);
}

export type LineupGroup = { day: string; stages: { stage: string; slots: LineupSlot[] }[] };

const TBA = "Times TBA";

/** Lineup grouped by day (local date) then stage, sorted by time then order. Slots without a time go under "Times TBA". */
export function groupLineup(lineup: LineupSlot[], timeZone: string = festival.timeZone): LineupGroup[] {
  const dayFmt = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", timeZone });
  const sorted = [...lineup].sort((a, b) => {
    const ta = a.performanceAt ? Date.parse(a.performanceAt) : Infinity;
    const tb = b.performanceAt ? Date.parse(b.performanceAt) : Infinity;
    return ta - tb || a.order - b.order;
  });
  const days = new Map<string, Map<string, LineupSlot[]>>();
  for (const slot of sorted) {
    const day = slot.performanceAt ? dayFmt.format(new Date(slot.performanceAt)) : TBA;
    const stage = slot.stage ?? "";
    if (!days.has(day)) days.set(day, new Map());
    const stages = days.get(day)!;
    if (!stages.has(stage)) stages.set(stage, []);
    stages.get(stage)!.push(slot);
  }
  return [...days].map(([day, stages]) => ({
    day,
    stages: [...stages].map(([stage, slots]) => ({ stage, slots })),
  }));
}

export function formatSlotTime(slot: LineupSlot, timeZone: string = festival.timeZone): string | null {
  if (!slot.performanceAt) return null;
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone }).format(new Date(slot.performanceAt));
}

export function mapsHref(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
