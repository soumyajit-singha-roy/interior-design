"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const categories = ["All", "Living Room", "Bedroom", "Office", "Kitchen"];

const projects = [
  {
    id: 1,
    title: "The Golden Estate",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Serene Minimalist",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Executive Suite",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Culinary Heaven",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Modern Loft",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Boutique Workspace",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold-500" />
              <span className="uppercase tracking-widest text-sm font-semibold text-gold-600">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
              Featured <span className="italic font-light">Projects</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  "px-6 py-2 rounded-full text-sm transition-all duration-300",
                  activeCategory === category
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.span 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-gold-400 text-sm tracking-widest uppercase mb-2 block"
                  >
                    {project.category}
                  </motion.span>
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-white text-2xl font-serif"
                  >
                    {project.title}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
