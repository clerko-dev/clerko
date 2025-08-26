export default function PricingSection() {
  const plans = [
    { name: "Free", price: "$0", features: ["Basic generator","Community templates"] },
    { name: "Pro", price: "$12/mo", features: ["Everything in Free","PDF export","Brand kit"] },
    { name: "Teams", price: "$29/mo", features: ["Real‑time collaboration","Shared templates"] },
  ];
  return (
    <section className="grid md:grid-cols-3 gap-6">
      {plans.map(p => (
        <div key={p.name} className="glass rounded-2xl p-6 flex flex-col">
          <div className="flex-1 space-y-1">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-3xl font-extrabold">{p.price}</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              {p.features.map(f => (<li key={f}>• {f}</li>))}
            </ul>
          </div>
          <a href="/signup" className="btn-gradient mt-6 text-center">Get started</a>
        </div>
      ))}
    </section>
  );
}
