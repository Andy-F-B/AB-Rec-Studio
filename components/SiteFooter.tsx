import Image from "next/image";
import type { StudioInfo } from "@/lib/types";

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
    <footer className="mt-24 border-t-4 border-t-accent-bright bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted mobile:flex-row mobile:items-center mobile:justify-between tablet:px-6">
        <div className="flex items-center gap-4">
          <Image src="/brand/logo.svg" alt="" width={88} height={88} />
          <div>
            <p className="font-logo text-xl text-accent">{studio.name}</p>
            {studio.address && <p className="mt-1 whitespace-pre-line">{studio.address}</p>}
          </div>
        </div>
        {socials.length > 0 && (
          <ul className="flex flex-wrap gap-4">
            {socials.map((s) => (
              <li key={s.key}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted tablet:px-6">
          © {new Date().getFullYear()} {studio.name}
        </p>
      </div>
    </footer>
  );
}
