import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 grid sm:grid-cols-3 gap-8 text-sm">
        <div className="opacity-80">
          <div className="font-semibold">Clerko</div>
          <p className="text-white/60 mt-2">Create proposals and quotes in minutes. Templates, export, tracking.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Product</div>
          <ul className="space-y-1 text-white/70">
            <li><Link href="/tools" className="hover:text-white">Tools</Link></li>
            <li><Link href="/how-to" className="hover:text-white">Guides</Link></li>
            <li><Link href="/store" className="hover:text-white">Templates Store</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1 text-white/70">
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            <li><a href="mailto:hello@clerko.app" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-white/50 py-6 text-center border-t border-white/10">© {new Date().getFullYear()} Clerko — proposal OS.</div>
    </footer>
  );
}
