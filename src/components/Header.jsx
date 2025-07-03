"use client";
import React from "react";
import { motion } from "framer-motion";

// Rasmlar uchun to‘g‘ridan-to‘g‘ri public dan src bilan foydalaniladi
// Agar import qilish kerak bo‘lsa faqat `next/image` bilan ishlaydi
// Shuning uchun to‘g‘ridan-to‘g‘ri path yozamiz:
const Header = () => {
  const navItems = ["Home", "Shop", "FAQ's", "Stockists", "Wholesale", "Contact"];

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full z-50"
    >
      {/* Top banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-[#F6623E] w-full py-2 px-4 text-white text-sm flex justify-between items-center"
      >
        <span className="ml-4">
          Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*
        </span>

        <div className="flex items-center space-x-4 mr-4 text-sm">
          <span className="cursor-pointer">USD</span>
          <span className="opacity-50">|</span>
          <span className="cursor-pointer">Sign In / Register</span>
        </div>
      </motion.div>

      {/* Main header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-white w-full py-6 px-4 flex justify-between items-center shadow-sm"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center space-x-2"
        >
          <img src="/logo.svg" alt="Good4Me Logo" className="w-[140px] h-auto object-contain" />
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="hidden md:flex space-x-8 text-[#F6623E] font-medium text-sm"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/[^a-z]/g, "")}`}
              className="hover:underline"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="flex items-center space-x-6"
        >
          <img src="/icons/search.svg" alt="Search" className="w-5 h-5" />
          <div className="relative">
            <img src="/icons/cart.svg" alt="Cart" className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[#F6623E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
