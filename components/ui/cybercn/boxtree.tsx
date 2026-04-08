import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Children, PropsWithChildren } from "react";
import { Heading } from "./heading";

const BoxVariants = cva("cyber-box", {
  variants: {
    status: {
      default: "box-default",
      resolved: "box-resolved",
      pending: "box-pending",
    },
    width: {
      full: "width-100",
      half: "width-50",
      quarter: "width-25 max-[599px]:break-all",
    },
    childrenCount: {
      0: "after:hidden",
      1: "after:boxtree-box-after",
      2: "after:boxtree-box-after-2",
    },
  },
  defaultVariants: {
    status: "default",
    width: "full",
    childrenCount: 0,
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
  status,
  width,
  childrenCount,
  className,
  children,
}: BoxProps) {
  const childCount = Children.count(children);

  return (
    <div
      className={cn(BoxVariants({ status, width, childrenCount, className }))}
      data-children={childCount}
    >
      <Heading Tag="h2">{title}</Heading>
      {children}
    </div>
  );
}

export function BoxTree({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) {
  return <div className={cn("cyberpunk-boxtree", className)}>{children}</div>;
}

BoxTree.Box = Box;
