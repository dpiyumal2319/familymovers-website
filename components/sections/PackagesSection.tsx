import { cn } from "@/lib/utils";
import Image from "next/image";

interface PackagesSectionProps {
  className?: string;
}

export function PackagesSection({ className }: PackagesSectionProps) {
  const packages = [
    {
      image: "/images/package-1.png",
      alt: "Moving package option 1",
    },
    {
      image: "/images/package-2.png",
      alt: "Moving package option 2",
    },
    {
      image: "/images/package-3.png",
      alt: "Moving package option 3",
    },
    {
      image: "/images/package-4.png",
      alt: "Moving package option 4",
    },
  ];

  return (
    <section
      className={cn("py-16 bg-muted/50", className)}
      aria-labelledby="packages-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="packages-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Packages
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our range of moving packages designed to suit your needs
            and budget.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={pkg.image}
                alt={pkg.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
