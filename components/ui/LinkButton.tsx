import Link, { LinkProps } from "next/link";
type Props = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    variant?: "primary" | "secondary";
  };
export default function LinkButton({ variant = "primary", className = "", ...rest }: Props) {
  const classes = variant === "primary" ? "btn-primary" : "btn-secondary";
  return <Link className={`${classes} ${className}`} {...rest} />;
}
