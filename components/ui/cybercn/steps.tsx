import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type StepsProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLUListElement>;

export function Steps({ children, className, ...props }: StepsProps) {
  return (
    <ul className={cn("steps", className)} {...props}>
      {children}
    </ul>
  );
}

type StepProps = PropsWithChildren<{
  current?: boolean;
}> &
  React.HTMLAttributes<HTMLLIElement>;

export function Step({ current, className, children, ...props }: StepProps) {
  return (
    <li className={cn(current && "current", className)} {...props}>
      {children}
    </li>
  );
}
