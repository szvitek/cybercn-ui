import { LucideIcon } from "lucide-react";

export function Aside({ children }: React.PropsWithChildren) {
  return (
    <aside className="cyberpunk">
      <ul>{children}</ul>
    </aside>
  );
}

type AsideItemProps = {
  href: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
};

export function AsideItem({
  href,
  icon: Icon,
  children,
  className,
  ...props
}: AsideItemProps) {
  return (
    <li className={className} {...props}>
      <a href={href} className="flex items-center">
        {Icon && <Icon className="inline mr-2" />}
        {children}
      </a>
    </li>
  );
}
