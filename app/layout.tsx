import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clerko.vercel.app";

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
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] min-h-screen`}>
        <header className="sticky top-0 z-30 border-b border-white/10 backdrop-blur bg-black/30">
          <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">Clerko</Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/tools">Tools</Link>
              <Link href="/how-to">Guides</Link>
              <Link href="/store">Templates</Link>
            </div>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>

        <footer className="mt-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col md:flex-row gap-3 md:gap-6 md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Clerko</div>
            <div className="flex gap-5">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
