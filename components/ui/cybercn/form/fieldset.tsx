import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export function CyberFieldset({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <fieldset className={cn("cyber-fieldset", className)}>{children}</fieldset>
  );
}
