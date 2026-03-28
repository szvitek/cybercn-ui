import { forwardRef, ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const CyberTextarea = forwardRef<
  HTMLTextAreaElement,
  ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn("cyber-input min-h-30 clip-form-textarea", className)}
    {...props}
  />
));

CyberTextarea.displayName = "CyberTextarea";
