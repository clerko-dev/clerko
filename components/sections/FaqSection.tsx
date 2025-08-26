export default function FaqSection() {
  const qa = [
    { q: "Is there a free plan?", a: "Yes, with core generator features and community templates." },
    { q: "Can I export to PDF?", a: "Yes, Pro plan adds branded PDFs and assets." },
    { q: "Do you support teams?", a: "Teams plan adds shared templates and collaboration." },
  ];
  return (
    <section className="glass rounded-2xl p-6">
      <h3 className="font-semibold mb-3">FAQ</h3>
      <ul className="divide-y divide-white/10">
        {qa.map((it) => (
          <li key={it.q} className="py-3">
            <p className="font-medium">{it.q}</p>
            <p className="text-sm text-foreground/70 mt-1">{it.a}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
