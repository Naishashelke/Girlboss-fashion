"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import ScrollReveal, { staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="section-label mb-3">Loved By Thousands</p>
          <h2
            id="testimonials-heading"
            className="section-heading text-3xl sm:text-4xl lg:text-5xl"
          >
            Customer Reviews
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              variants={staggerItem}
              className="relative p-8 rounded-2xl bg-brand-beige/50 border border-brand-beige hover:border-brand-rose/30 transition-colors duration-500 group"
            >
              <Quote
                size={28}
                className="text-brand-rose/25 mb-6"
                strokeWidth={1}
                aria-hidden="true"
              />

              <p className="text-sm text-brand-black/70 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <StarRating rating={testimonial.rating} />

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-brand-black/5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-brand-rose/25">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-black">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-brand-black/40">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
