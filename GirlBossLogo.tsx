"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type LogoSize = "nav" | "footer" | "hero";
type LogoVariant = "overlay" | "stacked";

const bossSize: Record<LogoSize, string> = {
  nav: "text-[2.4rem] sm:text-[2.75rem] lg:text-[3.25rem]",
  footer: "text-[2.5rem] sm:text-[3rem]",
  hero: "text-[4.5rem] sm:text-[6rem] lg:text-[7.5rem]",
};

const girlSize: Record<LogoSize, string> = {
  nav: "text-[1.35rem] sm:text-[1.55rem] lg:text-[1.85rem]",
  footer: "text-[1.5rem] sm:text-[1.75rem]",
  hero: "text-[2.5rem] sm:text-[3.5rem] lg:text-[4.25rem]",
};

const stackedGirlSize: Record<LogoSize, string> = {
  nav: "text-[1.1rem] sm:text-[1.25rem]",
  footer: "text-[1.25rem] sm:text-[1.4rem]",
  hero: "text-[2rem] sm:text-[2.75rem]",
};

const stackedBossSize: Record<LogoSize, string> = {
  nav: "text-[2rem] sm:text-[2.35rem] lg:text-[2.75rem]",
  footer: "text-[2.25rem] sm:text-[2.6rem]",
  hero: "text-[4rem] sm:text-[5.5rem] lg:text-[6.5rem]",
};

interface GirlBossLogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
  className?: string;
  showTagline?: boolean;
  animated?: boolean;
  onDark?: boolean;
}

export default function GirlBossLogo({
  size = "nav",
  variant = "overlay",
  className = "",
  showTagline = true,
  animated = true,
  onDark = false,
}: GirlBossLogoProps) {
  const motionProps: ComponentProps<typeof motion.span> = animated
    ? { whileHover: { scale: 1.02 }, transition: { duration: 0.2 } }
    : {};

  if (variant === "stacked") {
    return (
      <motion.span
        className={`inline-flex flex-col items-center select-none ${className}`}
        {...motionProps}
      >
        <span className="girlboss-logo-stacked text-center" aria-label="GirlBoss">
          <span className={`girlboss-stacked-girl block ${stackedGirlSize[size]}`}>
            Girl
          </span>
          <span
            className={`girlboss-stacked-boss block leading-[0.85] ${stackedBossSize[size]} ${
              onDark ? "text-white" : ""
            }`}
          >
            B<span className="girlboss-o-accent">O</span>SS
          </span>
        </span>
        {showTagline && (
          <span
            className={`mt-2 text-[9px] sm:text-[10px] font-medium tracking-[0.35em] uppercase ${
              onDark ? "text-white/45" : "text-brand-black/40"
            }`}
          >
            Premium Women&apos;s Fashion
          </span>
        )}
      </motion.span>
    );
  }

  return (
    <motion.span
      className={`inline-flex flex-col items-start select-none ${className}`}
      {...motionProps}
    >
      <span className="girlboss-logo-overlay relative inline-flex items-center justify-center px-1">
        <span
          className={`girlboss-boss-bg ${bossSize[size]} ${onDark ? "!text-white" : ""}`}
          aria-hidden="true"
        >
          BOSS
        </span>
        <span className={`girlboss-girl-overlay absolute ${girlSize[size]}`}>
          <span className="girlboss-accent-line" aria-hidden="true" />
          <span className="girlboss-girl-script">Girl</span>
          <span className="girlboss-accent-line" aria-hidden="true" />
        </span>
        <span className="sr-only">GirlBoss</span>
      </span>

      {showTagline && (
        <span
          className={`mt-1.5 text-[9px] sm:text-[10px] font-medium tracking-[0.35em] uppercase pl-1 ${
            onDark ? "text-white/45" : "text-brand-black/40"
          }`}
        >
          {size === "hero" ? "Premium Women's Fashion" : "Women's Fashion"}
        </span>
      )}
    </motion.span>
  );
}
