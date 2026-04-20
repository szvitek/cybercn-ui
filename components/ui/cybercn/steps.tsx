import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

type StepsProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLUListElement>;

export function Steps({ children, className, ...props }: StepsProps) {
  return (
    <ul className={cn("cyber-steps", className)} {...props}>
      {children}
    </ul>
  );
}

const StepVariants = cva("cyber-step", {
  variants: {
    status: {
      default: null,
      current: "current",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

type StepVariants = VariantProps<typeof StepVariants>;

type StepProps = PropsWithChildren &
  StepVariants & {
    className?: string;
  };

export function Step({ status, className, children, ...props }: StepProps) {
  return (
    <li className={cn(StepVariants({ status }), className)} {...props}>
      {children}
    </li>
  );
}
