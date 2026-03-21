import { cn } from "@/lib/utils";

type ParagrahProps = React.PropsWithChildren<{
  inverse?: boolean;
  dotted?: boolean;
  className?: string;
  scannedv?: boolean;
  scannedh?: boolean;
}>;

export function Paragraph({
  inverse,
  dotted,
  children,
  scannedv,
  scannedh,
  className,
}: ParagrahProps) {
  return (
    <p
      className={cn(
        "cyberpunk",
        inverse && "inverse",
        dotted && "dotted",
        scannedv && "scannedv",
        scannedh && "scannedh",
        className,
      )}
    >
      {children}
    </p>
  );
}
