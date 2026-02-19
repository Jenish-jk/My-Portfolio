import React from 'react';
import { PERSONAL_DETAILS } from '../constants/data';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-black z-10 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-lg font-bold tracking-tight text-white">
                            Jenish<span className="text-accent">.</span>
                        </span>
                        <p className="text-secondary text-xs mt-1">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href={`https://${PERSONAL_DETAILS.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-white transition-colors"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href={`https://${PERSONAL_DETAILS.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-white transition-colors"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href={`mailto:${PERSONAL_DETAILS.email}`}
                            className="text-secondary hover:text-white transition-colors"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
