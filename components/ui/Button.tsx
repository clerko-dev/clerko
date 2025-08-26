import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg text-sm font-medium px-3 py-2 focus:outline-none";
  const styles =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
      ? "btn-secondary"
      : "bg-transparent text-white/80 hover:text-white";
  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}
