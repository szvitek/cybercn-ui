import { cn } from "@/lib/utils";

type HrProps = {
  glitched?: boolean;
  className?: string;
};

export function Hr({ glitched, className, ...props }: HrProps) {
  return (
    <hr
      className={cn("cyberpunk", glitched && "glitched", className)}
      {...props}
    />
  );
}
