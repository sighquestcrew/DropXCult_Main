"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, Filter } from "lucide-react";

interface ImageData {
  id: string;
  author: string;
  width: number;
  height: number;
  full: string;
}

export default function DesignsPage() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState<ImageData | null>(null);

  const categories = [
    "Typography",
    "Vintage",
    "Funny",
    "Sport",
    "Lifestyle",
    "Cute",
    "Pop Culture",
    "AI Designs",
    "Summer",
    "Logo",
    "Halloween",
    "Minimalist",
    "Streetwear",
  ];

  // Fetch images from Picsum
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=3&limit=48")
      .then((res) => res.json())
      .then((data) =>
        setImages(
          data.map((img: any) => ({
            id: img.id,
            author: img.author,
            width: img.width,
            height: img.height,
            full: `https://picsum.photos/id/${img.id}/${img.width}/${img.height}`,
          }))
        )
      );
  }, []);

  const filtered = images.filter((img) =>
    img.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="
      min-h-screen 
      pt-32 px-6 sm:px-12 lg:px-20 
      bg-white text-black
      dark:bg-black dark:text-white
    "
    >
      {/* HERO SECTION */}
      <section
        className="
        p-10 rounded-3xl shadow-xl mb-10
        bg-gray-100 border border-gray-300
        dark:bg-[#111] dark:border-red-900/20
      "
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
          T-Shirt Templates
        </h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mb-8 text-sm sm:text-base">
          Explore a collection of free, professionally designed templates you can
          customize, personalize, and print using modern design tools.
        </p>

        {/* SEARCH BAR */}
        <div
          className="
          flex items-center gap-3 p-4 rounded-xl
          bg-gray-200 border border-gray-300
          dark:bg-black/40 dark:border-gray-700
        "
        >
          <svg
            width="20"
            height="20"
            stroke="currentColor"
            className="opacity-60"
            fill="none"
            strokeWidth="2"
          >
            <circle cx="9" cy="9" r="7" />
            <line x1="15" y1="15" x2="19" y2="19" />
          </svg>

          <input
            placeholder="Search T-Shirt Templates"
            className="
            bg-transparent w-full outline-none text-sm 
            text-black placeholder-gray-600
            dark:text-white dark:placeholder-gray-500
          "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </section>

      {/* CATEGORY BUTTONS */}
      <h2 className="text-lg font-semibold mb-4">Browse by Style</h2>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className="
              px-5 py-2 rounded-full text-sm
              bg-gray-200 border border-gray-300 text-black
              dark:bg-black/40 dark:border-gray-700 dark:text-white
              hover:border-red-500 hover:text-red-500
              transition-all duration-200
            "
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FILTERS */}
      <div className="flex items-center justify-between mb-8">
        <button
          className="
          flex items-center gap-2 px-4 py-2 rounded-lg
          bg-gray-200 border border-gray-300 text-black
          dark:bg-black/40 dark:border-gray-700 dark:text-white
          hover:border-red-500 hover:text-red-500
        "
        >
          <Filter size={16} />
          Filters
        </button>

        <button
          className="
          flex items-center gap-2 px-4 py-2 rounded-lg
          bg-gray-200 border border-gray-300 text-black
          dark:bg-black/40 dark:border-gray-700 dark:text-white
          hover:border-red-500 hover:text-red-500
        "
        >
          Most Used
          <ChevronDown size={18} />
        </button>
      </div>

      {/* MASONRY GRID */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-6 space-y-6">
        {filtered.map((img) => (
          <div
            key={img.id}
            onClick={() => setModal(img)}
            className="
          break-inside-avoid overflow-hidden rounded-xl 
          cursor-pointer transition-all duration-300 
          hover:scale-[1.03] hover:shadow-xl

          bg-white border border-gray-300
          dark:bg-[#111] dark:border-gray-800
        "
          >
            <img
              src={img.full}
              alt={img.author}
              className="w-full h-auto object-cover"
            />

            <div
              className="
              px-3 py-2 text-xs 
              bg-white/80 text-black
              dark:bg-black/60 dark:text-gray-300
            "
            >
              {img.author}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modal && (
        <div
          className="
          fixed inset-0 z-50 flex items-center justify-center p-6
          bg-black/40 backdrop-blur-md
          dark:bg-black/80
        "
        >
          <div className="max-w-4xl w-full">
            <div className="flex justify-between mb-4">
              <span className="text-black dark:text-gray-300">
                {modal.author}
              </span>
              <button
                onClick={() => setModal(null)}
                className="
              px-3 py-1 rounded 
              bg-gray-300 text-black
              dark:bg-white/20 dark:text-white
            "
              >
                Close
              </button>
            </div>

            <img
              src={modal.full}
              className="w-full rounded-lg shadow-2xl"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}