"use client";
import React from "react";
import { motion } from "framer-motion";

import img1 from "/Shop/1.png";
import img2 from "/Shop/2.png";
import img3 from "/Shop/3.png";
import img4 from "/Shop/4.png";

const products = [
  {
    img: img1,
    badge: "PRE‑ORDER",
    title: "Hair, Skin & Nails (5 Month Supply)",
    price: "NZ$39.95",
    oldPrice: "NZ$199.75",
  },
  {
    img: img2,
    badge: "ON SALE",
    title: "Detox + Bloat Support Value Pack",
    price: "NZ$39.95",
    oldPrice: "NZ$199.75",
  },
  {
    img: img3,
    badge: "ON SALE",
    title: "Probiotics: Gut Health + Bloat Support",
    price: "NZ$39.95",
    oldPrice: "NZ$199.75",
  },
  {
    img: img4,
    badge: "ON SALE",
    title: "Apple Cider Vinegar",
    price: "NZ$94.95",
    oldPrice: "NZ$199.75",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

const ShopAll = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl md:text-4xl font-medium text-center mb-8">
        SHOP ALL
      </h2>

      <div className="max-w-[1675px] mx-auto flex flex-wrap gap-y-16 justify-center md:justify-between">
        {products.map((p, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="w-full sm:w-[48%] md:w-[24%] flex flex-col items-center transition-transform duration-300"
          >
            <div className="w-full bg-[#F4F3F4] border border-[#E8E8E8] relative">
              <img src={p.img} alt={p.title} className="w-full h-auto object-cover" />
              <span className="absolute top-2 left-2 bg-[#F6623E] text-white text-xs uppercase px-2 py-1">
                {p.badge}
              </span>
            </div>
            <h3 className="mt-4 text-sm font-medium text-center uppercase tracking-widest">
              {p.title}
            </h3>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm text-[#F6623E]">{p.price}</span>
              <span className="text-sm line-through text-[#828181]">{p.oldPrice}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="border-2 border-[#F6623E] text-black px-6 py-3 font-medium uppercase transition-all"
        >
          View All Products
        </motion.button>
      </div>
    </section>
  );
};

export default ShopAll;
