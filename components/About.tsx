"use client";

import { motion } from "framer-motion";
import { Code, Server, Layout } from "lucide-react";

export default function About() {
    const cards = [
        {
            icon: <Layout className="w-8 h-8 text-indigo-500" />,
            title: "Frontend Development",
            description: "Building responsive, pixel-perfect user interfaces with ReactJS and NextJS.",
        },
        {
            icon: <Server className="w-8 h-8 text-purple-500" />,
            title: "Backend Integration",
            description: "Experience with NodeJS and Drupal CMS for robust backend solutions.",
        },
        {
            icon: <Code className="w-8 h-8 text-pink-500" />,
            title: "Modern Tech Stack",
            description: "Utilizing the latest React features, Tailwind CSS, and TypeScript.",
        },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        I am a dedicated <strong>Software Engineer</strong> with over <strong>4 years of experience</strong> in building web applications.
                        My expertise lies in the React ecosystem, specifically <strong>ReactJS</strong> and <strong>NextJS</strong>.
                        I also have a strong background in <strong>NodeJS</strong> and Content Management Systems like <strong>Drupal</strong>.
                        I am passionate about creating seamless user experiences and writing clean, maintainable code.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl glass glass-dark hover:scale-[1.02] transition-transform duration-300 border border-slate-200 dark:border-slate-800"
                        >
                            <div className="mb-4 bg-slate-100 dark:bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
