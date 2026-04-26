import * as React from "react";

import { cn } from "@/lib/utils";

type PreviewProps = React.PropsWithChildren<{
  className?: string;
}>;

export function Preview({ children, className }: PreviewProps) {
  return (
    <div
      className={cn(
        "not-prose my-6 border border-border/70 bg-card/40 px-4 py-5 sm:px-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
