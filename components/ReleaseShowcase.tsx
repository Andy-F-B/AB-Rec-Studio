import Image from "next/image";
import Link from "next/link";
import { monogram, type ReleaseView } from "@/lib/content";

/**
 * Stylized release card: cover with a record peeking out, title, release date,
 * role and a Spotify button. Used on artist profiles and the Projects page.
 */
export default function ReleaseShowcase({
  release,
  artistHref,
}: {
  release: ReleaseView;
  artistHref?: string;
}) {
  return (
    <div className="group flex h-full gap-4 overflow-hidden border border-line bg-surface p-4 transition-shadow hover:shadow-lg tablet:gap-5">
      {/* Cover + record, release date underneath */}
      <div className="mr-7 shrink-0 tablet:mr-9">
        <div className="relative h-28 w-28 tablet:h-32 tablet:w-32">
          <div
            aria-hidden="true"
            className="absolute inset-y-1 right-0 aspect-square translate-x-[24%] rounded-full bg-[radial-gradient(circle,#0e1a20_0_14%,var(--color-accent)_15%_22%,#0e1a20_23%_100%)] shadow-md transition-transform duration-500 group-hover:translate-x-[42%] group-hover:rotate-180"
          >
            <span className="absolute inset-[30%] rounded-full border border-white/10" />
            <span className="absolute inset-[40%] rounded-full border border-white/10" />
          </div>
          <div className="relative h-full w-full overflow-hidden bg-line shadow-md">
            {release.cover ? (
              <Image
                src={release.cover}
                alt={`${release.title} cover`}
                fill
                sizes="128px"
                className="object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-full items-center justify-center bg-fg text-3xl font-bold text-white/80"
              >
                {monogram(release.title)}
              </div>
            )}
          </div>
        </div>
        <p
          className={`mt-2 w-28 text-xs tablet:w-32 ${release.upcoming ? "font-semibold text-accent" : "text-muted"}`}
        >
          {release.upcoming
            ? "Coming soon"
            : release.date === "Date TBA"
              ? "Release date TBA"
              : "Released"}
          {release.date !== "Coming soon" && release.date !== "Date TBA" && (
            <>
              {release.upcoming ? " · " : " "}
              <span className="whitespace-nowrap font-medium text-fg/80">
                {release.date}
              </span>
            </>
          )}
        </p>
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="font-display text-xl font-bold leading-tight tablet:text-2xl">
          {release.title}
        </h3>
        {(release.artist || release.kind) && (
          <p className="mt-1 text-sm text-muted">
            {release.artist &&
              (artistHref ? (
                <Link href={artistHref} className="hover:text-accent">
                  {release.artist}
                </Link>
              ) : (
                release.artist
              ))}
            {release.artist && release.kind && (
              <span aria-hidden="true"> - </span>
            )}
            {release.kind && (
              <span className="font-display italic text-accent">
                {release.kind}
              </span>
            )}
          </p>
        )}
        {release.role && (
          <span className="mt-2 w-fit bg-white px-2.5 py-0.5 text-xs font-medium text-muted">
            {release.role}
          </span>
        )}

        <div className="mt-auto pt-3">
          {release.listenOn === "apple" ? (
            <a
              href={release.listenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#fa2d48] px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#e0223c]"
            >
              <NoteGlyph />
              Apple Music
            </a>
          ) : (
            <a
              href={release.listenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#1db954] px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1aa34a]"
              title={
                release.listenIsPlaceholder
                  ? "Spotify link coming soon"
                  : undefined
              }
            >
              <SpotifyGlyph />
              <span>
                {!release.upcoming && (
                  <span className="hidden tablet:inline">Listen on </span>
                )}
                Spotify
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SpotifyGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#fff" />
      <g fill="none" stroke="#1db954" strokeLinecap="round">
        <path d="M6.5 9.2c3.8-1.1 7.9-.8 11.2 1" strokeWidth="2" />
        <path d="M7.2 12.4c3-.8 6.2-.5 8.8.9" strokeWidth="1.7" />
        <path d="M7.8 15.4c2.4-.6 4.7-.4 6.8.7" strokeWidth="1.4" />
      </g>
    </svg>
  );
}

function NoteGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#fff" />
      <path
        d="M10 16.5V8.2l6-1.4v7.7"
        fill="none"
        stroke="#fa2d48"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="8.6" cy="16.6" r="1.6" fill="#fa2d48" />
      <circle cx="14.6" cy="14.9" r="1.6" fill="#fa2d48" />
    </svg>
  );
}
