import { cn } from "@/lib/utils";
import Image from "next/image";

interface IntroSectionProps {
  className?: string;
}

export function IntroSection({ className }: IntroSectionProps) {
  return (
    <section
      className={cn("py-16 bg-muted/50", className)}
      aria-labelledby="intro-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto mb-12">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/company-intro.jpg.png"
              alt="Family Movers professional team with moving truck"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              priority
            />
          </div>
          <div className="lg:order-first space-y-6">
            <h2
              id="intro-heading"
              className="text-3xl md:text-4xl font-bold"
            >
              The Top-Rated Flexible Mover In Auckland
            </h2>

            <p className="text-base md:text-lg text-muted-foreground">
              Family movers offers services to customers at all levels of the
              market. Family Movers offer all kinds of moving solutions and
              options tailored to your financial constraints.
            </p>

            <p className="text-base md:text-lg text-muted-foreground">
              If you possess enough workforce, we can supply rental trucks,
              necessary relocation equipment, and packaging solutions. If you
              have trucks and tailors, all you need is skilled manpower. We will
              provide you with experienced personnel and our expertise. Our
              business strategy is to keep a lowest possible profit margin and
              to increase turnover by optimising our services for family movers
              within the Auckland area and outer Auckland.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 md:p-8 rounded-r-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                Mission Statement
              </h3>
              <p className="text-foreground">
                At Family Movers, our mission is to make moving as stress-free
                as possible. We believe in honesty, integrity, and outstanding
                customer service, and we work tirelessly to exceed our
                customers&apos; expectations on every move.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
