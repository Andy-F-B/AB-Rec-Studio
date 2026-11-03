import type { UpcomingItem } from "@/lib/types";

// Home page "Upcoming" cards. Releases, concerts, anything coming up.
// Optional: date (YYYY-MM-DD, hides the card once it has passed), place, image, href.
export const upcoming: UpcomingItem[] = [
  {
    title: "Backyard Music Festival at the Oasis",
    kind: "Concert",
    date: "2026-11-21",
    place: "Ocoee, FL",
    href: "/festival",
  },
  {
    title: "British Invasion",
    kind: "Release",
    artist: "Kenny Broc",
    href: "/projects/kenny-broc",
  },
  {
    title: "New CEONEO album",
    kind: "In the studio",
    artist: "CEONEO",
    href: "/projects/ceoneo",
  },
];
