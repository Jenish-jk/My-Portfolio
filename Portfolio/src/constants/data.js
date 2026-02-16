import {
    Code2,
    Server,
    Database,
    Cloud,
    Cpu,
    Globe,
    Layers,
    Rocket,
    Trophy,
    User,
    Mail,
    Phone,
    Linkedin,
    Github,
    Award
} from 'lucide-react';

export const PERSONAL_DETAILS = {
    name: "Jenish J",
    role: "Java Developer | Cloud & AI Enthusiast",
    phone: "+91-9443834264",
    email: "jenishjayaraj123@gmail.com",
    linkedin: "linkedin.com/in/jenish-j-56488b281/",
    summary: "Certified and knowledgeable Java Developer with strong understanding of SDLC and enterprise architecture. Experienced in building scalable HR, payroll, and AI-driven voice coaching systems. Passionate about clean architecture, cloud deployment, and performance optimization.",
    github: "github.com/Jenish-jk"
};

export const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const HIGHLIGHT_CARDS = [
    { title: "1+ Years Experience", icon: Rocket },
    { title: "Cloud Specialist", icon: Cloud },
    { title: "REST API Architect", icon: Layers },
    { title: "DB Optimization", icon: Database },
];

export const SKILLS = {
    Backend: [
        { name: "Core Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Spring Security", level: 80 },
        { name: "Python", level: 75 },
        { name: "Flask", level: 70 },
        { name: "REST API", level: 85 },
        { name: "Microservices", level: 70 },
        { name: "Hibernate", level: 75 },
        { name: "Fast API", level: 70 }
    ],
    Frontend: [
        { name: "React JS", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
    ],
    Database: [
        { name: "MySQL 8.0", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MS SQL", level: 70 },
        { name: "Redis", level: 65 },
    ],
    "Cloud & DevOps": [
        { name: "AWS Services", level: 80 },
        { name: "GCP", level: 70 },
        { name: "Flyway", level: 75 },
        { name: "Flask-Migrate", level: 70 },
    ],
};

export const EXPERIENCE = [
    {
        role: "Java Developer",
        company: "Althi Solutions",
        period: "June 2024 – Present",
        description: "Developed Business Management Tool (BMT), an enterprise payroll & HR automation system.",
        points: [
            "Built REST APIs for payroll automation & compliance reporting",
            "Integrated AWS S3 for secure storage and AWS SES/Cognito",
            "Optimized MySQL queries and implemented Flyway migrations",
            "Automated salary sheet generation and project management modules"
        ],
        tech: ["Java", "Spring Boot", "MySQL", "AWS", "Redis", "Flyway"]
    },
    {
        role: "Software Engineer",
        company: "Ai2launch",
        period: "November 2025 - Present",
        description: "Built web & mobile backend using Python + Flask for AI voice coaching.",
        points: [
            "Designed REST APIs for voice coaching sessions",
            "Deployed scalable services on GCP",
            "Integrated AWS S3 for secure audio storage",
            "Implemented PostgreSQL database management"
        ],
        tech: ["Python", "Flask", "PostgreSQL", "GCP", "AWS Services", "SSO", "Flask-Migrate", "Flask-SQLAlchemy", "Redis"]
    }
];

export const PROJECTS = [
    {
        title: "Bantrly Voice Coaching",
        description: "AI-powered interactive voice coaching platform with secure cloud storage for user voice data.",
        tech: ["Python", "Flask", "PostgreSQL", "GCP", "AWS Services", "SSO", "Flask-Migrate", "Flask-SQLAlchemy", "Redis"],
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
        live: "https://www.bantrly.com/"
    },
    {
        title: "Business Management Tool (BMT)",
        description: "Enterprise payroll & HR automation system with secure file storage and compliance automation.",
        tech: ["Java", "Spring Boot", "MySQL", "AWS", "Redis", "Flyway"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Inventory Management System",
        description: "Comprehensive system for tracking purchases, refilling stocks, and automated low-stock alerts for sales managers. Multi-role support (Admin, Sales, Consumer) with integrated PayPal payments and Cloudinary image management.",
        tech: ["Java", "Spring Boot", "MySQL", "AWS SES", "Redis", "Cloudinary", "PayPal", "Flyway"],
        image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com/Jenish-jk/Inventory-Management-Backend",
    }
];

export const CERTIFICATIONS = [
    { name: "Google Prompt Engineering", issuer: "Google" },
    { name: "AWS Certified AI Practitioner", issuer: "AWS" },
    { name: "AWS Cloud Practitioner", issuer: "AWS" },
    { name: "GCP Associate Cloud Engineer", issuer: "Google" },
    { name: "Java Full Stack Development", issuer: "Inbox Info Solutions" },
];

export const STATS = [
    { label: "REST APIs Developed", value: "120+" },
    { label: "Cloud Deployments", value: "2" },
    { label: "Cloud Integrations", value: "4+" },
];
