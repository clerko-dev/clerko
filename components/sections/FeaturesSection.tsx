export default function FeaturesSection() {
  const features = [
    { title: "Fast", text: "Create a polished proposal in seconds." },
    { title: "Simple", text: "No learning curve—just clear fields." },
    { title: "On‑brand", text: "Your colors, your voice, your logo." },
  ];
  return (
    <section id="features" className="space-y-6">
      <h2 className="text-2xl font-semibold">Features</h2>
      <ul className="grid gap-4 sm:grid-cols-3">
        {features.map((f, i) => (
          <li key={i} className="rounded-xl border border-white/15 p-5">
            <h3 className="font-medium">{f.title}</h3>
            <p className="text-sm text-foreground/70 mt-1">{f.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
