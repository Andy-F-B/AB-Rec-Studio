"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MusicianGrid from "@/components/MusicianGrid";
import type { Musician } from "@/lib/types";

/** Genre chips + grid. The selected genre lives in ?genre= so filtered views can be shared. */
export default function MusicianBrowser({ musicians }: { musicians: Musician[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const genres = Array.from(new Set(musicians.map((m) => m.genre).filter((g): g is string => Boolean(g)))).sort();
  const requested = params.get("genre");
  const active = requested && genres.includes(requested) ? requested : null;
  const shown = active ? musicians.filter((m) => m.genre === active) : musicians;

  const select = (genre: string | null) => {
    router.replace(genre ? `${pathname}?genre=${encodeURIComponent(genre)}` : pathname, { scroll: false });
  };

  return (
    <>
      {genres.length > 1 && (
        <div role="group" aria-label="Filter by genre" className="mb-6 flex flex-wrap gap-2">
          {[null, ...genres].map((g) => {
            const on = g === active;
            return (
              <button
                key={g ?? "all"}
                type="button"
                aria-pressed={on}
                onClick={() => select(g)}
                className={` border px-4 py-1.5 text-sm font-medium transition-colors ${
                  on ? "border-accent bg-accent text-bg" : "border-line text-muted hover:text-fg"
                }`}
              >
                {g ?? "All"}
              </button>
            );
          })}
        </div>
      )}
      <MusicianGrid musicians={shown} />
    </>
  );
}
