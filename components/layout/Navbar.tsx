"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";
import LinkButton from "@/components/ui/LinkButton";

const Logo = () => (
  <Link href="/" className="text-2xl font-bold text-white tracking-tight">
    Clerko
  </Link>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={clsx(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      "backdrop-blur-md border-b",
      scrolled ? "bg-black/40 border-white/10" : "bg-transparent border-transparent"
    )}>
      <div className="container mx-auto px-4 max-w-5xl h-20 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6">
          <Link href="/tools" className="text-white/70 hover:text-white transition-colors hidden md:block">Tools</Link>
          <Link href="/how-to" className="text-white/70 hover:text-white transition-colors hidden md:block">Guides</Link>
          <Link href="/store" className="text-white/70 hover:text-white transition-colors hidden md:block">Store</Link>
          <LinkButton href="#try">Try free</LinkButton>
        </div>
      </div>
    </nav>
  );
}