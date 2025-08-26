function Icon({children}:{children:React.ReactNode}){
  return (<div className="size-9 rounded-lg grid place-items-center bg-white/5 border border-white/10">{children}</div>);
}
export default function FeaturesSection() {
  const items = [
    { title: "Customizable templates", text: "Tailor sections and style to match your brand.", icon: "🧩" },
    { title: "Real‑time collaboration", text: "Share, comment, and update together.", icon: "🤝" },
    { title: "PDF export", text: "Deliver polished PDFs in one click.", icon: "📄" },
  ];
  return (
    <section className="glass rounded-2xl p-6">
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((f)=> (
          <div key={f.title} className="rounded-xl border border-white/10 p-4">
            <div className="flex items-center gap-3">
              <Icon>{f.icon}</Icon>
              <p className="font-medium">{f.title}</p>
            </div>
            <p className="text-sm text-foreground/70 mt-2">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
