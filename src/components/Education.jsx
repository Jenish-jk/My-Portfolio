import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants/data';
import { Award, GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-primary">
                            <GraduationCap className="text-accent" size={24} />
                            Education
                        </h2>
                        <div className="glass-card p-8 md:p-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                            <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-accent mb-4">
                                2019 – 2023
                            </span>
                            <h3 className="text-xl font-bold text-white mb-2">BE Computer Science and Engineering</h3>
                            <p className="text-secondary font-medium mb-6">Ponjesly College of Engineering</p>
                            <p className="text-secondary/80 leading-relaxed text-sm">
                                Focused on core computer science fundamentals, software engineering principles,
                                and advanced system architecture.
                            </p>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-primary">
                            <Award className="text-accent" size={24} />
                            Certifications
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {CERTIFICATIONS.map((cert) => (
                                <div
                                    key={cert.name}
                                    className="glass-card p-6 flex flex-col items-start gap-4 hover:bg-white/5 transition-colors"
                                >
                                    <div className="p-2 rounded-lg bg-surface-highlight text-primary">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-white mb-1 leading-snug">{cert.name}</h4>
                                        <span className="text-xs text-secondary">{cert.issuer}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
