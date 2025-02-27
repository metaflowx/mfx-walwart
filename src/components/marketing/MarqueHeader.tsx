"use client"
import React from "react";
import { motion } from "framer-motion";

const newsItems = [
  "  🚀 Kickstart your earnings with just 11 USDT! Refer friends and earn daily rewards – Walmart’s platform launches 5 March 2025! 💰✨",
 
];

const MarqueHeader: React.FC = () => {
  return (
    <div className="bg-[#0071CE] text-white py-2 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {newsItems.map((news, index) => (
          <span key={index} className="mx-6 text-sm font-medium">
            {news}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueHeader;
