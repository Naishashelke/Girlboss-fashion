"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RippleButton from "@/components/ui/RippleButton";
import GirlBossLogo from "@/components/GirlBossLogo";

const floatingCards = [
  {
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&q=80",
    alt: "Crop top",
    className: "top-[15%] right-[6%] w-36 h-48 sm:w-44 sm:h-56",
    animation: "float",
    delay: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&q=80",
    alt: "Co-ord set",
    className: "top-[38%] right-[20%] w-28 h-36 sm:w-36 sm:h-44",
    animation: "float-delayed",
    delay: 0.2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&q=80",
    alt: "Biker tee",
    className: "bottom-[18%] right-[10%] w-32 h-40 sm:w-40 sm:h-48",
    animation: "float-slow",
    delay: 0.4,
  },
];

const marqueeItems = [
  "Gym Wear",
  "Crop Tops",
  "Baby Tees",
  "Co-ord Sets",
  "Bandana",
  "Biker Tees",
  "Free Shipping $100+",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-brand-beige"
      aria-label="Hero banner"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/60 via-white to-brand-beige" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-blush/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-rose/5 rounded-full blur-3xl" />

      {/* Subtle announcement bar */}
      <div className="relative z-10 mt-20 lg:mt-24 bg-brand-black text-white/90 py-2.5 overflow-hidden border-b border-brand-rose/20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mx-8 text-[11px] font-medium tracking-[0.2em] uppercase flex items-center gap-8"
            >
              {item}
              <span className="text-brand-rose">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 lg:hidden"
            >
              <GirlBossLogo size="hero" showTagline />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label mb-5"
            >
              Spring / Summer 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] mb-6"
            >
              Confidence Starts With{" "}
              <span className="italic text-brand-black/75">What You Wear.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-black/55 leading-relaxed mb-10 max-w-md"
            >
              Premium gym wear, crop tops, baby tees, co-ord sets, bandanas and
              biker tees — designed for women who lead with style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <RippleButton variant="primary">Shop Now</RippleButton>
              <RippleButton variant="outline">Explore Collection</RippleButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-10 mt-14 pt-8 border-t border-brand-black/8"
            >
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "6", label: "Collections" },
                { value: "4.9", label: "Average Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl sm:text-3xl text-brand-black">
                    {stat.value}
                  </p>
                  <p className="text-xs text-brand-black/45 mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative hidden lg:block h-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute -top-2 left-0 z-20"
            >
              <GirlBossLogo size="hero" showTagline />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 top-20 rounded-2xl overflow-hidden shadow-xl shadow-brand-black/8"
            >
              <Image
                src="https://images.unsplash.com/photo-1518310383802-640c2ed311cb?w=800&q=80"
                alt="GirlBoss fashion collection"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/25 to-transparent" />
            </motion.div>

            {floatingCards.map((card) => (
              <motion.div
                key={card.alt}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + card.delay }}
                className={`absolute ${card.className} rounded-xl overflow-hidden shadow-lg border border-white/80 ${
                  card.animation === "float"
                    ? "animate-float"
                    : card.animation === "float-delayed"
                      ? "animate-float-delayed"
                      : "animate-float-slow"
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
