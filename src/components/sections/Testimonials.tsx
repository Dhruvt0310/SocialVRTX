"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        name: "Sarah Johnson",
        designation: "CEO, TechCorp",
        image: "/img.png",
        text: "More than just a service provider, this agency has become a vital part of our team! Their tailored marketing strategies have not only increased our sales but have also enhanced our overall brand strategy. We're thrilled with the growth and look forward to continuing this partnership!"
    },
    {
        name: "Michael Chen",
        designation: "CTO, StartupXYZ",
        image: "/img.png",
        text: "Working with this agency transformed our entire digital strategy. The results exceeded our expectations and the team was professional throughout the entire process. The technical implementation was flawless."
    },
    {
        name: "Emily Davis",
        designation: "Marketing Director, HealthTech",
        image: "/img.png",
        text: "Their creative approach and attention to detail made all the difference. Our brand identity is now stronger than ever and resonates perfectly with our target audience. Highly recommended!"
    },
    {
        name: "David Wilson",
        designation: "Founder, EcoGreen",
        image: "/img.png",
        text: "Even after project completion, their support has been outstanding. They truly care about our success and continue to provide valuable insights. A true partnership approach."
    },
    {
        name: "Lisa Thompson",
        designation: "VP Marketing, RetailMax",
        image: "/img.png",
        text: "Every recommendation was backed by data and focused on ROI. We saw a 300% increase in conversions within the first quarter after launch. Results speak for themselves!"
    },
    {
        name: "James Rodriguez",
        designation: "CEO, EduLearn",
        image: "/img.png",
        text: "They don't just work for you, they work with you. The collaborative approach made us feel like we had an extended team of experts. Our new platform handles 10x more traffic!"
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handlePrevious = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const currentTestimonial = testimonials[currentIndex];
    const nextTestimonial = testimonials[(currentIndex + 1) % testimonials.length];
    const nextNextTestimonial = testimonials[(currentIndex + 2) % testimonials.length];

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0,
            scale: 0.95,
        }),
    };

    return (
        <div className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        Testimonials from clients
                    </h2>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-8">
                        {/* Previous Button */}
                        <button
                            onClick={handlePrevious}
                            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 flex-shrink-0"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>

                        {/* Testimonial Card with Stacked Cards */}
                        <div className="relative max-w-2xl w-full flex flex-col items-center">
                            {/* Third card in stack (bottom) */}
                            <div className="absolute inset-0 transform translate-y-8 left-1/2 -translate-x-1/2 w-[92%] -z-20">
                                <div className="bg-white rounded-3xl p-8 md:p-12 w-full opacity-60">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-yellow-200">
                                            <img
                                                src={nextNextTestimonial.image}
                                                alt={nextNextTestimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            {nextNextTestimonial.name}
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            {nextNextTestimonial.designation}
                                        </p>
                                        <p className="text-gray-700 leading-relaxed text-lg line-clamp-3">
                                            {nextNextTestimonial.text}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Second card in stack (middle) */}
                            <div className="absolute inset-0 transform translate-y-4 left-1/2 -translate-x-1/2 w-[96%] -z-10">
                                <div className="bg-white rounded-3xl p-8 md:p-12 w-full opacity-80">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-yellow-200">
                                            <img
                                                src={nextTestimonial.image}
                                                alt={nextTestimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            {nextTestimonial.name}
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            {nextTestimonial.designation}
                                        </p>
                                        <p className="text-gray-700 leading-relaxed text-lg line-clamp-3">
                                            {nextTestimonial.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Main Card with Animation */}
                            <div className="w-full overflow-hidden relative z-10">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.45, 0, 0.55, 1],
                                        }}
                                        className="relative bg-white rounded-3xl p-8 md:p-12 w-full"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            {/* Avatar */}
                                            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-yellow-200">
                                                <img
                                                    src={currentTestimonial.image}
                                                    alt={currentTestimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Name and Designation */}
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                {currentTestimonial.name}
                                            </h3>
                                            <p className="text-gray-600 mb-6">
                                                {currentTestimonial.designation}
                                            </p>

                                            {/* Testimonial Text */}
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                {currentTestimonial.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 flex-shrink-0"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-16">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? "w-8 bg-yellow-500"
                                        : "w-2 bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}