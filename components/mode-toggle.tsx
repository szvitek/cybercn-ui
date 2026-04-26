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
        {/* Changed variant to outline and added cyber-specific classes */}
        <Button
          variant="outline"
          size="icon"
          className="relative rounded-none border-2 border-primary bg-transparent transition-all duration-200 group overflow-hidden hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-background"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      {/* Styled the dropdown to match the sharp industrial look */}
      <DropdownMenuContent
        align="end"
        className="w-40 rounded-none border-2 border-primary bg-background font-hacked uppercase tracking-tighter"
      >
        <DropdownMenuItem
          className="cursor-pointer whitespace-nowrap focus:bg-primary focus:text-primary-foreground dark:focus:text-background"
          onClick={() => setTheme("light")}
        >
          [ Light_Mode ]
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer whitespace-nowrap focus:bg-primary focus:text-primary-foreground dark:focus:text-background"
          onClick={() => setTheme("dark")}
        >
          [ Dark_Mode ]
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer whitespace-nowrap focus:bg-primary focus:text-primary-foreground dark:focus:text-background"
          onClick={() => setTheme("system")}
        >
          [ System_Default ]
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
