import Image from "next/image";
import Link from "next/link";
import { HideAfterFestival } from "@/components/FestivalStatus";
import Stamp from "@/components/Stamp";
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
            <Link href="/festival" className="shape-blob bg-accent px-6 py-3 font-semibold text-bg hover:opacity-90">
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
            {formatFestivalDates(festival)}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-8">
            <Link href="/festival" className="shape-blob bg-accent px-6 py-3 font-semibold text-bg hover:opacity-90">
              Festival details
            </Link>
            <Stamp />
          </div>
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
          <h2 id="background-heading" className="font-logo text-4xl font-normal text-accent tablet:text-5xl">
            {story.title}
          </h2>
          <div className="mt-6 grid items-start gap-8 tablet:grid-cols-[3fr_2fr]">
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
            <div className="mt-12 grid gap-6 tablet:grid-cols-2">
              {people.map((p) => (
                <article key={p.id} className="overflow-hidden border border-line border-t-4 border-t-accent-bright bg-surface">
                  {p.image && (
                    <div className="relative aspect-[4/3] bg-line">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className="object-cover object-[50%_30%]"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-logo text-3xl font-normal text-accent">{p.title}</h3>
                    {p.subtitle && (
                      <p className="mt-1 font-display text-lg italic text-accent">
                        {p.subtitle
                          .split("·")
                          .map((r) => r.trim())
                          .join(", ")}
                      </p>
                    )}
                    <p className="mt-3 text-muted">{paragraphs(p.body)[0]}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}
