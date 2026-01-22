"use client";

import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/common/PackageCard";
import { RentalCard } from "@/components/common/RentalCard";
import { KeyTermsBanner } from "@/components/common/KeyTermsBanner";
import {
  HOURLY_PACKAGES,
  RENTAL_OPTIONS,
  FIXED_QUOTE_FEATURES,
  COMMERCIAL_FEATURES,
} from "@/lib/constants";
import {
  Clock,
  FileText,
  Truck,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

interface PackagesSectionProps {
  className?: string;
}

export function PackagesSection({ className }: PackagesSectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24 bg-muted/50", className)}
      aria-labelledby="packages-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="packages-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Packages & Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent pricing with no hidden fees. Choose the option that best
            suits your moving needs.
          </p>
        </div>

        <Tabs defaultValue="hourly" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-1 bg-muted p-1">
            <TabsTrigger
              value="hourly"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Hourly Rates</span>
              <span className="sm:hidden">Hourly</span>
            </TabsTrigger>
            <TabsTrigger
              value="fixed"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Fixed Quote</span>
              <span className="sm:hidden">Fixed</span>
            </TabsTrigger>
            <TabsTrigger
              value="rental"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Truck className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Self-Drive</span>
              <span className="sm:hidden">Rental</span>
            </TabsTrigger>
            <TabsTrigger
              value="commercial"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Building2 className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Commercial</span>
              <span className="sm:hidden">Business</span>
            </TabsTrigger>
          </TabsList>

          {/* Hourly Rates Tab */}
          <TabsContent value="hourly" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {HOURLY_PACKAGES.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
            <KeyTermsBanner />
          </TabsContent>

          {/* Fixed Quote Tab */}
          <TabsContent value="fixed" className="mt-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl">
                  Fixed Price Quote
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Stress-free relocation with a guaranteed price. Pay only what
                  we quote – no surprises.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {FIXED_QUOTE_FEATURES.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg"
                    >
                      <div
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                        aria-hidden="true"
                      >
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button asChild size="lg" className="min-w-50">
                    <Link href="/request-a-quotation">
                      Request Your Free Quote
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Self-Drive Rental Tab */}
          <TabsContent value="rental" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {RENTAL_OPTIONS.map((rental) => (
                <RentalCard key={rental.id} rental={rental} />
              ))}
            </div>
            <div className="bg-muted rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="font-semibold mb-4 text-center">
                Self-Drive Rental Terms
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <Check
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>
                    Trolleys, blankets & tie-downs included free on request
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Bond is fully refundable on safe return</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>RUC (Road User Charges) apply per kilometer</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Valid driver&apos;s license required</span>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Commercial Tab */}
          <TabsContent value="commercial" className="mt-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl">
                  Commercial Moving & Deliveries
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  A cost-effective alternative to courier companies for
                  businesses, warehouses, and bulk logistics.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {COMMERCIAL_FEATURES.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg"
                    >
                      <div
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                        aria-hidden="true"
                      >
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button asChild size="lg" className="min-w-50">
                    <Link href="/request-a-quotation">
                      Get a Commercial Quote
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
