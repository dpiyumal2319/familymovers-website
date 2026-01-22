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
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2
              id="intro-heading"
              className="text-3xl md:text-4xl font-bold"
            >
              The Top-Rated Flexible Mover In Auckland
            </h2>

            <p className="text-base md:text-lg text-muted-foreground text-justify">
              We understand that moving can be a stressful process and that you
              may have unique circumstances that require flexible scheduling.
              For this reason, we provide a wide variety of services to meet
              your needs, such as flexible scheduling (evenings and weekends
              included), the ability to rent trucks and vans, and the supply of
              experienced moving workers in cases where you have your own
              transportation vehicles.
            </p>

            <p className="text-base md:text-lg text-muted-foreground text-justify">
              Our team of experienced movers are available to work around the
              clock to ensure that your move is completed in a timely and
              efficient manner. Simply let us know your preferred schedule, and
              we&apos;ll work with you to create a customized moving plan that
              meets your specific needs.
            </p>
          </div>
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
        </div>
      </div>
    </section>
  );
}
