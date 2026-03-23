import { cn } from "@/lib/utils";

export function Header({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <header
      className={cn(
        "bg-cyber-black dark:bg-cyber-yellow min-h-12.5 text-cyber-yellow dark:text-cyber-black",
        className,
      )}
    >
      {children}
    </header>
  );
}
