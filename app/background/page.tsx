import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import { getStudio, listAboutSections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Background",
  description: "The story, rooms, gear and people behind AB Recording Studio.",
};

export default function BackgroundPage() {
  const studio = getStudio();
  const sections = listAboutSections();
  let imageIndex = 0;

  return (
    <div className="py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Background</p>
        <h1 className="mt-2 text-3xl font-bold tablet:text-5xl">About {studio.name}</h1>
        <p className="mt-4 text-lg text-muted">The story, the rooms and the people behind the music.</p>
      </header>

      {sections.length > 1 && (
        <nav aria-label="On this page" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-block border border-line px-4 py-1.5 text-sm font-medium text-muted hover:border-accent hover:text-fg"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {sections.length > 0 ? (
        <div className="mt-14 space-y-16 tablet:space-y-24">
          {sections.map((s) => {
            const flip = Boolean(s.image) && imageIndex++ % 2 === 1;
            return <AboutSection key={s.id} section={s} flip={flip} />;
          })}
        </div>
      ) : (
        <p className="mt-14 border border-dashed border-line p-8 text-center text-muted">
          Our story is coming soon.
        </p>
      )}
    </div>
  );
}
