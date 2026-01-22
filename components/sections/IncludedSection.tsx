import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IncludedSectionProps {
  className?: string;
}

export function IncludedSection({ className }: IncludedSectionProps) {
  const includedItems = [
    "Packing and wrapping all furniture & items with shrink wrap and blankets.",
    "Complete protection for floor, corner, and hallway.",
    "All transportation, gas, and tolls expenses included.",
    "Disassembly and assembly of essential furniture pieces.",
    "All glass items into separate boxes.",
  ];

  return (
    <section
      className={cn("py-16 pt-32 bg-black", className)}
      aria-labelledby="included-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2
              id="included-heading"
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Included at No Extra Cost
            </h2>

            <p className="text-base md:text-lg text-white/80 text-justify">
              With our hourly moving quotes, we guarantee transparency and
              eliminate unexpected costs. Unlike many local Auckland moving
              companies, we uphold our quotes and absorb any additional
              expenses, ensuring you have a clear understanding of your total
              moving expenses from the start.
            </p>

            <ul className="space-y-3">
              {includedItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/included-services.png"
              alt="Professional movers packing items carefully"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
