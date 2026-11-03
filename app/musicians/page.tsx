import type { Metadata } from "next";
import { Suspense } from "react";
import MusicianBrowser from "@/components/MusicianBrowser";
import MusicianGrid from "@/components/MusicianGrid";
import ReleaseList from "@/components/ReleaseList";
import { listMusicians } from "@/lib/content";

export const metadata: Metadata = {
  title: "Musicians",
  description: "Artists who've worked with AB Recording Studio and its producers, plus recent and upcoming releases.",
};

export default function MusiciansPage() {
  const musicians = listMusicians();
  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold tablet:text-5xl">Artists we&apos;ve worked with</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Artists who&apos;ve worked with AB Recording Studio and its producers. Tap anyone to learn more.
      </p>
      <div className="mt-10">
        <Suspense fallback={<MusicianGrid musicians={musicians} />}>
          <MusicianBrowser musicians={musicians} />
        </Suspense>
      </div>
      <div className="mt-20">
        <ReleaseList />
      </div>
    </section>
  );
}
