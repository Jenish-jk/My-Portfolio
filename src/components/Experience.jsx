import React, { useRef } from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "../constants/data";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
    const containerRef = useRef(null);

    return (
        <section id="experience" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center md:text-left"
                >
                    <h2 className="text-section-title mb-6">
                        Professional <br /> <span className="text-secondary">Journey.</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

                    <div className="space-y-16">
                        {EXPERIENCE.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-0 md:pl-20 grid grid-cols-1 md:grid-cols-12 gap-8"
                            >
                                {/* Timeline Dot (Desktop) */}
                                <div className="absolute left-[27px] top-6 w-3 h-3 rounded-full bg-accent outline outline-4 outline-black hidden md:block" />

                                {/* Date Side (Desktop) */}
                                <div className="md:col-span-3 flex items-center md:items-start pt-1">
                                    <div className="flex items-center gap-2 text-secondary text-sm font-medium bg-white/5 md:bg-transparent px-3 py-1 md:p-0 rounded-full">
                                        <Calendar size={14} className="text-accent" />
                                        {exp.period}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="md:col-span-9">
                                    <div className="glass-card p-8 hover:bg-white/5 transition-colors">
                                        <h3 className="text-2xl font-semibold text-white mb-2">{exp.role}</h3>
                                        <h4 className="text-lg text-accent font-medium mb-6 flex items-center gap-2">
                                            <Briefcase size={16} />
                                            {exp.company}
                                        </h4>

                                        <p className="text-secondary leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        <div className="space-y-2 mb-6 text-sm text-secondary/80">
                                            {exp.points.map((point, i) => (
                                                <div key={i} className="flex gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-surface-highlight mt-2 shrink-0" />
                                                    {point}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((t) => (
                                                <span key={t} className="px-2.5 py-1 text-xs font-medium bg-surface-highlight text-secondary rounded-md">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
