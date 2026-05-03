"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative rounded-none border-2 border-cybercn-primary bg-transparent transition-all duration-200 group overflow-hidden hover:bg-cybercn-primary hover:text-cybercn-primary-foreground dark:hover:bg-cybercn-primary dark:hover:text-cybercn-background focus-visible:ring-2 focus-visible:ring-cybercn-primary/40 focus-visible:ring-offset-0 focus-visible:outline-none"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-44 rounded-none border-2 border-cybercn-primary bg-cybercn-background text-cybercn-foreground font-medium font-hacked uppercase tracking-tighter p-1"
      >
        <DropdownMenuItem
          className="cursor-pointer whitespace-nowrap rounded-none focus:rounded-none focus:bg-cybercn-primary focus:text-cybercn-primary-foreground dark:focus:text-cybercn-background"
          onClick={() => setTheme("light")}
        >
          [ Light_Mode ]
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer whitespace-nowrap rounded-none focus:rounded-none focus:bg-cybercn-primary focus:text-cybercn-primary-foreground dark:focus:text-cybercn-background"
          onClick={() => setTheme("dark")}
        >
          [ Dark_Mode ]
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer whitespace-nowrap rounded-none focus:rounded-none focus:bg-cybercn-primary focus:text-cybercn-primary-foreground dark:focus:text-cybercn-background"
          onClick={() => setTheme("system")}
        >
          [ System_Default ]
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
