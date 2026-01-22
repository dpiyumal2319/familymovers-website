import { Users, Shield, HeadphonesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhyChooseUsSectionProps {
  className?: string;
}

export function WhyChooseUsSection({ className }: WhyChooseUsSectionProps) {
  const benefits = [
    {
      icon: Users,
      title: "Professionally Trained Movers",
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured Company",
    },
    {
      icon: HeadphonesIcon,
      title: "Excellent Customer Support",
    },
  ];

  return (
    <section
      className={cn("relative py-20 text-white", className)}
      aria-labelledby="why-choose-us-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/reasons-background.png)" }}
          role="img"
          aria-label="Moving truck on the road"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div>
            <h2
              id="why-choose-us-heading"
              className="text-3xl md:text-4xl font-bold"
            >
              Reasons for choosing us to help you move?
            </h2>
          </div>
          <div>
            <p className="text-lg text-white/90">
              Moving can be stressful, but with Family Movers in Auckland,
              you&apos;re in good hands. We offer top-notch moving services
              throughout New Zealand, making your transition hassle-free.
            </p>
          </div>
        </div>

        {/* Benefits cards */}
        <div className="max-w-4xl mx-auto -mb-32 relative z-30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-2xl p-8 shadow-xl">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4 p-4"
                >
                  <div
                    className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Black section below for visual continuity */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-black -z-10" />
    </section>
  );
}
