import type { Festival } from "@/lib/types";

export const festival: Festival = {
  name: "Backyard Music Festival at the Oasis",
  tagline: "Good music, good fun.",
  description:
    "A free backyard festival of live music in Ocoee, Florida, hosted by The Oasis, a community ministry of Ocoee Oaks United Methodist Church.",
  startDate: "2026-11-21",
  endDate: "2026-11-21",
  venueName: "The Oasis",
  venueAddress: "Ocoee Oaks United Methodist Church, Ocoee, Florida", // TODO: add street address if wanted
  admission: "free",
  rsvpNote: "Free entry. Start time to be announced.",
  timeZone: "America/New_York",
  faq: [
    { q: "Is it free?", a: "Yes. Entry is free for everyone. No ticket needed, just show up." },
    { q: "What time does it start?", a: "Start time is still to be announced. Check back here soon." },
    {
      q: "Who is hosting?",
      a: "The Oasis, a community ministry of Ocoee Oaks United Methodist Church.",
    },
  ],
  photos: [
    { src: "/images/festival/backyard-band.jpg", alt: "A band playing under the tent at the Backyard Music Festival", width: 1200, height: 1019 },
    { src: "/images/festival/backyard-trumpet.jpg", alt: "Trumpet solo at the Backyard Music Festival", width: 911, height: 1200 },
  ],
  // `stage` is used to group the lineup.
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
