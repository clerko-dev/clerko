export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 text-sm text-foreground/70 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Clerko</p>
        <nav className="flex gap-6">
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
