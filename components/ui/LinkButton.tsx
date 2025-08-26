import Link, { LinkProps } from "next/link";
import * as React from "react";

type Props = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

export default function LinkButton({ variant = "primary", className = "", ...props }: Props) {
  const base = variant === "secondary" ? "btn-secondary" : "btn-primary";
  return <Link className={`${base} ${className}`} {...props} />;
}
