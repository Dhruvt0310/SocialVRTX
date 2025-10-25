"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export default function CTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Let's work together to create something amazing. Get in touch with us today
                        and let's discuss how we can help bring your vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                            <Mail className="mr-2 w-5 h-5" />
                            Get Free Consultation
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
                            View Our Portfolio
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}