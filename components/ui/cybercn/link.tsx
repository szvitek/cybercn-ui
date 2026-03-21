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
    size?:
      | "default"
      | "xs"
      | "sm"
      | "lg"
      | "icon"
      | "icon-xs"
      | "icon-sm"
      | "icon-lg"; // not used yet
  };

export function Link({
  variant,
  className,
  asChild,
  size,
  ...props
}: CyberLinkProps) {
  const Comp = asChild ? Slot.Root : NextLink;

  return (
    <Comp
      data-slot="link"
      data-variant={variant}
      data-size={size}
      className={cn(LinkVariants({ variant, className }))}
      {...props}
    />
  );
}
