import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Slot } from "radix-ui";

const ButtonVariants = cva("cyberpunk", {
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

export type ButtonVariantProps = VariantProps<typeof ButtonVariants>;

type ShadcnButtonProps = React.ComponentPropsWithoutRef<typeof ShadcnButton>;

export type ButtonProps = Omit<ShadcnButtonProps, "variant" | "className"> &
  ButtonVariantProps & {
    className?: string;
  };

export function Button({
  variant,
  className,
  asChild,
  size,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(ButtonVariants({ variant, className }))}
      {...props}
    />
  );
}
