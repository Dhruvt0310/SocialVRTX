"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20">
      {/* Decorative yellow circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-15" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Digital Marketing Excellence</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight"
            >
              Transform Your
              <span className="block mt-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Digital Presence
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-700 leading-relaxed max-w-xl"
            >
              We create data-driven marketing strategies that drive real results.
              From social media to SEO, we help your brand stand out and grow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                View Our Work
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              <div>
                <div className="text-3xl font-bold text-black">150+</div>
                <div className="text-sm text-gray-600">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative z-10 bg-white border-2 border-black rounded-3xl p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                Featured
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>

                <h3 className="text-2xl font-bold text-black">
                  3x Revenue Growth
                </h3>

                <p className="text-gray-700">
                  We helped a leading e-commerce brand triple their revenue through
                  strategic digital marketing and conversion optimization.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                    <div className="text-2xl font-bold text-black">+300%</div>
                    <div className="text-sm text-gray-600">Revenue</div>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                    <div className="text-2xl font-bold text-black">+42%</div>
                    <div className="text-sm text-gray-600">Conversion</div>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition-all flex items-center justify-center gap-2 group">
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-8 -left-8 bg-yellow-400 text-black p-6 rounded-2xl shadow-xl z-0 border-2 border-black"
            >
              <Zap className="w-8 h-8 mb-2" />
              <div className="text-2xl font-bold">Fast</div>
              <div className="text-sm">Results</div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-2xl shadow-xl z-0 border-2 border-yellow-400"
            >
              <Sparkles className="w-8 h-8 mb-2 text-yellow-400" />
              <div className="text-2xl font-bold">Creative</div>
              <div className="text-sm text-gray-300">Solutions</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24 text-center"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">
            Trusted by Leading Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["TechCorp", "InnovateLab", "DigitalFlow", "CreativeHub", "FutureWorks"].map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-2xl font-bold text-gray-300 hover:text-black transition-colors cursor-pointer"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}