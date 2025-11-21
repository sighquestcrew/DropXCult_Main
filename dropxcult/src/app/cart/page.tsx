"use client";

import React, { useState, useEffect } from "react";
import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
  ArrowLeft,
  Heart,
  Tag,
} from "lucide-react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  qty: number;
  image: string;
  size: string;
  color: string;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Unique Anormal T-Shirt",
      price: 799,
      originalPrice: 999,
      qty: 1,
      image: "/api/placeholder/200/200",
      size: "M",
      color: "Black",
    },
    {
      id: 2,
      name: "Hype Supply Hoodie",
      price: 1299,
      originalPrice: 1599,
      qty: 2,
      image: "/api/placeholder/200/200",
      size: "L",
      color: "Navy",
    },
  ]);

  const [promoCode, setPromoCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [savedItems, setSavedItems] = useState<CartItem[]>([]);
  const [isDark, setIsDark] = useState<boolean>(false);

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

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const shipping = subtotal > 1500 ? 0 : 99;
  const total = subtotal + shipping - discount;
  const savings = cartItems.reduce(
    (sum, item) => sum + (item.originalPrice - item.price) * item.qty,
    0
  );

  // ✅ All handlers typed correctly
  const handleRemove = (id: number): void => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleSaveForLater = (item: CartItem): void => {
    setSavedItems([...savedItems, item]);
    handleRemove(item.id);
  };

  const handleMoveToCart = (item: CartItem): void => {
    setCartItems([...cartItems, { ...item, id: Date.now() }]);
    setSavedItems(savedItems.filter((i) => i.id !== item.id));
  };

  const handleQtyChange = (id: number, delta: number): void => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, Math.min(10, item.qty + delta)) }
          : item
      )
    );
  };

  const applyPromoCode = (): void => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setDiscount(subtotal * 0.1);
    } else if (promoCode.toUpperCase() === "FLAT50") {
      setDiscount(50);
    } else {
      setDiscount(0);
    }
  };

  return (
    <main
      className={`relative min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-linear-to-br from-gray-50 via-white to-gray-100 text-black"
      }`}
    >
      {/* Ambient background effects */}
      <div
        className={`fixed top-0 left-0 w-96 h-96 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-700 ${
          isDark ? "bg-pink-600/10" : "bg-pink-400/10"
        }`}
      />
      <div
        className={`fixed bottom-0 right-0 w-96 h-96 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none transition-opacity duration-700 ${
          isDark ? "bg-red-600/10" : "bg-red-300/10"
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
          <span className="font-medium">Continue Shopping</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Shopping{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-red-500 to-red-600">
              Cart
            </span>
          </h1>
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            {cartItems.length}{" "}
            {cartItems.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div
                className={`backdrop-blur-sm rounded-2xl p-12 text-center shadow-lg border transition ${
                  isDark
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white border-gray-300"
                }`}
              >
                <ShoppingBag
                  size={64}
                  className={`mx-auto mb-4 ${
                    isDark ? "text-gray-600" : "text-gray-400"
                  }`}
                />
                <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                <p className={isDark ? "text-gray-500" : "text-gray-600"}>
                  Add items to get started
                </p>
                <button className="mt-6 px-6 py-3 bg-linear-to-r from-pink-500 to-red-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all">
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                {/* Free shipping banner */}
                {subtotal < 1500 && (
                  <div
                    className={`backdrop-blur-sm rounded-xl p-4 border ${
                      isDark
                        ? "bg-linear-to-r from-pink-500/10 to-red-500/10 border-pink-900/50"
                        : "bg-linear-to-r from-pink-200/30 to-red-200/30 border-pink-300/40"
                    }`}
                  >
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      🎉 Add ₹{(1500 - subtotal).toLocaleString()} more to get{" "}
                      <span className="font-bold text-pink-500">
                        FREE shipping
                      </span>
                    </p>
                    <div className="mt-2 h-2 bg-gray-700/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-pink-500 to-red-600 transition-all duration-500"
                        style={{
                          width: `${Math.min((subtotal / 1500) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                )}

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className={`backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border hover:shadow-xl transition-all duration-300 ${
                      isDark
                        ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                        : "bg-white border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="relative shrink-0">
                        <img
                          src='./image.png'
                          alt={item.name}
                          className={`w-full sm:w-28 h-28 rounded-xl object-cover ${
                            isDark ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        />
                        {item.originalPrice > item.price && (
                          <div className="absolute -top-2 -right-2 bg-linear-to-r from-pink-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                            {Math.round(
                              ((item.originalPrice - item.price) /
                                item.originalPrice) *
                                100
                            )}
                            % OFF
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg mb-1">
                              {item.name}
                            </h3>
                            <div
                              className={`flex gap-3 text-sm ${
                                isDark ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              <span>Size: {item.size}</span>
                              <span>•</span>
                              <span>Color: {item.color}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                          {/* Price */}
                          <div>
                            <div className="flex items-center gap-2">
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
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex items-center border rounded-lg overflow-hidden ${
                                isDark
                                  ? "border-gray-600 bg-gray-700/50"
                                  : "border-gray-400 bg-gray-100"
                              }`}
                            >
                              <button
                                onClick={() => handleQtyChange(item.id, -1)}
                                className={`p-2 hover:bg-gray-600 transition ${
                                  isDark ? "text-white" : "text-black"
                                }`}
                                disabled={item.qty === 1}
                              >
                                <Minus size={16} />
                              </button>
                              <span
                                className={`px-4 py-2 font-medium min-w-12 text-center ${
                                  isDark
                                    ? "bg-gray-800 text-white"
                                    : "bg-gray-200 text-black"
                                }`}
                              >
                                {item.qty}
                              </span>
                              <button
                                onClick={() => handleQtyChange(item.id, 1)}
                                className={`p-2 hover:bg-gray-600 transition ${
                                  isDark ? "text-white" : "text-black"
                                }`}
                                disabled={item.qty === 10}
                              >
                                <Plus size={16} />
                              </button>
                            </div>

                            <div className="flex gap-2">
                              <button
                                onClick={() => handleSaveForLater(item)}
                                className={`p-2 rounded-lg transition ${
                                  isDark
                                    ? "text-gray-400 hover:text-pink-500 hover:bg-pink-500/10"
                                    : "text-gray-600 hover:text-red-500 hover:bg-red-500/10"
                                }`}
                                title="Save for later"
                              >
                                <Heart size={20} />
                              </button>
                              <button
                                onClick={() => handleRemove(item.id)}
                                className={`p-2 rounded-lg transition ${
                                  isDark
                                    ? "text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                                    : "text-gray-600 hover:text-red-500 hover:bg-red-500/10"
                                }`}
                                title="Remove"
                              >
                                <Trash2 size={20} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div
              className={`backdrop-blur-sm rounded-2xl p-6 shadow-lg border sticky top-24 ${
                isDark
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <Tag size={16} className="inline mr-2" />
                  Have a promo code?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className={`grow px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                      isDark
                        ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                        : "bg-gray-100 text-black border-gray-400 placeholder-gray-500"
                    }`}
                  />
                  <button
                    onClick={applyPromoCode}
                    className={`px-4 py-2 rounded-lg font-medium border transition ${
                      isDark
                        ? "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
                        : "bg-gray-200 text-black border-gray-400 hover:bg-gray-300"
                    }`}
                  >
                    Apply
                  </button>
                </div>
                {discount > 0 && (
                  <p className="text-green-500 text-sm mt-2 font-medium">
                    ✓ Promo code applied!
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div
                className={`space-y-3 mb-6 pb-6 border-b ${
                  isDark ? "border-gray-700" : "border-gray-300"
                }`}
              >
                <div
                  className={`flex justify-between ${
                    isDark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  <span>Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-green-500">
                    <span>Savings</span>
                    <span className="font-medium">
                      -₹{savings.toLocaleString()}
                    </span>
                  </div>
                )}
                <div
                  className={`flex justify-between ${
                    isDark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  <span>Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-500">FREE</span>
                    ) : (
                      <span>₹{shipping}</span>
                    )}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-500">
                    <span>Discount</span>
                    <span className="font-medium">
                      -₹{discount.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-between text-xl font-bold mb-6">
                <span>Total</span>
                <span className="text-pink-500">
                  ₹{total.toLocaleString()}
                </span>
              </div>

              <button
                disabled={cartItems.length === 0}
                className="w-full py-4 bg-linear-to-r from-pink-500 via-red-500 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Proceed to Checkout
              </button>

              <div
                className={`mt-4 text-center text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <p>🔒 Secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
