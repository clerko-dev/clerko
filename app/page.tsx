import HeroSection from "@/components/sections/HeroSection";
import StepsSection from "@/components/sections/StepsSection";
import GeneratorSection from "@/components/sections/GeneratorSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <StepsSection />
      <GeneratorSection />
      <FeaturesSection />
      <SocialProofSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}