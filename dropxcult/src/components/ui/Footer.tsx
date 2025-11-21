"use client";

import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google"; // 🆕 Import Poppins font

// ✅ Configure Poppins
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const footerLinks = {
    Features: [
      "Editor",
      "AI",
      "Canvas",
      "Teams",
      "Fonts",
      "Mockups",
      "Asset Library",
      "Text Effects",
    ],
    Solutions: [
      "For Marketing",
      "Print on Demand",
      "For Freelancers",
      "For Branding",
    ],
    Community: ["Discord", "Creators", "Affiliates"],
    Resources: [
      "Plans",
      "For Education",
      "Licensing",
      "Help",
      "Blog",
      "Templates",
      "Create Designs",
      "Tools",
    ],
    Company: [
      "About Us",
      "Careers",
      "Contact",
      "Legal Details",
      "Terms of Use",
      "Privacy Policy",
      "Cookie Policy",
    ],
  };

  const toggleSection = (name: string) => {
    setOpenSection(openSection === name ? null : name);
  };

  return (
    <footer
      className={`${poppins.className} w-full bg-[#0F0F0F] text-gray-400 border-t border-gray-800 pt-12 pb-6 px-6 sm:px-12 relative overflow-hidden`}
    >
      {/* Glow line accent */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-red-600 via-red-500 to-transparent opacity-40" />

      {/* Brand Section */}
      <div className="max-w-7xl mx-auto text-center sm:text-left mb-10">
        <h1 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
          Drop<span className="text-red-500">X</span>Cult
        </h1>
        <p className="text-sm text-gray-500 max-w-md leading-relaxed mx-auto sm:mx-0 font-normal">
          Build, share, and wear your art. DropXCult empowers creators to
          publish exclusive apparel designs for the new creative era.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 justify-center sm:justify-start mt-5">
          {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
            <Link
              href="#"
              key={i}
              className="p-2 bg-gray-800/50 rounded-full hover:bg-red-600 transition-all duration-300"
            >
              <Icon size={16} className="text-gray-300 hover:text-white" />
            </Link>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 opacity-40 mb-10" />

      {/* DESKTOP GRID */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-5 gap-10">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h3 className="text-white font-semibold mb-4 tracking-wide text-[15px] uppercase">
              {section}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* MOBILE ACCORDION */}
      <div className="md:hidden max-w-7xl mx-auto space-y-4">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section} className="border-b border-gray-800 pb-3">
            <button
              onClick={() => toggleSection(section)}
              className="flex justify-between items-center w-full text-left text-white font-semibold uppercase tracking-wide text-[15px]"
            >
              {section}
              {openSection === section ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openSection === section ? "max-h-[400px] mt-2" : "max-h-0"
              }`}
            >
              <ul className="space-y-1 mt-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="block text-sm text-gray-400 hover:text-red-500 transition-colors duration-300 py-1"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 opacity-40 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">DropXCult</span>. All rights
        reserved.{" "}
        <span className="block sm:inline hover:text-red-500 transition-colors duration-300">
          Crafted by the Cult of Creators ⚡
        </span>
      </div>
    </footer>
  );
}
