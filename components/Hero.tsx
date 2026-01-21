"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10" />

            <div className="text-center max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium mb-4 text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900">
                        Available for Hire
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Aslam C A</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Frontend Developer utilizing <strong className="text-foreground">ReactJS</strong>, <strong className="text-foreground">Next.js</strong>, and <strong className="text-foreground">Node.js</strong> to build accessible, pixel-perfect web experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2"
                    >
                        Contact Me <ExternalLink size={18} />
                    </a>
                    <a
                        href="/Aslam_Frontend_Resume_jan2026.pdf"
                        download
                        className="px-8 py-3 rounded-full glass text-foreground font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                        Download Resume <Download size={18} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
}
