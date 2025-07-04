"use client";
import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "MULTI-VITAMIN: EVERYDAY WELLNESS",
    img: "/collections/1.png",
  },
  {
    title: "FULL RANGE VALUE PACK (SAVE 33%)",
    img: "/collections/2.png",
  },
  {
    title: "VITAMIN C: IMMUNITY SUPPORT",
    img: "/collections/3.png",
  },
  {
    title: "IRON: ENERGY SUPPORT",
    img: "/collections/4.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SpecialCollections = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-[1680px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.title} // i emas, title ni key qilib ber
            custom={i} // i ni custom sifatida uzatamiz
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="border border-[#E8E8E8] bg-[#F4F3F4] p-4 flex flex-col items-center justify-between h-[456px] transition-all"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-[408px] object-contain"
            />
            <p className="mt-4 text-[18px] leading-[24px] text-center text-black font-medium font-['Jost']">
              {product.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialCollections;
