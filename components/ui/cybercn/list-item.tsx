import { cn } from "@/lib/utils";

type ListItemProps = React.PropsWithChildren<{
  className?: string;
  glitched?: boolean;
}>;

export function LI({ children, className, glitched, ...props }: ListItemProps) {
  return (
    <li
      className={cn(glitched ? "glitched" : "cyberpunk", className)}
      {...props}
    >
      {children}
    </li>
  );
}
