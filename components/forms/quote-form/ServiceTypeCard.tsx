"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceTypeCardProps {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function ServiceTypeCard({
  id,
  title,
  description,
  icon: Icon,
  selected,
  onSelect,
}: ServiceTypeCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={cn(
        "relative flex flex-col items-center justify-center p-4 md:p-6 rounded-xl border-2 transition-all duration-200 text-center min-h-[120px] md:min-h-[140px]",
        "hover:border-primary/50 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        selected
          ? "border-primary bg-primary/10 ring-2 ring-primary ring-offset-2"
          : "border-muted-foreground/20 bg-background"
      )}
      aria-pressed={selected}
    >
      {/* Checkmark indicator */}
      {selected && (
        <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
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

      <Icon
        className={cn(
          "h-8 w-8 md:h-10 md:w-10 mb-2 transition-colors",
          selected ? "text-primary" : "text-muted-foreground"
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "text-sm md:text-base font-medium transition-colors",
          selected ? "text-primary" : "text-foreground"
        )}
      >
        {title}
      </span>
      {description && (
        <span className="text-xs text-muted-foreground mt-1 line-clamp-2">
          {description}
        </span>
      )}
    </button>
  );
}
