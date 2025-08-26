import GlassCard from "@/components/ui/GlassCard";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col items-center text-left space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Polityka Prywatności
      </h1>
      <GlassCard className="max-w-3xl p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-2">1. Wprowadzenie</h2>
          <p className="text-foreground/80">
            Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych przez Clerko. Zbieramy tylko te dane, które są niezbędne do świadczenia naszych usług.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">2. Jakie dane zbieramy?</h2>
          <ul className="list-disc list-inside space-y-1 text-foreground/80">
            <li>Dane wprowadzone do generatora (nie są zapisywane na stałe).</li>
            <li>Dane dotyczące użytkowania strony (np. przez Google Analytics).</li>
            <li>Dane, które nam dobrowolnie przekazujesz (np. w formularzu kontaktowym).</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-2">3. Wykorzystanie danych</h2>
          <p className="text-foreground/80">
            Twoje dane są wykorzystywane w celu poprawy naszych usług oraz dostosowania treści do Twoich potrzeb. Nie sprzedajemy ani nie udostępniamy Twoich danych stronom trzecim bez Twojej zgody.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">4. Twoje prawa</h2>
          <p className="text-foreground/80">
            Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania. Skontaktuj się z nami, jeśli chcesz skorzystać z tych praw.
          </p>
        </section>
      </GlassCard>
    </div>
  );
}