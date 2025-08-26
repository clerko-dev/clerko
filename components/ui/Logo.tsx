import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-baseline gap-1 ${className}`}>
      <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]">
        Clerko
      </span>
      <span className="text-[10px] px-1.5 py-[2px] rounded-md border border-white/10 text-white/70">
        beta
      </span>
    </Link>
  );
}