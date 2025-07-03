"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "WORLDWIDE SHIPPING",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    icon: "/icons/shipping.svg",
  },
  {
    title: "30 DAYS GUARANTEE",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    icon: "/icons/guarantee.svg",
  },
  {
    title: "SECURED PAYMENTS",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    icon: "/icons/payments.svg",
  },
];

// Animatsiya variantlari
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

const Services = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {services.map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="flex flex-col items-center text-center w-full md:w-[30%] p-6 space-y-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-[70px] h-[70px] bg-[#F6623E]/10 flex items-center justify-center rounded-full">
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
            </div>
            <h3 className="text-[24px] leading-[32px] font-medium text-black font-['Jost']">
              {item.title}
            </h3>
            <p className="text-[16px] leading-[20px] text-[#828181] font-['Jost']">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
