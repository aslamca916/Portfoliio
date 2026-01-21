import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Aslam C A | Frontend Developer",
  description: "Portfolio of Aslam C A, a Frontend Developer specialized in ReactJS, NextJS, NodeJS, and Drupal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} antialiased font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 selection:bg-indigo-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
