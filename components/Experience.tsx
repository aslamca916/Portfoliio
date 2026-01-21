"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            role: "Frontend Developer",
            company: "Tata Consultancy Services",
            period: "2023 - Present",
            description: "Developed and maintained responsive web applications using ReactJS and NextJS. Collaborated with cross-functional teams to deliver high-quality digital products.",
            tech: ["ReactJS", "NextJS", "Tailwind CSS"],
        },
        {
            role: "Assistant System Engineer",
            company: "Tata Consultancy Services",
            period: "2022 - 2023",
            description: "Delivered end-to-end support and enhancements for Drupal-based web applications hosted on Acquia, ensuring high availability and performance",
            tech: ["Drupal", "PHP", "MySQL", "Acquia"],
        },
    ];

    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-1/2 -translate-x-[1px] top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 last:bottom-auto last:h-full"></div>

                            <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                {/* Timeline Dot (Desktop) */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 items-center justify-center border-4 border-white dark:border-slate-950 shadow-lg z-10">
                                    <Briefcase size={14} className="text-white" />
                                </div>

                                <div className="md:w-1/2 mb-8 md:mb-0"></div> {/* Spacer */}

                                <div className="md:w-1/2 relative">
                                    {/* Mobile Timeline Line and Dot */}
                                    <div className="md:hidden absolute left-[-2rem] top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                                    <div className="md:hidden absolute left-[-2.5rem] top-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center border-2 border-white dark:border-slate-950">
                                        <Briefcase size={12} className="text-white" />
                                    </div>

                                    <div className="glass glass-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 mb-3">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">{exp.company}</p>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((t) => (
                                                <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
