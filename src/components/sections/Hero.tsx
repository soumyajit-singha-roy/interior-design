"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-white/40 bg-gradient-to-t from-white/80 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 mt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 border border-stone-800/20 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 text-stone-800 bg-white/30 backdrop-blur-sm">
              Luxury Interior Design in Kolkata
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-medium text-stone-900 leading-[1.1] mb-6"
          >
            Designing Spaces That Reflect Your <span className="italic text-gold-600 font-light">Lifestyle</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-lg md:text-xl text-stone-700 mb-10 max-w-xl font-light"
          >
            We specialize in crafting elegant, modern, and high-end residential and commercial spaces with unparalleled attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#projects"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-stone-900 text-white uppercase tracking-widest text-sm hover:bg-gold-500 transition-all duration-300 shadow-xl hover:shadow-gold-500/20"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-md text-stone-900 uppercase tracking-widest text-sm border border-stone-200 hover:bg-white hover:border-gold-500 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
