import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getFestival, getStudio } from "@/lib/content";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const studio = getStudio();
const festival = getFestival();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: studio.name, template: `%s | ${studio.name}` },
  description: studio.tagline,
  openGraph: { title: studio.name, description: studio.tagline, siteName: studio.name, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg">
          Skip to content
        </a>
        <SiteHeader studioName={studio.name} festivalDates={{ startDate: festival.startDate, endDate: festival.endDate }} />
        <main id="main" className="mx-auto min-h-[60vh] max-w-6xl px-4 tablet:px-6">
          {children}
        </main>
        <SiteFooter studio={studio} />
      </body>
    </html>
  );
}
