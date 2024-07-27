"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import InfiniteMarquee from "@/components/Marquee";
import Marquee2 from "@/components/Marquee2";

export default function Home() {
  return (
    <div className="">
      <div className="bg-red- mt-16 flex justify-center">
        <DarkModeToggle />
      </div>
      <Marquee2 />
      <div className="bg-red-30 mt-8 md:mt-16">
        <div className="bg-blue-30 m-auto max-w-5xl p-4 lg:p-0">
          <h1 className="text-3xl text-center mb-8 md:mb-16">
            This portfolio showcases the frontend projects I have built. When I
            come across a website with a cool and interesting UI, I enjoy
            rebuilding it on my own.
          </h1>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-purple-300 rounded-lg">image</div>
            <div className="bg-purple-300">image</div>
            <div className="bg-purple-300">image</div>
            <div className="bg-purple-300">image</div>
            <div className="bg-purple-300">image</div>
            <div className="bg-purple-300">image</div>
            <div className="bg-purple-300">image</div>
          </div>
        </div>
      </div>
    </div>
  );
}
