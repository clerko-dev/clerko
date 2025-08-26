"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import LinkButton from "@/components/ui/LinkButton";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/how-to", label: "Guides" },
  { href: "/store", label: "Store" },
];

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={`px-2.5 py-1.5 rounded-lg text-sm transition-colors ${
        active
          ? "text-white bg-white/10 border border-white/15"
          : "text-white/80 hover:text-white hover:bg-white/5"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-14 flex items-center justify-between">
        <Logo />

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-2">
          {LINKS.map((l) => (
            <NavItem key={l.href} {...l} />
          ))}
          {/* gradientowy, przewija do sekcji */}
          <LinkButton href="/#try" variant="primary" className="ml-2">
            Try free
          </LinkButton>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Menu"
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/15 bg-white/5"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-white"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <nav className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-2.5 py-2 rounded-lg text-sm text-white/90 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <LinkButton
              href="/#try"
              variant="primary"
              className="mt-1 w-fit"
              onClick={() => setOpen(false)}
            >
              Try free
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
