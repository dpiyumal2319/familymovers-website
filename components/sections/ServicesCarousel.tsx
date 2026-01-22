"use client";

import React from "react";
import { ServiceCard } from "@/components/common/ServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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

// Map icon names to actual icon components
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

interface Service {
  title: string;
  description: string;
  iconName: string;
  image: string;
  href: string;
}

interface ServicesCarouselProps {
  services: Service[];
}

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-6xl mx-auto"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent className="-ml-4">
        {services.map((service, index) => (
          <CarouselItem
            key={index}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={iconMap[service.iconName] || Home}
              image={service.image}
              href={service.href}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
