"use client";
import { useEffect } from "react";

export default function AnchorScrollFix() {
  useEffect(() => {
    const handler = (e: Event) => {
      const el = e.target as HTMLAnchorElement;
      if (el.tagName === "A" && el.getAttribute("href")?.startsWith("#")) {
        const id = el.getAttribute("href")!.slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 80; // anchor offset
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
  return null;
}
