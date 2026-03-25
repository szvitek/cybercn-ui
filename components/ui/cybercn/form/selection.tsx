import { forwardRef, ComponentProps } from "react";
import { cn } from "@/lib/utils";

type CyberSelectionProps = Omit<ComponentProps<"input">, "type"> & {
  label: string;
  type: "checkbox" | "radio";
};

export const CyberSelection = forwardRef<HTMLInputElement, CyberSelectionProps>(
  ({ label, type, className, ...props }, ref) => {
    return (
      <label className="cyberpunk">
        <input
          ref={ref}
          type={type}
          className={cn("cyberpunk", className)}
          {...props}
        />{" "}
        {label}
      </label>
    );
  },
);

CyberSelection.displayName = "CyberSelection";
