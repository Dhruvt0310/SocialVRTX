"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Target, Eye, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { FocusCards } from "@/components/ui/focus-cards"
import { Spotlight } from "@/components/ui/spotlight"

const team = [
    {
        title: "Heth Sanghvi - Chief Vibe Officer",
        src: "/Team Members/Team Members/Heth Sanghvi (CEO) - Chief Vibe Officer.jpg",
    },
    {
        title: "Saachi Jogani - Mastermind in Chief",
        src: "/Team Members/Team Members/Saachi Jogani (CCO) - Mastermind in chief .jpeg",
    },
    {
        title: "Suhani Pahade - Chief of Keeping it Together",
        src: "/Team Members/Team Members/Suhani Pahade (CMO) - Chief of keeping it together .JPG",
    },
    {
        title: "Darshita - Content Genie",
        src: "/Team Members/Team Members/Darshita - Content Genie.jpeg",
    },
    {
        title: "Ronak - Chief Word Nerd",
        src: "/Team Members/Team Members/Ronak - Chief Word Nerd.PNG",
    },
    {
        title: "Sakshi - Scroll Stopping Specialist",
        src: "/Team Members/Team Members/Sakshi - Scroll stopping specialist.jpg",
    },
    {
        title: "Shreya - Head of Aesthetic Affairs",
        src: "/Team Members/Team Members/Shreya - Head of Aesthetic Affairs.jpg",
    },
    {
        title: "Nivaan - Team Member",
        src: "/Team Members/Team Members/Nivaan - .jpg",
    }
]

const values = [
    {
        icon: <Target className="w-8 h-8" />,
        title: "Let's Kick Off with a Vibe Check"
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Plan the Adventure"
    },
    {
        icon: <Eye className="w-8 h-8" />,
        title: "Make it Awesome"
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: "High-Five the Results"
    }
]

const testimonials = [
    {
        name: "Sarah Johnson",
        designation: "CEO, TechCorp",
        image: "/img.png",
        text: "More than just a service provider, this agency has become a vital part of our team! Their tailored marketing strategies have not only increased our sales but have also enhanced our overall brand strategy."
    },
    {
        name: "Michael Chen",
        designation: "CTO, StartupXYZ",
        image: "/img.png",
        text: "Working with this agency transformed our entire digital strategy. The results exceeded our expectations and the team was professional throughout the entire process."
    },
    {
        name: "Emily Davis",
        designation: "Marketing Director, HealthTech",
        image: "/img.png",
        text: "Their creative approach and attention to detail made all the difference. Our brand identity is now stronger than ever and resonates perfectly with our target audience."
    },
    {
        name: "David Wilson",
        designation: "Founder, EcoGreen",
        image: "/img.png",
        text: "Even after project completion, their support has been outstanding. They truly care about our success and continue to provide valuable insights."
    },
]

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDirection(1)
            setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
        }, 4000)

        return () => clearInterval(intervalId)
    }, [])

    const handlePrevious = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    const currentTestimonial = testimonials[currentIndex]

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 30 : -30,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -30 : 30,
            opacity: 0,
        }),
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-yellow-50 via-white to-amber-50 relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="yellow" />

            {/* soft background blobs */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-200/50 blur-3xl" />
                <div className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-yellow-300/30 blur-3xl" />
            </div>

            <main className="relative pt-24 pb-24">
                {/* Hero */}
                <section className="px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                        >
                            {/* Text Content */}
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                                    <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-700 via-amber-600 to-yellow-600">
                                        About Us
                                    </span>
                                </h1>

                                <p className="mt-6 text-lg md:text-xl text-gray-800/90 leading-relaxed">
                                    We're three friends who turned our group chat into a digital powerhouse.
                                    We're that rare breed of digital marketing agency that actually likes each other. Founded by three friends (yes, we're still talking), we decided to turn our shared obsession with pixels and witty captions into your brand's{" "}
                                    <span className="text-yellow-700 font-semibold">digital superpower</span>. We don't just 'boost engagement'; we conjure online magic, minus the rabbits. Think strategic brains, creative sparks, and just enough caffeine to keep the algorithms guessing.
                                </p>
                            </div>

                            {/* Three Friends Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <img
                                    src="/3Friends.jpg"
                                    alt="The three founders of Social VRTX"
                                    className="w-full h-auto border-4 border-yellow-400 shadow-[12px_12px_0px_0px_rgba(251,191,36,0.4)]"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Tagline */}
                <section className="mt-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="inline-block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 p-[2px] shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)]">
                                <div className="bg-white/90 backdrop-blur-sm px-8 py-4">
                                    <p className="text-xl md:text-2xl font-black uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-amber-600 to-yellow-600">
                                        ✨ Creating Buzz, Breaking Feeds, Building Brands! ✨
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="mt-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className="group relative border-2 border-yellow-300 bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm p-8 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(251,191,36,0.5)] hover:translate-x-1 hover:-translate-y-1 transition-all overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-200/50 to-transparent" />
                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-[4px_4px_0px_0px_rgba(251,191,36,0.4)]">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <span className="text-sm font-black uppercase tracking-wider text-yellow-700">Our Mission</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        We Make Brands{" "}
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-600">Unscrollable!</span>
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We don't chase trends—we <span className="font-semibold text-yellow-700">create them</span>. Our mission is simple: Make your brand so cool, so engaging, so ridiculously shareable that people stop scrolling, start talking, and never forget you. Algorithms fear us, engagement loves us, and your brand? It's about to go <span className="font-semibold text-yellow-700">viral</span>.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Vision */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="group relative border-2 border-yellow-300 bg-gradient-to-br from-amber-50/80 to-white/80 backdrop-blur-sm p-8 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(251,191,36,0.5)] hover:translate-x-1 hover:-translate-y-1 transition-all overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-200/50 to-transparent" />
                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-br from-amber-400 to-yellow-500 text-white shadow-[4px_4px_0px_0px_rgba(251,191,36,0.4)]">
                                            <Eye className="w-6 h-6" />
                                        </div>
                                        <span className="text-sm font-black uppercase tracking-wider text-amber-700">Our Vision</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        The Feed Belongs to{" "}
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600">Us</span>
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        The future of social media belongs to the <span className="font-semibold text-amber-700">bold</span>, the witty, and the ones who dare to disrupt. We're here to build brands that don't just exist online but <span className="font-semibold text-amber-700">own the space</span>—from viral moments to cult-like communities. If you're ready to stop blending in and start standing out, welcome to the <span className="font-bold text-amber-700">VRTX</span>.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="mt-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch"
                        >
                            <div className="lg:col-span-5">
                                <div className="h-full border-2 border-yellow-300 bg-linear-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm p-8 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)]">
                                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
                                        Why Choose Us
                                    </h2>
                                    <p className="mt-4 text-gray-700 leading-relaxed">
                                        We are your digital matchmakers, finding your brand's perfect online audience and making them{" "}
                                        <span className="text-yellow-700 font-bold">fall in love</span>.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="h-full border-2 border-yellow-300 bg-white/70 backdrop-blur-sm p-8 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)]">
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Fueled by a passion for digital innovation, Social Vrtx is dedicated to driving your brand's success. We believe in close collaboration, crafting strategies that make a real impact.
                                    </p>

                                    <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                                        {["Strategy", "Creativity", "Consistency", "Collaboration"].map((chip) => (
                                            <span
                                                key={chip}
                                                className="border-2 border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-black uppercase tracking-wide text-gray-900 shadow-[4px_4px_0px_0px_rgba(251,191,36,0.3)]"
                                            >
                                                {chip}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Our Process */}
                <section className="mt-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Our Process</h2>
                            <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
                                Here's how we turn your digital dreams into{" "}
                                <span className="text-yellow-700 font-bold">reality</span>, one awesome step at a time.
                            </p>
                        </motion.div>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="relative border-2 border-yellow-300 bg-linear-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm p-7 shadow-[6px_6px_0px_0px_rgba(251,191,36,0.3)] hover:shadow-[10px_10px_0px_0px_rgba(251,191,36,0.5)] hover:translate-x-1 hover:-translate-y-1 transition-all"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center justify-center h-12 w-12 bg-yellow-100 text-yellow-700 shadow-[4px_4px_0px_0px_rgba(251,191,36,0.3)]">
                                            {value.icon}
                                        </div>
                            
                                    </div>

                                    <h3 className="mt-5 text-lg font-black text-gray-900 uppercase tracking-wide">{value.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section (keep FocusCards intact) */}
                <section className="mt-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Meet Our Team</h2>
                            <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
                                Our diverse team of experts brings together{" "}
                                <span className="text-yellow-700 font-bold">creativity</span>, technical expertise, and strategic thinking.
                                Hover over the cards to focus on each team member.
                            </p>
                        </motion.div>

                        <div className="mt-10 border-2 border-yellow-300 bg-white/70 backdrop-blur-sm p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)]">
                            <motion.div
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <FocusCards cards={team} />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mt-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="border-2 border-yellow-300 bg-gradient-to-br from-white/80 to-amber-50/80 backdrop-blur-sm p-10 md:p-14 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)]"
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight text-center mb-10">
                                Our Collection of{" "}
                                <span className="text-yellow-700">Digital Love Letters</span>
                            </h2>

                            {/* Testimonial Carousel */}
                            <div className="relative max-w-3xl mx-auto">
                                <div className="flex items-center justify-center gap-4 md:gap-8">
                                    {/* Previous Button */}
                                    <button
                                        onClick={handlePrevious}
                                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-gray-900 font-black flex items-center justify-center shrink-0 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(251,191,36,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(251,191,36,0.5)] hover:translate-x-0.5 hover:-translate-y-0.5"
                                        aria-label="Previous testimonial"
                                    >
                                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                                    </button>

                                    {/* Testimonial Card */}
                                    <div className="flex-1 overflow-hidden bg-white">
                                        <AnimatePresence mode="popLayout" custom={direction}>
                                            <motion.div
                                                key={currentIndex}
                                                custom={direction}
                                                variants={variants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{
                                                    duration: 0.4,
                                                    type: "tween",
                                                    ease: [0.4, 0, 0.2, 1],
                                                }}
                                                className="bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(251,191,36,0.3)]"
                                            >
                                                <div className="flex flex-col items-center text-center">
                                                    {/* Avatar */}
                                                    <div className="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden mb-4 ring-4 ring-yellow-400 shadow-[4px_4px_0px_0px_rgba(251,191,36,0.4)]">
                                                        <img
                                                            src={currentTestimonial.image}
                                                            alt={currentTestimonial.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>

                                                    {/* Name and Designation */}
                                                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1 uppercase tracking-wide">
                                                        {currentTestimonial.name}
                                                    </h3>
                                                    <p className="text-yellow-600 font-semibold mb-4 uppercase text-xs sm:text-sm tracking-wider">
                                                        {currentTestimonial.designation}
                                                    </p>

                                                    {/* Testimonial Text */}
                                                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium">
                                                        "{currentTestimonial.text}"
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Next Button */}
                                    <button
                                        onClick={handleNext}
                                        className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 text-white font-black flex items-center justify-center shrink-0 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(251,191,36,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(251,191,36,0.5)] hover:translate-x-0.5 hover:-translate-y-0.5"
                                        aria-label="Next testimonial"
                                    >
                                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </button>
                                </div>

                                {/* Pagination Dots */}
                                <div className="flex justify-center gap-2 mt-8">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setDirection(index > currentIndex ? 1 : -1)
                                                setCurrentIndex(index)
                                            }}
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
                        </motion.div>
                    </div>
                </section>

                
            </main>
        </div>
    )
}