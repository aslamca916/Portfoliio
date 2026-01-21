"use client";

import { motion } from "framer-motion";

export default function Skills() {
    const customSkills = [
        {
            category: "Frontend",
            items: ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)"],
        },
        {
            category: "Backend & CMS",
            items: ["NodeJS", "Drupal", "PHP", "Express", "REST APIs"],
        },
        {
            category: "Tools & DevOps",
            items: ["Git", "GitHub", "VS Code", "Webpack", "npm/yarn", "Figma", "Acquia", "Vercel"],
        },
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        A comprehensive toolkit that enables me to build end-to-end robust applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {customSkills.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="glass glass-dark p-8 rounded-2xl border border-slate-200 dark:border-slate-800"
                        >
                            <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium hover:border-indigo-500 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
