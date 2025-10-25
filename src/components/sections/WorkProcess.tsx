"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Code2, Rocket } from "lucide-react"

const steps = [
    {
        icon: <Search className="w-8 h-8" />,
        title: "Discovery",
        description: "We start by understanding your business, goals, and target audience"
    },
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Strategy",
        description: "We develop a comprehensive strategy tailored to your specific needs"
    },
    {
        icon: <Code2 className="w-8 h-8" />,
        title: "Development",
        description: "Our team brings your vision to life with cutting-edge technology"
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Launch",
        description: "We deploy your project and provide ongoing support and optimization"
    }
]

export default function WorkProcess() {
    return (
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
                        Our Work Process
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We follow a proven process to ensure every project is delivered on time, on budget, and exceeds expectations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <div className="text-blue-600">{step.icon}</div>
                            </div>
                            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}