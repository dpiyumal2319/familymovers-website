import { cn } from "@/lib/utils";
import { KEY_TERMS } from "@/lib/constants";
import {
  Clock,
  Shield,
  Star,
  Wrench,
  BadgeCheck,
  Receipt,
} from "lucide-react";

interface KeyTermsBannerProps {
  className?: string;
}

const termsWithIcons = [
  { text: KEY_TERMS.minimumCharge, icon: Clock },
  { text: KEY_TERMS.equipmentIncluded, icon: Wrench },
  { text: KEY_TERMS.noCallOutFees, icon: BadgeCheck },
  { text: KEY_TERMS.noHiddenFees, icon: Receipt },
  { text: KEY_TERMS.insurance, icon: Shield },
  { text: KEY_TERMS.rating, icon: Star },
];

export function KeyTermsBanner({ className }: KeyTermsBannerProps) {
  return (
    <div
      className={cn(
        "bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-6 md:p-8",
        className
      )}
      role="region"
      aria-label="Service terms and guarantees"
    >
      <h3 className="text-lg font-semibold text-center mb-6">
        All Packages Include
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {termsWithIcons.map(({ text, icon: Icon }, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-background/80 rounded-lg p-3"
          >
            <div
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
