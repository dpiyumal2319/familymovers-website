import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/common/ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our comprehensive moving services in Auckland - local moving, long distance moving, commercial relocations, packing services, truck rentals, piano moving, and more.",
  openGraph: {
    title: "Our Services | Family Movers Auckland",
    description:
      "Professional moving services for every need - residential, commercial, local, and long distance moves across Auckland and New Zealand.",
  },
};

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
      "Don't let your long distance move stress you out. Family Movers is well equipped to handle every aspect of moving your life from one city to another with speed and efficiency.",
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
      "Make your move a breeze with our convenient Truck and Van rentals. From small loads to big hauls, we've got you covered. Say goodbye to stress and hello to easy transportation.",
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
      "Moving a piano requires the expertise to ensure it is kept safe and protected on the road. Our specialized team handles your piano with the utmost care and precision.",
    iconName: "Piano",
    image: "/images/piano-moving.png",
    href: "/services/piano-moving",
  },
  {
    title: "Pool Table Moving",
    description:
      "Pool tables require special handling due to their weight and delicate components. Trust our experienced team to move your pool table safely and reassemble it perfectly.",
    iconName: "CircleDot",
    image: "/images/pool-table-moving.png",
    href: "/services/pool-table-moving",
  },
  {
    title: "Furniture Removals",
    description:
      "Our teams will treat your possessions like they would their own, ensuring that the greatest care and diligence is taken during every step of the move.",
    iconName: "Armchair",
    image: "/images/furniture-removals.png",
    href: "/services/furniture-removals",
  },
];

// Helper to get icon component by name
function getIconComponent(iconName: string) {
  const IconComponent = Icons[iconName as keyof typeof Icons] as Icons.LucideIcon;
  return IconComponent || Icons.Package;
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <Image
          src="/images/services-hero.png"
          alt="Professional moving services"
          fill
          className="object-cover opacity-30"
          priority
        />
        <Container className="relative z-10">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Comprehensive moving solutions tailored to your needs. From local
              house moves to commercial relocations, we&apos;ve got you covered.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={getIconComponent(service.iconName)}
                image={service.image}
                href={service.href}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us for a free consultation. Our team will help you
              determine the best moving solution for your specific needs and
              provide a detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/request-a-quotation">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Mini Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Choose Family Movers?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "Shield",
                  title: "$1M Insurance",
                  description: "Full public liability coverage",
                },
                {
                  icon: "Star",
                  title: "5-Star Rated",
                  description: "145+ Google reviews",
                },
                {
                  icon: "Clock",
                  title: "Flexible Hours",
                  description: "Evenings & weekends available",
                },
                {
                  icon: "BadgeCheck",
                  title: "No Hidden Fees",
                  description: "Transparent pricing always",
                },
              ].map((item) => {
                const Icon = getIconComponent(item.icon);
                return (
                  <div
                    key={item.title}
                    className="text-center p-6 bg-muted/30 rounded-xl"
                  >
                    <div
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
