import GlassCard from "@/components/ui/GlassCard";
import LinkButton from "@/components/ui/LinkButton";

export default function StorePage() {
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Clerko Store
      </h1>
      <p className="max-w-xl text-lg text-foreground/70">
        Odkryj profesjonalne szablony i rozszerzenia, które pomogą Ci tworzyć jeszcze lepsze oferty.
      </p>
      <GlassCard className="max-w-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Wkrótce w sprzedaży:</h2>
        <ul className="list-none space-y-3 mb-6 text-foreground/80">
          <li>✨ Rozszerzenia do integracji z CRM</li>
          <li>📝 Szablony dla branży IT, konsultingu i marketingu</li>
          <li>📊 Raporty i analizy dotyczące ofert</li>
        </ul>
        <LinkButton href="/contact">Poinformuj mnie o premierze</LinkButton>
      </GlassCard>
    </div>
  );
}