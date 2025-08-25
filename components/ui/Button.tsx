type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-white/20";
  const map = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary: "border border-white/20 hover:bg-white/10",
    ghost: "hover:bg-white/10",
  } as const;
  return <button {...props} className={`${base} ${map[variant]} ${className}`} />;
}
