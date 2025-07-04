"use client";
import React from "react";
import { motion } from "framer-motion";

// Variantlar
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.4 + i * 0.2, duration: 0.6 },
  }),
};


const HealthSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative w-full bg-[#FFF8F6] py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <motion.div variants={itemVariants} className="max-w-xl z-20">
          <h2 className="text-[36px] lg:text-[50px] leading-tight tracking-wider font-semibold text-black font-['Jost'] mb-6">
            TAKE CONTROL OF YOUR HEALTH
          </h2>
          <p className="text-[#454545] text-[16px] leading-[25px] font-medium font-['Jost'] mb-2">
            The Good4Me range has been formulated based on scientific & traditional evidence.
          </p>
          <p className="text-[#454545] text-[16px] leading-[25px] font-medium font-['Jost'] mb-2">
            Our vitamins are here and ready to boost your mood, immunity and overall well-being!
          </p>
          <p className="text-[#454545] text-[16px] leading-[25px] font-medium font-['Jost'] mb-6">
            Made in New Zealand from local and imported ingredients.
          </p>
          <button className="w-[248px] h-[56px] border-2 border-[#F6623E] text-black text-[16px] font-medium font-['Jost'] hover:bg-[#f6623e1a] transition">
            BROWSE OUR RANGE
          </button>
        </motion.div>

        {/* Image Content */}
        <motion.div className="relative flex flex-col gap-4 z-10">
          {[1, 2].map((n, i) => (
            <motion.img
              key={i}
              custom={i}
              variants={imageVariants}
              src={`/health/${n}.png`}
              alt={`Health ${n}`}
              className="w-[320px] h-[250px] object-cover rounded-md shadow-md"
            />
          ))}
        </motion.div>
      </div>

      {/* Background Right Image */}
      <img
        src="/health/3.png"
        alt="Health Background"
        className="hidden lg:block absolute right-0 top-0 h-full w-[480px] object-cover z-0"
      />
    </motion.section>
  );
};

export default HealthSection;
