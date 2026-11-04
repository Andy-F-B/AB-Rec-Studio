import type { Release } from "@/lib/types";

// Add `link` (Spotify, Bandcamp, YouTube…) when available.
export const releases: Release[] = [
  { title: "British Invasion", artist: "Kenny Broc", musicianSlug: "kenny-broc", status: "upcoming" },
  { title: "Inspired by Brothers", artist: "CEONEO", musicianSlug: "ceoneo", status: "recent", releaseDate: "2026-05-27", cover: "/images/releases/inspired-by-brothers.jpg" },
  { title: "Pigs on the Moon", artist: "Benzen & Binau", musicianSlug: "benzen-and-binau", status: "recent", spotify: "https://open.spotify.com/artist/2IffhwR5LideNJqA5ZfkOJ", cover: "/images/releases/pigs-on-the-moon.jpg" },
];
