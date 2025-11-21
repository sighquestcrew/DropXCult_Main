"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Brush, Target, Rocket } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 px-6 overflow-hidden">
      {/* HEADER SECTION */}
      <section className="text-center mb-20 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-black mb-6 bg-clip-text text-transparent bg-linear-to-r from-red-600 via-red-700 to-red-900 dark:from-red-400 dark:via-red-600 dark:to-red-800"
        >
          About DropXCult
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          Not a brand. A movement. A belief system. <br />
          DropXCult connects designers, creators, and dreamers — turning imagination into wearable art.
        </motion.p>
      </section>

      {/* OUR STORY SECTION */}
      <section className="max-w-6xl mx-auto mb-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600 dark:text-red-400">
            Our Story
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            DropXCult was born from the fire of creativity — a collective where individuality meets collaboration.
            What started as a passion for unique T-shirt designs evolved into a full-fledged community of artists,
            visionaries, and cult followers of design freedom.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/image.png"
            alt="DropXCult Team"
            width={400}
            height={300}
            className="rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* OUR MISSION SECTION */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-red-600 dark:text-red-400"
        >
          Our Mission
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Target size={36} className="text-red-600 dark:text-red-400" />,
              title: "Empower Creators",
              desc: "Giving artists the platform to showcase, sell, and build a fanbase around their designs.",
            },
            {
              icon: <Brush size={36} className="text-red-600 dark:text-red-400" />,
              title: "Promote Originality",
              desc: "Encouraging self-expression through art — where each drop is one-of-a-kind.",
            },
            {
              icon: <Rocket size={36} className="text-red-600 dark:text-red-400" />,
              title: "Innovate Constantly",
              desc: "Combining design, fashion, and technology to reshape how we experience creativity.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-2xl hover:scale-[1.03] transition-all duration-500"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* THE CULT SECTION */}
      <section className="max-w-5xl mx-auto mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-red-600 dark:text-red-400">
            The Cult of Creators
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            Every drop is more than apparel — it's a story, a statement, a symbol.
            Join thousands of creators building the future of digital and physical fashion.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-bold text-white bg-linear-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 shadow-lg hover:shadow-red-600/40 transition-all"
          >
            Join the Movement
          </motion.button>
        </motion.div>
      </section>

      {/* TEAM SECTION */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-red-600 dark:text-red-400"
        >
          Our Team
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {[1, 2, 3].map((id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src="/image.png"
                alt={`Team Member ${id}`}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 border border-gray-300 dark:border-gray-700"
              />
              <h3 className="font-bold text-lg">Member {id}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Creative Designer</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} DropXCult. Crafted with <Sparkles className="inline text-red-500" size={14} /> by creators, for creators.
        </p>
      </footer>
    </div>
  );
}
