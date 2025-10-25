"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const testimonials = [
    {
        title: "Exceptional Results",
        description: "Working with this agency transformed our entire digital strategy. The results exceeded our expectations and the team was professional throughout the entire process.",
        link: "#"
    },
    {
        title: "Creative Excellence",
        description: "Their creative approach and attention to detail made all the difference. Our brand identity is now stronger than ever and resonates perfectly with our target audience.",
        link: "#"
    },
    {
        title: "Technical Expertise",
        description: "The technical implementation was flawless. Our new platform handles 10x more traffic and the user experience is significantly improved.",
        link: "#"
    },
    {
        title: "Outstanding Support",
        description: "Even after project completion, their support has been outstanding. They truly care about our success and continue to provide valuable insights.",
        link: "#"
    },
    {
        title: "ROI Focused",
        description: "Every recommendation was backed by data and focused on ROI. We saw a 300% increase in conversions within the first quarter after launch.",
        link: "#"
    },
    {
        title: "Partnership Approach",
        description: "They don't just work for you, they work with you. The collaborative approach made us feel like we had an extended team of experts.",
        link: "#"
    }
];

const teamMembers = [
    {
        id: 1,
        name: "Sarah Johnson",
        designation: "CEO, TechCorp",
        image: "/img.png",
    },
    {
        id: 2,
        name: "Michael Chen",
        designation: "CTO, StartupXYZ",
        image: "/img.png",
    },
    {
        id: 3,
        name: "Emily Davis",
        designation: "Marketing Director, HealthTech",
        image: "/img.png",
    },
    {
        id: 4,
        name: "David Wilson",
        designation: "Founder, EcoGreen",
        image: "/img.png",
    },
    {
        id: 5,
        name: "Lisa Thompson",
        designation: "VP Marketing, RetailMax",
        image: "/img.png",
    },
    {
        id: 6,
        name: "James Rodriguez",
        designation: "CEO, EduLearn",
        image: "/img.png",
    },
];

export default function Testimonials() {
    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 mb-4">
                        Client Success Stories
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                    </p>
                </div>

                {/* Client Avatars */}
                <div className="flex flex-row items-center justify-center mb-16 w-full">
                    <AnimatedTooltip items={teamMembers} />
                </div>

                {/* Testimonials Grid */}
                <div className="mb-16">
                    <HoverEffect items={testimonials} />
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-6">
                        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">150+</div>
                        <div className="text-neutral-600 font-medium">Projects Completed</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
                        <div className="text-neutral-600 font-medium">Client Satisfaction</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
                        <div className="text-neutral-600 font-medium">Happy Clients</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5+</div>
                        <div className="text-neutral-600 font-medium">Years Experience</div>
                    </div>
                </div>
            </div>
        </div>
    );
}