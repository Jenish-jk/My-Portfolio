import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_DETAILS, HIGHLIGHT_CARDS, STATS } from "../constants/data";

const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-section-title mb-6">
                        <span className="text-primary">More than just code.</span> <br />
                        <span className="text-secondary">Engineering digital solutions.</span>
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Main Bio Card - Spans 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 glass-card p-8 md:p-10 flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">About Me</h3>
                        <p className="text-secondary text-lg leading-relaxed">
                            {PERSONAL_DETAILS.summary}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {/* Decorative pills */}
                            {["Clean Architecture", "Scalability", "User Experience"].map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70 border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Card - Spans 1 col */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-card p-8 flex flex-col justify-between space-y-8"
                    >
                        {STATS.map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-4xl font-bold text-white tracking-tight">{stat.value}</span>
                                <span className="text-sm text-secondary uppercase tracking-wider font-medium">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Highlights Grid - Spans 3 cols (or vary for interest) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {HIGHLIGHT_CARDS.map((card, index) => (
                            <div key={index} className="glass-card p-6 flex flex-col items-center text-center gap-4 hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                    <card.icon size={24} />
                                </div>
                                <h4 className="font-semibold text-primary">{card.title}</h4>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
