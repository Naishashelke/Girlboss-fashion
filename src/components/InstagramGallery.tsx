"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { instagramPosts } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function InstagramGallery() {
  return (
    <section
      className="py-20 lg:py-28 bg-brand-pink/40"
      aria-labelledby="instagram-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram size={18} className="text-brand-rose" />
            <p className="section-label !mb-0">@girlboss.fashion</p>
          </div>
          <h2
            id="instagram-heading"
            className="section-heading text-3xl sm:text-4xl lg:text-5xl"
          >
            Follow Our Style
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramPosts.map((src, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square rounded-xl overflow-hidden group block"
                whileHover={{ scale: 1.03 }}
                aria-label={`Instagram post ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`GirlBoss fashion lifestyle ${index + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors duration-300 flex items-center justify-center">
                  <Instagram
                    size={24}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
