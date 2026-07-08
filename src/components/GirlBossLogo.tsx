"use client";

import { motion } from "framer-motion";

type LogoSize = "nav" | "footer" | "hero";

const sizeMap: Record<LogoSize, { text: string; tag: string }> = {
  nav: {
    text: "text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem]",
    tag: "text-[9px] sm:text-[10px]",
  },
  footer: {
    text: "text-[2rem] sm:text-[2.25rem]",
    tag: "text-[10px]",
  },
  hero: {
    text: "text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]",
    tag: "text-xs sm:text-sm",
  },
};

interface GirlBossLogoProps {
  size?: LogoSize;
  className?: string;
  showTagline?: boolean;
  animated?: boolean;
}

export default function GirlBossLogo({
  size = "nav",
  className = "",
  showTagline = true,
  animated = true,
}: GirlBossLogoProps) {
  const s = sizeMap[size];

  return (
    <motion.span
      className={`inline-flex flex-col items-start select-none ${className}`}
      whileHover={animated ? { opacity: 0.9 } : undefined}
      transition={{ duration: 0.2 }}
    >
      <span
        className={`girlboss-wordmark ${s.text}`}
        aria-label="GirlBoss"
      >
        <span className="girlboss-girl">Girl</span>
        <span className="girlboss-boss">Boss</span>
      </span>

      {showTagline && (
        <span
          className={`${s.tag} font-medium tracking-[0.32em] uppercase text-brand-black/40 mt-1.5 pl-0.5`}
        >
          {size === "hero"
            ? "Premium Women's Fashion"
            : "Women's Fashion"}
        </span>
      )}
    </motion.span>
  );
}
