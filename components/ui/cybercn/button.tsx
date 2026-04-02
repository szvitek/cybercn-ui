import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Slot } from "radix-ui";

const ButtonVariants = cva(
  "cyber-button disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        red: "bg-cyber-red",
        green: "bg-cyber-green",
        blue: "bg-cyber-blue",
        purple: "bg-cyber-purple",
      },
      size: {
        default: "px-10 py-5 [--cut-x:15px] [--cut-indent:20px] [--cut-y:35px]",
        sm: "px-8 py-4 text-sm [--cut-x:8px] [--cut-indent:10px] [--cut-y:15px]",
        lg: "px-12 py-6 text-[1.5rem] [--cut-x:20px] [--cut-indent:30px] [--cut-y:45px]",
        icon: "flex items-center justify-center size-8 after:scale-50 after:hidden [--cut-x:5px] [--cut-indent:8px] [--cut-y:12px]",
      },
    },
    defaultVariants: {
      variant: "red",
      size: "default",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof ButtonVariants>;

type ShadcnButtonProps = React.ComponentPropsWithoutRef<typeof ShadcnButton>;

export type ButtonProps = Omit<ShadcnButtonProps, "variant" | "className"> &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    asChild?: boolean;
    glitchLabel?: string;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "red",
      className,
      size = "default",
      asChild,
      glitchLabel = "R-25",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : "button";

    return (
      <Comp
        data-is-button={!asChild}
        data-text={glitchLabel}
        ref={ref}
        className={cn(
          ButtonVariants({
            variant,
            size,
            className,
          }),
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "CyberButton";
