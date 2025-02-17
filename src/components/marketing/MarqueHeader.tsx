"use client"
import React from "react";
import { motion } from "framer-motion";

const newsItems = [
  "1. 迎 Welcome to the latest Walmart investment platform   minimum gold amount: 12 usd  Trading every 24 hours  minimum withdrawal amount:n get 3% (30USDT) ",
 
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
