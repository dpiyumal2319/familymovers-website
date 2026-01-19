import { cn } from "@/lib/utils";

interface IntroSectionProps {
  className?: string;
}

export function IntroSection({ className }: IntroSectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24 bg-muted/50", className)}
      aria-labelledby="intro-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2
              id="intro-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              The Top-Rated Flexible Mover In Auckland
            </h2>
          </div>

          <div className="space-y-6 text-base md:text-lg text-muted-foreground">
            <p>
              Family Movers was established by a group of MBA students from
              various universities in New Zealand. They spent 1.5 years
              researching global and local moving technologies and processes to
              reduce costs for customers who are relocating with their families.
            </p>

            <p>
              Family movers offers services to customers at all levels of the
              market. Family Movers offer all kinds of moving solutions and
              options tailored to your financial constraints.
            </p>

            <p>
              If you possess enough workforce, we can supply rental trucks,
              necessary relocation equipment, and packaging solutions. If you
              have trucks and tailors, all you need is skilled manpower. We will
              provide you with experienced personnel and our expertise. Our
              business strategy is to keep a lowest possible profit margin and
              to increase turnover by optimising our services for family movers
              within the Auckland area and outer Auckland.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 md:p-8 rounded-r-lg mt-8">
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
