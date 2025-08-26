import React from "react";

export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative glass rounded-2xl p-5 md:p-6 glass-hover ${className}`}
    >
      {/* delikatny gradient border via overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl"
           style={{
             background:
               "linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
             mask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
             WebkitMask:
               "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
           }}/>
      {children}
    </div>
  );
}
