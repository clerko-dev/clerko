import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-1 ${className}`}>
      <span className="text-xl font-bold tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]">Clerko</span>
      </span>
      <span className="rounded-md border border-white/15 bg-white/8 px-1.5 py-0.5 text-[10px] leading-none text-white/70">beta</span>
    </Link>
  );
}
