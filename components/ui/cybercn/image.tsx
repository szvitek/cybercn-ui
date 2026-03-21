import { cn } from "@/lib/utils";
import NextImage from "next/image";

type NextImageProps = React.ComponentPropsWithoutRef<typeof NextImage>;

type ImageProps = NextImageProps & {
  dotted?: boolean;
};

export function Image({ src, alt, dotted, className, ...props }: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      {...props}
      className={cn("cyberpunk", dotted && "dotted", className)}
    />
  );
}
