import type { UpcomingItem } from "@/lib/types";

// Home page "Upcoming" cards. Releases, concerts, anything coming up.
// Optional: date (YYYY-MM-DD, hides the card once it has passed), place, image, href.
export const upcoming: UpcomingItem[] = [
  {
    title: "CEONEO live",
    kind: "Concert",
    date: "2026-11-14",
    place: "Embrace of Celebration Music Festival",
    image: "/images/upcoming/ceoneo-live.jpg",
    href: "/projects/ceoneo",
  },
  {
    title: "Benzen & Binau live",
    kind: "Concert",
    date: "2026-11-14",
    place: "Embrace of Celebration Music Festival",
    image: "/images/upcoming/benzen-and-binau-live.jpg",
    href: "/projects/benzen-and-binau",
  },
  {
    title: "Backyard Music Festival at the Oasis",
    kind: "Concert",
    date: "2026-11-21",
    place: "Ocoee, FL",
    image: "/images/upcoming/backyard-festival.jpg",
    href: "/festival",
  },
];
