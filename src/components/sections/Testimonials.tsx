"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        image: "/api/placeholder/60/60",
        rating: 5,
        text: "Working with this agency was an absolute pleasure. They delivered exactly what we needed and exceeded our expectations."
    },
    {
        name: "Michael Chen",
        company: "Digital Solutions",
        image: "/api/placeholder/60/60",
        rating: 5,
        text: "The team's attention to detail and creative approach helped us achieve our goals. Highly recommended!"
    },
    {
        name: "Emily Davis",
        company: "Creative Studio",
        image: "/api/placeholder/60/60",
        rating: 5,
        text: "Professional, reliable, and innovative. They transformed our vision into reality with exceptional results."
    }
]

export default function Testimonials() {
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
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-lg"
                        >
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}