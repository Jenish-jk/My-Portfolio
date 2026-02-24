import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants/data";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "glass-nav py-4"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <a href="#" className="z-50 group">
                        <span className="text-xl font-semibold tracking-tight text-primary transition-opacity duration-300 group-hover:opacity-80">
                            Jenish<span className="text-accent"> J</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-10">
                        {NAV_LINKS.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="link-nav p-2"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center">
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="px-5 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-gray-200 transition-all active:scale-95"
                        >
                            Get in Touch
                        </motion.a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden z-50">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-primary focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-40 bg-black/60 md:hidden"
                    >
                        <div className="h-full flex flex-col items-center justify-center space-y-8">
                            {NAV_LINKS.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    className="text-3xl font-semibold text-primary tracking-tight hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
