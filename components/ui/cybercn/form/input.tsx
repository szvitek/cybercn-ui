import { forwardRef, ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const CyberInput = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn("cyber-input", className)}
      {...props}
    />
  ),
);

CyberInput.displayName = "CyberInput";
