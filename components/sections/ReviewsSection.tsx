import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewsSectionProps {
  className?: string;
}

export function ReviewsSection({ className }: ReviewsSectionProps) {
  const reviews = [
    {
      name: "Sarah Johnson",
      initials: "SJ",
      location: "Auckland CBD",
      rating: 5,
      text: "Excellent service from start to finish! The team was professional, careful with our belongings, and made our move stress-free. Highly recommend Family Movers!",
    },
    {
      name: "Michael Chen",
      initials: "MC",
      location: "North Shore",
      rating: 5,
      text: "Best moving company we've used. Fair pricing, punctual, and very efficient. They handled our furniture with great care. Will definitely use them again.",
    },
    {
      name: "Emma Wilson",
      initials: "EW",
      location: "West Auckland",
      rating: 5,
      text: "Family Movers made our house move so easy! The crew was friendly and hardworking. Everything arrived safely at our new home. Five stars!",
    },
  ];

  return (
    <section
      className={cn("py-16 md:py-24 bg-muted/50", className)}
      aria-labelledby="reviews-heading"
    >
      <div className="container mx-auto px-16">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            id="reviews-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about their moving experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="h-full">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < review.rating
                          ? "fill-primary text-primary"
                          : "text-muted"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{review.text}</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {review.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
