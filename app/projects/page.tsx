import type { Metadata } from "next";
import { Suspense } from "react";
import MusicianBrowser from "@/components/MusicianBrowser";
import MusicianGrid from "@/components/MusicianGrid";
import ReleaseCard from "@/components/ReleaseCard";
import { listMusicians, listReleases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Artists who've worked with AB Recording Studio and its producers, plus new releases.",
};

export default function ProjectsPage() {
  const musicians = listMusicians();
  const releases = listReleases("recent");
  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold tablet:text-5xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Artists and bands we&apos;ve recorded, produced and played with. Tap any project to learn more.
      </p>
      <div className="mt-10">
        <Suspense fallback={<MusicianGrid musicians={musicians} />}>
          <MusicianBrowser musicians={musicians} />
        </Suspense>
      </div>
      {releases.length > 0 && (
        <section aria-labelledby="releases-heading" className="mt-20">
          <h2 id="releases-heading" className="text-2xl font-bold tablet:text-4xl">New Releases</h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4">
            {releases.map((r) => (
              <li key={`${r.artist}-${r.title}`}>
                <ReleaseCard release={r} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}
