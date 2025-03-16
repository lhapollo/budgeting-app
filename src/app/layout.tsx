"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { useState } from "react";
import Header from "./components/top-header";
import Sidebar from "./components/sidebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <html lang="en">
      <body>
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <main className="pt-20 p-4">{children}</main>
      </body>
    </html>
  );
}
