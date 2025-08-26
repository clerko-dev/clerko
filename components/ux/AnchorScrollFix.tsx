"use client";
import { useEffect } from "react";

export default function AnchorScrollFix() {
  useEffect(() => {
    const OFFSET = 72; // wysokość sticky nav + zapas

    const scrollToHash = (hash: string) => {
      const id = hash.replace(/^#/, "");
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    };

    // 1) Po wejściu z hashem
    if (window.location.hash) {
      setTimeout(() => scrollToHash(window.location.hash), 0);
    }

    // 2) Delegacja klików – obsługuj a[href*="#"]
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest("a[href*='#']") as HTMLAnchorElement | null;
      if (!a) return;

      try {
        const url = new URL(a.href, window.location.href);
        const sameOrigin = url.origin === window.location.origin;
        const samePath = url.pathname === window.location.pathname;

        // Przewijamy płynnie tylko gdy ten sam dokument
        if (sameOrigin && samePath && url.hash) {
          e.preventDefault();
          scrollToHash(url.hash);
        }
      } catch {
        /* ignore malformed href */
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
