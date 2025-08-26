"use client";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import LinkButton from "@/components/ui/LinkButton";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [opaque, setOpaque] = useState(false);
  useEffect(() => {
    const onScroll = () => setOpaque(window.scrollY > 10);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 backdrop-blur ${opaque ? "bg-black/40 border-b border-white/10" : "bg-transparent border-b border-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-14 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link href="/tools" className="hover:text-white">Tools</Link>
          <Link href="/how-to" className="hover:text-white">Guides</Link>
          <Link href="/store" className="hover:text-white">Store</Link>
        </nav>
        <div className="flex items-center gap-2">
          <LinkButton href="#try" variant="primary" className="hidden sm:inline-flex">
            Try free
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
