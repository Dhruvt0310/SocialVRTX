"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";


const projectsData = [
    {
        id: 1,
        title: "E-Commerce Revolution",
        description: "A modern e-commerce platform with seamless checkout and inventory management.",
        category: "Web Development",
        image: "/img.png",
    },
    {
        id: 2,
        title: "FinTech Dashboard",
        description: "Real-time financial analytics dashboard with advanced data visualization.",
        category: "SaaS",
        image: "/img.png",
    },
    {
        id: 3,
        title: "Healthcare Portal",
        description: "Patient management system with telemedicine capabilities and secure data handling.",
        category: "Healthcare",
        image: "/img.png",
    },
    {
        id: 4,
        title: "AI Content Generator",
        description: "Intelligent content creation tool powered by machine learning algorithms.",
        category: "AI/ML",
        image: "/img.png",
    },
    {
        id: 5,
        title: "Social Media Hub",
        description: "Unified platform for managing multiple social media accounts and analytics.",
        category: "Marketing",
        image: "/img.png",
    },
    {
        id: 6,
        title: "Smart Logistics",
        description: "End-to-end supply chain management with real-time tracking and optimization.",
        category: "Enterprise",
        image: "/img.png",
    },
    {
        id: 7,
        title: "EdTech Platform",
        description: "Interactive learning management system with gamification and progress tracking.",
        category: "Education",
        image: "/img.png",
    },
    {
        id: 8,
        title: "Real Estate Marketplace",
        description: "Property listing platform with virtual tours and AI-powered recommendations.",
        category: "PropTech",
        image: "/img.png",
    },
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Responsive card sizing - 3 cards visible with proper spacing
    const cardWidth = 400;
    const gap = 32;
    const cardsToScroll = 5; // 8 total - 3 visible
    const scrollDistance = cardsToScroll * (cardWidth + gap);

    // Immediate response with no delay - start from 0
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollDistance]
    );

    return (
        <div ref={containerRef} className="relative bg-black" style={{ height: "350vh" }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center py-20">
                {/* Spotlight Background */}
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />

                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 md:px-8">
                    {/* Centered Header Section */}
                    <div className="text-center mb-12 flex-shrink-0">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-block mb-4"
                        >
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
                                Our Projects
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4"
                        >
                            Explore our portfolio of cutting-edge solutions that transform businesses
                            and deliver exceptional results. Each project represents our commitment
                            to innovation and excellence.
                        </motion.p>
                    </div>

                    {/* Scrolling Cards Container - Centered with proper spacing */}
                    <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                        <motion.div
                            style={{ x }}
                            className="flex gap-8 items-center"
                        >
                            {projectsData.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="flex-shrink-0 w-[340px] sm:w-[360px] md:w-[380px] lg:w-[400px] h-[450px] sm:h-[460px] md:h-[470px] bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 group"
        >
            {/* Image Container */}
            <div className="relative h-[220px] sm:h-[230px] md:h-[240px] w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-white text-black rounded-full shadow-lg">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col h-[230px]">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    {project.description}
                </p>

                {/* View Project Button */}
                <button className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg text-sm sm:text-base">
                    <span>View Project</span>
                    <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </motion.div>
    );
}
