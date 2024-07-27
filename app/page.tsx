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
import Marquee2 from "@/components/Marquee2";
import Grid from "@/components/Grid";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="">
      <div className="bg-red- mt-16 flex justify-center">
        <DarkModeToggle />
      </div>
      {/* <Marquee2 /> */}
      <div className="bg-red-30 mt-8 md:mt-16">
        <div className="bg-blue-30 m-auto max-w-5xl p-4 lg:p-0">
          <motion.h1
            className="text-3xl text-center mb-8 md:mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            This portfolio showcases the frontend projects I have built. When I
            come across a website with a cool and interesting UI, I enjoy
            rebuilding it on my own.
          </motion.h1>
          <Grid />
        </div>
      </div>
    </div>
  );
}
