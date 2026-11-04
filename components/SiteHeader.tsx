"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isActive, navItems } from "@/lib/nav";

/** Highlighted items (the festival) get a cyan fill so they stand out. */
function navClass(highlight: boolean | undefined, active: boolean): string {
  if (highlight) {
    return active
      ? "shape-blob bg-accent font-semibold text-bg"
      : "shape-blob border-2 border-accent-bright bg-accent-bright/20 font-semibold text-accent hover:bg-accent hover:text-bg";
  }
  return active ? "bg-surface text-accent" : "text-muted hover:text-fg";
}

type Props = { studioName: string };

export default function SiteHeader({ studioName }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line border-t-4 border-t-accent-bright bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 tablet:px-6">
        <Link href="/" className="flex items-center gap-2 font-logo text-2xl text-accent" onClick={() => setOpen(false)}>
          <Image src="/brand/logo-mark.svg" alt="" width={40} height={40} priority />
          {studioName}
        </Link>

        <nav aria-label="Main" className="hidden mobile:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors ${navClass(item.highlight, active)}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="p-2 text-fg mobile:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line mobile:hidden">
          <ul className="flex flex-col gap-1 px-4 py-2">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center px-3 py-3 text-base font-medium ${navClass(item.highlight, active)}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
