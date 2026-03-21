"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useCyberTheme } from "./hooks/useCyberTheme";

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
  const { isDark } = useCyberTheme();

  return (
    <section
      className={cn(
        "cyberpunk",
        both && "both",
        isDark ? "black" : "", // Manually injecting the actual 'black' class
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
