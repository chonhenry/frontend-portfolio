"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Grid = () => {
  const router = useRouter();

  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ];

  return (
    <motion.div
      className="max-w-[1024px] mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 1,
      }}
    >
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-full aspect-square"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            whileHover={{
              rotate: 3,
              transition: { duration: 0.5 },
            }}
          >
            <Image
              className="rounded-xl cursor-pointer"
              src={image}
              width="500"
              height="500"
              alt="image"
              onClick={() => router.push("/dashboard")}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Grid;
