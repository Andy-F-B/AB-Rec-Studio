// Content types for the hard-coded v1 site. See ai/database.md.

export type Socials = {
  instagram?: string;
  youtube?: string;
  spotify?: string;
  facebook?: string;
};

export type StudioInfo = {
  name: string;
  tagline: string;
  email: string;
  address?: string;
  socials: Socials;
};

export type WorkType = "recording" | "mixing" | "mastering" | "production";

export type MusicianCredit = {
  title: string;
  year?: number;
  workType?: WorkType;
  status?: "upcoming";
  link?: string;
  /** Release date as YYYY-MM-DD (or YYYY). Shows "Date TBA" when missing. */
  releaseDate?: string;
  /** Square cover. Falls back to the matching entry in content/releases.ts. */
  cover?: string;
  /** Spotify link. Falls back to a placeholder until the real link is added. */
  spotify?: string;
  /** Used for the listen button when there is no Spotify link. */
  appleMusic?: string;
  /** Shown as a small label above the title. Defaults to "Album". */
  kind?: "Album" | "EP";
};

export type Musician = {
  slug: string;
  name: string;
  genre?: string;
  shortBio: string;
  bio: string;
  image?: string;
  /** Extra photos. With more than one photo, the profile shows a slideshow. */
  photos?: string[];
  /** Optional wordmark/logo image shown in place of the name on the profile page. */
  logo?: string;
  links: {
    website?: string;
    spotify?: string;
    instagram?: string;
    youtube?: string;
    appleMusic?: string;
    soundcloud?: string;
  };
  featured: boolean;
  credits: MusicianCredit[];
};

export type AboutSection = {
  id: string;
  title: string;
  /** Small line under the title, e.g. roles. */
  subtitle?: string;
  body: string;
  image?: string;
};

export type LineupSlot = {
  artistName: string;
  musicianSlug?: string;
  stage?: string;
  /** ISO date-time with offset, e.g. "2027-06-12T18:00:00-04:00". */
  performanceAt?: string;
  order: number;
};

export type Festival = {
  name: string;
  tagline?: string;
  description: string;
  startDate: string;
  endDate?: string;
  venueName: string;
  venueAddress?: string;
  admission: "free";
  rsvpNote?: string;
  heroImage?: string;
  /** Photos from past festivals, shown on the festival page and home teaser. */
  photos?: { src: string; alt: string; width: number; height: number }[];
  /** IANA time zone the festival runs in, e.g. "America/New_York". Used to show lineup times. */
  timeZone: string;
  faq: { q: string; a: string }[];
  /** Lineup poster image (portrait), shown on the festival page. */
  lineupPoster?: string;
  lineup: LineupSlot[];
};

export type Release = {
  title: string;
  artist: string;
  /** Musician slug, to link to their profile. */
  musicianSlug?: string;
  status: "upcoming" | "recent";
  link?: string;
  /** Square album cover, e.g. /images/releases/<file>.jpg */
  cover?: string;
  /** Release date as YYYY-MM-DD (or YYYY). */
  releaseDate?: string;
  spotify?: string;
  /** Defaults to "Album". */
  kind?: "Album" | "EP";
};

/** A card in the home page "Upcoming" row: a release, a concert, anything coming up. */
export type UpcomingItem = {
  title: string;
  /** Shown as a small label, e.g. "Release", "Concert". */
  kind: string;
  artist?: string;
  /** Date as YYYY-MM-DD. Items with a past date are hidden at build time. */
  date?: string;
  place?: string;
  /** Square image, e.g. /images/upcoming/<file>.jpg */
  image?: string;
  /** Where the card links: an internal path ("/festival") or a full URL. */
  href?: string;
};
