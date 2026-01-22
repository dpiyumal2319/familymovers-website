"use client";

import { cn } from "@/lib/utils";
import {
  Building2,
  Home,
  ArrowUp,
  ArrowUpFromDot,
} from "lucide-react";

interface FloorOption {
  id: string;
  label: string;
  icon: React.ElementType;
}

const floorOptions: FloorOption[] = [
  { id: "ground", label: "Ground", icon: Home },
  { id: "townhouse", label: "Townhouse", icon: Building2 },
  { id: "stairs-2", label: "2nd Floor (Stairs)", icon: ArrowUp },
  { id: "stairs-3", label: "3rd Floor (Stairs)", icon: ArrowUpFromDot },
  { id: "elevator", label: "Elevator", icon: Building2 },
];

interface FloorLevelSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function FloorLevelSelector({
  label,
  value,
  onChange,
  className,
}: FloorLevelSelectorProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="text-sm font-medium">{label}</label>
      <div className="flex flex-wrap gap-2">
        {floorOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = value === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200 text-sm",
                "hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
                isSelected
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-muted-foreground/20 bg-background text-muted-foreground"
              )}
              aria-pressed={isSelected}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
