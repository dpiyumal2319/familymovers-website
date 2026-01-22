"use client";

import { cn } from "@/lib/utils";
import { Check, Truck, MapPin, CalendarClock, User } from "lucide-react";

interface Step {
  id: number;
  title: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  { id: 1, title: "Service", icon: Truck },
  { id: 2, title: "Location", icon: MapPin },
  { id: 3, title: "Schedule", icon: CalendarClock },
  { id: 4, title: "Contact", icon: User },
];

interface FormStepIndicatorProps {
  currentStep: number;
  className?: string;
}

export function FormStepIndicator({
  currentStep,
  className,
}: FormStepIndicatorProps) {
  return (
    <nav aria-label="Progress" className={cn("mb-8", className)}>
      <ol className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          const Icon = step.icon;

          return (
            <li key={step.id} className="relative flex-1">
              <div className="flex flex-col items-center">
                {/* Step circle */}
                <div
                  className={cn(
                    "flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-2 transition-all duration-200",
                    isCompleted &&
                      "border-primary bg-primary text-primary-foreground",
                    isCurrent &&
                      "border-primary bg-primary/10 text-primary",
                    !isCompleted &&
                      !isCurrent &&
                      "border-muted-foreground/30 bg-background text-muted-foreground"
                  )}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                  ) : (
                    <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                  )}
                </div>

                {/* Step title */}
                <span
                  className={cn(
                    "mt-2 text-xs md:text-sm font-medium transition-colors",
                    isCompleted && "text-primary",
                    isCurrent && "text-primary",
                    !isCompleted && !isCurrent && "text-muted-foreground"
                  )}
                >
                  {step.title}
                </span>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "absolute left-[calc(50%+24px)] md:left-[calc(50%+28px)] top-5 md:top-6 h-0.5 w-[calc(100%-48px)] md:w-[calc(100%-56px)]",
                    currentStep > step.id + 1
                      ? "bg-primary"
                      : currentStep > step.id
                      ? "bg-gradient-to-r from-primary to-muted-foreground/30"
                      : "bg-muted-foreground/30"
                  )}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
