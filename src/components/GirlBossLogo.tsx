"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type LogoSize = "nav" | "footer" | "hero";
type LogoVariant = "overlay" | "stacked";

const bossSize: Record<LogoSize, string> = {
  nav: "text-[3rem] sm:text-[3.35rem] lg:text-[4rem]",
  footer: "text-[3rem] sm:text-[3.5rem]",
  hero: "text-[5.5rem] sm:text-[7rem] lg:text-[8.5rem]",
};

const girlSize: Record<LogoSize, string> = {
  nav: "text-[1.65rem] sm:text-[1.85rem] lg:text-[2.2rem]",
  footer: "text-[1.75rem] sm:text-[2rem]",
  hero: "text-[3rem] sm:text-[4rem] lg:text-[4.75rem]",
};

const stackedGirlSize: Record<LogoSize, string> = {
  nav: "text-[1.25rem] sm:text-[1.4rem]",
  footer: "text-[1.4rem] sm:text-[1.6rem]",
  hero: "text-[2.25rem] sm:text-[3rem]",
};

const stackedBossSize: Record<LogoSize, string> = {
  nav: "text-[2.5rem] sm:text-[2.85rem] lg:text-[3.25rem]",
  footer: "text-[2.75rem] sm:text-[3.1rem]",
  hero: "text-[4.5rem] sm:text-[6rem] lg:text-[7rem]",
};

interface GirlBossLogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
  className?: string;
  showTagline?: boolean;
  animated?: boolean;
  onDark?: boolean;
  framed?: boolean;
}

export default function GirlBossLogo({
  size = "nav",
  variant = "overlay",
  className = "",
  showTagline = true,
  animated = true,
  onDark = false,
  framed = false,
}: GirlBossLogoProps) {
  const motionProps: ComponentProps<typeof motion.span> = animated
    ? { whileHover: { scale: 1.03 }, transition: { duration: 0.2 } }
    : {};

  if (variant === "stacked") {
    return (
      <motion.span
        className={`inline-flex flex-col items-center select-none ${className}`}
        {...motionProps}
      >
        <span
          className={`girlboss-logo-stacked text-center ${
            framed ? "girlboss-frame px-6 py-4" : ""
          } ${onDark || framed ? "girlboss-frame-dark" : ""}`}
          aria-label="GirlBoss"
        >
          <span className={`girlboss-stacked-girl block ${stackedGirlSize[size]}`}>
            Girl
          </span>
          <span
            className={`girlboss-stacked-boss block leading-[0.82] ${stackedBossSize[size]} ${
              onDark || framed ? "text-white" : ""
            }`}
          >
            B<span className="girlboss-o-accent">O</span>SS
          </span>
        </span>
        {showTagline && (
          <span
            className={`mt-2.5 text-[9px] sm:text-[10px] font-semibold tracking-[0.4em] uppercase ${
              onDark || framed ? "text-white/50" : "text-brand-black/45"
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
      <span
        className={`girlboss-logo-overlay relative inline-flex items-center justify-center ${
          framed ? "girlboss-frame px-5 py-3" : "px-1"
        } ${framed ? "girlboss-frame-dark" : ""}`}
      >
        <span
          className={`girlboss-boss-bg ${bossSize[size]} ${
            onDark || framed ? "girlboss-boss-on-dark" : ""
          }`}
          aria-hidden="true"
        >
          BOSS
        </span>
        <span className={`girlboss-girl-overlay absolute ${girlSize[size]}`}>
          <span className="girlboss-accent-line girlboss-accent-line-left" aria-hidden="true" />
          <span className="girlboss-girl-script">Girl</span>
          <span className="girlboss-accent-line girlboss-accent-line-right" aria-hidden="true" />
        </span>
        <span className="sr-only">GirlBoss</span>
      </span>

      {showTagline && (
        <span
          className={`mt-2 text-[9px] sm:text-[10px] font-semibold tracking-[0.4em] uppercase pl-1 ${
            onDark ? "text-white/50" : "text-brand-black/45"
          }`}
        >
          {size === "hero" ? "Premium Women's Fashion" : "Women's Fashion"}
        </span>
      )}
    </motion.span>
  );
}
