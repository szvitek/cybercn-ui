import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Preview } from "@/components/docs/preview";
import { Aside, AsideItem } from "@/components/ui/cybercn/aside";
import { BoxTree, Box } from "@/components/ui/cybercn/boxtree";
import { Button } from "@/components/ui/cybercn/button";
import { Footer } from "@/components/ui/cybercn/footer";
import { CyberFieldset } from "@/components/ui/cybercn/form/fieldset";
import { CyberForm } from "@/components/ui/cybercn/form/form";
import { CyberInput } from "@/components/ui/cybercn/form/input";
import { CyberSelect } from "@/components/ui/cybercn/form/select";
import { CyberSelection } from "@/components/ui/cybercn/form/selection";
import { CyberTextarea } from "@/components/ui/cybercn/form/textarea";
import { Header } from "@/components/ui/cybercn/header";
import { Heading } from "@/components/ui/cybercn/heading";
import { Hr } from "@/components/ui/cybercn/hr";
import { Image } from "@/components/ui/cybercn/image";
import Link from "next/link";
import { List, ListItem } from "@/components/ui/cybercn/list";
import { Paragraph } from "@/components/ui/cybercn/paragraph";
import { Section } from "@/components/ui/cybercn/section";
import { Step, Steps } from "@/components/ui/cybercn/steps";
import { ModeToggle } from "@/components/mode-toggle";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Preview,
    Aside,
    Button,
    BoxTree,
    CyberFieldset,
    CyberForm,
    CyberInput,
    CyberSelect,
    CyberSelection,
    CyberTextarea,
    Footer,
    Header,
    Heading,
    Hr,
    Image,
    Link,
    List,
    ModeToggle,
    Paragraph,
    Section,
    Step,
    Steps,
    "Aside.Item": AsideItem,
    "BoxTree.Box": Box,
    "List.Item": ListItem,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
