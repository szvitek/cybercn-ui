import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const HrVariants = cva("cyber-hr", {
  variants: {
    glitched: {
      true: "animate-glitch-hr",
      false: null,
    },
  },
  defaultVariants: {
    glitched: false,
  },
});

type HrVariantProps = VariantProps<typeof HrVariants>;

type HrProps = HrVariantProps & {
  className?: string;
};

export function Hr({ glitched, className, ...props }: HrProps) {
  return <hr className={cn(HrVariants({ glitched }), className)} {...props} />;
}
