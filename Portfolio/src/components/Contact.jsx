import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants/data';


const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
            return;
        }

        // Build mailto link with form data
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Hi Jenish,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:${PERSONAL_DETAILS.email}?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });

        // Reset status after 4 seconds
        setTimeout(() => setStatus('idle'), 4000);
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* Left Column: Text & Info */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                                Let's build <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
                                    something great.
                                </span>
                            </h2>
                            <p className="text-xl text-secondary max-w-md leading-relaxed">
                                I'm always interested in hearing about new projects and opportunities.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            <a
                                href={`mailto:${PERSONAL_DETAILS.email}`}
                                className="flex items-center gap-4 group cursor-pointer"
                            >
                                <div className="p-4 rounded-full bg-surface-highlight text-white group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-secondary mb-1 group-hover:text-accent transition-colors">Mail me at</p>
                                    <span className="text-xl text-primary font-medium">{PERSONAL_DETAILS.email}</span>
                                </div>
                            </a>

                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-full bg-surface-highlight text-white">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-secondary mb-1">Based in</p>
                                    <span className="text-xl text-primary font-medium">Tamil Nadu, India</span>
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
                        className="glass-card p-8 md:p-10 border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-secondary ml-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-4 text-primary focus:ring-1 focus:ring-accent focus:border-accent/50 outline-none placeholder:text-white/20 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-secondary ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-4 text-primary focus:ring-1 focus:ring-accent focus:border-accent/50 outline-none placeholder:text-white/20 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-secondary ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-4 text-primary focus:ring-1 focus:ring-accent focus:border-accent/50 outline-none placeholder:text-white/20 transition-all resize-none h-32"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary flex justify-center items-center gap-2 mt-4 group py-4 text-lg"
                            >
                                Send Message
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        {/* Toast Notifications */}
                        <AnimatePresence>
                            {status === 'sent' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mt-6 flex items-center gap-3 text-green-400 bg-green-900/20 border border-green-500/20 rounded-xl px-4 py-3"
                                >
                                    <CheckCircle size={20} />
                                    <span className="text-sm font-medium">Mail client opened! Send the email to complete.</span>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mt-6 flex items-center gap-3 text-red-400 bg-red-900/20 border border-red-500/20 rounded-xl px-4 py-3"
                                >
                                    <span className="text-sm font-medium">Please fill in all fields before sending.</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
