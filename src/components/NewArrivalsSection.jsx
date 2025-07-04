"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function NewArrivalsSection() {
  return (
    <motion.section
      initial="hidden"
whileInView="visible"
viewport={{ once: true }}

      variants={containerVariants}
      className="w-full bg-[#FFFFFF] py-16 px-4 text-black"
    >
      <div className="max-w-[1675px] mx-auto">
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-medium text-center mb-10"
        >
          OUR PRODUCTS ARE
        </motion.h2>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative border border-[#E8E8E8] bg-white p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`/NewArrivalsSection/${i}.png`}
                alt="Product"
                className="mx-auto w-[286px] h-[319px] object-contain"
              />
              <p className="text-center mt-4 text-[14px] font-medium tracking-widest">
                {i === 1
                  ? "**PRE-ORDER** HAIR, SKIN & NAILS (5 MONTH SUPPLY)"
                  : i === 2
                  ? "DETOX + BLOAT SUPPORT VALUE PACK"
                  : i === 3
                  ? "MULTI-VITAMIN (3 MONTH SUPPLY)"
                  : "APPLE CIDER VINEGAR (3 MONTH SUPPLY)"}
              </p>
              <div className="flex justify-center items-center gap-2 mt-2">
                <span className="text-[#F6623E] font-normal text-[14px]">
                  {i === 4 ? "$94.95 NZD" : "$39.95 NZD"}
                </span>
                <span className="text-[#828181] text-[14px] line-through">
                  $199.75 NZD
                </span>
              </div>
              <div className="absolute top-2 left-2 bg-[#F6623E] px-2 py-1 text-white text-xs font-normal tracking-wide">
                ON SALE
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div variants={fadeUp} className="mt-12 flex justify-center">
          <button className="border-2 border-[#F6623E] px-6 py-3 text-[16px] font-medium uppercase hover:bg-[#f6623e1a] transition">
            View All Products
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
