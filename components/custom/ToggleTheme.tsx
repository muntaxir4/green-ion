"use client";

import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ToggleTheme(props: { [key: string]: any }) {
  const { setTheme } = useTheme();

  return (
    <div {...props}>
      <Button
        variant="outline"
        size="icon"
        className="m-1 w-[2rem] h-[2rem] self-center"
      >
        <Sun
          className="hidden dark:inline "
          onClick={() => setTheme("light")}
        />
        <Moon
          className="inline dark:hidden "
          onClick={() => setTheme("dark")}
        />
      </Button>
    </div>
  );
}
