import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
  variant = "primary",
  className = "",
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg text-sm font-medium px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] text-white hover:opacity-95"
      : variant === "secondary"
      ? "bg-white/10 text-white hover:bg-white/15 border border-white/15"
      : "bg-transparent text-white/80 hover:text-white";

  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}
