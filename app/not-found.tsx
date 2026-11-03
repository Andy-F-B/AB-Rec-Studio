import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-2 text-3xl font-bold">This track doesn&apos;t exist</h1>
      <p className="mt-3 text-muted">The page you&apos;re looking for has moved or was never recorded.</p>
      <Link href="/" className="mt-8 inline-block bg-accent px-5 py-3 font-semibold text-bg hover:opacity-90">
        Back to home
      </Link>
    </section>
  );
}
