import Image from "next/image";
import Link from "next/link";
import { monogram } from "@/lib/content";
import type { Release } from "@/lib/types";

/** Album card in the same style as the project cards; links to the artist's profile. */
export default function ReleaseCard({ release }: { release: Release }) {
  const body = (
    <>
      <div className="relative aspect-square bg-line">
        {release.cover ? (
          <Image
            src={release.cover}
            alt={`${release.title} cover`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 600px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div aria-hidden="true" className="flex h-full items-center justify-center text-4xl font-bold text-muted">
            {monogram(release.title)}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="font-semibold text-fg group-hover:text-accent">{release.title}</p>
        <p className="mt-1 text-sm text-muted">{release.artist}</p>
      </div>
    </>
  );
  const cls = "card-link group block h-full overflow-hidden border border-line bg-surface hover:border-accent";
  return release.musicianSlug ? (
    <Link href={`/projects/${release.musicianSlug}`} className={cls}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}
