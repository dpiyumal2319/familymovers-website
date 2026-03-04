"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function TestToastButton() {
  const handleTestToast = () => {
    toast.custom((toastId) => (
      <div className="rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg">
        <p className="text-sm font-semibold">Custom Toast</p>
        <p className="mt-1 text-sm text-muted-foreground">
          This is a test toast from the root layout.
        </p>
        <Button
          size="sm"
          className="mt-3"
          onClick={() => toast.dismiss(toastId)}
        >
          Dismiss
        </Button>
      </div>
    ));
  };

  return (
    <div className="border-t bg-muted/20 py-4">
      <div className="mx-auto flex max-w-7xl justify-center px-4">
        <Button type="button" variant="outline" onClick={handleTestToast}>
          Send Custom Test Toast
        </Button>
      </div>
    </div>
  );
}
