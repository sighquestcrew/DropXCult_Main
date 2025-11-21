"use client";

import React from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function DesignerShowcaseResponsiveFix() {
  const features = [
    "Customizable templates",
    "Typography tools & effects",
    "Vector editing",
    "Mockups",
    "AI image generation",
    "Smart flows",
    "Premium fonts",
  ];

  const images = [
    "/shirt-image.png",
    "/1736172028450.webp",
    "/clsqob8ir1ays1zyfhr8yfdp5.webp",
    "/clsnpogkp15dn1zziddxc4csf.webp",
    "/1744678197667.webp",
    "/1719358247235.webp",
    "/1719358247235.webp",
    "/1719358247235.webp",
    "/1719358247235.webp",
    "/1719358247235.webp",
  ];

  return (
    <section
      className={`${poppins.className} inspiration-gradient-bg relative flex flex-col lg:flex-row items-start justify-between py-20 px-6 sm:px-10 lg:px-16 gap-10 lg:gap-16 overflow-hidden transition-all duration-700`}
    >
      {/* 🌈 Soft pink ambient lighting (mirrors HeroSection) */}
      <div
        className="pointer-events-none absolute -top-[150px] -left-[120px] w-[480px] h-[480px] 
                   bg-pink-400/20 dark:bg-pink-600/25 blur-[160px] rounded-full z-0"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[400px]
                   bg-pink-500/15 dark:bg-pink-700/20 blur-[180px] rounded-full opacity-80 z-0"
      />

      {/* 🧠 LEFT SIDE – Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full text-center lg:text-left lg:sticky lg:top-24 self-start z-10"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
          See why other creators love{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-red-700">
            DropXCult
          </span>
        </h2>

        <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
          From customizable templates to AI-driven design, explore why DropXCult
          is the home for the next generation of creators and streetwear designers.
        </p>

        <ul className="space-y-3 text-base sm:text-lg font-medium text-gray-400">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 8, color: "#ec4899" }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`cursor-pointer transition-colors duration-300 ${
                i === 0 ? "text-white font-semibold" : ""
              }`}
            >
              {feature}
              {feature === "Smart flows" && (
                <span className="ml-2 text-xs bg-pink-600 text-white px-2 py-0.5 rounded-full">
                  NEW
                </span>
              )}
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(236, 72, 153, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 font-semibold text-white bg-gradient-to-r from-pink-500 via-red-500 to-red-700
                     hover:from-pink-600 hover:to-red-800 rounded-md transition-all duration-300"
        >
          Try DropXCult for Free
        </motion.button>
      </motion.div>

      {/* 🎨 RIGHT SIDE – Gallery */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full lg:max-h-[75vh] hide-scrollbar z-10"
      >
        {/* 🖥️ Masonry layout on large screens */}
        <div className="hidden md:block columns-2 lg:columns-3 gap-4 overflow-y-auto max-h-[70vh] hide-scrollbar">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="relative mb-4 overflow-hidden rounded-lg bg-gray-900/40 
                         shadow-[0_0_10px_rgba(236,72,153,0.08)] hover:shadow-[0_0_20px_rgba(236,72,153,0.18)]
                         transition-all duration-300 break-inside-avoid"
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-auto object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* 📱 Compact grid for mobile + tablet */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-y-auto max-h-[60vh] md:hidden hide-scrollbar">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="relative rounded-lg overflow-hidden bg-gray-900/40 shadow-[0_0_10px_rgba(236,72,153,0.12)]"
            >
              <img
                src={src}
                alt={`mobile-gallery-${i}`}
                className="w-full h-auto object-contain rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🔥 Fades out softly before footer */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-background/60 to-background z-[5]" />
    </section>
  );
}
