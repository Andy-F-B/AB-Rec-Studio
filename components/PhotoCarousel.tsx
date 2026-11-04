"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTERVAL_MS = 5000;

/** Square photo frame. With more than one photo: auto-advances every few seconds, arrows bottom-right. */
export default function PhotoCarousel({ photos, alt }: { photos: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const many = photos.length > 1;

  useEffect(() => {
    if (!many || paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % photos.length), INTERVAL_MS);
    return () => clearInterval(t);
  }, [many, paused, photos.length, index]);

  const go = (step: number) => setIndex((i) => (i + step + photos.length) % photos.length);

  return (
    <div
      className="relative aspect-square overflow-hidden border border-line bg-surface"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription={many ? "carousel" : undefined}
    >
      {photos.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={many ? `${alt}, photo ${i + 1} of ${photos.length}` : alt}
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className={`object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        />
      ))}

      {many && (
        <>
          <div className="absolute bottom-3 left-3 flex gap-1.5" aria-hidden="true">
            {photos.map((src, i) => (
              <span
                key={src}
                className={`h-2 rounded-full bg-white shadow transition-all ${i === index ? "w-5" : "w-2 opacity-60"}`}
              />
            ))}
          </div>
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-fg shadow-md backdrop-blur hover:bg-white"
            >
              <Arrow dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-fg shadow-md backdrop-blur hover:bg-white"
            >
              <Arrow dir="right" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}
