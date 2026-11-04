import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MusicianLinks from "@/components/MusicianLinks";
import PhotoCarousel from "@/components/PhotoCarousel";
import ReleaseShowcase from "@/components/ReleaseShowcase";
import { getMusicianBySlug, listMusicians, monogram, releasesForMusician } from "@/lib/content";

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

  const photos = [musician.image, ...(musician.photos ?? [])].filter((p): p is string => Boolean(p));
  const releases = releasesForMusician(musician);
  const paragraphs = musician.bio.split(/\n\s*\n/);

  return (
    <article className="py-12">
      <Link href="/projects" className="text-sm font-medium text-muted hover:text-accent">
        ← All projects
      </Link>

      <div className="mt-6 grid gap-8 tablet:grid-cols-[2fr_3fr] tablet:gap-12">
        {photos.length > 0 ? (
          <PhotoCarousel photos={photos} alt={musician.name} />
        ) : (
          <div className="relative aspect-square overflow-hidden border border-line bg-surface">
            <div aria-hidden="true" className="flex h-full items-center justify-center text-7xl font-bold text-muted">
              {monogram(musician.name)}
            </div>
          </div>
        )}

        <div>
          {musician.logo ? (
            <h1>
              <Image
                src={musician.logo}
                alt={musician.name}
                width={1360}
                height={820}
                priority
                className="w-56 tablet:w-72"
              />
            </h1>
          ) : (
            <h1 className="text-3xl font-bold tablet:text-5xl">{musician.name}</h1>
          )}

          {musician.genre && <p className="mt-1 font-display text-lg italic text-accent">{musician.genre}</p>}

          <div className="mt-6 space-y-4 text-muted">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-6">
            <MusicianLinks links={musician.links} />
          </div>

          {releases.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold">Releases</h2>
              <div className="mt-4 grid gap-4">
                {releases.map((r) => (
                  <ReleaseShowcase key={r.title} release={r} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
