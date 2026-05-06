"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="absolute inset-0 bg-stone-100 rounded-t-full shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
                  alt="Elegant interior design"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-100 rounded-full -z-10 blur-2xl opacity-50" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-stone-200 rounded-full -z-10 blur-2xl opacity-50" />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-10 -right-4 lg:-right-12 glass p-6 rounded-2xl max-w-[200px]"
            >
              <p className="text-4xl font-serif text-gold-500 mb-1">10+</p>
              <p className="text-sm text-stone-600 font-medium">Years of Crafting Elegance</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold-500" />
              <span className="uppercase tracking-widest text-sm font-semibold text-gold-600">About Our Studio</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight mb-8">
              Elevating Lifestyles Through <span className="italic font-light">Thoughtful Design</span>
            </h2>
            
            <div className="space-y-6 text-stone-600 font-light text-lg">
              <p>
                At S.N Interior Design, we believe that your space should be a true reflection of your personality and lifestyle. Based in the heart of Kolkata, we bring a fresh, modern, and highly personalized approach to luxury interior design.
              </p>
              <p>
                From sprawling residential villas to premium corporate offices, our client-focused methodology ensures that every project is meticulously crafted with the finest materials, innovative space planning, and an uncompromising eye for aesthetics.
              </p>
              <p>
                We don&apos;t just decorate rooms; we curate experiences that resonate with elegance and timeless sophistication.
              </p>
            </div>
            
            <div className="mt-10">
              <img src="/signature-placeholder.svg" alt="Signature" className="h-12 opacity-40 mb-2 invisible" />
              <p className="font-serif text-xl text-stone-900">S.N Design Team</p>
              <p className="text-sm text-stone-500">Lead Designers & Founders</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
