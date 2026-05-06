import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S.N Interior Design | Crafting Elegant Spaces",
  description: "Luxury Interior Design Services in Kolkata. We craft elegant, modern, and high-end spaces that reflect your lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-stone-50 text-stone-900 antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
