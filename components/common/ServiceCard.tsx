import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  href?: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  href,
  className,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-102 overflow-hidden pt-0",
        className
      )}
    >
      {image && (
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader>
        {!image && (
          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center"
            aria-hidden="true"
          >
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
          </div>
        )}
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground flex-1">{description}</p>
        {href && (
          <Button variant="link" asChild className="px-0 w-fit">
            <Link href={href}>
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
