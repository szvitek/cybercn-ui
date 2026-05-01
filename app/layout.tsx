import type { Metadata } from "next";
import { Inter, Advent_Pro, VT323 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Header } from "@/components/ui/cybercn/header";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "@/components/ui/cybercn/link";
import { BookOpen, GithubIcon, LayoutTemplate } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const adventPro = Advent_Pro({
  variable: "--font-advent-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "CyberCN UI",
    template: "%s | CyberCN UI",
  },
  description:
    "Cyberpunk-styled UI primitives and documentation built with Next.js and Fumadocs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        adventPro.variable,
        "font-sans",
        inter.variable,
        vt323.variable,
        "cyber-scrollbar",
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootProvider>
            <Header className="flex items-center justify-between h-16 px-4 md:px-8">
              {/* Brand/Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                <span className="font-hacked text-2xl tracking-tighter transition-colors group-hover:text-cyber-red">
                  CYBER
                  <span className="text-cyber-red group-hover:text-primary transition-colors">
                    CN
                  </span>
                </span>
              </Link>

              {/* Navigation Links */}
              <nav className="flex items-center gap-6">
                <Link
                  href="/docs"
                  className="flex items-center gap-2 font-hacked text-sm uppercase tracking-widest hover:text-cyber-red transition-colors"
                >
                  <BookOpen className="size-4" />
                  <span className="hidden sm:inline">Documentation</span>
                </Link>

                <Link
                  href="/example"
                  className="flex items-center gap-2 font-hacked text-sm uppercase tracking-widest hover:text-cyber-red transition-colors"
                >
                  <LayoutTemplate className="size-4" />
                  <span className="hidden sm:inline">Showcase</span>
                </Link>

                <div className="h-6 w-[1px] bg-primary/20 mx-2" />

                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/szvitek/cybercn-ui"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 hover:text-cyber-red transition-transform hover:scale-110"
                  >
                    <GithubIcon className="size-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <ModeToggle />
                </div>
              </nav>
            </Header>
            {children}
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
