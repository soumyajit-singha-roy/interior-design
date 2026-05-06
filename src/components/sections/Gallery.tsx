"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1598928506311-c55dd5802427?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
];

export default function Gallery() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold-500" />
              <span className="uppercase tracking-widest text-sm font-semibold text-gold-600">Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
              Design <span className="italic font-light">Inspirations</span>
            </h2>
          </div>
          <p className="text-stone-500 font-light max-w-md">
            Explore our curated gallery of exquisite interior details, luxurious textures, and perfectly balanced spaces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
