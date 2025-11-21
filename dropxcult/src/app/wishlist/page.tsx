"use client";

import React, { useState, useEffect } from "react";
import {
  Heart,
  ShoppingBag,
  Trash2,
  ArrowLeft,
  ShoppingCart,
} from "lucide-react";

// ✅ Reuse same type as CartPage
type WishlistItem = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  size: string;
  color: string;
};

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Vintage DropXCult Tee",
      price: 999,
      originalPrice: 1299,
      image: "/api/placeholder/200/200",
      size: "M",
      color: "Black",
    },
    {
      id: 2,
      name: "Cult Hoodie Limited Edition",
      price: 1499,
      originalPrice: 1799,
      image: "/api/placeholder/200/200",
      size: "L",
      color: "Gray",
    },
  ]);

  const [cart, setCart] = useState<WishlistItem[]>([]);
  const [isDark, setIsDark] = useState<boolean>(false);

  // ✅ Detect global theme from Navbar
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  // ✅ Handlers
  const handleRemove = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const handleMoveToCart = (item: WishlistItem) => {
    setCart([...cart, item]);
    handleRemove(item.id);
  };

  return (
    <main
      className={`relative min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-linear-to-br from-gray-50 via-white to-gray-100 text-black"
      }`}
    >
      {/* Ambient effects */}
      <div
        className={`fixed top-0 left-0 w-96 h-96 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
          isDark ? "bg-pink-600/10" : "bg-pink-300/20"
        }`}
      />
      <div
        className={`fixed bottom-0 right-0 w-96 h-96 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none ${
          isDark ? "bg-red-600/10" : "bg-red-300/20"
        }`}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Back Button */}
        <button
          className={`flex items-center gap-2 mb-6 group transition ${
            isDark
              ? "text-gray-400 hover:text-pink-500"
              : "text-gray-600 hover:text-red-500"
          }`}
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-medium">Back to Shop</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-red-500 to-red-600">
              Wishlist
            </span>
          </h1>
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved
          </p>
        </div>

        {/* Wishlist Section */}
        {wishlist.length === 0 ? (
          <div
            className={`backdrop-blur-sm rounded-2xl p-12 text-center shadow-lg border transition ${
              isDark
                ? "bg-gray-800/50 border-gray-700"
                : "bg-white border-gray-300"
            }`}
          >
            <Heart
              size={64}
              className={`mx-auto mb-4 ${
                isDark ? "text-gray-600" : "text-gray-400"
              }`}
            />
            <h3 className="text-xl font-semibold mb-2">
              Your wishlist is empty
            </h3>
            <p className={isDark ? "text-gray-500" : "text-gray-600"}>
              Save your favorite items to view them later.
            </p>
            <button className="mt-6 px-6 py-3 bg-linear-to-r from-pink-500 to-red-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all">
              Browse Collection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl p-4 shadow-lg border backdrop-blur-sm transition hover:shadow-xl hover:scale-[1.02] duration-300 ${
                  isDark
                    ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                    : "bg-white border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="relative mb-4">
                  <img
                    src="./image.png"
                    alt={item.name}
                    className={`w-full h-56 object-cover rounded-xl ${
                      isDark ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  />
                  {item.originalPrice > item.price && (
                    <div className="absolute top-2 left-2 bg-linear-to-r from-pink-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                      {Math.round(
                        ((item.originalPrice - item.price) /
                          item.originalPrice) *
                          100
                      )}
                      % OFF
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p
                  className={`text-sm mb-2 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Size: {item.size} • Color: {item.color}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-pink-500">
                    ₹{item.price.toLocaleString()}
                  </span>
                  {item.originalPrice > item.price && (
                    <span
                      className={`text-sm line-through ${
                        isDark ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="flex justify-between gap-2">
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="flex items-center justify-center gap-2 flex-1 py-2 rounded-lg bg-linear-to-r from-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all duration-300"
                  >
                    <ShoppingCart size={18} />
                    Move to Cart
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className={`p-2 rounded-lg border transition-all ${
                      isDark
                        ? "text-gray-400 border-gray-700 hover:text-red-500 hover:border-red-600"
                        : "text-gray-600 border-gray-300 hover:text-red-500 hover:border-red-500"
                    }`}
                    title="Remove"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
