import type { Metadata } from "next";
import Image from "next/image";
import FestivalFaq from "@/components/FestivalFaq";
import { Countdown } from "@/components/FestivalStatus";
import LineupSchedule from "@/components/LineupSchedule";
import { formatFestivalDates, getFestival, mailtoHref, mapsHref } from "@/lib/content";

const festival = getFestival();

export const metadata: Metadata = {
  title: "Festival at the Oasis",
  description: `${festival.name}: ${formatFestivalDates(festival)}. Free entry.`,
};

export default function FestivalPage() {
  const venueQuery = [festival.venueName, festival.venueAddress].filter(Boolean).join(", ");

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="relative overflow-hidden border border-line bg-surface">
        {festival.heroImage && (
          <Image src={festival.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        )}
        <div className="relative p-6 mobile:p-10 tablet:p-16">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Music festival</p>
            <span className="bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-bg">Free entry</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight tablet:text-6xl">{festival.name}</h1>
          {festival.tagline && <p className="mt-4 max-w-2xl text-lg text-muted">{festival.tagline}</p>}
          <p className="mt-6 text-xl font-semibold">{formatFestivalDates(festival)}</p>
          <div className="mt-2">
            <Countdown startDate={festival.startDate} endDate={festival.endDate} endedText="Thanks for coming! See you next year." />
          </div>
          {festival.rsvpNote && <p className="mt-6 text-muted">{festival.rsvpNote}</p>}
        </div>
      </section>

      {/* About + venue */}
      <section className="mt-12 grid gap-8 tablet:grid-cols-[3fr_2fr]">
        <div>
          <h2 className="text-2xl font-bold">About the festival</h2>
          <div className="mt-4 space-y-4 text-muted">
            {festival.description.split(/\n\s*\n/).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="border border-line bg-surface p-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">Venue</h2>
          <p className="mt-2 text-lg font-semibold">{festival.venueName}</p>
          {festival.venueAddress && <p className="mt-1 whitespace-pre-line text-muted">{festival.venueAddress}</p>}
          <a
            href={mapsHref(venueQuery)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
          >
            Open in Maps →
          </a>
        </div>
      </section>

      {/* Lineup */}
      <section aria-labelledby="lineup-heading" className="mt-16">
        <h2 id="lineup-heading" className="text-2xl font-bold tablet:text-3xl">Lineup</h2>
        <div className="mt-6">
          <LineupSchedule lineup={festival.lineup} />
        </div>
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
