import { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const BoxVariants = cva("cyberpunk", {
  variants: {
    variant: {
      default: "",
      resolved: "resolved",
      pending: "pending",
    },
    childrenCount: {
      0: "children0",
      1: "children1",
      2: "children2",
    },
    width: {
      full: "width1",
      half: "width2",
      quarter: "width3",
    },
  },
  defaultVariants: {
    variant: "default",
    childrenCount: 0,
    width: "full",
  },
});

type BoxVariants = VariantProps<typeof BoxVariants>;

type BoxProps = PropsWithChildren<{
  title: string;
}> &
  BoxVariants & {
    className?: string;
  };

export function Box({
  title,
  variant,
  childrenCount,
  width,
  className,
  children,
}: BoxProps) {
  return (
    <div
      className={cn(BoxVariants({ variant, childrenCount, width, className }))}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
}
