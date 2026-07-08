"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-brand-black relative overflow-hidden"
      aria-labelledby="newsletter-heading"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-rose/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-pink/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="section-label mb-3 text-brand-rose">Stay Connected</p>
          <h2
            id="newsletter-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4"
          >
            Join Our Fashion Community
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            Be the first to know about new drops, exclusive offers, and style
            inspiration delivered to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            aria-label="Newsletter subscription"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-none text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand-rose transition-colors"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-brand-rose text-white text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-brand-rose-dark transition-colors"
            >
              {submitted ? (
                <>
                  <Check size={16} />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <Send size={14} />
                </>
              )}
            </motion.button>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-brand-rose text-sm mt-4"
                role="status"
              >
                Welcome to the GirlBoss family! Check your inbox for a special surprise.
              </motion.p>
            )}
          </AnimatePresence>

          <p className="text-white/30 text-xs mt-6">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
