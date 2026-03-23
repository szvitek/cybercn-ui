import { cn } from "@/lib/utils";

export function BoxTree({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("boxtree", className)}>{children}</div>;
}
