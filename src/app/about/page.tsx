"use client"

import { motion } from "framer-motion"
import { Users, Target, Eye, Heart, Award } from "lucide-react"
import { FocusCards } from "@/components/ui/focus-cards"
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
        title: "Let's Kick Off with a Vibe Check",
        description: "We start by understanding your brand's personality and goals to create the perfect digital strategy."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Plan the Adventure",
        description: "We craft a comprehensive roadmap tailored to your brand's unique journey and objectives."
    },
    {
        icon: <Eye className="w-8 h-8" />,
        title: "Make it Awesome",
        description: "We bring your vision to life with creative execution and cutting-edge digital strategies."
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: "High-Five the Results",
        description: "We celebrate your success together and continuously optimize for even better outcomes."
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
                        <div className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
                            Creating Buzz, Breaking Feeds, Building Brands!
                        </div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're three friends who turned our group chat into a digital powerhouse. 
                            We're that rare breed of digital marketing agency that actually likes each other. Founded by three friends (yes, we're still talking), we decided to turn our shared obsession with pixels and witty captions into your brand's digital superpower. We don't just 'boost engagement'; we conjure online magic, minus the rabbits. Think strategic brains, creative sparks, and just enough caffeine to keep the algorithms guessing.
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
                                We are your digital matchmakers, finding your brand's perfect online audience and making them fall in love.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Fueled by a passion for digital innovation, Social Vrtx is dedicated to driving your brand's success. We believe in close collaboration, crafting strategies that make a real impact.
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
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission: We Make Brands Unscrollable!</h3>
                            <p className="text-gray-600">
                                We don't chase trends—we create them. Our mission is simple: Make your brand so cool, so engaging, so ridiculously shareable that people stop scrolling, start talking, and never forget you. Algorithms fear us, engagement loves us, and your brand? It's about to go viral.
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
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision: The Feed Belongs to Us (And Our Clients)</h3>
                            <p className="text-gray-600">
                                The future of social media belongs to the bold, the witty, and the ones who dare to disrupt. We're here to build brands that don't just exist online but own the space—from viral moments to cult-like communities. If you're ready to stop blending in and start standing out, welcome to the VRTX.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            We are your digital matchmakers, finding your brand's perfect online audience and making them fall in love. 
                            Fueled by a passion for digital innovation, Social Vrtx is dedicated to driving your brand's success. We believe in close collaboration, crafting strategies that make a real impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Process */}
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
                            Our Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Here's how we turn your digital dreams into reality, one awesome step at a time.
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
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Our diverse team of experts brings together creativity, technical expertise, and strategic thinking. 
                            Hover over the cards to focus on each team member.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <FocusCards cards={team} />
                    </motion.div>
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