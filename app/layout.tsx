import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clerko.vercel.app";
const isIndexable = process.env.NEXT_PUBLIC_INDEXABLE === "1";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Clerko — Proposals & quotes in minutes", template: "%s — Clerko" },
  description: "Create proposals and quotes in minutes. Templates, export, tracking.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Clerko — Proposals & quotes in minutes",
    description: "Create proposals and quotes in minutes. Templates, export, tracking.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Clerko" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clerko — Proposals & quotes in minutes",
    description: "Create proposals and quotes in minutes. Templates, export, tracking.",
    images: ["/og-default.png"],
  },
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: { index: isIndexable, follow: isIndexable },
  },
  // verification: { google: "ADD_WHEN_GO_LIVE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-1 rounded"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main" className="mx-auto max-w-7xl px-4 md:px-6 py-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
