import Image from "next/image";
import Link from "next/link";
import { monogram } from "@/lib/content";
import type { Musician } from "@/lib/types";

export default function MusicianCard({ musician }: { musician: Musician }) {
  return (
    <Link
      href={`/musicians/${musician.slug}`}
      className="group block overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent"
    >
      <div className="relative aspect-square bg-line">
        {musician.image ? (
          <Image
            src={musician.image}
            alt={musician.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 600px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div aria-hidden="true" className="flex h-full items-center justify-center text-4xl font-bold text-muted">
            {monogram(musician.name)}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="font-semibold text-fg group-hover:text-accent">{musician.name}</p>
        {musician.genre && <p className="mt-1 text-sm text-muted">{musician.genre}</p>}
      </div>
    </Link>
  );
}
