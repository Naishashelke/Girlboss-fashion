"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
}

export default function StarRating({ rating, size = 14 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
        >
          <Star
            size={size}
            className={
              i < Math.floor(rating)
                ? "fill-brand-rose text-brand-rose"
                : "fill-brand-beige text-brand-beige"
            }
            aria-hidden="true"
          />
        </motion.div>
      ))}
    </div>
  );
}
