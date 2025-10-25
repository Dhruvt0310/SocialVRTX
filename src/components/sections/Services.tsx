"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Search, Globe, Zap } from "lucide-react"

const services = [
    {
        icon: <Code className="w-8 h-8" />,
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies"
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "UI/UX Design",
        description: "Beautiful, intuitive designs that enhance user experience"
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications"
    },
    {
        icon: <Search className="w-8 h-8" />,
        title: "SEO Optimization",
        description: "Improve your search rankings and online visibility"
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Digital Marketing",
        description: "Comprehensive digital marketing strategies that convert"
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Brand Strategy",
        description: "Build a strong brand identity that resonates with your audience"
    }
]

export default function Services() {
    return (
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
                        What We're Good At
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We specialize in creating digital solutions that help businesses grow and succeed in the modern world.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="text-blue-600 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}