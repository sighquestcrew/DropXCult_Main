"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import React, { useState, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Heart,
} from "lucide-react";
import Image from "next/image";

export default function DropXCultNavbar() {
  // Navbar state variables
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls mobile menu open/close
  const [isScrolled, setIsScrolled] = useState(false); // Detects scroll for style changes
  const [activeMega, setActiveMega] = useState<string | null>(null); // Controls which mega menu is active
  const [isDark, setIsDark] = useState(false); // Dark/light mode toggle
  const [openSection, setOpenSection] = useState<string | null>(null); // Opens specific mobile menu section
  const [showSearchPanel, setShowSearchPanel] = useState(false); // Controls search panel visibility
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // Tracks mouse position for cursor/particle effects
  const [isHoveringLogo, setIsHoveringLogo] = useState(false); // Detects logo hover for animation
  const [searchValue, setSearchValue] = useState(""); // Holds search input value
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]); // Stores animated sparkle particle positions
  const [wishlistCount, setWishlistCount] = useState(3); // Simulated wishlist count
  const [cartCount, setCartCount] = useState(5); // Simulated cart count

  // Detect scroll and toggle navbar styles
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  // Track mouse position for cursor animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Detect user’s system dark mode preference on first load
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark/light theme
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  // Create a temporary sparkle particle at cursor position
  const createParticle = () => {
    const newParticle = { id: Date.now(), x: cursorPos.x, y: cursorPos.y };
    setParticles((prev) => [...prev, newParticle]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 1000);
  };

  // Navigation link items
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Templates", href: "#templates" },
    { name: "Designs", href: "#designs" },
    { name: "Community", href: "#community" },
    { name: "About Us", href: "#about" },
  ];

  // Mega menu content for each navigation link
  const megaMenuContent: Record<string, any> = {
    Home: {
      features: [
        {
          icon: "/image.png",
          title: "Welcome",
          desc: "Discover the DropXCult experience and community.",
        },
        {
          icon: "/image.png",
          title: "What's New",
          desc: "Latest updates, releases, and announcements.",
        },
        {
          icon: "/image.png",
          title: "Featured Drops",
          desc: "Exclusive collections from top creators.",
        },
        {
          icon: "/image.png",
          title: "Getting Started",
          desc: "Quick guide to joining the cult.",
        },
      ],
      solutions: ["Explore", "Trending", "New Releases", "Top Rated"],
      promo: {
        title: "Welcome Home",
        desc: "Start your journey into the cult of creators.",
      },
    },
    Templates: {
      features: [
        {
          icon: "/image.png",
          title: "T-Shirt Templates",
          desc: "Ready-to-use designs for apparel printing.",
        },
        {
          icon: "/image.png",
          title: "Logo Packs",
          desc: "Professional logo templates for any brand.",
        },
        {
          icon: "/image.png",
          title: "Social Media Kits",
          desc: "Complete sets for Instagram, Twitter, and more.",
        },
        {
          icon: "/image.png",
          title: "Print Templates",
          desc: "Posters, flyers, and promotional materials.",
        },
      ],
      solutions: ["Streetwear", "Minimalist", "Vintage", "Futuristic"],
      promo: {
        title: "Template Library",
        desc: "1000+ premium templates ready to customize.",
      },
    },
    Designs: {
      features: [
        {
          icon: "/image.png",
          title: "Custom Graphics",
          desc: "Unique artwork from cult artists.",
        },
        {
          icon: "/image.png",
          title: "Illustrations",
          desc: "Hand-drawn and digital illustration packs.",
        },
        {
          icon: "/image.png",
          title: "Typography",
          desc: "Exclusive fonts and lettering styles.",
        },
        {
          icon: "/image.png",
          title: "Pattern Library",
          desc: "Seamless patterns and textures.",
        },
      ],
      solutions: ["Abstract", "Graffiti", "Anime", "Retro"],
      promo: {
        title: "Design Showcase",
        desc: "Explore cutting-edge designs from global artists.",
      },
    },
    Community: {
      features: [
        {
          icon: "/image.png",
          title: "Creator Hub",
          desc: "Connect with designers and artists worldwide.",
        },
        {
          icon: "/image.png",
          title: "Forums",
          desc: "Discuss, share, and collaborate with peers.",
        },
        {
          icon: "/image.png",
          title: "Events",
          desc: "Workshops, challenges, and virtual meetups.",
        },
        {
          icon: "/image.png",
          title: "Showcase",
          desc: "Display your work and get discovered.",
        },
      ],
      solutions: ["Discord", "Member Gallery", "Collaborations", "Challenges"],
      promo: {
        title: "Join 50K+ Creators",
        desc: "Be part of a thriving creative community.",
      },
    },
    "About Us": {
      features: [
        {
          icon: "/image.png",
          title: "Our Story",
          desc: "How DropXCult became a movement.",
        },
        {
          icon: "/image.png",
          title: "Mission",
          desc: "Empowering creators through design freedom.",
        },
        {
          icon: "/image.png",
          title: "Team",
          desc: "Meet the people behind the cult.",
        },
        {
          icon: "/image.png",
          title: "Careers",
          desc: "Join our team of creative rebels.",
        },
      ],
      solutions: ["Press Kit", "Contact Us", "Partnerships", "Support"],
      promo: {
        title: "Our Philosophy",
        desc: "Not a brand. A movement. A belief system.",
      },
    },
  };

  // Toggle functions
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleSection = (section: string) =>
    setOpenSection((prev) => (prev === section ? null : section));
  const toggleSearchPanel = () => {
    setShowSearchPanel((prev) => !prev);
    setActiveMega(null);
  };

  return (
    <>
      {/* ========= CUSTOM CURSOR EFFECT ========= */}
      {isHoveringLogo && (
        <div
          className="fixed pointer-events-none z-9999 mix-blend-difference"
          style={{
            left: cursorPos.x - 8,
            top: cursorPos.y - 8,
            transition: "all 0.1s ease-out",
          }}
        >
          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        </div>
      )}

      {/* ========= PARTICLE SPARKLE EFFECT ========= */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-9998"
          style={{
            left: particle.x,
            top: particle.y,
            animation: "particleFade 1s ease-out forwards",
          }}
        >
          <Sparkles size={16} className="text-red-500" />
        </div>
      ))}

      {/* ========= MAIN NAVBAR ========= */}
      <nav
        className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b transition-all duration-500 ${
          isDark ? "bg-black/90 border-gray-800" : "bg-white/90 border-gray-200"
        } ${isScrolled ? "py-2 shadow-2xl shadow-red-900/10" : "py-4"}`}
      >
        {/* Thin animated red border line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-red-600 to-transparent opacity-50 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* LEFT SECTION: Burger + Logo */}
            <div className="flex items-center gap-4">
              {/* Burger button (mobile) */}
              <button
                onClick={toggleMenu}
                className={`block lg:hidden transition-all p-2 hover:scale-110 active:scale-95 ${
                  isDark
                    ? "text-white hover:text-red-500"
                    : "text-black hover:text-red-600"
                }`}
              >
                {isMenuOpen ? (
                  <X
                    size={24}
                    className="animate-spin"
                    style={{ animationDuration: "0.3s" }}
                  />
                ) : (
                  <Menu size={24} />
                )}
              </button>

              {/* Logo + title + hover animation */}
              <Link
                href="/"
                className="flex items-center gap-2 cursor-pointer group select-none relative"
                onMouseEnter={() => {
                  setIsHoveringLogo(true);
                  createParticle();
                }}
                onMouseLeave={() => setIsHoveringLogo(false)}
                onClick={() => {
                  createParticle();
                  closeMenu(); // closes burger menu if open (optional but useful)
                }}
              >
                {/* SVG logo */}
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 transition-all duration-500 group-hover:rotate-360 group-hover:scale-110 ${
                    isDark
                      ? "text-white group-hover:text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                      : "text-black group-hover:text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]"
                  }`}
                >
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                    <path
                      d="M50 20 L35 35 L50 50 L65 35 Z"
                      fill="currentColor"
                    />
                    <path
                      d="M30 40 Q50 30 70 40 Q50 50 30 40"
                      fill="currentColor"
                    />
                    <path
                      d="M40 60 L50 70 L60 60 L50 50 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* Logo text */}
                <span
                  className={`text-lg sm:text-xl font-black group-hover:text-red-500 transition-all duration-300 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  DropXCult
                </span>

                {/* Glow behind logo on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-red-500/20 -z-10 rounded-full" />
              </Link>
            </div>

            {/* CENTER NAV LINKS (desktop only) */}
            <ul className="hidden lg:flex items-center gap-8 relative">
              {navLinks.map((link, idx) => (
                <li
                  key={link.name}
                  onMouseEnter={() => setActiveMega(link.name)}
                  style={{
                    animation: `slideDown 0.5s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <a
                    href={link.href}
                    className={`relative font-semibold text-sm tracking-wide transition-all duration-300 py-2 pb-6 group hover:scale-105 inline-block ${
                      isDark
                        ? "text-white hover:text-red-500"
                        : "text-black hover:text-red-600"
                    }`}
                  >
                    {link.name}
                    {/* underline hover animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-red-500 via-red-600 to-red-700 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                    {/* glow hover background */}
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-red-500/10 -z-10" />
                  </a>
                </li>
              ))}
            </ul>

            {/* RIGHT ICONS SECTION */}
            <div className="flex items-center gap-3 sm:gap-8">
              {/* Search button */}
              <button
                onClick={toggleSearchPanel}
                className={`transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95 ${
                  isDark
                    ? "text-white hover:text-red-500"
                    : "text-black hover:text-red-600"
                }`}
              >
                <Search size={20} />
              </button>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className={`transition-all duration-500 hover:scale-110 hover:rotate-180 active:scale-95 ${
                  isDark
                    ? "text-yellow-400 hover:text-yellow-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Wishlist icon with counter */}
              {/* HIDE top wishlist & cart when mobile menu (drawer) is open so they are only visible in the drawer header */}
              {!isMenuOpen && (
                <Link
                  href="http://localhost:3000/wishlist"
                  className={`relative transition-all duration-300 hover:scale-110 active:scale-95 hidden lg:block ${
                    isDark
                      ? "text-white hover:text-red-500"
                      : "text-black hover:text-red-600"
                  }`}
                >
                  <Heart
                    size={20}
                    className="hover:fill-current transition-all duration-300"
                  />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
              )}

              {!isMenuOpen && (
                <Link
                  href="/cart"
                  className={`relative transition-all duration-300 hover:scale-110 active:scale-95 hidden lg:block ${
                    isDark
                      ? "text-white hover:text-red-500"
                      : "text-black hover:text-red-600"
                  }`}
                >
                  <ShoppingCart size={20} />

                  {/* 🔴 Dynamic Cart Counter */}
                  {cartCount > 0 && (
                    <span
                      className="absolute -top-2 -right-2 w-5 h-5 bg-linear-to-r from-red-500 via-pink-500 to-red-700 
                 text-white text-xs font-bold rounded-full flex items-center justify-center 
                 shadow-md animate-pulse"
                    >
                      {cartCount}
                    </span>
                  )}
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ========= MEGA MENU (Desktop) ========= */}
      <div
        className={`fixed left-0 top-[72px] w-full z-40 overflow-hidden transition-all duration-700 ${
          activeMega ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } ${
          isDark
            ? "bg-linear-to-b from-black/95 to-black/90 border-t border-gray-800 shadow-2xl shadow-red-900/20"
            : "bg-linear-to-b from-white to-gray-50/80 border-t border-gray-200 shadow-2xl"
        }`}
        onMouseEnter={() => activeMega && setActiveMega(activeMega)}
        onMouseLeave={() => setActiveMega(null)}
      >
        {activeMega && megaMenuContent[activeMega] && (
          <div className="max-w-7xl mx-auto py-10 px-10 grid grid-cols-3 gap-10">
            {/* Two-column layout for features and solutions */}
            <div className="col-span-2 grid grid-cols-2 gap-8">
              {/* Features list */}
              <div>
                <h4
                  className={`font-bold mb-4 uppercase text-sm tracking-wider flex items-center gap-2 ${
                    isDark ? "text-red-500" : "text-red-600"
                  }`}
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  Features
                </h4>
                <ul className="space-y-4">
                  {megaMenuContent[activeMega].features.map(
                    (item: any, idx: number) => (
                      <li
                        key={item.title}
                        className="flex gap-3 hover:translate-x-2 transition-all duration-300 cursor-pointer group"
                        style={{
                          animation: `slideIn 0.5s ease-out ${idx * 0.1}s both`,
                        }}
                      >
                        <div className="relative">
                          <Image
                            src="/image.png"
                            alt={item.title}
                            width={32}
                            height={32}
                            className="rounded group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-500/20 rounded blur transition-opacity duration-300" />
                        </div>
                        <div>
                          <p
                            className={`font-semibold group-hover:text-red-500 transition-colors ${
                              isDark ? "text-white" : "text-black"
                            }`}
                          >
                            {item.title}
                          </p>
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Solutions list */}
              <div>
                <h4
                  className={`font-bold mb-4 uppercase text-sm tracking-wider flex items-center gap-2 ${
                    isDark ? "text-red-500" : "text-red-600"
                  }`}
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  Solutions
                </h4>
                <ul
                  className={`space-y-3 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {megaMenuContent[activeMega].solutions.map(
                    (item: string, idx: number) => (
                      <li
                        key={item}
                        className="hover:text-red-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                        style={{
                          animation: `slideIn 0.5s ease-out ${
                            (idx + 4) * 0.1
                          }s both`,
                        }}
                      >
                        → {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Promotional image and description */}
            <div
              className={`rounded-xl p-5 shadow-2xl transform hover:scale-[1.02] transition-all duration-300 ${
                isDark
                  ? "bg-linear-to-br from-gray-900 to-black border border-gray-800"
                  : "bg-linear-to-br from-gray-50 to-white border border-gray-200"
              }`}
              style={{ animation: "fadeInScale 0.7s ease-out" }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 group">
                <Image
                  src="/image.png"
                  alt="Featured"
                  width={200}
                  height={100}
                  className="rounded-lg transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4
                className={`font-semibold mb-1 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {megaMenuContent[activeMega].promo.title}
              </h4>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {megaMenuContent[activeMega].promo.desc}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ========= SEARCH PANEL ========= */}
      <div
        className={`fixed top-[72px] left-0 w-full z-50 transition-all duration-700 overflow-hidden backdrop-blur-lg ${
          showSearchPanel ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        } ${
          isDark
            ? "bg-black/95 border-t border-gray-800 shadow-2xl shadow-red-900/20"
            : "bg-white/95 border-t border-gray-200 shadow-2xl"
        }`}
      >
        {/* Search bar and trending tags */}
        <div className="max-w-4xl mx-auto px-6 py-10 text-center">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r ${
              isDark
                ? "from-red-400 via-red-500 to-red-600"
                : "from-red-600 via-red-700 to-red-800"
            }`}
            style={{ animation: "fadeInUp 0.5s ease-out" }}
          >
            Find your perfect design
          </h2>

          {/* Search input field */}
          <div
            className={`flex items-center border-2 rounded-xl p-4 max-w-2xl mx-auto transition-all duration-300 focus-within:scale-[1.02] ${
              isDark
                ? "border-gray-700 focus-within:border-red-500 bg-gray-900/50"
                : "border-gray-300 focus-within:border-red-600 bg-white"
            }`}
            style={{ animation: "fadeInUp 0.6s ease-out" }}
          >
            <Search
              size={20}
              className={`mr-3 ${isDark ? "text-gray-400" : "text-gray-500"}`}
            />
            <input
              type="text"
              placeholder="Search designs, templates, inspirations..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={`w-full outline-none bg-transparent text-sm ${
                isDark
                  ? "text-gray-200 placeholder-gray-500"
                  : "text-gray-800 placeholder-gray-400"
              }`}
            />
            {searchValue && (
              <button
                onClick={() => setSearchValue("")}
                className="ml-2 hover:scale-110 transition-transform"
              >
                <X size={16} className="text-gray-500" />
              </button>
            )}
          </div>

          {/* Trending tags below search */}
          <div className="mt-8" style={{ animation: "fadeInUp 0.7s ease-out" }}>
            <p
              className={`font-semibold mb-4 flex items-center justify-center gap-2 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              <Sparkles size={16} className="text-red-500" />
              Trending Search:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["#gaming", "#monograms", "#vintage", "#streetwear", "#y2k"].map(
                (tag, idx) => (
                  <span
                    key={tag}
                    className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer hover:scale-110 transition-all duration-300 ${
                      isDark
                        ? "bg-gray-800 text-gray-300 hover:bg-red-900/50 hover:text-red-400 border border-gray-700"
                        : "bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 border border-gray-200"
                    }`}
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${
                        0.8 + idx * 0.1
                      }s both`,
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========= MOBILE MENU (Drawer) ========= */}
      {isMenuOpen && (
        <>
          {/* Dark overlay background */}
          <div
            className="fixed inset-0 bg-black/70 z-40 lg:hidden backdrop-blur-sm"
            onClick={closeMenu}
            style={{ animation: "fadeIn 0.3s ease-out" }}
          />

          {/* Side drawer for mobile navigation */}
          <div
            className={`fixed top-0 left-0 h-full w-80 z-50 transform transition-all duration-500 lg:hidden shadow-2xl ${
              isDark
                ? "bg-linear-to-b from-black to-gray-900 text-white"
                : "bg-linear-to-b from-white to-gray-50 text-black"
            } ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            {/* Drawer header with close and icons */}
            <div
              className={`flex justify-between items-center px-6 pt-6 pb-4 border-b ${
                isDark ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <span className="font-black text-xl bg-clip-text text-transparent bg-linear-to-r from-red-500 to-red-700">
                Menu
              </span>

              {/* Wishlist + Cart + Close icons */}
              <div className="flex items-center gap-3">
                <Link
                  href="http://localhost:3000/wishlist"
                  className={`relative transition-all duration-300 hover:scale-110 active:scale-95 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                  onClick={closeMenu} // close the menu after clicking
                >
                  <Heart size={20} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                <Link
                  href="http://localhost:3000/cart"
                  className={`relative transition-all duration-300 hover:scale-110 active:scale-95 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                  onClick={closeMenu} // close the menu after clicking
                >
                  <ShoppingCart size={20} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* Close drawer button */}
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-red-600/20 transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Accordion sections for mobile */}
            <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-90px)]">
              {navLinks.map((link, idx) => (
                <div
                  key={link.name}
                  style={{
                    animation: `slideIn 0.3s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  {/* Accordion header */}
                  <button
                    onClick={() => toggleSection(link.name)}
                    className={`flex justify-between items-center w-full text-left text-lg font-bold hover:text-red-500 transition-colors ${
                      openSection === link.name ? "text-red-500" : ""
                    }`}
                  >
                    {link.name}
                    <span className="transition-transform duration-300">
                      {openSection === link.name ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </span>
                  </button>

                  {/* Accordion content (Features, Solutions, Promo) */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openSection === link.name ? "max-h-[600px]" : "max-h-0"
                    }`}
                  >
                    {megaMenuContent[link.name] && (
                      <div className="pt-4 pb-2 space-y-6">
                        {/* Features section */}
                        <div>
                          <h5
                            className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                              isDark ? "text-red-400" : "text-red-600"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                            Features
                          </h5>
                          <ul className="space-y-3 pl-2">
                            {megaMenuContent[link.name].features.map(
                              (f: any, fIdx: number) => (
                                <li
                                  key={f.title}
                                  className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300 cursor-pointer"
                                  style={{
                                    animation:
                                      openSection === link.name
                                        ? `slideIn 0.3s ease-out ${
                                            fIdx * 0.1
                                          }s both`
                                        : "none",
                                  }}
                                >
                                  <Image
                                    src={f.icon}
                                    alt={f.title}
                                    width={24}
                                    height={24}
                                    className="mt-0.5 rounded"
                                  />
                                  <div>
                                    <p className="text-sm font-semibold">
                                      {f.title}
                                    </p>
                                    <p
                                      className={`text-xs ${
                                        isDark
                                          ? "text-gray-400"
                                          : "text-gray-600"
                                      }`}
                                    >
                                      {f.desc}
                                    </p>
                                  </div>
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        {/* Solutions section */}
                        <div>
                          <h5
                            className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                              isDark ? "text-red-400" : "text-red-600"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                            Solutions
                          </h5>
                          <ul className="pl-4 space-y-2 text-sm">
                            {megaMenuContent[link.name].solutions.map(
                              (s: string, sIdx: number) => (
                                <li
                                  key={s}
                                  className="hover:text-red-500 hover:translate-x-1 transition-all duration-300 cursor-pointer"
                                  style={{
                                    animation:
                                      openSection === link.name
                                        ? `slideIn 0.3s ease-out ${
                                            (sIdx + 4) * 0.1
                                          }s both`
                                        : "none",
                                  }}
                                >
                                  → {s}
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        {/* Promo section */}
                        <div
                          className={`rounded-lg p-4 ${
                            isDark
                              ? "bg-gray-800/50 border border-gray-700"
                              : "bg-gray-100 border border-gray-200"
                          }`}
                          style={{
                            animation:
                              openSection === link.name
                                ? "fadeInScale 0.5s ease-out 0.4s both"
                                : "none",
                          }}
                        >
                          <h5
                            className={`font-semibold text-sm mb-1 ${
                              isDark ? "text-white" : "text-black"
                            }`}
                          >
                            {megaMenuContent[link.name].promo.title}
                          </h5>
                          <p
                            className={`text-xs ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {megaMenuContent[link.name].promo.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ========= ANIMATION KEYFRAMES ========= */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes particleFade {
          0% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          100% {
            opacity: 0;
            transform: scale(0.5) translateY(-30px);
          }
        }
      `}</style>
    </>
  );
}
