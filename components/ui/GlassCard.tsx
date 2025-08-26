import clsx from "clsx";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={clsx("glass rounded-xl p-6 md:p-8", className)}>
      {children}
    </div>
  );
}