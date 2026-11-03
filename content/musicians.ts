import type { Musician } from "@/lib/types";

// TODO: replace these placeholder musicians with the real artists the studio has worked with.
// Put photos in /public/images/musicians/<slug>.jpg and set `image` to "/images/musicians/<slug>.jpg".
export const musicians: Musician[] = [
  {
    slug: "placeholder-artist-one",
    name: "Placeholder Artist One",
    genre: "Indie Rock",
    shortBio: "Four-piece band who tracked their debut album live in our main room.",
    bio: "TODO: full bio.",
    featured: true,
    links: {},
    credits: [{ title: "Debut Album (placeholder)", year: 2025, workType: "recording" }],
  },
  {
    slug: "placeholder-artist-two",
    name: "Placeholder Artist Two",
    genre: "Soul",
    shortBio: "Singer-songwriter who mixed and mastered her EP with us.",
    bio: "TODO: full bio.",
    featured: true,
    links: {},
    credits: [{ title: "EP (placeholder)", year: 2026, workType: "mixing" }],
  },
  {
    slug: "placeholder-artist-three",
    name: "Placeholder Artist Three",
    genre: "Hip-Hop",
    shortBio: "Producer and MC who recorded vocals for his latest singles here.",
    bio: "TODO: full bio.",
    featured: true,
    links: {},
    credits: [{ title: "Single (placeholder)", year: 2026, workType: "production" }],
  },
];
