"use client";
import { useEffect } from "react";

export default function AnchorScrollFix() {
  useEffect(() => {
    const OFFSET = 72; // ~h-14 + zapas

    const scrollToHash = (hash: string) => {
      const id = hash.replace(/^#/, "");
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    };

    // Kliknięcia w linki #anchor na tej samej trasie
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      // ta sama strona
      if (a.pathname === window.location.pathname && a.hash) {
        e.preventDefault();
        scrollToHash(a.hash);
      }
    };

    // Na load – jeśli w URL już jest hash
    if (window.location.hash) {
      setTimeout(() => scrollToHash(window.location.hash), 0);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
