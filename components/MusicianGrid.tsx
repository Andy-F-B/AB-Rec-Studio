import MusicianCard from "@/components/MusicianCard";
import type { Musician } from "@/lib/types";

export default function MusicianGrid({ musicians }: { musicians: Musician[] }) {
  if (musicians.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-line p-8 text-center text-muted">No musicians yet.</p>
    );
  }
  return (
    <ul className="grid grid-cols-1 gap-4 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4">
      {musicians.map((m) => (
        <li key={m.slug}>
          <MusicianCard musician={m} />
        </li>
      ))}
    </ul>
  );
}
