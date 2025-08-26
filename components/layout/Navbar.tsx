import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-background/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white">Clerko</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-foreground/80">
          <Link href="/tools" className="hover:text-white">Tools</Link>
          <Link href="/templates" className="hover:text-white">Templates</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
        </nav>
        <Link href="/signup" className="btn-outline hover:bg-white/5">Sign up</Link>
      </div>
    </header>
  );
}
