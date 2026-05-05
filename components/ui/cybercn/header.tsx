import { cn } from "@/lib/utils";

export function Header({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b-2 border-cybercn-primary bg-cybercn-background text-cybercn-foreground",
        className,
      )}
    >
      {children}
    </header>
  );
}
