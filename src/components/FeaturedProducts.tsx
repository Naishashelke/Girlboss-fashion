"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { featuredProducts } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StarRating from "@/components/ui/StarRating";

export default function FeaturedProducts() {
  const [wishlisted, setWishlisted] = useState<Set<number>>(new Set());

  const toggleWishlist = (id: number) => {
    setWishlisted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section
      id="best-sellers"
      className="py-20 lg:py-28 bg-brand-beige"
      aria-labelledby="featured-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <p className="section-label mb-3">Curated For You</p>
            <h2
              id="featured-heading"
              className="section-heading text-3xl sm:text-4xl lg:text-5xl"
            >
              Featured Collection
            </h2>
          </div>
          <a
            href="#shop"
            className="text-sm font-medium tracking-widest uppercase text-brand-black/55 hover:text-brand-rose transition-colors border-b border-brand-black/15 hover:border-brand-rose pb-0.5"
          >
            View All
          </a>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featuredProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.08}>
              <motion.article
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-brand-black text-white text-[10px] font-medium tracking-widest uppercase">
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={
                      wishlisted.has(product.id)
                        ? `Remove ${product.name} from wishlist`
                        : `Add ${product.name} to wishlist`
                    }
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white"
                  >
                    <Heart
                      size={16}
                      className={
                        wishlisted.has(product.id)
                          ? "fill-brand-rose text-brand-rose"
                          : "text-brand-black/60"
                      }
                    />
                  </button>

                  {/* Hover Actions */}
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-0 left-0 right-0 p-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <button
                        aria-label={`Quick view ${product.name}`}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white/90 backdrop-blur-sm text-xs font-medium tracking-wider uppercase text-brand-black hover:bg-white transition-colors"
                      >
                        <Eye size={14} />
                        Quick View
                      </button>
                      <button
                        aria-label={`Add ${product.name} to cart`}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-brand-black text-xs font-medium tracking-wider uppercase text-white hover:bg-brand-black/90 transition-colors"
                      >
                        <ShoppingBag size={14} />
                        Add to Cart
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-brand-black truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="font-display text-lg text-brand-black">
                      ${product.price}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <StarRating rating={product.rating} size={12} />
                      <span className="text-[10px] text-brand-black/40">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
