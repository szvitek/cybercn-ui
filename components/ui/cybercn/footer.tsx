import { cn } from "@/lib/utils";

export function Footer({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <footer
      className={cn(
        "bg-cybercn-foreground min-h-12.5 text-cybercn-background font-bold",
        className,
      )}
    >
      {children}
    </footer>
  );
}
