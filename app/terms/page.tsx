import GlassCard from "@/components/ui/GlassCard";

export default function TermsPage() {
  return (
    <div className="flex flex-col items-center text-left space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Regulamin
      </h1>
      <GlassCard className="max-w-3xl p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-2">1. Wstęp</h2>
          <p className="text-foreground/80">
            Niniejszy Regulamin określa zasady korzystania z usług Clerko. Korzystanie z naszej strony internetowej oznacza akceptację poniższych warunków.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">2. Prawa autorskie</h2>
          <p className="text-foreground/80">
            Wszystkie treści i materiały dostępne na stronie, w tym tekst, grafiki, logo i oprogramowanie, są własnością Clerko i są chronione prawem autorskim.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">3. Ograniczenie odpowiedzialności</h2>
          <p className="text-foreground/80">
            Clerko nie ponosi odpowiedzialności za jakiekolwiek szkody wynikające z korzystania lub niemożności korzystania z naszych usług. Staramy się, aby nasze narzędzia były jak najbardziej dokładne, ale nie gwarantujemy ich bezbłędności.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">4. Zmiany w regulaminie</h2>
          <p className="text-foreground/80">
            Zastrzegamy sobie prawo do wprowadzania zmian w Regulaminie w dowolnym momencie. Zmiany wchodzą w życie z chwilą ich opublikowania na stronie.
          </p>
        </section>
      </GlassCard>
    </div>
  );
}