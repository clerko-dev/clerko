import * as React from "react";

export default function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass glass-hover rounded-2xl p-5 md:p-6 ${className}`}>
      {children}
    </div>
  );
}
