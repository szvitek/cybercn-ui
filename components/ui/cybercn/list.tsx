import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const ListVariants = cva("mbs-5 mbe-5 ps-10", {
  variants: {
    variant: {
      ul: "cyber-ul",
      ol: "cyber-ol",
    },
  },
  defaultVariants: {
    variant: "ul",
  },
});

const ListItemVariants = cva("cyber-li", {
  variants: {
    glitched: {
      false: null,
      true: "animate-li-glitched",
    },
  },
  defaultVariants: {
    glitched: false,
  },
});

type ListVariantProps = VariantProps<typeof ListVariants>;

export type ListProps = React.HTMLAttributes<
  HTMLOListElement | HTMLUListElement
> &
  ListVariantProps & {
    tag?: "ul" | "ol";
  };

type ListItemVariantProps = VariantProps<typeof ListItemVariants>;

export type ListItemProps = ListItemVariantProps &
  React.LiHTMLAttributes<HTMLLIElement>;

export function List({
  children,
  className,
  variant = "ul",
  tag,
  ...props
}: ListProps) {
  const Tag = tag || (variant as "ul" | "ol");
  return (
    <Tag className={cn(ListVariants({ variant }), className)} {...props}>
      {children}
    </Tag>
  );
}

export function ListItem({
  children,
  className,
  glitched,
  ...props
}: ListItemProps) {
  return (
    <li className={cn(ListItemVariants({ glitched }), className)} {...props}>
      {children}
    </li>
  );
}

List.Item = ListItem;
