import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants/data';

const SkillPill = ({ name, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative px-6 py-3 rounded-full bg-white/5 border border-white/10 overflow-hidden hover:border-accent/50 transition-colors cursor-default"
        >
            <div className="absolute inset-0 bg-accent/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative text-white/90 text-sm font-medium z-10 group-hover:text-white transition-colors">
                {name}
            </span>
        </motion.div>
    );
};

const SkillCategory = ({ title, items, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-12 last:mb-0"
        >
            <h3 className="text-xl font-semibold text-white mb-6 pl-2 border-l-2 border-accent">
                {title}
            </h3>
            <div className="flex flex-wrap gap-3">
                {items.map((skill, idx) => (
                    <SkillPill key={skill.name} name={skill.name} index={idx} />
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-16">
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
                        className="text-secondary text-xl max-w-2xl mx-auto"
                    >
                        A curated stack of technologies I use to build robust, scalable applications.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    <SkillCategory title="Backend & Architecture" items={SKILLS.Backend} index={0} />
                    <SkillCategory title="Frontend Ecosystem" items={SKILLS.Frontend} index={1} />
                    <SkillCategory title="Database & Storage" items={SKILLS.Database} index={2} />
                    <SkillCategory title="Cloud & DevOps" items={SKILLS["Cloud & DevOps"]} index={3} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
