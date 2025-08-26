import Link from "next/link";
import clsx from "clsx";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void; // Dodałem 'onClick' do typów
}

export default function LinkButton({ href, children, variant = "primary", className, onClick }: LinkButtonProps) {
  const baseClasses = clsx(
    "rounded-xl px-6 py-3 font-semibold transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandEnd"
  );
  const variantClasses = {
    primary: "bg-gradient-to-r from-brandStart to-brandEnd text-white shadow-lg shadow-black/30 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-white/10 border border-white/15 text-white/90 hover:bg-white/12 hover:border-white/20 active:scale-[0.98]",
  };

  return (
    <Link href={href} className={clsx(baseClasses, variantClasses[variant], className)} onClick={onClick}>
      {children}
    </Link>
  );
}