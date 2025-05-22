'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
}

export function Marquee({
  children,
  className,
  pauseOnHover = true,
  direction = "left",
  speed = 20, // pixels per second
}: MarqueeProps) {
  const [width, setWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setWidth(contentRef.current.scrollWidth);
    }
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [children]);

  // Distance to travel is the content width
  const distance = width;
  
  // Calculate duration based on speed and distance
  // The formula is: duration (in seconds) = distance (in pixels) / speed (pixels per second)
  const duration = distance / speed;

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden whitespace-nowrap", className)}
    >
      <motion.div
        ref={contentRef}
        className="inline-flex"
        animate={{
          x: direction === "left" ? -distance : distance,
        }}
        initial={{
          x: direction === "left" ? 0 : -distance,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        {children}
        <div className="inline-flex pl-10">{children}</div>
      </motion.div>
    </div>
  );
}
