import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import NextImage from "next/image";

const ImageVariants = cva("cyber-image", {
  variants: {
    dotted: {
      false: null,
      true: "cyber-dotted",
    },
  },
  defaultVariants: {
    dotted: false,
  },
});

type ImageVariantProps = VariantProps<typeof ImageVariants>;

type NextImageProps = React.ComponentPropsWithoutRef<typeof NextImage>;

type ImageProps = NextImageProps & ImageVariantProps;

export function Image({ src, alt, dotted, className, ...props }: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      {...props}
      className={cn(ImageVariants({ dotted }), className)}
    />
  );
}
