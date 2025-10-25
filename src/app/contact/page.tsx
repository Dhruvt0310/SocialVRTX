import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AceternityButton } from "@/components/ui/aceternity-button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Get In Touch
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Ready to transform your brand? Let's discuss your next project and create something amazing together.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <AceternityButton variant="primary" size="md" className="w-full">
                Send Message
              </AceternityButton>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4 text-neutral-300">
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>hello@socialvrtx.com</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p>123 Creative Street<br />Design City, DC 12345</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Office Hours</p>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <AceternityButton variant="primary" size="md" className="w-full bg-green-500 hover:bg-green-600">
                  WhatsApp Chat
                </AceternityButton>
                <AceternityButton variant="primary" size="md" className="w-full">
                  Book a Call
                </AceternityButton>
                <AceternityButton variant="outline" size="md" className="w-full">
                  Request Quote
                </AceternityButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}