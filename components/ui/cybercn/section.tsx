"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const SectionVariants = cva("cyber-section", {
  variants: {
    withSide: {
      false: null,
      true: "frame-both",
    },
  },
  defaultVariants: {
    withSide: false,
  },
});

type SectionVariantProps = VariantProps<typeof SectionVariants>;

type SectionProps = React.PropsWithChildren &
  SectionVariantProps & {
    className?: string;
  };

export function Section({
  withSide,
  children,
  className,
  ...props
}: React.PropsWithChildren<SectionProps>) {
  return (
    <section
      className={cn(SectionVariants({ withSide }), className)}
      {...props}
    >
      {children}
    </section>
  );
}
