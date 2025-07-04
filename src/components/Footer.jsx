"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="relative w-full bg-[#FFF8F6] pt-32 pb-12"
    >
      {/* Top decorative image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1982px] h-[129px] overflow-hidden">
        <motion.img
          src="/hero/bg1.png"
          alt="footer top"
          className="w-full h-full object-cover rotate-180"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto flex flex-wrap justify-between items-start px-8 mt-24">
        {/* Left: Logo and Text */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/4 flex flex-col items-start space-y-4 mb-10 md:mb-0"
        >
          <motion.img
            variants={itemVariants}
            src="/logo.svg"
            alt="Logo"
            width={138}
            height={33}
          />
          <motion.p
            variants={itemVariants}
            className="text-[#454545] text-sm leading-[26px]"
          >
            Good health is important, so all of our products have been carefully
            designed to bring out the best in you.
          </motion.p>
        </motion.div>

        {/* Center: Subscribe */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-2/5 flex flex-col items-center text-center space-y-4 mb-10 md:mb-0"
        >
          <motion.h4 variants={itemVariants} className="text-[26px] font-medium">
            Keep In Touch
          </motion.h4>
          <motion.p
            variants={itemVariants}
            className="text-[#454545] text-sm leading-[26px]"
          >
            Subscribe to receive new product updates, be the first to know about
            sales, and more.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="w-full max-w-[570px] border-b-2 border-black flex justify-between items-center mt-4"
          >
            <span className="text-black text-sm">Enter your email address</span>
            <span className="uppercase text-[#F6623E] text-sm font-semibold cursor-pointer">
              Subscribe
            </span>
          </motion.div>
        </motion.div>

        {/* Right: More Info */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/4 text-right space-y-3"
        >
          <motion.h4 variants={itemVariants} className="text-[20px] font-medium">
            MORE INFO
          </motion.h4>
          <motion.ul
            variants={itemVariants}
            className="text-[#454545] text-sm leading-[33px]"
          >
            <li>Shipping & Delivery</li>
            <li>Refund Policy</li>
            <li>Partner Program</li>
            <li>Wholesale Portal</li>
            <li>You Buy, We Donate</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </motion.ul>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        variants={itemVariants}
        className="mt-16 border-t border-[#828181] opacity-20 w-[90%] mx-auto"
      />

      {/* Bottom bar */}
      <motion.div
        variants={itemVariants}
        className="mt-4 flex flex-col md:flex-row justify-between items-center px-8 text-sm"
      >
        <motion.p
          variants={itemVariants}
          className="text-black text-center"
        >
          © 2021, GOOD4ME. Created by <a href="https://t.me/iam_brand">Bekzod</a>
        </motion.p>
        <motion.div variants={itemVariants} className="mt-4 md:mt-0">
          <motion.img
            variants={itemVariants}
            src="/icons/payments.png"
            alt="payment methods"
            width="420"
            height="24"
          />
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
