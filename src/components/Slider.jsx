"use client";
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};


const Slider = () => {
  return (
    <section className="relative w-full h-[641px] bg-[#efe2d2] overflow-hidden">
      {/* Background image */}
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        src="/hero/bg.png"
        alt="Slider Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Bottom overlay image */}
      <motion.img
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        src="/hero/bg2.png"
        alt="Bottom Overlay"
        className="absolute bottom-0 left-0 w-[1982px] h-[129px]  z-10"
      />

      {/* Text Content */}
      <motion.div
        className="absolute top-[154px] left-[60%] w-[529px] z-20 text-left"
        initial="hidden"
        animate="visible"
      >
        <motion.h4
          className="text-[#F6623E] text-[26px] font-semibold leading-[42px] font-['Jost'] mb-1"
          variants={textVariants}
          custom={0}
        >
          Good4Me
        </motion.h4>

        <motion.h1
          className="text-black text-[56px] leading-[72px] font-semibold font-['Jost']"
          variants={textVariants}
          custom={1}
        >
          Apple Cider Vinegar
        </motion.h1>

        <motion.p
          className="text-[#454545] text-[16px] leading-[29px] font-normal font-['Jost'] mt-4"
          variants={textVariants}
          custom={2}
        >
          Good4Me Apple Cider Vinegar gummies are the newest addition to your
          morning health and well-being regime.
        </motion.p>

        <motion.button
          className="mt-6 w-[140px] h-[47px] bg-[#F6623E] text-white text-[16px] font-medium uppercase font-['Jost'] transition hover:bg-[#d63b3b]"
          variants={textVariants}
          custom={3}
        >
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Slider;
