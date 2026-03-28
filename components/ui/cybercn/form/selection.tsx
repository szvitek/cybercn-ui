import { forwardRef, ComponentProps } from "react";
import { cn } from "@/lib/utils";

type CyberSelectionProps = Omit<ComponentProps<"input">, "type"> & {
  label: string;
  type: "checkbox" | "radio";
};

export const CyberSelection = forwardRef<HTMLInputElement, CyberSelectionProps>(
  ({ label, type, className, ...props }, ref) => {
    return (
      <label className="">
        <input
          ref={ref}
          type={type}
          className={cn(
            type == "radio" && "cyber-radio",
            type == "checkbox" && "cyber-checkbox",
            className,
          )}
          {...props}
        />{" "}
        {label}
      </label>
    );
  },
);

CyberSelection.displayName = "CyberSelection";
