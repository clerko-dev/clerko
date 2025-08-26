import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base = variant === "secondary" ? "btn-secondary" : "btn-primary";
  return <button className={`${base} ${className}`} {...props} />;
}
