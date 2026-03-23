import { cn } from "@/lib/utils";

export function Footer({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <footer
      className={cn(
        "bg-cyber-black dark:bg-cyber-yellow min-h-12.5 text-cyber-yellow dark:text-cyber-black",
        className,
      )}
    >
      {children}
    </footer>
  );
}
