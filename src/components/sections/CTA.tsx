"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";

export default function CTA() {
  return (
    <div className="py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <TextGenerateEffect
            words="Ready to Transform Your Business?"
            className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8"
          />
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-12">
            Let's work together to create something amazing. Get in touch and let's discuss your next project.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors">
                Start Your Project
              </span>
            </button>
            
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors">
                Schedule a Call
              </span>
            </button>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="group relative p-8 bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-neutral-600 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="text-xl font-bold text-white mb-2">Book a Call</h4>
              <p className="text-neutral-300">Schedule a free consultation to discuss your project</p>
            </div>
          </div>
          
          <div className="group relative p-8 bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-neutral-600 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-xl font-bold text-white mb-2">Live Chat</h4>
              <p className="text-neutral-300">Get instant answers to your questions via WhatsApp</p>
            </div>
          </div>
          
          <div className="group relative p-8 bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-neutral-600 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="text-xl font-bold text-white mb-2">Send Email</h4>
              <p className="text-neutral-300">Drop us a line and we'll get back to you within 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="blue"
      />
      
      <SparklesCore
        id="cta-sparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={30}
        className="w-full h-full absolute inset-0"
        particleColor="#FFFFFF"
      />
      
      <BackgroundBeams />
    </div>
  );
}