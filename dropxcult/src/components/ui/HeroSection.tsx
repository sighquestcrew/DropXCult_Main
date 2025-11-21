"use client";

import React from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export default function HeroSection() {
  return (
    <section
      className={`${poppins.className} hero-gradient-bg relative flex flex-col lg:flex-row items-center justify-between min-h-[92vh]
      px-8 sm:px-16 overflow-hidden text-foreground pt-32 pb-24 transition-colors duration-700 ease-in-out`}
    >
      {/* 🌈 Single unified gradient background (same tone as InspirationSection) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.985_0.01_25)_0%,oklch(0.965_0.005_230)_40%,oklch(0.93_0.015_25)_100%)]
                   dark:bg-[linear-gradient(to_bottom,oklch(0.15_0_0)_0%,oklch(0.12_0_0)_25%,oklch(0.1_0_0)_60%,oklch(0.08_0_0)_100%)]
                   transition-all duration-700"
      />

      {/* ✨ Ambient red glows (brand aesthetic continuity) */}
      <div
        className="absolute -top-[120px] -left-[100px] w-[480px] h-[480px]
                   bg-red-500/10 dark:bg-red-600/20 blur-[140px] rounded-full"
      />
      <div
        className="absolute -bottom-[150px] -right-[150px] w-[600px] h-[600px]
                   bg-red-600/15 dark:bg-red-700/25 blur-[160px] rounded-full"
      />

      {/* 🖋️ Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-1 text-left space-y-8 max-w-xl"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="text-foreground">Born from</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
            creation
          </span>
          <br />
          <span className="text-foreground">Bound by</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
            belief
          </span>
        </h1>

        <p className="text-muted-foreground leading-relaxed text-lg max-w-md font-normal">
          DropXCult is where creativity meets identity — design, print, and wear
          your imagination. Join the new era of exclusive print-on-demand
          fashion.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(255, 0, 0, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 font-semibold text-white bg-gradient-to-r from-red-600 to-red-800 
                     hover:from-red-700 hover:to-red-900 transition-all duration-300 rounded-md
                     hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] w-fit"
        >
          Join the Cult
        </motion.button>
      </motion.div>

      {/* 🎥 Video Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative flex-1 flex justify-center items-center mt-12 lg:mt-0"
      >
        <div
          className="relative w-[320px] sm:w-[420px] lg:w-[520px] rounded-2xl overflow-hidden 
                     shadow-[0_0_60px_rgba(255,0,0,0.25)] transition-all duration-700"
        >
          <video
            src="/65f6776adcbc7d17dbd30416_68281335d591a236c7c0fd24_walkingtshirtv3-transcode (1).mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
