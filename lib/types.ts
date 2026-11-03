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
  workType: WorkType;
  link?: string;
};

export type Musician = {
  slug: string;
  name: string;
  genre?: string;
  shortBio: string;
  bio: string;
  image?: string;
  links: {
    website?: string;
    spotify?: string;
    instagram?: string;
    youtube?: string;
  };
  featured: boolean;
  credits: MusicianCredit[];
};

export type AboutSection = {
  id: string;
  title: string;
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
  /** IANA time zone the festival runs in, e.g. "America/New_York". Used to show lineup times. */
  timeZone: string;
  faq: { q: string; a: string }[];
  lineup: LineupSlot[];
};
