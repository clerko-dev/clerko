import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 grid md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <Logo />
          <p className="mt-3 text-sm text-white/70 max-w-md">
            Create proposals and quotes in minutes. Templates, export, tracking.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Product</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/tools" className="text-white/80 hover:text-white">Tools</Link></li>
            <li><Link href="/how-to" className="text-white/80 hover:text-white">Guides</Link></li>
            <li><Link href="/store" className="text-white/80 hover:text-white">Templates Store</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="text-white/80 hover:text-white">Privacy</Link></li>
            <li><Link href="/terms" className="text-white/80 hover:text-white">Terms</Link></li>
            <li><a href="mailto:hello@clerko.app" className="text-white/80 hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 text-xs text-white/50">
          © {new Date().getFullYear()} Clerko — proposal OS.
        </div>
      </div>
    </footer>
  );
}
