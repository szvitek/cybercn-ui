import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const HrVariants = cva("cyber-hr", {
  variants: {
    variant: {
      default: "",
      glitched: "animate-glitch-hr",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type HrVariantProps = VariantProps<typeof HrVariants>;

type HrProps = HrVariantProps & {
  className?: string;
};

export function Hr({ variant, className, ...props }: HrProps) {
  return <hr className={cn(HrVariants({ variant }), className)} {...props} />;
}
