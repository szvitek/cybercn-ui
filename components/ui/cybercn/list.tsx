import { cn } from "@/lib/utils";

type ListProps = React.PropsWithChildren<{
  Tag: "ul" | "ol";
  className?: string;
}>;

export function List({ children, className, Tag, ...props }: ListProps) {
  return (
    <Tag className={cn("cyberpunk mbs-5 mbe-5 ps-10", className)} {...props}>
      {children}
    </Tag>
  );
}
