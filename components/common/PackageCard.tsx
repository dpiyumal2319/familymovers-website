import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { HourlyPackage } from "@/lib/constants";

interface PackageCardProps {
  package: HourlyPackage;
  className?: string;
}

export function PackageCard({ package: pkg, className }: PackageCardProps) {
  return (
    <Card
      className={cn(
        "h-full flex flex-col transition-all duration-300 hover:shadow-lg relative",
        pkg.isPopular && "border-primary ring-2 ring-primary/20",
        className
      )}
    >
      {pkg.isPopular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
          Most Popular
        </Badge>
      )}
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-xl md:text-2xl">{pkg.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{pkg.description}</p>
      </CardHeader>
      <CardContent className="flex-1 pt-4">
        <div className="text-center mb-6">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl md:text-5xl font-bold text-primary">
              ${pkg.pricePerHour}
            </span>
            <span className="text-muted-foreground">/hr</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">+ GST</p>
        </div>
        <ul className="space-y-3" aria-label={`Features of ${pkg.name}`}>
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check
                className="h-5 w-5 text-primary shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <Button asChild className="w-full" variant={pkg.isPopular ? "default" : "outline"}>
          <Link href="/request-a-quotation">
            Get a Quote
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
