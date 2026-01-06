"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { AceternityButton } from "@/components/ui/aceternity-button";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-yellow-50 via-white to-amber-50 relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="yellow" />

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-200/50 blur-3xl" />
        <div className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-yellow-300/30 blur-3xl" />
      </div>

      <main className="relative pt-24 pb-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-700 via-amber-600 to-yellow-600">
                  Get In Touch
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-800/90 leading-relaxed max-w-2xl mx-auto">
                Ready to transform your brand? Let’s discuss your next project and create something
                <span className="text-yellow-700 font-semibold"> amazing </span>
                together.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 mt-16">
              <div className="flex-1 space-y-8">
                <div className="group relative border-2 border-yellow-300 bg-linear-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm p-8 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(251,191,36,0.5)] hover:-translate-y-1 hover:translate-x-1 transition-all">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase">
                    Send Us a Message
                  </h2>
                  <form className="space-y-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border-2 border-yellow-300 bg-white/70 text-gray-900 placeholder-gray-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border-2 border-yellow-300 bg-white/70 text-gray-900 placeholder-gray-500 focus:outline-none"
                    />
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 border-2 border-yellow-300 bg-white/70 text-gray-900 placeholder-gray-500 focus:outline-none resize-none"
                    />
                    <AceternityButton
                      variant="primary"
                      size="md"
                      className="w-full bg-yellow-400 text-black font-black shadow-[4px_4px_0px_0px_rgba(251,191,36,0.4)] hover:shadow-[6px_6px_0px_0px_rgba(251,191,36,0.6)]"
                    >
                      Send Message
                    </AceternityButton>
                  </form>
                </div>

                <div className="border-2 border-yellow-300 bg-white/70 backdrop-blur-sm p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)]">
                  <h3 className="text-xl font-black uppercase text-gray-900 mb-4">
                    Our Contact Information
                  </h3>
                  <div className="space-y-3 text-gray-800">
                    <p><span className="font-black">Email:</span> admin@socialvrtx.com</p>
                    <p><span className="font-black">Mobile:</span> 9967606958</p>
                    <p>
                      <span className="font-black">Address:</span><br />
                      C-4, Nemi Krishna, Jethwa Nagar,<br />
                      Kandivali West, Mumbai
                    </p>
                    <p>
                      <span className="font-black">Hours:</span><br />
                      Monday – Friday: 10:00 – 6:00<br />
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="border-2 border-yellow-300 bg-white/70 backdrop-blur-sm p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)]">
                  <h3 className="text-xl font-black uppercase text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4 text-black">
                    <a
                      href="https://www.instagram.com/socialvrtxmarketing/"
                      target="_blank"
                      className="px-6 py-4 border-2 border-yellow-300 bg-yellow-100 font-black shadow-[4px_4px_0px_0px_rgba(251,191,36,0.3)]"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/social-vrtx/"
                      target="_blank"
                      className="px-6 py-4 border-2 border-yellow-300 bg-white font-black shadow-[4px_4px_0px_0px_rgba(251,191,36,0.3)]"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="border-2 border-yellow-300 bg-white/70 backdrop-blur-sm p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)]">
                  <h3 className="text-xl font-black uppercase text-gray-900 mb-4">
                    Find Us
                  </h3>
                  <div className="w-full h-[320px] border-2 border-yellow-300">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.764123505481!2d72.85175559999999!3d19.205502100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7277d3b2927%3A0x3f537b2b6cbc6460!2sNemi%20Krishna%20Society%2C%20Bajaj%20Cross%20Road%2C%20Kandivali%2C%20Jethava%20Nagar%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1764060604213!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="border-2 border-yellow-300 bg-white/70 backdrop-blur-sm p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)]">
                  <h3 className="text-xl font-black uppercase text-gray-900 mb-4">
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <AceternityButton
                      className="bg-green-500 text-white font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
                      onClick={() => window.open("https://wa.me/919967606958")}
                    >
                      WhatsApp
                    </AceternityButton>
                    <AceternityButton
                      className="bg-yellow-400 text-black font-black shadow-[4px_4px_0px_0px_rgba(251,191,36,0.4)]"
                      onClick={() => window.open("tel:+919967606958")}
                    >
                      Call Now
                    </AceternityButton>
                    <AceternityButton
                      variant="outline"
                      className="border-2 border-black font-black"
                      onClick={() =>
                        window.open("mailto:admin@socialvrtx.com?subject=Request Quote")
                      }
                    >
                      Get Quote
                    </AceternityButton>
                  </div>
                </div>

                <div className="border-2 border-yellow-300 bg-white/70 backdrop-blur-sm p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)]">
                  <h3 className="text-xl font-black uppercase text-gray-900 mb-4">
                    Business Hours
                  </h3>
                  <p className="font-black text-yellow-600">Monday - Friday: 10:00 - 18:00</p>
                  <p className="font-black text-red-600">Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
