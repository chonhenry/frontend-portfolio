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
import { DarkModeToggle } from "@/components/DarkModeToggle";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <div>
      <div className="p-3">
        <DarkModeToggle />
      </div>

      <div className="">hello world</div>
    </div>
  );
}
