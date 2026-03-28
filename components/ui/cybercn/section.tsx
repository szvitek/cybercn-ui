"use client";

import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = {
  className?: string;
  both?: boolean;
};

export function Section({
  both,
  children,
  className,
  ...props
}: React.PropsWithChildren<SectionProps>) {
  return (
    <section
      className={cn("cyber-section", both && "both", className)}
      {...props}
    >
      {children}
    </section>
  );
}
