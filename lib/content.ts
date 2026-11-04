// Read-only helpers over the hard-coded content in /content. See ai/api.md.
import { aboutSections } from "@/content/about";
import { festival } from "@/content/festival";
import { musicians } from "@/content/musicians";
import { releases } from "@/content/releases";
import { studio } from "@/content/studio";
import type { AboutSection, Festival, LineupSlot, Musician, Release, StudioInfo, UpcomingItem } from "@/lib/types";
import { upcoming } from "@/content/upcoming";

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

export function listReleases(status?: Release["status"]): Release[] {
  return status ? releases.filter((r) => r.status === status) : releases;
}

/** Two-letter monogram for artists without a photo: "Kenny Broc" → "KB", "CEONEO" → "CE", "Benzen & Binau" → "BB". */
export function monogram(name: string): string {
  const words = name.split(/\s+/).filter((w) => /^[\p{L}\p{N}]/u.test(w));
  if (words.length === 0) return "";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

/** Upcoming items, soonest dated first; items whose date has passed are left out. */
export function listUpcoming(now: Date = new Date()): UpcomingItem[] {
  const today = now.toISOString().slice(0, 10);
  return upcoming
    .filter((u) => !u.date || u.date >= today)
    .map((u, i) => ({ u, i }))
    .sort((a, b) => (a.u.date && b.u.date ? a.u.date.localeCompare(b.u.date) : a.i - b.i))
    .map(({ u }) => u);
}

/** "2026-11-21" → "Nov 21, 2026" */
export function formatDay(date: string): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Placeholder until a real Spotify link is added to a release. */
export const SPOTIFY_PLACEHOLDER = "https://open.spotify.com/";

/** "2025-03-14" → "Mar 14, 2025"; "2025" → "2025"; missing → "Date TBA". */
export function formatReleaseDate(date?: string): string {
  if (!date) return "Date TBA";
  return /^\d{4}-\d{2}-\d{2}$/.test(date) ? formatDay(date) : date;
}

export type ReleaseView = {
  title: string;
  artist?: string;
  cover?: string;
  date: string;
  upcoming: boolean;
  role?: string;
  kind?: string;
  /** Where the listen button goes. */
  listenUrl: string;
  listenOn: "spotify" | "apple";
  listenIsPlaceholder: boolean;
};

const workLabels: Record<string, string> = {
  recording: "Recording",
  mixing: "Mixing",
  mastering: "Mastering",
  production: "Production",
};

/** A musician's credits, filled in with cover/date/Spotify from content/releases.ts when titles match. */
export function releasesForMusician(m: Musician): ReleaseView[] {
  return m.credits.map((c) => {
    const r = releases.find((x) => x.title === c.title);
    const spotify = c.spotify ?? r?.spotify ?? c.link ?? r?.link;
    const apple = c.appleMusic;
    const upcoming = c.status === "upcoming" || r?.status === "upcoming";
    return {
      title: c.title,
      artist: m.name,
      cover: c.cover ?? r?.cover,
      date: upcoming && !(c.releaseDate ?? r?.releaseDate) ? "Coming soon" : formatReleaseDate(c.releaseDate ?? r?.releaseDate ?? (c.year ? String(c.year) : undefined)),
      upcoming,
      role: c.workType ? workLabels[c.workType] : undefined,
      kind: c.kind ?? "Album",
      listenUrl: spotify ?? apple ?? SPOTIFY_PLACEHOLDER,
      listenOn: !spotify && apple ? "apple" : "spotify",
      listenIsPlaceholder: !spotify && !apple,
    };
  });
}

export function releaseView(r: Release): ReleaseView {
  const spotify = r.spotify ?? r.link;
  const upcoming = r.status === "upcoming";
  return {
    title: r.title,
    artist: r.artist,
    cover: r.cover,
    date: upcoming && !r.releaseDate ? "Coming soon" : formatReleaseDate(r.releaseDate),
    upcoming,
    kind: r.kind ?? "Album",
    listenUrl: spotify ?? SPOTIFY_PLACEHOLDER,
    listenOn: "spotify",
    listenIsPlaceholder: !spotify,
  };
}
