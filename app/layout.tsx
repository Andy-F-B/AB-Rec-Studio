import type { Metadata } from "next";
import { DM_Sans, Fraunces, Pacifico } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getStudio } from "@/lib/content";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const pacifico = Pacifico({ variable: "--font-pacifico", subsets: ["latin"], weight: "400" });

const studio = getStudio();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: studio.name, template: `%s | ${studio.name}` },
  description: studio.tagline,
  openGraph: { title: studio.name, description: studio.tagline, siteName: studio.name, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} ${pacifico.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-bg">
          Skip to content
        </a>
        <SiteHeader studioName={studio.name} />
        <main id="main" className="mx-auto min-h-[60vh] max-w-6xl px-4 tablet:px-6">
          {children}
        </main>
        <SiteFooter studio={studio} />
      </body>
    </html>
  );
}
