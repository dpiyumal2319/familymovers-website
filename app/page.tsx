import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { SpecsSection } from "@/components/sections/SpecsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { IncludedSection } from "@/components/sections/IncludedSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  description:
    "Family Movers Auckland offers reliable residential and commercial moving services, packing, furniture delivery, and affordable hourly rates across Auckland.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Family Movers Auckland - Your Trusted Local Movers In Auckland",
    description:
      "Reliable local movers in Auckland for homes and businesses. Get transparent pricing, trained movers, and stress-free relocation support.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <ReviewsSection /> */}
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
