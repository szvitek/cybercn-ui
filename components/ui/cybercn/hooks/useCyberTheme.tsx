"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useCyberTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Synchronize with the client to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return {
    isDark,
    theme: mounted ? resolvedTheme : "light", // Default to light during SSR
    setTheme,
    mounted,
  };
}
