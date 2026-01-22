import { HeroSection } from "@/components/sections/HeroSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { SpecsSection } from "@/components/sections/SpecsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { IncludedSection } from "@/components/sections/IncludedSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ReviewsSection />
      <IntroSection />
      <SpecsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <IncludedSection />
      <PackagesSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
