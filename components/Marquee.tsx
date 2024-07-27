import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-block"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const MarqueeContent = () => (
  <span className="mx-4">Your scrolling content here</span>
);

const InfiniteMarquee = () => {
  return (
    <Marquee>
      <MarqueeContent />
      <MarqueeContent />
      <MarqueeContent />
      <MarqueeContent />
    </Marquee>
  );
};

export default InfiniteMarquee;
