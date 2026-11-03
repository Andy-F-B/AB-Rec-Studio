"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">Something went wrong</p>
      <h1 className="mt-2 text-3xl font-bold">We hit a bum note</h1>
      <p className="mt-3 text-muted">This page didn&apos;t load properly. Try again, or head back home.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-accent px-5 py-3 font-semibold text-bg hover:opacity-90"
        >
          Try again
        </button>
        <Link href="/" className="rounded-lg border border-line px-5 py-3 font-semibold hover:border-accent">
          Back to home
        </Link>
      </div>
    </section>
  );
}
