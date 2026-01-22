"use client";

import { cn } from "@/lib/utils";
import { CalendarCheck, Zap, Calendar, CalendarRange } from "lucide-react";

interface DateOption {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

const dateOptions: DateOption[] = [
  {
    id: "flexible",
    label: "Flexible",
    description: "I'm open to any date",
    icon: CalendarCheck,
  },
  {
    id: "asap",
    label: "ASAP",
    description: "As soon as possible",
    icon: Zap,
  },
  {
    id: "specific",
    label: "Specific Date",
    description: "I have a set date",
    icon: Calendar,
  },
  {
    id: "range",
    label: "Date Range",
    description: "Between two dates",
    icon: CalendarRange,
  },
];

interface DateFlexibilitySelectorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function DateFlexibilitySelector({
  value,
  onChange,
  className,
}: DateFlexibilitySelectorProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <label className="text-sm font-medium">When do you need to move?</label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {dateOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = value === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={cn(
                "relative flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200 text-center",
                "hover:border-primary/50 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-muted-foreground/20 bg-background"
              )}
              aria-pressed={isSelected}
            >
              <Icon
                className={cn(
                  "h-6 w-6 mb-2",
                  isSelected ? "text-primary" : "text-muted-foreground"
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "text-sm font-medium",
                  isSelected ? "text-primary" : "text-foreground"
                )}
              >
                {option.label}
              </span>
              <span className="text-xs text-muted-foreground mt-1 hidden md:block">
                {option.description}
              </span>

              {isSelected && (
                <div className="absolute top-2 right-2 h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    className="h-2.5 w-2.5 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
