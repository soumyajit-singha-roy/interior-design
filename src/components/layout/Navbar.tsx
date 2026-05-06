"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-wider text-stone-900">
          S.N<span className="text-gold-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-gold-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-stone-900 text-white text-sm uppercase tracking-widest hover:bg-gold-500 transition-colors rounded-none"
          >
            Consultation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stone-900"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <Link href="/" className="text-2xl font-serif font-bold tracking-wider text-stone-900">
                S.N<span className="text-gold-500">.</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-stone-900">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8 items-center justify-center flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-serif text-stone-800 hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-8 px-10 py-4 bg-stone-900 text-white text-sm uppercase tracking-widest hover:bg-gold-500 transition-colors inline-block"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
