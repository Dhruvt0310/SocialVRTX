"use client"

import { motion } from "framer-motion"

const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLab", logo: "IL" },
    { name: "DigitalFlow", logo: "DF" },
    { name: "CreativeHub", logo: "CH" },
    { name: "FutureWorks", logo: "FW" },
    { name: "SmartSolutions", logo: "SS" }
]

export default function ClientLogos() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Trusted by Leading Companies
                    </h2>
                    <p className="text-gray-600">
                        We're proud to work with some of the most innovative companies in the industry.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-blue-600 font-bold text-lg">{client.logo}</span>
                                </div>
                                <div className="text-gray-700 font-medium text-sm">{client.name}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}