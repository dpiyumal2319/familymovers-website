import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BUSINESS_INFO } from "@/lib/constants";

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className }: CTASectionProps) {
  return (
    <section
      className={cn(
        "py-16 bg-primary text-primary-foreground relative overflow-hidden",
        className
      )}
      aria-labelledby="cta-heading"
    >
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/cta-background.png)' }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Ready to Make Your Move?
          </h2>
          <p className="text-lg md:text-xl opacity-95">
            You can fill out this free quote form and we&apos;ll reach out to
            you within minutes. With our hourly moving quotes, we guarantee
            transparency and eliminate unexpected costs.
          </p>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <p className="text-base md:text-lg mb-6 opacity-95">
              Get in touch with Family Movers today to get your custom moving
              estimate and schedule your relocation with our top-rated local
              movers in Auckland. Our caring team of trained & professional
              movers is waiting to assist you with all sorts of relocation
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base md:text-lg px-8 py-6"
              >
                <Link href="/request-a-quotation">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                <Link href={`tel:${BUSINESS_INFO.phone}`}>
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call Us Now
                </Link>
              </Button>
            </div>
          </div>
          <p className="text-sm md:text-base opacity-90 italic">
            Unlike many local Auckland moving companies, we uphold our quotes
            and absorb any additional expenses, ensuring you have a clear
            understanding of your total moving expenses from the start.
          </p>
        </div>
      </div>
    </section>
  );
}
