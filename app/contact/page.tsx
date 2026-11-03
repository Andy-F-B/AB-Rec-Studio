import type { Metadata } from "next";
import ContactCard from "@/components/ContactCard";
import { getStudio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with AB Recording Studio about bookings, the festival or anything else.",
};

export default function ContactPage() {
  const studio = getStudio();
  return (
    <div className="py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</p>
        <h1 className="mt-2 text-3xl font-bold tablet:text-5xl">Let&apos;s make something</h1>
        <p className="mt-4 text-lg text-muted">Booking a session, asking about the festival, or just saying hi.</p>
      </header>
      <div className="mt-10">
        <ContactCard studio={studio} />
      </div>
    </div>
  );
}
