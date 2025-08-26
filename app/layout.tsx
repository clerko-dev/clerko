import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "Clerko – Proposals & quotes in minutes", template: "%s | Clerko" },
  description: "Quickly draft tailored proposals and quotes with our intuitive generator.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-white/10 selection:text-white">
        {/* Background gradients */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0"
               style={{background:
                "radial-gradient(1200px 600px at 50% -20%, rgba(124,58,237,0.25), transparent 60%), " +
                "radial-gradient(800px 400px at 80% 20%, rgba(34,211,238,0.2), transparent 60%)"}} />
        </div>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
