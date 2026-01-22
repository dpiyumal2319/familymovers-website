import { DollarSign, ShieldCheck, PackageCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SpecsSectionProps {
  className?: string;
}

export function SpecsSection({ className }: SpecsSectionProps) {
  const features = [
    {
      title: "No Extra Prices",
      icon: DollarSign,
    },
    {
      title: "No Scratches",
      icon: ShieldCheck,
    },
    {
      title: "No Lost Items",
      icon: PackageCheck,
    },
  ];

  return (
    <section
      className={cn("py-16", className)}
      aria-labelledby="specs-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/why-choose-us.png"
              alt="Professional movers carefully handling furniture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </div>
          <div className="space-y-6">
            <h2
              id="specs-heading"
              className="text-3xl md:text-4xl font-bold"
            >
              Why Choose Us
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-justify">
              You can count on us to meet all of your moving needs. Our local
              household and office moving services in Auckland serve all across
              New Zealand with full moving services, so we can meet any need you
              might have. If you&apos;re looking for a local moving company in
              the area of Auckland that you can trust, look no further, Family
              Movers is here for you!
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-3 p-4"
                  >
                    <div
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-sm md:text-base font-semibold">
                      {feature.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
