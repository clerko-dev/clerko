import GlassCard from "@/components/ui/GlassCard";

export default function HowToPage() {
  return (
    <div className="flex flex-col items-center text-left space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">
        Jak pisać skuteczne oferty
      </h1>
      <p className="max-w-3xl text-lg text-foreground/70 text-center">
        Poznaj 5 kluczowych kroków, aby tworzyć oferty, które zawsze wygrywają.
      </p>
      <GlassCard className="max-w-3xl p-8 space-y-6">
        <article>
          <h2 className="text-2xl font-bold mb-2">1. Zrozumienie potrzeb klienta</h2>
          <p className="text-foreground/80">
            Zanim zaczniesz pisać, upewnij się, że w pełni rozumiesz, czego potrzebuje Twój klient. Dobrze zadane pytania to podstawa.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-bold mb-2">2. Jasna struktura oferty</h2>
          <p className="text-foreground/80">
            Twoja oferta powinna być łatwa do przeczytania. Używaj nagłówków, list i pogrubień, aby wyróżnić najważniejsze informacje.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-bold mb-2">3. Wartość, nie tylko cena</h2>
          <p className="text-foreground/80">
            Nie skupiaj się tylko na cenie. Wyjaśnij, jaką wartość wniesiesz do biznesu klienta. Pokaż, jak rozwiążesz jego problemy.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-bold mb-2">4. Prosta wycena</h2>
          <p className="text-foreground/80">
            Unikaj skomplikowanych tabel. Twoja wycena powinna być przejrzysta i łatwa do zrozumienia.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-bold mb-2">5. Wezwanie do działania</h2>
          <p className="text-foreground/80">
            Zakończ ofertę jasnym wezwaniem do działania, na przykład "Zadzwoń do nas, aby omówić szczegóły" lub "Kliknij tutaj, aby podpisać umowę".
          </p>
        </article>
      </GlassCard>
    </div>
  );
}