"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { newArrivals } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function NewArrivals() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="new-arrivals"
      className="py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="new-arrivals-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex items-end justify-between mb-10">
          <div>
            <p className="section-label mb-3">Just Arrived</p>
            <h2
              id="new-arrivals-heading"
              className="section-heading text-3xl sm:text-4xl lg:text-5xl"
            >
              New Arrivals
            </h2>
          </div>

          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border border-brand-black/20 flex items-center justify-center hover:bg-brand-black hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border border-brand-black/20 flex items-center justify-center hover:bg-brand-black hover:text-white transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </ScrollReveal>

        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory"
          role="region"
          aria-label="New arrivals carousel"
        >
          {newArrivals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-64 sm:w-72 snap-start group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors duration-300" />

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Add ${product.name} to cart`}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Plus size={18} />
                </motion.button>
              </div>

              <h3 className="text-sm font-medium text-brand-black">
                {product.name}
              </h3>
              <p className="font-display text-lg text-brand-black mt-1">
                ${product.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
