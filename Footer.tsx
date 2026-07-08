"use client";

import { Instagram, Facebook } from "lucide-react";
import GirlBossLogo from "@/components/GirlBossLogo";

const footerLinks = {
  about: [
    { label: "Our Story", href: "#about" },
    { label: "Sustainability", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  shop: [
    { label: "New Arrivals", href: "#new-arrivals" },
    { label: "Best Sellers", href: "#best-sellers" },
    { label: "Collections", href: "#collections" },
    { label: "Sale", href: "#" },
  ],
  care: [
    { label: "Contact Us", href: "#contact" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Size Guide", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function PinterestIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 4.095-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.247 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-beige border-t border-brand-black/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <div className="mb-4">
                <GirlBossLogo size="footer" variant="stacked" showTagline={false} framed />
            </div>
            <p className="text-sm text-brand-black/50 leading-relaxed max-w-xs font-medium">
              Gym wear, crop tops, baby tees, co-ords, bandanas & biker tees
              for girls who don&apos;t do basic.
            </p>

            <div className="flex gap-4 mt-6">
              {[
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { icon: TikTokIcon, label: "TikTok", href: "https://tiktok.com" },
                { icon: PinterestIcon, label: "Pinterest", href: "https://pinterest.com" },
                { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-brand-black/10 flex items-center justify-center text-brand-black/50 hover:text-brand-black hover:border-brand-black/30 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[
            { title: "About", links: footerLinks.about },
            { title: "Shop", links: footerLinks.shop },
            { title: "Customer Care", links: footerLinks.care },
            { title: "Legal", links: footerLinks.legal },
          ].map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-brand-black mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-black/50 hover:text-brand-black transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-brand-black/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-black/40">
            &copy; {new Date().getFullYear()} GirlBoss. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Visa", "Mastercard", "Amex", "PayPal"].map((method) => (
              <span
                key={method}
                className="text-[10px] font-medium tracking-wider uppercase text-brand-black/30"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
