import { Shield, DollarSign, Users, Clock, Award, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhyChooseUsSectionProps {
  className?: string;
}

export function WhyChooseUsSection({ className }: WhyChooseUsSectionProps) {
  const benefits = [
    {
      icon: Shield,
      title: "Fully Insured",
      description:
        "Your belongings are protected with comprehensive insurance coverage.",
    },
    {
      icon: DollarSign,
      title: "Affordable Rates",
      description:
        "Competitive hourly rates with transparent pricing and no hidden fees.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Trained professionals with years of experience in moving services.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "We work around your schedule with convenient booking options.",
    },
    {
      icon: Award,
      title: "Top-Rated Service",
      description:
        "Highly rated by customers for quality service and reliability.",
    },
    {
      icon: Heart,
      title: "Care & Attention",
      description:
        "We treat your belongings with the same care as if they were our own.",
    },
  ];

  return (
    <section
      className={cn("py-16 md:py-24 bg-muted/50", className)}
      aria-labelledby="why-choose-us-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            id="why-choose-us-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Families Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            If you&apos;re looking for a local moving company in the area of
            Auckland that you can trust, look no further. Family Movers is here
            for you!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6"
              >
                <div
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
