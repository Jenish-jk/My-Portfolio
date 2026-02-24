import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, BrainCircuit } from 'lucide-react';

const SERVICES = [
    {
        title: "Frontend Development",
        description: "Crafting responsive, interactive, and pixel-perfect user interfaces using modern frameworks like React and Tailwind CSS.",
        icon: Code2,
    },
    {
        title: "Backend Engineering",
        description: "Building robust, scalable server-side logic and RESTful APIs with Java Spring Boot and Python Flask.",
        icon: Server,
    },
    {
        title: "Cloud & DevOps",
        description: "Deploying and managing secure, scalable applications on AWS and GCP with CI/CD best practices.",
        icon: Cloud,
    },
    {
        title: "AI Integration",
        description: "Integrating AI/ML capabilities and intelligent features into web applications using Python and cloud services.",
        icon: BrainCircuit,
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-section-title mb-6"
                    >
                        What I Do.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-secondary text-xl max-w-2xl mx-auto"
                    >
                        Leveraging full-stack expertise to deliver complete digital solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 group hover:bg-surface-highlight/50 transition-colors"
                        >
                            <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                                <service.icon size={32} className="text-white group-hover:text-accent transition-colors" />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
                            <p className="text-secondary leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
