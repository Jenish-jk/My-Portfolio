import React from 'react';
import { PERSONAL_DETAILS } from '../constants/data';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-black">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-xl font-semibold tracking-tight text-primary">
                            Jenish<span className="text-accent"> J</span>
                        </span>
                        <p className="text-secondary text-sm mt-2">
                            © {new Date().getFullYear()} Jenish J. Crafted with precision.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href={`https://${PERSONAL_DETAILS.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-primary transition-colors hover:scale-110 transform duration-200"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={`https://${PERSONAL_DETAILS.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-primary transition-colors hover:scale-110 transform duration-200"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={`mailto:${PERSONAL_DETAILS.email}`}
                            className="text-secondary hover:text-primary transition-colors hover:scale-110 transform duration-200"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
