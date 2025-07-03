"use client";
import React from "react";
import { motion } from "framer-motion";

const newsData = [
  {
    image: "/News/1.png",
    date: "August 26, 2020",
    title: "WE DONATE ONE WEEKS SUPPLY",
    description:
      "We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....",
  },
  {
    image: "/News/2.png",
    date: "August 26, 2020",
    title: "WE DONATE ONE WEEKS SUPPLY",
    description:
      "We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....",
  },
  {
    image: "/News/3.png",
    date: "August 26, 2020",
    title: "WE DONATE ONE WEEKS SUPPLY",
    description:
      "We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const NewsSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="w-full bg-white py-20 px-4"
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          variants={cardVariants}
          className="text-center text-3xl font-medium text-black mb-12"
        >
          LATEST NEWS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={`News ${idx}`}
                className="w-full h-[293px] object-cover"
              />
              <div className="px-4 py-6 flex flex-col items-center text-center">
                <p className="text-xs text-[#F6623E] font-medium mb-2">{item.date}</p>
                <h3 className="text-lg font-medium text-black mb-4">{item.title}</h3>
                <p className="text-sm text-[#828181] mb-6 leading-6">
                  {item.description}
                </p>
                <button className="bg-[#F6623E] text-white px-6 py-2 uppercase text-sm font-medium hover:bg-[#e34a2d] transition">
                  Read more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default NewsSection;
