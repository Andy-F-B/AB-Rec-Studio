import Link from "next/link";
import { formatSlotTime, groupLineup } from "@/lib/content";
import type { LineupSlot } from "@/lib/types";

export default function LineupSchedule({ lineup }: { lineup: LineupSlot[] }) {
  if (lineup.length === 0) {
    return <p className="rounded-xl border border-dashed border-line p-8 text-center text-muted">Lineup coming soon.</p>;
  }
  const groups = groupLineup(lineup);
  return (
    <div className="space-y-10">
      {groups.map((g) => (
        <div key={g.day}>
          {groups.length > 1 || g.day !== "Times TBA" ? <h3 className="text-lg font-bold">{g.day}</h3> : null}
          <div className="mt-4 grid gap-6 tablet:grid-cols-2">
            {g.stages.map((st) => (
              <div key={st.stage || "main"}>
                {st.stage && <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted">{st.stage}</p>}
                <ul className="divide-y divide-line rounded-xl border border-line">
                  {st.slots.map((slot) => {
                    const time = formatSlotTime(slot);
                    return (
                      <li key={`${slot.artistName}-${slot.order}`} className="flex items-baseline justify-between gap-4 px-4 py-3">
                        {slot.musicianSlug ? (
                          <Link href={`/musicians/${slot.musicianSlug}`} className="font-medium hover:text-accent">
                            {slot.artistName}
                          </Link>
                        ) : (
                          <span className="font-medium">{slot.artistName}</span>
                        )}
                        {time && <span className="shrink-0 text-sm text-muted">{time}</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
