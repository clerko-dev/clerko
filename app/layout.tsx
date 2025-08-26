import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Clerko - Proposals & Quotes in Minutes",
    template: "%s | Clerko"
  },
  description: "The fastest way for freelancers and agencies to create professional proposals and quotes. Generate, copy, and send in minutes.",
  openGraph: {
    title: "Clerko - Proposals & Quotes in Minutes",
    description: "The fastest way for freelancers and agencies to create professional proposals and quotes. Generate, copy, and send in minutes.",
    url: "/",
    siteName: "Clerko",
    images: "/og-default.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clerko - Proposals & Quotes in Minutes",
    description: "The fastest way for freelancers and agencies to create professional proposals and quotes. Generate, copy, and send in minutes.",
    images: "/og-default.png",
  },
};
// Wymuszenie aktualizacji Vercel
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main className="container mx-auto px-4 max-w-5xl py-24 min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        {/* GA4 Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXX'); // Zmień na swój identyfikator GA4
            `,
          }}
        />
      </body>
    </html>
  );
}
