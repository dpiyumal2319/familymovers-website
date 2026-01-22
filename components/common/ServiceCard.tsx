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
  compact?: boolean;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  href,
  className,
  compact = false,
}: ServiceCardProps) {
  if (compact) {
    return (
      <Card
        className={cn(
          "h-full flex flex-col transition-all duration-300 hover:shadow-md overflow-hidden group pt-0 gap-0",
          className
        )}
      >
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-3">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        )}
        <CardHeader>
          {!image && (
            <div
              className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mb-1"
              aria-hidden="true"
            >
              <Icon className="w-4 h-4 text-primary" />
            </div>
          )}
          <CardTitle className="text-sm font-semibold leading-tight line-clamp-2 mb-0">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col ">
          <p className="text-xs text-muted-foreground line-clamp-3 flex-1">
            {description}
          </p>
          {href && (
            <Link
              href={href}
              className="inline-flex items-center text-xs text-primary hover:text-primary/80 font-medium mt-2 group-hover:underline"
            >
              Learn more
              <ArrowRight className="ml-1 h-3 w-3" aria-hidden="true" />
            </Link>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-102 overflow-hidden pt-0 gap-4",
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
