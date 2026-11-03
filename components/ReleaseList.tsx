import Link from "next/link";
import { listReleases } from "@/lib/content";
import type { Release } from "@/lib/types";

function ReleaseRow({ r }: { r: Release }) {
  const title = r.link ? (
    <a href={r.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
      {r.title}
    </a>
  ) : (
    r.title
  );
  return (
    <li className="flex flex-wrap items-baseline justify-between gap-2 px-4 py-3">
      <span className="font-semibold">{title}</span>
      {r.musicianSlug ? (
        <Link href={`/projects/${r.musicianSlug}`} className="text-sm text-muted hover:text-accent">
          {r.artist}
        </Link>
      ) : (
        <span className="text-sm text-muted">{r.artist}</span>
      )}
    </li>
  );
}

/** Upcoming and recent releases. */
export default function ReleaseList({ compact = false }: { compact?: boolean }) {
  const groups = [
    { label: "Upcoming", items: listReleases("upcoming") },
    { label: "Recent", items: listReleases("recent") },
  ].filter((g) => g.items.length > 0);
  if (groups.length === 0) return null;

  return (
    <div>
      <h2 className={`font-bold ${compact ? "text-2xl tablet:text-3xl" : "text-2xl tablet:text-4xl"}`}>Releases</h2>
      <div className="mt-6 grid gap-6 tablet:grid-cols-2">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted">{g.label}</p>
            <ul className="divide-y divide-line border border-line">
              {g.items.map((r) => (
                <ReleaseRow key={`${r.artist}-${r.title}`} r={r} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
