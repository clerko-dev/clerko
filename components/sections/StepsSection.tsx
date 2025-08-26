export default function StepsSection() {
  const steps = [
    { title: "1. Describe your project", text: "Tell us what you need and your goals." },
    { title: "2. Generate proposal", text: "We craft a concise, on-brand proposal in seconds." },
    { title: "3. Copy & send", text: "Share via email or PDF, and close the deal faster." },
  ];

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
        <p className="text-foreground/70">Three simple steps from idea to signed proposal.</p>
      </header>

      <ol className="grid gap-4 sm:grid-cols-3">
        {steps.map((s, idx) => (
          <li key={idx} className="rounded-xl p-5 glass">
            <h3 className="font-medium">{s.title}</h3>
            <p className="text-sm text-foreground/70 mt-1">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
