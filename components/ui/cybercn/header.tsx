import { cn } from "@/lib/utils";

export function Header({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b-2 border-primary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className,
      )}
    >
      {children}
    </header>
  );
}
