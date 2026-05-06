"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Premium, uncompromising design quality",
  "Strict adherence to timelines & delivery",
  "Highly customized, client-centric solutions",
  "Experienced team of architects & designers",
  "Transparent pricing with no hidden costs",
  "End-to-end turnkey execution",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gold-500 rounded-full blur-[120px] absolute -top-40 -right-40" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-8 bg-gold-500" />
              <span className="uppercase tracking-widest text-sm font-semibold text-gold-400">The S.N Advantage</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif mb-8"
            >
              Why Partner With <span className="italic font-light text-gold-400">Us?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-stone-400 font-light text-lg mb-10"
            >
              We don&apos;t just design spaces; we curate lifestyles. Our commitment to excellence, transparency, and innovation makes us the preferred choice for luxury interiors.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0" />
                  <span className="text-stone-300">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Luxury details"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
