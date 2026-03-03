"use client";
import React from "react";
import { motion } from "framer-motion";

const InfiniteMarquee = ({ data, speed = 40 }) => {
  // ১২টি ডেটাকে দুই ভাগে ভাগ করা (প্রথম ৬টি এবং পরের ৬টি)
  const firstRow = data.slice(0, Math.ceil(data.length / 2));
  const secondRow = data.slice(Math.ceil(data.length / 2));

  // লুপের জন্য ডেটা ডাবল করা
  const firstRowData = [...firstRow, ...firstRow];
  const secondRowData = [...secondRow, ...secondRow];

  return (
    <div className="relative w-full overflow-hidden bg-white py-10 flex flex-col gap-8">
      {/* দুই পাশে শ্যাডো এফেক্ট - যা পুরো সেকশন জুড়ে থাকবে */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* প্রথম রো - বাম দিকে যাবে */}
      <motion.div
        className="flex w-max gap-6 px-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {firstRowData.map((item, index) => (
          <Card key={`row1-${index}`} item={item} />
        ))}
      </motion.div>

      {/* দ্বিতীয় রো - ডান দিকে যাবে (Reverse) */}
      <motion.div
        className="flex w-max gap-6 px-3"
        animate={{ x: ["-50%", "0%"] }} // এটি উল্টো দিকে যাবে
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {secondRowData.map((item, index) => (
          <Card key={`row2-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

// কার্ডের জন্য আলাদা একটি ছোট কম্পোনেন্ট (কোড পরিষ্কার রাখার জন্য)
const Card = ({ item }) => (
  <div className="w-[350px] whitespace-normal bg-white border border-gray-200 p-6 rounded-2xl shadow-md flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 rounded-full object-cover border border-gray-100"
      />
      <div>
        <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
        <p className="text-sm text-gray-500">{item.username}</p>
      </div>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
  </div>
);

export default InfiniteMarquee;