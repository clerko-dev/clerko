export default function FaqSection() {
  const items = [
    { q: "Is it free?", a: "There is a free tier; paid tiers unlock advanced features." },
    { q: "Can I export PDFs?", a: "Yes, export to PDF or copy to email." },
  ];
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">FAQ</h2>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li key={i} className="rounded-xl border border-white/15 p-5">
            <p className="font-medium">{it.q}</p>
            <p className="text-sm text-foreground/70 mt-1">{it.a}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
