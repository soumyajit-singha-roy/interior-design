"use client";

import { motion, Variants } from "framer-motion";
import { Home, Building2, ChefHat, Briefcase, Hammer, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Residential Interiors",
    description: "Transforming houses into luxurious homes tailored to your lifestyle and comfort.",
    icon: Home,
  },
  {
    title: "Commercial Interiors",
    description: "Creating inspiring commercial spaces that reflect your brand's premium identity.",
    icon: Building2,
  },
  {
    title: "Modular Kitchens",
    description: "Sleek, modern, and highly functional kitchens designed for the modern culinary enthusiast.",
    icon: ChefHat,
  },
  {
    title: "Office Design",
    description: "Ergonomic and elegant workspaces that boost productivity and impress clients.",
    icon: Briefcase,
  },
  {
    title: "Turnkey Projects",
    description: "End-to-end interior solutions from conceptualization to the final luxurious reveal.",
    icon: Hammer,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-gold-500" />
            <span className="uppercase tracking-widest text-sm font-semibold text-gold-600">Our Expertise</span>
            <div className="h-[1px] w-8 bg-gold-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-stone-900 mb-6"
          >
            Bespoke <span className="italic font-light">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-stone-600 font-light text-lg"
          >
            We offer a comprehensive range of interior design services, delivering unparalleled quality and sophistication in every project.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white p-8 md:p-10 rounded-2xl border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-14 h-14 bg-stone-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-gold-50 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-stone-700 group-hover:text-gold-600 transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-serif text-stone-900 mb-4">{service.title}</h3>
                <p className="text-stone-500 font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <Link href="#contact" className="inline-flex items-center text-sm font-semibold text-stone-900 uppercase tracking-wider group-hover:text-gold-600 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
