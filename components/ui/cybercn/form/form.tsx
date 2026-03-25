"use client";

import { cn } from "@/lib/utils";
import { FormHTMLAttributes, forwardRef } from "react";

type CyberFormProps = FormHTMLAttributes<HTMLFormElement>;

export const CyberForm = forwardRef<HTMLFormElement, CyberFormProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <form ref={ref} className={cn("space-y-4", className)} {...props}>
        {children}
      </form>
    );
  },
);

CyberForm.displayName = "CyberForm";
