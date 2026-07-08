"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
} from "lucide-react";
import { navLinks } from "@/lib/data";
import GirlBossLogo from "@/components/GirlBossLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-brand-black/10"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-24 lg:h-28">
            <a href="#home" aria-label="GirlBoss — Home" className="shrink-0">
              <GirlBossLogo size="nav" framed />
            </a>

            <ul className="hidden xl:flex items-center gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-medium tracking-widest uppercase text-brand-black/60 hover:text-brand-rose transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-rose transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 sm:gap-3">
              {[
                { icon: Search, label: "Search" },
                { icon: Heart, label: "Wishlist" },
                { icon: ShoppingBag, label: "Shopping cart" },
                { icon: User, label: "User profile" },
              ].map(({ icon: Icon, label }) => (
                <motion.button
                  key={label}
                  aria-label={label}
                  className="p-2 text-brand-black/60 hover:text-brand-rose transition-colors"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </motion.button>
              ))}

              <button
                className="xl:hidden p-2 text-brand-black"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-black/50 backdrop-blur-sm xl:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 pt-28">
                <GirlBossLogo size="footer" variant="overlay" framed className="mb-10" />
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3.5 text-sm font-medium tracking-widest uppercase text-brand-black/70 hover:text-brand-rose border-b border-brand-beige transition-colors"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
