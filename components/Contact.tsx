"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8">Let's Work Together</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
                        I'm currently opening to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="mailto:aslamca1998@gmail.com"
                            className="group px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-3"
                        >
                            <Mail className="group-hover:rotate-12 transition-transform" />
                            Say Hello
                        </a>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <a
                            href="https://www.linkedin.com/in/aslam-c-a-82a231192/"
                            className="flex items-center justify-center gap-4 p-6 rounded-2xl glass glass-dark border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors group"
                        >
                            <Linkedin className="w-8 h-8 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                            <div className="text-left">
                                <h3 className="font-bold text-lg">LinkedIn</h3>
                                <p className="text-sm text-slate-500">Connect professionally</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/aslamca916/"
                            className="flex items-center justify-center gap-4 p-6 rounded-2xl glass glass-dark border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors group"
                        >
                            <Github className="w-8 h-8 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                            <div className="text-left">
                                <h3 className="font-bold text-lg">GitHub</h3>
                                <p className="text-sm text-slate-500">Check my code</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
