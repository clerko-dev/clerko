import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/20 border-t border-white/10 mt-16 py-12">
      <div className="container mx-auto px-4 max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-white mb-4">Product</h4>
          <ul className="space-y-2 text-white/70">
            <li><Link href="/tools">Tools</Link></li>
            <li><Link href="/how-to">Guides</Link></li>
            <li><Link href="/store">Templates Store</Link></li>
            <li><Link href="#try">Generator</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-white/70">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-white/70">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/legal">Legal</Link></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} Clerko. All rights reserved.</p>
          <p className="text-sm text-white/50 mt-2">Built for freelancers and agencies to close deals faster.</p>
        </div>
      </div>
    </footer>
  );
}