import Image from "next/image";
import Link from "next/link";
import { formatDay, monogram } from "@/lib/content";
import type { UpcomingItem } from "@/lib/types";

function Tile({ item }: { item: UpcomingItem }) {
  const day = item.date ? new Date(`${item.date}T12:00:00Z`) : null;
  return (
    <div className="relative aspect-square bg-line">
      {item.image ? (
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 600px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : day ? (
        <div aria-hidden="true" className="flex h-full flex-col items-center justify-center text-muted">
          <span className="text-lg font-semibold uppercase tracking-widest">
            {day.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" })}
          </span>
          <span className="text-5xl font-bold mobile:text-6xl">{day.getUTCDate()}</span>
        </div>
      ) : (
        <div aria-hidden="true" className="flex h-full items-center justify-center text-4xl font-bold text-muted">
          {monogram(item.artist ?? item.title)}
        </div>
      )}
      <span className="absolute left-0 top-0 bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-bg">
        {item.kind}
      </span>
    </div>
  );
}

export default function UpcomingCard({ item }: { item: UpcomingItem }) {
  const meta = [item.artist, item.date && formatDay(item.date), item.place].filter(Boolean).join(" · ");
  const body = (
    <>
      <Tile item={item} />
      <div className="p-4">
        <p className="font-semibold text-fg group-hover:text-accent">{item.title}</p>
        {meta && <p className="mt-1 text-sm text-muted">{meta}</p>}
      </div>
    </>
  );
  const cls = "card-link group block h-full overflow-hidden border border-line bg-surface hover:border-accent";

  if (!item.href) return <div className={cls}>{body}</div>;
  if (/^https?:\/\//.test(item.href)) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {body}
      </a>
    );
  }
  return (
    <Link href={item.href} className={cls}>
      {body}
    </Link>
  );
}
