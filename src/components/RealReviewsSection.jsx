"use client";
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function RealReviewsSection() {
  return (
    <section className="relative w-full bg-[#FEF0E7] py-16 px-4 overflow-hidden">
      {/* Top Wavy Decorative Image */}
      <div
        className="absolute left-[-31px] top-0 w-[1982px] h-[129px] bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: "url('/hero/bg1.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1675px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-12 mt-20">
        {/* Right: Textual Review Content */}
        <motion.div
          className="text-[#454545] max-w-[620px] w-full order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            variants={textVariants}
            custom={0}
            className="text-[20px] tracking-[4px] uppercase font-medium text-black mb-2"
          >
            REAL REVIEWS
          </motion.h3>

          <motion.h2
            variants={textVariants}
            custom={1}
            className="text-[30px] tracking-[4px] uppercase font-medium text-[#F6623E] mb-3"
          >
            REAL RESULTS
          </motion.h2>

          <motion.div variants={textVariants} custom={2} className="flex gap-1 mb-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-[#FFC107] rounded-sm" />
            ))}
            <div className="w-4 h-4 bg-[#D8D8D8] rounded-sm" />
          </motion.div>

          <motion.p
            variants={textVariants}
            custom={3}
            className="text-[26px] font-medium leading-[44px] tracking-[1px] mb-6"
          >
            “We have perfected our formulas over time, based on your feedback.
            Check out hundreds of reviews on our website. We can't wait until you
            are a part of our Good4Me Family.”
          </motion.p>

          <motion.p
            variants={textVariants}
            custom={4}
            className="text-[#F6623E] text-[16px] font-semibold tracking-[1px] mb-6"
          >
            _Chloe H.
          </motion.p>

          <motion.div variants={textVariants} custom={5} className="flex gap-4">
            <button
              className="w-11 h-11 bg-[#828181] hover:bg-[#666] transition-colors flex items-center justify-center"
              aria-label="Previous review"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M13 15l-5-5 5-5" stroke="white" strokeWidth="2" />
              </svg>
            </button>
            <button
              className="w-11 h-11 bg-[#F6623E] hover:bg-[#e24f2e] transition-colors flex items-center justify-center"
              aria-label="Next review"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M7 5l5 5-5 5" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Left: Product Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-[534px] aspect-square order-1 lg:order-2"
        >
          <img
            src="/RealReviews/1.png"
            alt="Product"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </motion.div>
      </div>

      {/* Bottom Wavy Decorative Image */}
      <div
        className="absolute left-[-31px] bottom-0 w-[1982px] h-[129px] bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: "url('/hero/bg1.png')",
          transform: "scaleY(-1)",
        }}
      />
    </section>
  );
}
