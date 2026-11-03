import Link from "next/link";
import { Countdown, HideAfterFestival } from "@/components/FestivalStatus";
import MusicianCard from "@/components/MusicianCard";
import ReleaseList from "@/components/ReleaseList";
import {
  formatFestivalDates,
  getFestival,
  getStudio,
  listAboutSections,
  listMusicians,
  mailtoHref,
} from "@/lib/content";

export default function HomePage() {
  const studio = getStudio();
  const featured = listMusicians({ featured: true });
  const festival = getFestival();
  const about = listAboutSections()[0];

  return (
    <>
      {/* Hero */}
      <section className="py-20 tablet:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Recording studio · Orlando, Florida</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight mobile:text-5xl tablet:text-7xl">{studio.name}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{studio.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={mailtoHref("Studio inquiry")}
            className="rounded-lg bg-accent px-5 py-3 font-semibold text-bg hover:opacity-90"
          >
            Get in touch
          </a>
          <Link
            href="/musicians"
            className="rounded-lg border border-line px-5 py-3 font-semibold text-fg hover:border-accent"
          >
            Who we&apos;ve worked with
          </Link>
        </div>
      </section>

      {/* Featured musicians */}
      <section aria-labelledby="featured-heading" className="py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 id="featured-heading" className="text-2xl font-bold tablet:text-3xl">
            Artists we&apos;ve worked with
          </h2>
          <Link href="/musicians" className="shrink-0 text-sm font-medium text-accent hover:underline">
            See all
          </Link>
        </div>
        {featured.length > 0 ? (
          <ul className="mt-6 grid grid-cols-1 gap-4 mobile:grid-cols-2 tablet:grid-cols-4">
            {featured.slice(0, 4).map((m) => (
              <li key={m.slug}>
                <MusicianCard musician={m} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 rounded-xl border border-dashed border-line p-8 text-center text-muted">
            No musicians yet.
          </p>
        )}
      </section>

      {/* Festival teaser (hidden once the festival has ended) */}
      <HideAfterFestival startDate={festival.startDate} endDate={festival.endDate}>
        <section
          aria-labelledby="festival-heading"
          className="mt-12 rounded-2xl border border-line bg-surface p-6 tablet:p-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Upcoming festival</p>
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">Free entry</span>
          </div>
          <h2 id="festival-heading" className="mt-3 text-3xl font-bold tablet:text-4xl">
            {festival.name}
          </h2>
          {festival.tagline && <p className="mt-3 max-w-2xl text-muted">{festival.tagline}</p>}
          <p className="mt-4 font-medium">
            {formatFestivalDates(festival)} · {festival.venueName}
          </p>
          <div className="mt-2">
            <Countdown startDate={festival.startDate} endDate={festival.endDate} />
          </div>
          <Link
            href="/festival"
            className="mt-6 inline-block rounded-lg bg-accent px-5 py-3 font-semibold text-bg hover:opacity-90"
          >
            Festival details
          </Link>
        </section>
      </HideAfterFestival>

      {/* Releases */}
      <section className="py-12">
        <ReleaseList compact />
      </section>

      {/* About teaser */}
      {about && (
        <section aria-labelledby="about-heading" className="py-16">
          <h2 id="about-heading" className="text-2xl font-bold tablet:text-3xl">
            {about.title}
          </h2>
          <p className="mt-4 max-w-3xl text-muted">{about.body.split(/\n\s*\n/)[0]}</p>
          <Link href="/background" className="mt-6 inline-block text-sm font-medium text-accent hover:underline">
            Read our background
          </Link>
        </section>
      )}
    </>
  );
}
