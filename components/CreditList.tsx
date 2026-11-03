import type { MusicianCredit, WorkType } from "@/lib/types";

const workLabel: Record<WorkType, string> = {
  recording: "Recording",
  mixing: "Mixing",
  mastering: "Mastering",
  production: "Production",
};

export default function CreditList({ credits }: { credits: MusicianCredit[] }) {
  if (credits.length === 0) return <p className="text-muted">No credits listed yet.</p>;
  return (
    <ul className="divide-y divide-line rounded-xl border border-line">
      {credits.map((c, i) => (
        <li key={`${c.title}-${i}`} className="flex flex-wrap items-baseline justify-between gap-2 px-4 py-3">
          <span className="font-medium">
            {c.link ? (
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                {c.title}
              </a>
            ) : (
              c.title
            )}
            {c.year && <span className="ml-2 text-sm text-muted">{c.year}</span>}
          </span>
          <span className="flex gap-2">
            {c.status === "upcoming" && (
              <span className="rounded-full bg-accent/15 px-3 py-0.5 text-xs font-semibold text-accent">Coming soon</span>
            )}
            {c.workType && (
              <span className="rounded-full bg-surface px-3 py-0.5 text-xs font-medium text-muted">{workLabel[c.workType]}</span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
