import React from "react";
import { cn } from "@/lib/utils";

type HeadingProps = React.PropsWithChildren<{
  Tag: "h1" | "h2" | "h3" | "h4";
  glitched?: boolean;
  className?: string;
}>;

export function Heading({
  Tag,
  glitched,
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn("cyberpunk", glitched && "glitched", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
