import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SpecsSection } from "@/components/sections/SpecsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <SpecsSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
