export default function HowItWorksSection() {
  const steps = [
    "Pick a template",
    "Customize your proposal",
    "Generate a preview",
  ];
  return (
    <section className="glass rounded-2xl p-6 space-y-3">
      <h3 className="font-semibold">How it works</h3>
      <ol className="space-y-2 text-sm text-foreground/80">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3">
            <span className="inline-flex size-6 items-center justify-center rounded-md glass font-semibold">
              {i + 1}
            </span>
            {s}
          </li>
        ))}
      </ol>
    </section>
  );
}
