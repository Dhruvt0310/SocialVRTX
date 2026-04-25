"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

const servicesData = [
    {
        id: 1,
        title: "Social Media Marketing",
        description: "Strategic campaigns that amplify your brand voice across all platforms with data-driven insights and creative content.",
        category: "Marketing",
        image: "/img.png",
    },
    {
        id: 2,
        title: "Content Creation",
        description: "Compelling visual and written content that captures attention and drives engagement with your target audience.",
        category: "Creative",
        image: "/img.png",
    },
    {
        id: 3,
        title: "Brand Strategy",
        description: "Comprehensive brand development from positioning to visual identity that sets you apart in the market.",
        category: "Strategy",
        image: "/img.png",
    },
    {
        id: 4,
        title: "Digital Advertising",
        description: "Performance-driven ad campaigns across Google, Meta, and LinkedIn that maximize ROI and conversions.",
        category: "Advertising",
        image: "/img.png",
    },
    {
        id: 5,
        title: "Influencer Marketing",
        description: "Strategic partnerships with influencers who authentically connect your brand with engaged communities.",
        category: "Marketing",
        image: "/img.png",
    },
    {
        id: 6,
        title: "Analytics & Insights",
        description: "Deep-dive analytics and reporting that transform data into actionable strategies for growth.",
        category: "Analytics",
        image: "/img.png",
    },
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Card dimensions
    const cardWidth = 420;
    const gap = 32;
    const totalCards = servicesData.length;
    
    // Calculate proper starting position to center first card
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const startOffset = (viewportWidth / 2) - (cardWidth / 2);
    
    // Calculate scroll distance (show all cards minus the last one that stays visible)
    const scrollDistance = (totalCards - 1) * (cardWidth + gap);

    // Transform with proper starting offset
    
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [startOffset, startOffset - scrollDistance]
    );

    return (
        <div ref={containerRef} className="relative bg-black" style={{ height: "300vh" }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center py-20">
                {/* Spotlight Background */}
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />

                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    {/* Centered Header Section */}
                    <div className="text-center mb-16 flex-shrink-0 px-4">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-block mb-4"
                        >
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
                                Our Services
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto"
                        >
                            Comprehensive digital solutions tailored to elevate your brand and drive measurable results
                        </motion.p>
                    </div>

                    {/* Scrolling Cards Container */}
                    <div className="w-full flex-1 flex items-center overflow-hidden">
                        <motion.div
                            style={{ x }}
                            className="flex gap-8 items-center will-change-transform"
                        >
                            {servicesData.map((service, index) => (
                                <ServiceCard key={service.id} service={service} index={index} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServiceCard({ service, index }: { service: typeof servicesData[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="flex-shrink-0 w-[500px] h-[350px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20  hover:shadow-2xl  transition-all duration-500 group relative"
        >
            {/* Image Container - Full card background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Dark overlay - lighter on default, darker on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 group-hover:from-black group-hover:via-black/80 group-hover:to-black/60 transition-all duration-500" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-between p-8">
                {/* Top Section - Category */}
                <div className="flex items-start justify-end">
                    {/* Category Badge */}
                    <span className="px-4 py-1.5 text-xs font-bold bg-white text-black rounded-full shadow-lg uppercase tracking-wider">
                        {service.category}
                    </span>
                </div>

                {/* Bottom Section - Title and Description */}
                <div className="space-y-4">
                    {/* Title - Always visible */}
                    <h3 className="text-3xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                        {service.title}
                    </h3>

                    {/* Description - Hidden by default, visible on hover */}
                    <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                        <p className="text-gray-300 text-base leading-relaxed mb-6">
                            {service.description}
                        </p>

                        {/* Learn More Button - Only visible on hover */}
                        <button className="w-full py-3.5 px-6 bg-white text-black rounded-xl font-bold hover:bg-gray-100 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-xl">
                            <span>Learn More</span>
                            <svg
                                className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
