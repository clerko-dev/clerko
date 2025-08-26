import Link from "next/link";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

interface LinkButtonProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
  variant?: 'primary' | 'secondary';
}

export default function LinkButton({ children, href, variant = 'primary', className, ...props }: LinkButtonProps) {
  const baseStyles = 'inline-flex justify-center items-center rounded-xl px-6 py-3 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandEnd';
  const variantStyles = {
    primary: 'bg-gradient-to-r from-brandStart to-brandEnd text-white shadow-lg shadow-black/30 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-white/10 border border-white/15 text-white/90 hover:bg-white/12 hover:border-white/20 active:scale-[0.98]',
  };

  return (
    <Link
      href={href}
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}