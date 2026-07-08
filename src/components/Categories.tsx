"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/data";
import ScrollReveal, { staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";

export default function Categories() {
  return (
    <section
      id="collections"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="section-label mb-3">Shop by Category</p>
          <h2
            id="categories-heading"
            className="section-heading text-3xl sm:text-4xl lg:text-5xl"
          >
            Our Collections
          </h2>
          <p className="text-brand-black/50 mt-4 text-sm leading-relaxed max-w-lg mx-auto">
            Gym wear · Crop tops · Baby tees · Co-ord sets · Bandanas · Biker tees
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {categories.map((category) => (
            <motion.a
              key={category.id}
              href={`#${category.id}`}
              variants={staggerItem}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500"
              aria-label={`Browse ${category.name}`}
              whileHover={{ y: -4 }}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              <div className="absolute top-3 left-3 category-badge">
                {category.tag}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/75 via-brand-black/15 to-transparent group-hover:from-brand-black/85 transition-all duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-white font-medium text-base sm:text-lg tracking-wide">
                      {category.name}
                    </h3>
                    <p className="text-white/55 text-xs mt-1 tracking-wider">
                      {category.count} styles
                    </p>
                  </div>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ArrowUpRight size={15} className="text-white" />
                  </motion.div>
                </div>
              </div>

              <div className="absolute inset-0 border border-transparent group-hover:border-brand-rose/40 rounded-2xl transition-colors duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
