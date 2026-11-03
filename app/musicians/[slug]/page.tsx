import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CreditList from "@/components/CreditList";
import MusicianLinks from "@/components/MusicianLinks";
import { getFestival, getLineupForMusician, getMusicianBySlug, listMusicians, monogram } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return listMusicians().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const musician = getMusicianBySlug((await params).slug);
  if (!musician) return {};
  return { title: musician.name, description: musician.shortBio };
}

export default async function MusicianPage({ params }: Props) {
  const musician = getMusicianBySlug((await params).slug);
  if (!musician) notFound();

  const playingFestival = getLineupForMusician(musician.slug).length > 0;
  const festival = getFestival();
  const paragraphs = musician.bio.split(/\n\s*\n/);

  return (
    <article className="py-12">
      <Link href="/musicians" className="text-sm font-medium text-muted hover:text-accent">
        ← All artists
      </Link>

      <div className="mt-6 grid gap-8 tablet:grid-cols-[2fr_3fr] tablet:gap-12">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-surface">
          {musician.image ? (
            <Image
              src={musician.image}
              alt={musician.name}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div aria-hidden="true" className="flex h-full items-center justify-center text-7xl font-bold text-muted">
              {monogram(musician.name)}
            </div>
          )}
        </div>

        <div>
          {musician.genre && (
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">{musician.genre}</p>
          )}
          <h1 className="mt-2 text-3xl font-bold tablet:text-5xl">{musician.name}</h1>

          {playingFestival && (
            <Link
              href="/festival"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent hover:bg-accent/25"
            >
              Playing at {festival.name} →
            </Link>
          )}

          <div className="mt-6 space-y-4 text-muted">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-6">
            <MusicianLinks links={musician.links} />
          </div>

          {musician.credits.length > 0 && (
            <>
              <h2 className="mt-10 text-xl font-bold">Releases</h2>
              <div className="mt-4">
                <CreditList credits={musician.credits} />
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
