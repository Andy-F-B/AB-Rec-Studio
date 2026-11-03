import { mailtoHref } from "@/lib/content";
import type { StudioInfo } from "@/lib/types";

const quickSubjects = ["Booking", "Festival", "General"] as const;

const socialLabels: Record<keyof StudioInfo["socials"], string> = {
  instagram: "Instagram",
  youtube: "YouTube",
  spotify: "Spotify",
  facebook: "Facebook",
};

export default function ContactCard({ studio }: { studio: StudioInfo }) {
  const socials = (Object.keys(socialLabels) as (keyof StudioInfo["socials"])[])
    .filter((k) => studio.socials[k])
    .map((k) => ({ k, label: socialLabels[k], href: studio.socials[k] as string }));

  return (
    <div className="grid gap-6 tablet:grid-cols-[3fr_2fr]">
      <div className="border border-line bg-surface p-6 tablet:p-10">
        <h2 className="text-xl font-bold">Email the studio</h2>
        <p className="mt-2 text-muted">We read every message and usually reply within a couple of days.</p>
        <a
          href={mailtoHref("Studio inquiry")}
          className="mt-6 inline-block bg-accent px-6 py-3 text-lg font-semibold text-bg hover:opacity-90"
        >
          Email us
        </a>
        <p className="mt-4 text-sm text-muted">
          Or write to{" "}
          <a href={mailtoHref()} className="font-medium text-fg underline decoration-line underline-offset-4 hover:text-accent">
            {studio.email}
          </a>
        </p>

        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-muted">What&apos;s it about?</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {quickSubjects.map((s) => (
            <li key={s}>
              <a
                href={mailtoHref(s)}
                className="inline-block border border-line px-4 py-1.5 text-sm font-medium hover:border-accent hover:text-accent"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        {studio.address && (
          <div className="border border-line p-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">Studio</h2>
            <p className="mt-2 whitespace-pre-line">{studio.address}</p>
          </div>
        )}
        {socials.length > 0 && (
          <div className="border border-line p-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">Follow</h2>
            <ul className="mt-3 flex flex-wrap gap-4">
              {socials.map((s) => (
                <li key={s.k}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
