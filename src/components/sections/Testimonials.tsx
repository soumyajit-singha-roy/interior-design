"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "S.N Interior Design completely transformed our villa. Their attention to detail, use of premium materials, and understanding of our lifestyle resulted in a home that exceeds our wildest dreams.",
    author: "Anjali & Vikram Sharma",
    role: "Homeowners, Alipore",
  },
  {
    id: 2,
    text: "Working with the S.N team for our corporate office was a seamless experience. They delivered an elegant, functional workspace that perfectly aligns with our brand identity. Highly recommended.",
    author: "Rajesh Singhania",
    role: "CEO, TechNova Solutions",
  },
  {
    id: 3,
    text: "From concept to execution, the level of professionalism was outstanding. The modular kitchen they designed for us is not only a visual masterpiece but incredibly practical for daily use.",
    author: "Priya Desai",
    role: "Resident, Salt Lake",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative large quote mark */}
      <div className="absolute top-20 left-10 md:left-20 opacity-5 pointer-events-none">
        <Quote className="w-64 h-64 text-stone-900" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-gold-500" />
            <span className="uppercase tracking-widest text-sm font-semibold text-gold-600">Client Voices</span>
            <div className="h-[1px] w-8 bg-gold-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-stone-900"
          >
            Words of <span className="italic font-light">Appreciation</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-4 md:px-0">
          <motion.div 
            className="bg-stone-50 rounded-3xl p-8 md:p-16 shadow-sm border border-stone-100 relative min-h-[400px] md:min-h-[350px] flex items-center justify-center cursor-grab active:cursor-grabbing"
            whileTap={{ cursor: "grabbing" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -50) nextTestimonial();
                  else if (swipe > 50) prevTestimonial();
                }}
                className="text-center w-full"
              >
                <Quote className="w-10 h-10 text-gold-500 mx-auto mb-6 md:mb-8 opacity-50" />
                <p className="text-lg md:text-2xl text-stone-700 font-light leading-relaxed mb-8 md:text-stone-700">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="font-serif text-xl text-stone-900">{testimonials[currentIndex].author}</h4>
                  <p className="text-xs md:text-sm text-stone-500 uppercase tracking-widest mt-1">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons - Hidden on mobile, use drag instead */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg border border-stone-100 flex items-center justify-center text-stone-600 hover:text-gold-500 hover:border-gold-500 transition-colors focus:outline-none"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-6">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg border border-stone-100 flex items-center justify-center text-stone-600 hover:text-gold-500 hover:border-gold-500 transition-colors focus:outline-none"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-gold-500" : "bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
