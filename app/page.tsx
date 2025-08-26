import HeroSection from "@/components/sections/HeroSection";
import GeneratorSection from "@/components/sections/GeneratorSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ToolsSection from "@/components/sections/ToolsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TemplatesSection from "@/components/sections/TemplatesSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Page() {
  return (
    <div className="space-y-14">
      <HeroSection />
      <GeneratorSection />
      <FeaturesSection />
      <div className="grid md:grid-cols-2 gap-6">
        <ToolsSection />
        <HowItWorksSection />
      </div>
      <TemplatesSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
