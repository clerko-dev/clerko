import GlassCard from "@/components/ui/GlassCard";
import { Briefcase, Lightbulb, TrendingUp } from "lucide-react";

const toolsData = [
  {
    title: "Proposal Generator",
    description: "Generuj profesjonalne oferty, wyceny i kontrakty w kilka minut.",
    icon: <Briefcase className="h-10 w-10 text-brandEnd" />,
  },
  {
    title: "Pricing Calculator",
    description: "Dokładnie wyceniaj swoje usługi i projekty.",
    icon: <TrendingUp className="h-10 w-10 text-brandEnd" />,
  },
  {
    title: "Client CRM Light",
    description: "Śledź status swoich klientów i projektów w jednym miejscu.",
    icon: <Lightbulb className="h-10 w-10 text-brandEnd" />,
  },
];

export default function ToolsPage() {
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Narzędzia
      </h1>
      <p className="max-w-xl text-lg text-foreground/70">
        Nasze narzędzia zostały stworzone, aby ułatwić Ci pracę i pomóc w rozwoju Twojego biznesu.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12">
        {toolsData.map((tool) => (
          <GlassCard key={tool.title} className="p-6 md:p-8 flex flex-col items-center text-center">
            <div className="p-4 rounded-full glass mb-4">
              {tool.icon}
            </div>
            <h2 className="text-2xl font-bold mb-2">{tool.title}</h2>
            <p className="text-foreground/70">{tool.description}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}