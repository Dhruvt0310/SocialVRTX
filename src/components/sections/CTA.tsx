"use client";

import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Meteors } from "@/components/ui/meteors";
import { AceternityButton } from "@/components/ui/aceternity-button";

export default function CTA() {
  return (
    <div className="relative">
      {/* Main CTA with Lamp Effect */}
      <LampContainer>
        <div className="flex flex-col items-center justify-center relative z-10">
          <TextGenerateEffect
            words="Ready to Transform Your Business?"
            className="text-4xl md:text-6xl font-bold text-center text-white mb-8"
          />
          <p className="text-xl text-neutral-300 max-w-3xl text-center mb-12">
            Let's work together to create something amazing. Get in touch and let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <AceternityButton variant="primary" size="lg">
              Start Your Project
            </AceternityButton>
            <AceternityButton variant="secondary" size="lg">
              Schedule a Call
            </AceternityButton>
          </div>
        </div>
      </LampContainer>

      {/* Newsletter Section */}
      <div className="bg-black/[0.96] py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Industry Insights
          </h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest trends, tips, and case studies in digital marketing and design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500"
            />
            <AceternityButton variant="primary" size="md">
              Subscribe
            </AceternityButton>
          </div>
          
          <p className="text-neutral-400 text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
        
        <Meteors number={20} />
      </div>

      {/* Contact Quick Actions */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="text-xl font-bold text-white mb-2">Book a Call</h4>
              <p className="text-blue-100">Schedule a free consultation to discuss your project</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-xl font-bold text-white mb-2">Live Chat</h4>
              <p className="text-blue-100">Get instant answers to your questions via WhatsApp</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="text-xl font-bold text-white mb-2">Send Email</h4>
              <p className="text-blue-100">Drop us a line and we'll get back to you within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}