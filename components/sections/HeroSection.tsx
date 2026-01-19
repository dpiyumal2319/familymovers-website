import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative min-h-screen md:min-h-[80vh] flex items-center justify-center",
        className
      )}
      aria-labelledby="hero-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        {/* Placeholder for background image - will be added in Phase 6 */}
        <div className="absolute inset-0 bg-muted" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Your Trusted Local Movers In Auckland
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            If you&apos;re looking for a dedicated moving company in Auckland
            with affordable hourly rate pricing, then call us today! The Family
            Movers team has all the expertise you need to make your move run
            smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg px-8 py-6"
            >
              <Link href="/request-a-quotation">
                Get a Free Quote Now
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base md:text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              <Link href="/about-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
