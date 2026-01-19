import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpecsSectionProps {
  className?: string;
}

export function SpecsSection({ className }: SpecsSectionProps) {
  const features = [
    {
      title: "Full Moving Services",
      description:
        "Complete household and office moving services across New Zealand with professional expertise.",
    },
    {
      title: "Trusted & Reliable",
      description:
        "A local moving company in Auckland that you can trust for all your relocation needs.",
    },
    {
      title: "Transparent Pricing",
      description:
        "Affordable hourly rates with no hidden costs. We uphold our quotes and absorb additional expenses.",
    },
    {
      title: "Experienced Team",
      description:
        "Trained and professional movers dedicated to making your move stress-free and efficient.",
    },
    {
      title: "Quality Equipment",
      description:
        "Our trucks are equipped with blankets, shrink wrap, tape, dollies, and all necessary tools.",
    },
    {
      title: "Customer Service",
      description:
        "Outstanding customer service with honesty and integrity at the core of everything we do.",
    },
  ];

  return (
    <section
      className={cn("py-16 md:py-24", className)}
      aria-labelledby="specs-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            id="specs-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose Family Movers?
          </h2>
          <p className="text-lg text-muted-foreground">
            You can count on us to meet all of your moving needs. Our local
            household and office moving services in Auckland serve all across
            New Zealand with full moving services, so we can meet any need you
            might have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex-shrink-0" aria-hidden="true">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
