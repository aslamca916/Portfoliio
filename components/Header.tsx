"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 glass glass-dark shadow-lg" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                    Aslam C A
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-indigo-500 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/Aslam_Frontend_Resume_jan2026.pdf"
                        download
                        className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
                    >
                        Resume
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground hover:text-indigo-500 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass glass-dark border-t border-white/10"
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-indigo-500 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/Aslam_Frontend_Resume_jan2026.pdf"
                                download
                                className="inline-block text-center px-4 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                            >
                                Download Resume
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
