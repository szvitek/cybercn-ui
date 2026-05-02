import { Button } from "@/components/ui/cybercn/button";
import { Heading } from "@/components/ui/cybercn/heading";
import Link from "next/link";
import { Paragraph } from "@/components/ui/cybercn/paragraph";
import { Section } from "@/components/ui/cybercn/section";

export default function LandingPage() {
  return (
    <Section
      withSide
      className=" m-20 flex flex-col items-center justify-center py-24 text-center"
    >
      {/* The Hero Title */}
      <Heading
        Tag="h1"
        className="font-hacked text-7xl md:text-9xl mb-6 leading-none"
      >
        <span className="relative inline-block hover:animate-h1-glitched">
          cybercn
          {/* Faux-glitch shadow using text-shadow in a style tag or tailwind */}
          <span className="absolute inset-0 -translate-x-1 translate-y-1 text-cyber-blue opacity-40 -z-10">
            cybercn
          </span>
        </span>
        <span className="text-cyber-red tracking-tighter drop-shadow-[0_0_15px_rgba(255,0,60,0.4)]">
          ui
        </span>
      </Heading>

      {/* The Description */}
      <Paragraph
        inverse
        dotted
        className="font-advent-pro max-w-175 text-lg md:text-xl uppercase tracking-[0.2em] opacity-90 border-l-4 border-cyber-red pl-4 italic"
      >
        Industrial grade components for the{" "}
        <span className="text-cyber-neon dark:text-cyber-red">
          next generation
        </span>{" "}
        of web interfaces.
      </Paragraph>

      {/* The CTA with that existing Hacked font */}
      <div className="mt-12 flex gap-4">
        <Button asChild size="sm">
          <Link href="/docs">Initialize_System</Link>
        </Button>
        <Button asChild size="sm" variant="purple">
          <Link href="/example">Demo</Link>
        </Button>
      </div>
    </Section>
  );
}
