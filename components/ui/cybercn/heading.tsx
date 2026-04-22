import React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const HeadingVariants = cva("cyber-heading", {
  variants: {
    tag: {
      h1: "text-[2rem] leading-[2.2rem] font-extralight before:clip-h1-before",
      h2: "text-[1.7rem] leading-[1.9rem] font-light before:clip-h2-before",
      h3: "text-[1.4rem] leading-[1.6rem] font-medium before:clip-h3-before cursor-fast-reverse",
      h4: "text-base leading-[1.2rem] font-bold before:clip-h4-before cursor-fast-reverse",
    },
    glitched: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      tag: "h1",
      glitched: true,
      class:
        "animate-h1-glitched before:animate-h1-before-glitched",
    },
    {
      tag: "h2",
      glitched: true,
      class:
        "animate-h1-glitched before:animate-h2-before-glitched",
    },
    {
      tag: "h3",
      glitched: true,
      class:
        "animate-h1-glitched cyber-heading-h3-h4-glitched",
    },
    {
      tag: "h4",
      glitched: true,
      class:
        "animate-h1-glitched cyber-heading-h3-h4-glitched",
    },
  ],
  defaultVariants: {
    tag: "h1",
    glitched: false,
  },
});

type HeadingVariantProps = VariantProps<typeof HeadingVariants>;

type HeadingProps = React.PropsWithChildren &
  HeadingVariantProps & {
    Tag: "h1" | "h2" | "h3" | "h4";
    className?: string;
  };

export function Heading({
  Tag,
  glitched,
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(HeadingVariants({ tag: Tag, glitched }), className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
