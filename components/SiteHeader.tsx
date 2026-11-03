"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UpcomingBadge } from "@/components/FestivalStatus";
import { isActive, navItems } from "@/lib/nav";

type Props = { studioName: string; festivalDates: { startDate: string; endDate?: string } };

export default function SiteHeader({ studioName, festivalDates }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 tablet:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-fg" onClick={() => setOpen(false)}>
          {studioName}
        </Link>

        <nav aria-label="Main" className="hidden mobile:block">
          <ul className="flex gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active ? "bg-surface text-accent" : "text-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                    {item.href === "/festival" && <UpcomingBadge {...festivalDates} />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-fg mobile:hidden"
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
          <ul className="flex flex-col px-4 py-2">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-3 text-base font-medium ${
                      active ? "bg-surface text-accent" : "text-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                    {item.href === "/festival" && <UpcomingBadge {...festivalDates} />}
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
