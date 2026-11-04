import type { Metadata } from "next";
import Image from "next/image";
import FestivalFaq from "@/components/FestivalFaq";
import Stamp from "@/components/Stamp";
import { formatFestivalDates, getFestival, mailtoHref } from "@/lib/content";

const festival = getFestival();

export const metadata: Metadata = {
  title: "Festival at the Oasis",
  description: `${festival.name}: ${formatFestivalDates(festival)}. Free entry.`,
};

export default function FestivalPage() {
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="relative overflow-hidden border border-line bg-surface">
        {festival.heroImage && (
          <Image src={festival.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        )}
        <div className="relative p-6 mobile:p-10 tablet:p-16">
          <Stamp className="mb-6 tablet:absolute tablet:right-12 tablet:top-10 tablet:mb-0" />
          <h1 className="text-4xl font-bold tracking-tight tablet:max-w-[80%] tablet:text-6xl">{festival.name}</h1>
          {festival.tagline && <p className="mt-3 font-hand text-4xl text-accent">{festival.tagline}</p>}
          <p className="mt-6 text-xl font-semibold">{formatFestivalDates(festival)}</p>
        </div>
      </section>

      {/* About + photos */}
      <section aria-labelledby="about-heading" className="mt-12">
        <h2 id="about-heading" className="text-2xl font-bold">About the festival</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-lg text-muted">
          {festival.description.split(/\n\s*\n/).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {festival.photos && festival.photos.length > 0 && (
          <div className="mt-6 grid gap-4 mobile:grid-cols-2">
            {festival.photos.map((ph) => (
              <div key={ph.src} className="relative aspect-[4/3] overflow-hidden border border-line">
                <Image src={ph.src} alt={ph.alt} fill sizes="(min-width: 600px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lineup poster */}
      <section aria-labelledby="lineup-heading" className="mt-16 text-center">
        <p className="font-hand text-3xl text-accent">Who&apos;s playing?</p>
        <h2 id="lineup-heading" className="mt-1 text-2xl font-bold tablet:text-3xl">The lineup</h2>
        {festival.lineupPoster ? (
          <Image
            src={festival.lineupPoster}
            alt={`${festival.name} lineup poster`}
            width={1080}
            height={1350}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="mx-auto mt-6 w-full max-w-xl -rotate-1 border border-line shadow-[0_18px_40px_-20px_rgb(15_31_43/0.5)]"
          />
        ) : (
          <div className="mx-auto mt-6 flex aspect-[4/5] w-full max-w-md -rotate-1 flex-col items-center justify-center border-2 border-dashed border-accent-bright bg-surface p-8">
            <p className="font-hand text-4xl text-accent">Poster coming soon</p>
            <p className="mt-2 text-sm text-muted">Check back for the full lineup.</p>
          </div>
        )}
      </section>

      {/* FAQ */}
      {festival.faq.length > 0 && (
        <section aria-labelledby="faq-heading" className="mt-16 max-w-3xl">
          <h2 id="faq-heading" className="text-2xl font-bold tablet:text-3xl">Good to know</h2>
          <div className="mt-6">
            <FestivalFaq items={festival.faq} />
          </div>
          <p className="mt-6 text-muted">
            Other questions?{" "}
            <a href={mailtoHref("Festival question")} className="font-medium text-accent hover:underline">
              Email us
            </a>
            .
          </p>
        </section>
      )}
    </div>
  );
}
