import type { Festival } from "@/lib/types";

export const festival: Festival = {
  name: "Backyard Music Festival at the Oasis",
  tagline: "Good music, good fun.",
  description:
    "Hosted by Alan and Andy Binau, in partnership with Ocoee Oaks United Methodist Church. Live music and great friendships, now in its second year. Starts around 2PM.",
  startDate: "2026-11-21",
  endDate: "2026-11-21",
  venueName: "The Oasis",
  admission: "free",
  rsvpNote: "Starts around 2PM.",
  timeZone: "America/New_York",
  faq: [
    { q: "Is it free?", a: "I sure hope so!" },
    { q: "What time does it start?", a: "We're musicians, we're always late.... around 2PM!" },
    { q: "Who is hosting?", a: "Alan Binau." },
  ],
  photos: [
    { src: "/images/festival/backyard-band.jpg", alt: "A band playing under the tent at the Backyard Music Festival", width: 1200, height: 1019 },
    { src: "/images/festival/backyard-trumpet.jpg", alt: "Trumpet solo at the Backyard Music Festival", width: 911, height: 1200 },
  ],
  // Lineup poster for the festival page. Drop the image in /public/images/festival/ and set the path.
  lineupPoster: "/images/festival/lineup-poster-2026.jpg",
  // Used for "Playing at the festival" on profiles. `stage` groups the list.
  lineup: [
    { artistName: "CEONEO", musicianSlug: "ceoneo", stage: "Returning", order: 1 },
    { artistName: "Benzen & Binau", musicianSlug: "benzen-and-binau", stage: "Returning", order: 2 },
    { artistName: "Kenny Broc", musicianSlug: "kenny-broc", stage: "Returning", order: 3 },
    { artistName: "Gravis Pars", musicianSlug: "gravis-pars", stage: "First time at the Oasis", order: 4 },
    { artistName: "Niz", stage: "First time at the Oasis", order: 5 },
    { artistName: "Zara", musicianSlug: "zara", stage: "First time at the Oasis", order: 6 },
    { artistName: "Special guest — TBA", stage: "First time at the Oasis", order: 7 },
  ],
};
