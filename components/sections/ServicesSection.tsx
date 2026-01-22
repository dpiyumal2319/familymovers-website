import { cn } from "@/lib/utils";
import { ServicesCarousel } from "./ServicesCarousel";
import { ServiceCard } from "@/components/common/ServiceCard";
import {
  Home,
  Building2,
  Truck,
  Package,
  MapPin,
  Users,
  Piano,
  Armchair,
  CircleDot,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Truck,
  Package,
  MapPin,
  Users,
  Piano,
  Armchair,
  CircleDot,
};

interface ServicesSectionProps {
  className?: string;
}

export function ServicesSection({ className }: ServicesSectionProps) {
  const services = [
    {
      title: "Local Moving",
      description:
        "Whether you need one bedroom or three, moving into a new home has never been easier. Put the worries of getting into your new place aside and start enjoying your new space.",
      iconName: "Home",
      image: "/images/local-moving.png",
      href: "/services/local-moving",
    },
    {
      title: "Long Distance Moving",
      description:
        "Don't let your long distance move stress you out. Family Movers is well equipped to handle every aspect of moving your life from one county to another with speed and efficiency.",
      iconName: "MapPin",
      image: "/images/long-distance-moving.png",
      href: "/services/long-distance-moving",
    },
    {
      title: "Commercial Moving",
      description:
        "Moving offices requires the careful coordination of a lot of moving parts. At Family Movers, we have the expertise to make things run smoothly and ensure your company is back in full working order on time.",
      iconName: "Building2",
      image: "/images/commercial-moving.png",
      href: "/services/commercial-moving",
    },
    {
      title: "Packing Services",
      description:
        "Sometimes packing can be more stressful than the move itself. If that's the case for you, we can step in and take care of it. We're packing specialists trained in the art of the perfect pack.",
      iconName: "Package",
      image: "/images/packing-services.png",
      href: "/services/packing-services",
    },
    {
      title: "Truck and Van Rental",
      description:
        "Make your move a breeze with our convenient Truck and Van rentals. From small loads to big hauls, we've got you covered. Say goodbye to stress and hello to easy transportation with Family Movers.",
      iconName: "Truck",
      image: "/images/truck-van-rental.png",
      href: "/services/truck-van-rental",
    },
    {
      title: "Manpower Supply",
      description:
        "Effortless loading and unloading guaranteed. Let our skilled team handle the heavy lifting while you focus on your move. Family Movers, your trusted moving partner.",
      iconName: "Users",
      image: "/images/man-power-supply.png",
      href: "/services/man-power-supply",
    },
    {
      title: "Piano Moving",
      description:
        "Moving a piano requires the expertise to ensure it is kept safe and protected on the road. Our specialized team handles your piano with the utmost care.",
      iconName: "Piano",
      image: "/images/piano-moving.png",
      href: "/services/piano-moving",
    },
    {
      title: "Pool Table Moving",
      description:
        "Pool tables require special handling due to their weight and delicate components. Trust our experienced team to move your pool table safely.",
      iconName: "CircleDot",
      image: "/images/pool-table-moving.png",
      href: "/services/pool-table-moving",
    },
    {
      title: "Furniture Removals",
      description:
        "Our teams will treat your possessions like they would their own, ensuring that the greatest care and diligence is taken.",
      iconName: "Armchair",
      image: "/images/furniture-removals.png",
      href: "/services/furniture-removals",
    },
  ];

  return (
    <section
      className={cn("py-16", className)}
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            For Every Family Move
          </h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t let your move stress you out. Family Movers is well
            equipped to handle every aspect of moving your life from one
            location to another with speed and efficiency.
          </p>
        </div>

        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {services.map((service, index) => (
            <div key={index} className="flex">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={iconMap[service.iconName] || Home}
                image={service.image}
                href={service.href}
                compact
              />
            </div>
          ))}
        </div>

        {/* Desktop: Carousel */}
        <div className="hidden md:block">
          <ServicesCarousel services={services} />
        </div>
      </div>
    </section>
  );
}
