import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Truck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { RentalOption } from "@/lib/constants";

interface RentalCardProps {
  rental: RentalOption;
  className?: string;
}

export function RentalCard({ rental, className }: RentalCardProps) {
  return (
    <Card
      className={cn(
        "h-full flex flex-col transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      <CardHeader className="text-center pb-2">
        <div
          className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3"
          aria-hidden="true"
        >
          <Truck className="w-7 h-7 text-primary" />
        </div>
        <CardTitle className="text-xl md:text-2xl">{rental.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{rental.bestFor}</p>
      </CardHeader>
      <CardContent className="flex-1 pt-4">
        {/* Pricing Grid */}
        <div className="grid grid-cols-3 gap-2 mb-6 text-center">
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-2xl font-bold text-primary">
              ${rental.pricePerHour}
            </div>
            <div className="text-xs text-muted-foreground">per hour</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-2xl font-bold text-foreground">
              ${rental.rucPerKm}
            </div>
            <div className="text-xs text-muted-foreground">RUC/km</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-2xl font-bold text-foreground">
              ${rental.bond}
            </div>
            <div className="text-xs text-muted-foreground">bond</div>
          </div>
        </div>

        <ul className="space-y-3" aria-label={`Specifications for ${rental.name}`}>
          {rental.specs.map((spec, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check
                className="h-5 w-5 text-primary shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-sm">{spec}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <Button asChild className="w-full" variant="outline">
          <Link href="/request-a-quotation">
            Book This Truck
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
