import { ServiceCard } from "@/components/common/ServiceCard";
import { Home, Building2, Truck, Package, Archive } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  className?: string;
}

export function ServicesSection({ className }: ServicesSectionProps) {
  const services = [
    {
      title: "Residential Moving",
      description:
        "Professional home moving services for families. We handle your belongings with care, ensuring a smooth transition to your new home.",
      icon: Home,
      image: "/images/residential-moving.png",
      href: "/services/residential-moving",
    },
    {
      title: "Commercial Moving",
      description:
        "Efficient office and business relocation services. Minimize downtime with our experienced commercial moving team.",
      icon: Building2,
      image: "/images/commercial-moving.png",
      href: "/services/commercial-moving",
    },
    {
      title: "Furniture Delivery",
      description:
        "Safe and reliable furniture delivery services. From small items to large pieces, we've got you covered.",
      icon: Truck,
      image: "/images/furniture-delivery.png",
      href: "/services/furniture-delivery",
    },
    {
      title: "Packing Services",
      description:
        "Professional packing services to protect your valuables. We use quality materials and expert techniques for safe transport.",
      icon: Package,
      image: "/images/packing-services.png",
      href: "/services/packing-services",
    },
    {
      title: "Storage Solutions",
      description:
        "Secure storage options for short or long-term needs. Keep your belongings safe with our climate-controlled facilities.",
      icon: Archive,
      image: "/images/storage-solutions.png",
      href: "/services/storage-solutions",
    },
  ];

  return (
    <section
      className={cn("py-16 md:py-24", className)}
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-16">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t let your long distance move stress you out. Family Movers
            is well equipped to handle every aspect of moving your life from one
            location to another with speed and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
