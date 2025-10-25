"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        We Create
                        <span className="text-blue-600"> Digital Experiences</span>
                        <br />
                        That Drive Results
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Transform your business with our cutting-edge design and development solutions.
                        We help brands tell their story through exceptional digital experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-4">
                            Start Your Project
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                            View Our Work
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16"
                >
                    <div className="relative">
                        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">150+</div>
                                    <div className="text-gray-600">Projects Completed</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">50+</div>
                                    <div className="text-gray-600">Happy Clients</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">5+</div>
                                    <div className="text-gray-600">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                                    <div className="text-gray-600">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}