import { forwardRef, ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const CyberSelect = forwardRef<
  HTMLSelectElement,
  ComponentProps<"select">
>(({ className, children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={cn("cyberpunk bg-white", className)}
      {...props}
    >
      {children}
    </select>
  );
});

CyberSelect.displayName = "CyberSelect";
