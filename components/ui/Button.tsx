import React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};
export default function Button({ variant = "primary", className = "", ...rest }: Props) {
  const classes = variant === "primary" ? "btn-primary" : "btn-secondary";
  return <button className={`${classes} ${className}`} {...rest} />;
}
