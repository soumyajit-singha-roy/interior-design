"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-gold-500" />
                <span className="uppercase tracking-widest text-sm font-semibold text-gold-600">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
                Let's Discuss Your <span className="italic font-light">Vision</span>
              </h2>
              <p className="text-stone-500 font-light mb-12">
                Whether you're looking to redesign your living room or build a commercial space from scratch, our team is ready to bring your vision to life.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center group-hover:bg-gold-50 transition-colors shrink-0">
                    <MapPin className="w-5 h-5 text-stone-700 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-stone-900 mb-1">Our Studio</h4>
                    <p className="text-stone-500 font-light">65/8, East Topsia, Topsia<br/>Kolkata, West Bengal 700046</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center group-hover:bg-gold-50 transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-stone-700 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-stone-900 mb-1">Call Us</h4>
                    <p className="text-stone-500 font-light">091233 66730</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center group-hover:bg-gold-50 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-stone-700 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-stone-900 mb-1">Website</h4>
                    <p className="text-stone-500 font-light">sninte.blogspot.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-stone-50 p-8 md:p-12 rounded-3xl border border-stone-100 shadow-sm"
            >
              <h3 className="font-serif text-2xl text-stone-900 mb-8">Book a Free Consultation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-widest text-stone-500 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white border border-stone-200 rounded-none px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors font-light"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm uppercase tracking-widest text-stone-500 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-white border border-stone-200 rounded-none px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors font-light"
                      placeholder="+91 91233 66730"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white border border-stone-200 rounded-none px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors font-light"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm uppercase tracking-widest text-stone-500 mb-2">Interested Service</label>
                  <select
                    id="service"
                    className="w-full bg-white border border-stone-200 rounded-none px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors font-light text-stone-700"
                  >
                    <option>Residential Interior</option>
                    <option>Commercial Interior</option>
                    <option>Modular Kitchen</option>
                    <option>Office Design</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest text-stone-500 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-white border border-stone-200 rounded-none px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors font-light resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-900 text-white uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-gold-500 transition-colors duration-300"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 h-96 bg-stone-200 rounded-3xl overflow-hidden relative shadow-inner"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.023997267194!2d88.3882283!3d22.5407738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276bebcfe6e8d%3A0x97c89f557e3f5034!2sS.N%20interior%20Design!5e0!3m2!1sen!2sin!4v1778068313881!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
