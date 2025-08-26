import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnchorScrollFix from "@/components/ux/AnchorScrollFix";

export const metadata: Metadata = {
  title: "Clerko — proposals & quotes in minutes",
  description:
    "Create clean proposals in minutes. Templates, export, tracking.",
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : new URL("https://clerko.vercel.app"),
  openGraph: {
    title: "Clerko — proposals & quotes in minutes",
    description:
      "Create clean proposals in minutes. Templates, export, tracking.",
    url: "/",
    siteName: "Clerko",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  robots:
    process.env.NEXT_PUBLIC_NOINDEX === "1"
      ? { index: false, follow: false }
      : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AnchorScrollFix />
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 md:px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
