import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Free Quotation",
  description:
    "Get a free, no-obligation quote from Family Movers Auckland. Fill out our quick form and we'll get back to you within minutes with a competitive quote for your move.",
  openGraph: {
    title: "Request a Free Quotation | Family Movers Auckland",
    description:
      "Get a free moving quote in minutes. Professional, affordable moving services in Auckland.",
  },
};

export default function RequestQuotationPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <Image
          src="/images/quote-process.png"
          alt="Get a free moving quote"
          fill
          className="object-cover opacity-30"
          priority
        />
        <Container className="relative z-10">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Request a Free Quote
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Fill out the form below and we&apos;ll reach out to you within
              minutes
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Benefits Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    What You&apos;ll Get
                  </h2>
                  <div className="space-y-3">
                    {[
                      "Free, no-obligation quote",
                      "Response within minutes",
                      "Competitive pricing",
                      "Transparent cost breakdown",
                      "Flexible scheduling",
                      "Professional service guarantee",
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Card className="p-4 bg-primary/5 border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Need help?</strong>
                    <br />
                    Call us at{" "}
                    <a
                      href="tel:+64220949988"
                      className="text-primary hover:underline"
                    >
                      +64 22 094 9988
                    </a>{" "}
                    or email{" "}
                    <a
                      href="mailto:sales@familymovers.co.nz"
                      className="text-primary hover:underline"
                    >
                      sales@familymovers.co.nz
                    </a>
                  </p>
                </Card>
              </div>

              {/* Quote Form */}
              <div className="lg:col-span-3">
                <Card className="p-6 md:p-8">
                  <QuoteForm />
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Why Choose Family Movers Auckland?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We&apos;re committed to providing stress-free moving experiences
              with honest pricing, professional service, and complete
              transparency. Our trained team uses the latest moving technologies
              to ensure your belongings are handled with care from start to
              finish.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
