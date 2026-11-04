import type { Musician } from "@/lib/types";

const labels: Record<keyof Musician["links"], string> = {
  website: "Website",
  spotify: "Spotify",
  instagram: "Instagram",
  youtube: "YouTube",
  appleMusic: "Apple Music",
  soundcloud: "SoundCloud",
};

export default function MusicianLinks({ links }: { links: Musician["links"] }) {
  const items = (Object.keys(labels) as (keyof Musician["links"])[])
    .filter((k) => links[k])
    .map((k) => ({ k, label: labels[k], href: links[k] as string }));
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((i) => (
        <li key={i.k}>
          <a
            href={i.href}
            target="_blank"
            rel="noopener noreferrer"
            className="shape-blob inline-block border-2 border-line bg-bg px-4 py-2 text-sm font-medium transition-colors hover:border-accent-bright hover:bg-accent-bright/10 hover:text-accent"
          >
            {i.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
