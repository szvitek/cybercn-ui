import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Slot } from "radix-ui";
import NextLink from "next/link";

const LinkVariants = cva("cyberpunk", {
  variants: {
    variant: {
      red: "red",
      green: "green",
      purple: "purple",
      blue: "blue",
    },
  },
  defaultVariants: {
    variant: "red",
  },
});

export type LinkVariantProps = VariantProps<typeof LinkVariants>;

type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

export type CyberLinkProps = Omit<LinkProps, "variant" | "className"> &
  LinkVariantProps & {
    className?: string;
    asChild?: boolean;
  };

export function Link({
  variant,
  className,
  asChild,
  ...props
}: CyberLinkProps) {
  const Comp = asChild ? Slot.Root : NextLink;

  return (
    <Comp
      className={cn(LinkVariants({ variant, className }))}
      {...props}
    />
  );
}
