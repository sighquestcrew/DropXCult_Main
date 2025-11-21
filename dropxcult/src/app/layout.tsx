import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DropXCultNavbar from "@/components/ui/navbar-a";
import Footer from "@/components/ui/Footer";

// ✅ Use Inter font globally
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans", // key point: replace Geist variable
});

export const metadata: Metadata = {
  title: "DropXCult — Print & Design Platform",
  description:
    "Design, print, and wear your imagination. DropXCult is a creative print-on-demand platform for artists and brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-black text-white antialiased">
        <DropXCultNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
