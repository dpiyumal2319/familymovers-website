"use client";

import { cn } from "@/lib/utils";
import { Truck, User, HardHat } from "lucide-react";

interface HelpOptionCardProps {
  id: string;
  title: string;
  description: string;
  driverHelps: boolean;
  helperCount: number;
  truckOnly?: boolean;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function HelpOptionCard({
  id,
  title,
  description,
  driverHelps,
  helperCount,
  truckOnly = false,
  selected,
  onSelect,
}: HelpOptionCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={cn(
        "relative flex flex-col p-4 rounded-xl border-2 transition-all duration-200 text-left w-full",
        "hover:border-primary/50 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        selected
          ? "border-primary bg-primary/10"
          : "border-muted-foreground/20 bg-background"
      )}
      aria-pressed={selected}
    >
      {/* Visual representation of team */}
      <div className="flex items-center gap-1 mb-3">
        {/* Truck */}
        <div
          className={cn(
            "flex items-center justify-center h-10 w-10 rounded-lg",
            selected ? "bg-primary/20" : "bg-muted"
          )}
        >
          <Truck
            className={cn(
              "h-5 w-5",
              selected ? "text-primary" : "text-muted-foreground"
            )}
            aria-hidden="true"
          />
        </div>

        {!truckOnly && (
          <>
            {/* Driver */}
            {driverHelps && (
              <div
                className={cn(
                  "flex items-center justify-center h-10 w-10 rounded-lg",
                  selected ? "bg-primary/20" : "bg-muted"
                )}
              >
                <User
                  className={cn(
                    "h-5 w-5",
                    selected ? "text-primary" : "text-muted-foreground"
                  )}
                  aria-hidden="true"
                />
              </div>
            )}

            {/* Helpers */}
            {Array.from({ length: helperCount }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center justify-center h-10 w-10 rounded-lg",
                  selected ? "bg-primary/20" : "bg-muted"
                )}
              >
                <HardHat
                  className={cn(
                    "h-5 w-5",
                    selected ? "text-primary" : "text-muted-foreground"
                  )}
                  aria-hidden="true"
                />
              </div>
            ))}
          </>
        )}
      </div>

      {/* Title and description */}
      <span
        className={cn(
          "font-medium text-sm md:text-base",
          selected ? "text-primary" : "text-foreground"
        )}
      >
        {title}
      </span>
      <span className="text-xs text-muted-foreground mt-1">{description}</span>

      {/* Selected indicator */}
      {selected && (
        <div className="absolute top-3 right-3 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
          <svg
            className="h-3 w-3 text-primary-foreground"
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
}
