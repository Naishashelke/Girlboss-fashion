"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, MouseEvent } from "react";

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}

const variants = {
  primary:
    "bg-brand-black text-white hover:bg-brand-black/90 border border-brand-black",
  secondary:
    "bg-brand-rose text-white hover:bg-brand-rose-dark border border-brand-rose",
  outline:
    "bg-transparent text-brand-black border border-brand-black hover:bg-brand-black hover:text-white",
  ghost:
    "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm",
};

export default function RippleButton({
  children,
  className = "",
  variant = "primary",
  onClick,
  type = "button",
  ariaLabel,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
    onClick?.();
  };

  return (
    <motion.button
      type={type}
      aria-label={ariaLabel}
      className={`relative overflow-hidden px-8 py-3.5 text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${variants[variant]} ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ping pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
