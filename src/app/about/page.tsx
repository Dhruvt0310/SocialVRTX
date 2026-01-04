"use client"

import { motion } from "framer-motion"
import { Users, Target, Eye, Heart } from "lucide-react"
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

export default function About() {
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
                            className="text-center"
                        >
                           

                            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight">
                                <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-700 via-amber-600 to-yellow-600">
                                    About Us
                                </span>
                            </h1>

                            <p className="mt-6 text-lg md:text-xl text-gray-800/90 max-w-4xl mx-auto leading-relaxed">
                                We're three friends who turned our group chat into a digital powerhouse.
                                We're that rare breed of digital marketing agency that actually likes each other. Founded by three friends (yes, we're still talking), we decided to turn our shared obsession with pixels and witty captions into your brand's{" "}
                                <span className="text-yellow-700 font-semibold">digital superpower</span>. We don't just 'boost engagement'; we conjure online magic, minus the rabbits. Think strategic brains, creative sparks, and just enough caffeine to keep the algorithms guessing.
                            </p>
                        </motion.div>
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
                                <div className="h-full rounded-3xl border border-yellow-200 bg-linear-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm p-8 shadow-sm">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                        Why Choose Us
                                    </h2>
                                    <p className="mt-4 text-gray-700 leading-relaxed">
                                        We are your digital matchmakers, finding your brand's perfect online audience and making them{" "}
                                        <span className="text-yellow-700 font-semibold">fall in love</span>.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="h-full rounded-3xl border border-yellow-200 bg-white/70 backdrop-blur-sm p-8 shadow-sm">
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Fueled by a passion for digital innovation, Social Vrtx is dedicated to driving your brand's success. We believe in close collaboration, crafting strategies that make a real impact.
                                    </p>

                                    <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                                        {["Strategy", "Creativity", "Consistency", "Collaboration"].map((chip) => (
                                            <span
                                                key={chip}
                                                className="rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-medium text-gray-800"
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
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Process</h2>
                            <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
                                Here's how we turn your digital dreams into{" "}
                                <span className="text-yellow-700 font-semibold">reality</span>, one awesome step at a time.
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
                                    className="relative rounded-3xl border border-yellow-200 bg-linear-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm p-7 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-yellow-100 text-yellow-700">
                                            {value.icon}
                                        </div>
                            
                                    </div>

                                    <h3 className="mt-5 text-lg font-semibold text-gray-900">{value.title}</h3>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
                            <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
                                Our diverse team of experts brings together{" "}
                                <span className="text-yellow-700 font-semibold">creativity</span>, technical expertise, and strategic thinking.
                                Hover over the cards to focus on each team member.
                            </p>
                        </motion.div>

                        <div className="mt-10 rounded-3xl border border-yellow-200 bg-white/70 backdrop-blur-sm p-6 md:p-8 shadow-sm">
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
                            className="rounded-3xl border border-yellow-200 bg-linear-to-br from-white/80 to-amber-50/80 backdrop-blur-sm p-10 md:p-14 text-center shadow-sm"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Our Collection of{" "}
                                <span className="text-yellow-700">Digital Love Letters</span>
                            </h2>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    )
}