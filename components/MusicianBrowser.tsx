"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MusicianGrid from "@/components/MusicianGrid";
import type { Musician } from "@/lib/types";

const SORTS = {
  featured: "Featured",
  az: "Name A–Z",
  za: "Name Z–A",
  genre: "Genre",
} as const;
type SortKey = keyof typeof SORTS;

/** Small Sort + Genre dropdowns above the grid. Choices live in ?sort= and ?genre= so views can be shared. */
export default function MusicianBrowser({ musicians }: { musicians: Musician[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const genres = Array.from(new Set(musicians.map((m) => m.genre).filter((g): g is string => Boolean(g)))).sort();
  const requestedGenre = params.get("genre");
  const genre = requestedGenre && genres.includes(requestedGenre) ? requestedGenre : "";
  const requestedSort = params.get("sort");
  const sort: SortKey = requestedSort && requestedSort in SORTS ? (requestedSort as SortKey) : "featured";

  let shown = genre ? musicians.filter((m) => m.genre === genre) : [...musicians];
  if (sort === "az") shown.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "za") shown.sort((a, b) => b.name.localeCompare(a.name));
  if (sort === "genre")
    shown = shown.sort((a, b) => (a.genre ?? "~").localeCompare(b.genre ?? "~") || a.name.localeCompare(b.name));

  const update = (key: "sort" | "genre", value: string) => {
    const next = new URLSearchParams(params.toString());
    if (!value || (key === "sort" && value === "featured")) next.delete(key);
    else next.set(key, value);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-end gap-2 text-sm">
        <Dropdown label="Sort" value={sort} onChange={(v) => update("sort", v)}>
          {(Object.keys(SORTS) as SortKey[]).map((k) => (
            <option key={k} value={k}>
              {SORTS[k]}
            </option>
          ))}
        </Dropdown>
        {genres.length > 1 && (
          <Dropdown label="Genre" value={genre} onChange={(v) => update("genre", v)}>
            <option value="">All</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </Dropdown>
        )}
      </div>
      {shown.length > 0 ? (
        <MusicianGrid musicians={shown} />
      ) : (
        <p className="text-muted">No projects in this genre yet.</p>
      )}
    </>
  );
}

function Dropdown({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="relative inline-flex items-center rounded-full border border-line bg-surface pl-3.5 pr-8 transition-colors focus-within:border-accent hover:border-accent">
      <span className="text-muted">{label}:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-pointer appearance-none bg-transparent py-1.5 pl-1.5 font-medium text-fg outline-none"
      >
        {children}
      </select>
      <svg
        aria-hidden="true"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none absolute right-3 text-muted"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </label>
  );
}
