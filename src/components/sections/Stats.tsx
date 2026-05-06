"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 120, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Design Awards", value: 15, suffix: "" },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMilSecDur = duration * 1000;
      const incrementTime = (totalMilSecDur / end) * 2;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 bg-stone-100 border-y border-stone-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-serif text-stone-900 mb-2">
                <Counter value={stat.value} />
                <span className="text-gold-500">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base text-stone-500 uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
