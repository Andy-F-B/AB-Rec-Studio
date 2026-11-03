import type { StudioInfo } from "@/lib/types";
import { mailtoHref } from "@/lib/content";

type Props = { studio: StudioInfo };

const socialLabels: Record<keyof StudioInfo["socials"], string> = {
  instagram: "Instagram",
  youtube: "YouTube",
  spotify: "Spotify",
  facebook: "Facebook",
};

export default function SiteFooter({ studio }: Props) {
  const socials = (Object.keys(socialLabels) as (keyof StudioInfo["socials"])[])
    .filter((key) => studio.socials[key])
    .map((key) => ({ key, label: socialLabels[key], href: studio.socials[key] as string }));

  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-muted tablet:grid-cols-3 tablet:px-6">
        <div>
          <p className="font-semibold text-fg">{studio.name}</p>
          {studio.address && <p className="mt-2 whitespace-pre-line">{studio.address}</p>}
        </div>
        <div>
          <p className="font-semibold text-fg">Contact</p>
          <a href={mailtoHref()} className="mt-2 inline-block hover:text-accent">
            {studio.email}
          </a>
        </div>
        {socials.length > 0 && (
          <div>
            <p className="font-semibold text-fg">Follow</p>
            <ul className="mt-2 flex flex-wrap gap-4">
              {socials.map((s) => (
                <li key={s.key}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <p className="pb-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} {studio.name}
      </p>
    </footer>
  );
}
