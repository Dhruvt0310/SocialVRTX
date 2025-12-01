"use client"

import { motion } from "framer-motion"
import { Users, Target, Eye, Heart, Award } from "lucide-react"
import Bulb from "@/components/sections/Bulb"
const team = [
    {
        name: "John Smith",
        role: "CEO & Founder",
        image: "/img.png",
        bio: "10+ years of experience in digital strategy and business development."
    },
    {
        name: "Sarah Johnson",
        role: "Creative Director",
        image: "/img.png",
        bio: "Award-winning designer with expertise in brand identity and UX design."
    },
    {
        name: "Mike Chen",
        role: "Lead Developer",
        image: "/img.png",
        bio: "Full-stack developer specializing in modern web technologies."
    },
    {
        name: "Emily Davis",
        role: "Marketing Manager",
        image: "/img.png",
        bio: "Digital marketing expert with a focus on growth and conversion optimization."
    }
]

const values = [
    {
        icon: <Target className="w-8 h-8" />,
        title: "Excellence",
        description: "We strive for excellence in everything we do, delivering exceptional results that exceed expectations."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Collaboration",
        description: "We believe in the power of collaboration, working closely with our clients as partners."
    },
    {
        icon: <Eye className="w-8 h-8" />,
        title: "Innovation",
        description: "We stay ahead of the curve, embracing new technologies and creative approaches."
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: "Passion",
        description: "We're passionate about what we do and it shows in the quality of our work."
    }
]

const timeline = [
    { year: "2019", event: "Company Founded", description: "Started with a vision to transform digital experiences" },
    { year: "2020", event: "First Major Client", description: "Landed our first enterprise client and expanded the team" },
    { year: "2021", event: "Award Recognition", description: "Won 'Best Digital Agency' award from Industry Association" },
    { year: "2022", event: "International Expansion", description: "Opened offices in London and Toronto" },
    { year: "2023", event: "50+ Projects", description: "Successfully completed over 50 projects for clients worldwide" },
    { year: "2024", event: "Innovation Lab", description: "Launched our innovation lab focusing on AI and emerging technologies" }
]

export default function About() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            About SocialVRTX
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            SocialVRTX is a team of passionate marketers, strategists, and innovators dedicated to
                            helping businesses thrive through data-driven digital marketing solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Founded in 2019, SocialVRTX began with a simple mission: to bridge the gap between
                                innovative marketing technology and meaningful customer connections. What started as a small team
                                of marketers and strategists has grown into a full-service digital marketing agency.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Today, we work with clients ranging from startups to Fortune 500 companies,
                                helping them navigate the digital marketing landscape and achieve their business goals
                                through data-driven strategies and creative campaigns.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 rounded-lg p-8"
                        >
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">150+</div>
                                    <div className="text-gray-600">Projects Completed</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">50+</div>
                                    <div className="text-gray-600">Happy Clients</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">15+</div>
                                    <div className="text-gray-600">Team Members</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">5+</div>
                                    <div className="text-gray-600">Years Experience</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Interactive Bulb Section */}
            <section className="py-0">
                <Bulb />
            </section>y

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                To empower businesses with innovative digital solutions that drive growth,
                                enhance user experiences, and create lasting value in an ever-evolving digital landscape.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <Eye className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the leading digital agency that transforms how businesses connect with
                                their audiences through cutting-edge technology and exceptional design.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            These values guide everything we do and shape how we work with our clients and each other.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our diverse team of experts brings together creativity, technical expertise, and strategic thinking.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Journey
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From humble beginnings to industry recognition, here's how we've grown over the years.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                        <div className="bg-white p-6 rounded-lg shadow-sm">
                                            <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.event}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                                    </div>
                                    <div className="w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards & Recognition */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Awards & Recognition
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                            We're proud to be recognized by industry leaders for our exceptional work and innovation.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Digital Agency 2023</h3>
                                <p className="text-gray-600">Industry Association Award</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Excellence</h3>
                                <p className="text-gray-600">Tech Innovation Awards 2022</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Satisfaction</h3>
                                <p className="text-gray-600">Service Excellence Award 2021</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}