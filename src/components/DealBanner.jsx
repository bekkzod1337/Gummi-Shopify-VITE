"use client";
import React from "react";
import { motion } from "framer-motion";

const DealBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="w-full flex justify-center items-center mt-10 px-4"
    >
      <div className="text-center max-w-[759px]">
        <h2 className="text-[36px] leading-[32px] font-medium text-black font-['Jost']">
          GOOD4ME DEAL
        </h2>

        <motion.div
          className="w-[127px] h-[4px] bg-[#F6623E] mx-auto mt-2 mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ transformOrigin: "left" }}
        />

        <motion.p
          className="text-[18px] leading-[24px] text-[#454545] font-medium font-['Jost']"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Pick your beauty products today. 50% OFF on the most popular GOOD4ME.
          Order all classy products today!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default DealBanner;
