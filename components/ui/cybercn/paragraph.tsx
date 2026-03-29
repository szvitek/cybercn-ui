import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const ParagraphVariants = cva("cyber-p", {
  variants: {
    inverse: {
      true: "inverse",
      false: null,
    },
    dotted: {
      true: "cyber-dotted",
      false: null,
    },
    scanned: {
      false: null,
      horizontal: "scanned-h",
      vertical: "scanned-v",
    },
  },
  defaultVariants: {
    inverse: false,
    dotted: false,
    scanned: false,
  },
});

type ParagraphVariantProps = VariantProps<typeof ParagraphVariants>;

type ParagrahProps = React.PropsWithChildren &
  ParagraphVariantProps & {
    className?: string;
  };

export function Paragraph({
  inverse,
  dotted,
  children,
  scanned,
  className,
}: ParagrahProps) {
  return (
    <p
      className={cn(ParagraphVariants({ inverse, dotted, scanned }), className)}
    >
      {children}
    </p>
  );
}
