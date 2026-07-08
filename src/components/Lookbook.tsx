"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { lookbookImages } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

const imageHeights: Record<string, number> = {
  tall: 560,
  medium: 380,
  short: 280,
};

export default function Lookbook() {
  return (
    <section
      id="shop"
      className="py-20 lg:py-28 bg-brand-beige"
      aria-labelledby="lookbook-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="section-label mb-3 text-brand-rose">Editorial</p>
          <h2
            id="lookbook-heading"
            className="section-heading text-3xl sm:text-4xl lg:text-5xl"
          >
            Fashion Lookbook
          </h2>
          <p className="text-brand-black/50 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Curated looks that define the season. Pin-worthy style inspiration
            for the modern woman.
          </p>
        </ScrollReveal>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {lookbookImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 0.06}>
              <motion.div
                className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={imageHeights[image.span] ?? 380}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2">
                    <p className="text-white text-xs font-medium tracking-widest uppercase">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
