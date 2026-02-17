import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants/data';

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-section-title mb-6"
                    >
                        Technical Expertise.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-secondary text-xl max-w-2xl"
                    >
                        A curated stack of technologies I use to build robust, scalable applications.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(SKILLS).map(([category, items], categoryIdx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIdx * 0.1 }}
                            className="glass-card p-10"
                        >
                            <h3 className="text-xl font-semibold text-white mb-8 border-b border-white/10 pb-4">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="group relative px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 cursor-default"
                                    >
                                        <span className="text-white/80 font-medium text-sm group-hover:text-accent transition-colors">
                                            {skill.name}
                                        </span>
                                        {/* Optional glow effect on hover can be added via CSS or pseudo-elements if needed for extra 'pop' */}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
