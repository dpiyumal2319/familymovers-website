import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Truck, Shield, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Family Movers Auckland - established by MBA students researching moving technologies to reduce costs for families relocating. Stress-free moving with quality, safety, and efficiency.",
  openGraph: {
    title: "About Us | Family Movers Auckland",
    description:
      "Professional moving company in Auckland committed to stress-free relocations with quality service and trained professionals.",
  },
};

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <Image
          src="/images/about-hero.png"
          alt="Family Movers team"
          fill
          className="object-cover opacity-30"
          priority
        />
        <Container className="relative z-10">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Your trusted moving partner in Auckland, committed to making your
              relocation stress-free
            </p>
          </div>
        </Container>
      </section>

      {/* How We Started */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  How We Started
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Family Movers was established by MBA students who dedicated
                    1.5 years to researching moving technologies and
                    methodologies. Our mission from day one has been to reduce
                    moving costs for families relocating across Auckland and New
                    Zealand.
                  </p>
                  <p>
                    Through extensive research and understanding of the moving
                    industry, we&apos;ve developed efficient processes that
                    benefit our customers without compromising on quality or
                    safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Vision */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Our Vision
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our vision is to provide stress-free moving experiences
                    while maintaining the highest standards of quality, safety,
                    credibility, and efficiency. We believe that moving
                    doesn&apos;t have to be stressful when you have the right
                    team by your side.
                  </p>
                  <p>
                    We are committed to honesty and integrity in every move we
                    undertake, ensuring our customers receive transparent
                    pricing and exceptional service from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Trucks Are Equipped */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Our Trucks Are Equipped With Everything
                </h2>
                <p className="text-muted-foreground mb-6">
                  We come prepared with all the necessary equipment to ensure
                  your belongings are transported safely and securely.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Moving blankets",
                    "Shrink wrap",
                    "Tape",
                    "Dollies",
                    "Hand-trucks",
                    "Assembly tools",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 bg-muted/50 p-3 rounded-lg"
                    >
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Qualified Team */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  We Have A Qualified Team
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    All our team members are professionally trained to handle
                    your belongings with care and respect. We invest in ongoing
                    training to ensure our staff stays up-to-date with the best
                    practices in the moving industry.
                  </p>
                  <p>
                    We provide free reminder calls before your move and conduct
                    customer satisfaction surveys to continuously improve our
                    service quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
