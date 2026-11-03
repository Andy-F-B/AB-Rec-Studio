import Image from "next/image";
import Link from "next/link";
import { Countdown, HideAfterFestival } from "@/components/FestivalStatus";
import UpcomingCard from "@/components/UpcomingCard";
import { formatFestivalDates, getFestival, getStudio, listAboutSections, listUpcoming } from "@/lib/content";

const paragraphs = (body: string) => body.split(/\n\s*\n/);

export default function HomePage() {
  const studio = getStudio();
  const festival = getFestival();
  const upcoming = listUpcoming();
  const about = listAboutSections();
  const story = about.find((s) => s.id === "our-story");
  const people = about.filter((s) => s.id === "alan-binau" || s.id === "andy-binau");
  const church = about.find((s) => s.id === "church-and-worship");

  return (
    <>
      {/* Hero */}
      <section className="grid items-center gap-10 py-16 tablet:grid-cols-[3fr_2fr] tablet:py-24">
        <div>
          <h1 className="font-logo text-5xl font-normal leading-tight text-accent mobile:text-6xl tablet:text-7xl">
            {studio.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{studio.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/festival" className="bg-accent px-5 py-3 font-semibold text-bg hover:opacity-90">
              Backyard Festival at the Oasis
            </Link>
            <Link href="/projects" className="border border-line px-5 py-3 font-semibold text-fg hover:border-accent">
              Projects
            </Link>
          </div>
        </div>
        <Image
          src="/brand/logo.svg"
          alt="AB Recording Studio logo"
          width={480}
          height={480}
          priority
          className="mx-auto w-64 mobile:w-80 tablet:w-full tablet:max-w-md"
        />
      </section>

      {/* Upcoming: releases, concerts, anything coming up */}
      {upcoming.length > 0 && (
        <section aria-labelledby="upcoming-heading" className="py-12">
          <h2 id="upcoming-heading" className="text-2xl font-bold tablet:text-3xl">
            Upcoming
          </h2>
          <ul className={`mt-6 grid grid-cols-2 gap-3 mobile:gap-4 ${upcoming.length >= 4 ? "tablet:grid-cols-4" : "tablet:grid-cols-3"}`}>
            {upcoming.map((u) => (
              <li key={`${u.kind}-${u.title}`}>
                <UpcomingCard item={u} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Festival teaser (hidden once the festival has ended) */}
      <HideAfterFestival startDate={festival.startDate} endDate={festival.endDate}>
        <section
          aria-labelledby="festival-heading"
          className="mt-12 grid border border-line border-t-4 border-t-accent-bright bg-surface tablet:grid-cols-[3fr_2fr]"
        >
          <div className="p-6 tablet:p-10">
          <h2 id="festival-heading" className="text-3xl font-bold tablet:text-4xl">
            {festival.name}
          </h2>
          {festival.tagline && <p className="mt-2 font-hand text-3xl text-accent">{festival.tagline}</p>}
          <p className="mt-4 font-medium">
            {formatFestivalDates(festival)} · {festival.venueName}
          </p>
          <div className="mt-2">
            <Countdown startDate={festival.startDate} endDate={festival.endDate} />
          </div>
          <Link
            href="/festival"
            className="mt-6 inline-block bg-accent px-5 py-3 font-semibold text-bg hover:opacity-90"
          >
            Festival details
          </Link>
          </div>
          {festival.photos?.[0] && (
            <div className="relative aspect-[4/3] tablet:aspect-auto">
              <Image
                src={festival.photos[0].src}
                alt={festival.photos[0].alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </section>
      </HideAfterFestival>

      {/* Background, summarised (full text stays in content/about.ts) */}
      {story && (
        <section id="background" aria-labelledby="background-heading" className="scroll-mt-24 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Background</p>
          <h2 id="background-heading" className="mt-2 text-2xl font-bold tablet:text-3xl">
            {story.title}
          </h2>
          <div className="mt-4 grid items-start gap-8 tablet:grid-cols-[3fr_2fr]">
            <div className="max-w-3xl space-y-4 text-muted">
              {paragraphs(story.body).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {church && <p>{church.body}</p>}
            </div>
            {story.image && (
              <figure>
                <Image
                  src={story.image}
                  alt="Alan Binau on stage with LFO"
                  width={800}
                  height={1000}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="mx-auto w-full max-w-sm border border-line tablet:max-w-none"
                />
                <figcaption className="mt-2 text-sm text-muted">Alan on tour with LFO</figcaption>
              </figure>
            )}
          </div>

          {people.length > 0 && (
            <div className="mt-10 grid gap-4 tablet:grid-cols-2">
              {people.map((p) => (
                <div key={p.id} className="flex flex-col gap-5 border border-line bg-surface p-6 mobile:flex-row">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={160}
                      height={160}
                      className="size-32 shrink-0 object-cover mobile:size-36"
                    />
                  )}
                  <div>
                    <h3 className="text-xl">{p.title}</h3>
                    {p.subtitle && <p className="mt-1 text-sm font-medium text-accent">{p.subtitle}</p>}
                    <p className="mt-3 text-muted">{paragraphs(p.body)[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}
