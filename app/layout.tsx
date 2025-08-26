import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Clerko - Proposals & quotes in minutes",
  description: "Quickly generate professional proposals and quotes for your clients. Try our intuitive proposal generator for free.",
  openGraph: {
    title: "Clerko - Proposals & quotes in minutes",
    description: "Type a few fields, get a clean proposal. Export, copy, send. The fastest way to close deals.",
    url: "/",
    siteName: "Clerko",
    images: "/og-default.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clerko - Proposals & quotes in minutes",
    description: "Type a few fields, get a clean proposal. Export, copy, send. The fastest way to close deals.",
    images: "/og-default.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 max-w-5xl py-24 min-h-screen">
          {children}
        </main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}