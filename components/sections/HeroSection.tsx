export default function HeroSection() {
  return (
    <section className="text-center space-y-6 pt-4">
      <p className="text-sm uppercase tracking-widest text-foreground/60">Clerko</p>
      <h1 className="text-4xl md:text-6xl h1">Proposals & quotes in minutes</h1>
      <p className="max-w-2xl mx-auto text-foreground/70">
        Quickly draft tailored proposals and quotes with our intuitive generator.
      </p>
      <div className="flex gap-3 justify-center">
        <a href="#generator" className="btn-gradient">Generate preview</a>
        <a href="/tools" className="btn-outline">Browse tools</a>
      </div>
    </section>
  );
}
