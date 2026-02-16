import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants/data';
import Magnetic from './Magnetic';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Text & Info */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-section-title mb-6">
                                Let's work <br /> <span className="text-secondary">together.</span>
                            </h2>
                            <p className="text-xl text-secondary max-w-md">
                                I'm always looking for new opportunities to build products that matter.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-surface-highlight text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-secondary mb-1">Email</p>
                                    <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-lg text-primary hover:text-accent transition-colors">
                                        {PERSONAL_DETAILS.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-surface-highlight text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-secondary mb-1">Phone</p>
                                    <a href={`tel:${PERSONAL_DETAILS.phone}`} className="text-lg text-primary hover:text-accent transition-colors">
                                        {PERSONAL_DETAILS.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-surface-highlight text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-secondary mb-1">Location</p>
                                    <p className="text-lg text-primary">
                                        Tamil Nadu, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Minimal Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 md:p-12"
                    >
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-secondary ml-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-surface-highlight border-none rounded-xl px-4 py-3 text-primary focus:ring-1 focus:ring-accent outline-none placeholder:text-white/20 transition-all"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-secondary ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-surface-highlight border-none rounded-xl px-4 py-3 text-primary focus:ring-1 focus:ring-accent outline-none placeholder:text-white/20 transition-all"
                                    placeholder="jane@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-secondary ml-1">Message</label>
                                <textarea
                                    className="w-full bg-surface-highlight border-none rounded-xl px-4 py-3 text-primary focus:ring-1 focus:ring-accent outline-none placeholder:text-white/20 transition-all resize-none h-32"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <Magnetic>
                                <button type="button" className="w-full btn-primary flex justify-center items-center gap-2 mt-4 group">
                                    Send Message
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Magnetic>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
