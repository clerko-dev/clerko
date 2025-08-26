import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  const baseStyles = 'rounded-xl px-6 py-3 font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandEnd';
  const variantStyles = {
    primary: 'bg-gradient-to-r from-brandStart to-brandEnd shadow-lg shadow-black/30 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-white/10 border border-white/15 text-white/90 hover:bg-white/12 hover:border-white/20 active:scale-[0.98]',
  };
  
  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}