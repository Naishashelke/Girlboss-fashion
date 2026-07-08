"use client";

import { motion } from "framer-motion";
import { Gem, Globe, RefreshCw, Shield } from "lucide-react";
import { features } from "@/lib/data";
import ScrollReveal, { staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";

const iconMap = {
  gem: Gem,
  globe: Globe,
  refresh: RefreshCw,
  shield: Shield,
};

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-brand-black text-white"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="section-label mb-3">The GirlBoss Difference</p>
          <h2
            id="why-heading"
            className="section-heading text-3xl sm:text-4xl lg:text-5xl text-white"
          >
            Why Choose Us
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-rose/30 transition-all duration-500"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-brand-rose/10 flex items-center justify-center mb-6 group-hover:bg-brand-rose/20 transition-colors duration-500"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <Icon size={22} className="text-brand-rose" strokeWidth={1.5} />
                </motion.div>

                <h3 className="font-display text-xl mb-3">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-rose/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
