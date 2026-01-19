import { cn } from "@/lib/utils";
import { ElementType, ComponentPropsWithoutRef } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({ 
  children, 
  className,
  as: Component = "div"
}: ContainerProps) {
  return (
    <Component className={cn("container mx-auto px-4", className)}>
      {children}
    </Component>
  );
}
