import Image from "next/image";
import type { AboutSection as Section } from "@/lib/types";

type Props = { section: Section; flip?: boolean };

/** One background section. Body is plain text; blank lines split paragraphs. */
export default function AboutSection({ section, flip = false }: Props) {
  const paragraphs = section.body.split(/\n\s*\n/).filter(Boolean);
  const text = (
    <div>
      <h2 className="text-2xl font-bold tablet:text-3xl">{section.title}</h2>
      {section.subtitle && <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-accent">{section.subtitle}</p>}
      <div className="mt-4 space-y-4 text-muted">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );

  if (!section.image) {
    return (
      <section id={section.id} className="max-w-3xl scroll-mt-24">
        {text}
      </section>
    );
  }

  return (
    <section
      id={section.id}
      className="grid scroll-mt-24 items-center gap-8 tablet:grid-cols-2 tablet:gap-12"
    >
      <div className={`relative aspect-[4/3] overflow-hidden border border-line bg-surface ${flip ? "tablet:order-2" : ""}`}>
        <Image
          src={section.image}
          alt={section.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      {text}
    </section>
  );
}
