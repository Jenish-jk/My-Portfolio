import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants/data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-24 last:mb-0"
        >
            <div className={`relative rounded-3xl overflow-hidden aspect-video md:aspect-[4/3] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-4">{project.title}</h3>
                <p className="text-secondary text-lg leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-surface-highlight text-white/80">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group/link">
                        <span>View Live</span>
                        <ArrowUpRight size={18} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                        <span>Github Source</span>
                        <Github size={18} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-section-title mb-6">
                        Selected Work.
                    </h2>
                    <p className="text-secondary text-xl max-w-2xl">
                        A diverse collection of projects demonstrating expertise in cloud architecture, AI integration, and full-stack development.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
