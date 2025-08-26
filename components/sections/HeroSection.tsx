import LinkButton from "@/components/ui/LinkButton";

export default function HeroSection() {
  return (
    <section className="rounded-3xl bg-hero p-8 md:p-16 text-center shadow-2xl">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight animate-fadeIn">
        Proposals & quotes <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandStart to-brandEnd">in minutes</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto animate-fadeIn [animation-delay:0.2s] [animation-fill-mode:backwards]">
        Type a few fields, get a clean proposal. Export, copy, send. Close deals faster.
      </p>
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 animate-fadeIn [animation-delay:0.4s] [animation-fill-mode:backwards]">
        <LinkButton href="#try">Try free</LinkButton>
        <LinkButton href="/tools" variant="secondary">Browse tools</LinkButton>
      </div>
    </section>
  );
}