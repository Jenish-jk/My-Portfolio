import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { PERSONAL_DETAILS } from "../constants/data";
import Magnetic from "./Magnetic";

const LineMask = ({ children, delay = 0 }) => (
    <div className="overflow-hidden">
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    </div>
);

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

            {/* Background gradients/glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 blur-[150px] rounded-full opacity-60 mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full opacity-40" />
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-surface-highlight border border-white/5 text-secondary text-xs font-semibold tracking-wider uppercase">
                        Available for new opportunities
                    </span>
                </motion.div>

                <h1 className="text-hero mb-8 text-primary relative">
                    <LineMask delay={0.2}>
                        Building the future
                    </LineMask>
                    <LineMask delay={0.4}>
                        <span className="text-secondary relative">
                            of digital experiences.
                            {/* Subtle Shimmer Overlay */}
                            <span className="absolute inset-0 animate-shimmer pointer-events-none mix-blend-overlay opacity-50" />
                        </span>
                    </LineMask>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                >
                    {PERSONAL_DETAILS.summary}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Magnetic>
                        <a href="#projects" className="btn-primary w-full sm:w-auto">View Work</a>
                    </Magnetic>
                    <Magnetic>
                        <a href="#contact" className="btn-outline w-full sm:w-auto">Get in touch</a>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 animate-pulse" />
            </motion.div>
        </section>
    );
};

export default Hero;
