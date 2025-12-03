"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SparklesCore } from "@/components/ui/sparkles";

const testimonials = [
  {
    quote: "Innovative solutions that transformed our digital presence and increased our conversion rates by 300%.",
    name: "TechCorp",
    title: "Fortune 500 Technology Company"
  },
  {
    quote: "From concept to market leader in just 12 months. Their strategic approach was game-changing.",
    name: "StartupXYZ",
    title: "Fintech Startup"
  },
  {
    quote: "User-centered design that improved patient outcomes and streamlined our healthcare processes.",
    name: "HealthTech Solutions",
    title: "Healthcare Technology"
  },
  {
    quote: "Sustainable branding that resonates with our values and connects with environmentally conscious consumers.",
    name: "EcoGreen Industries",
    title: "Environmental Services"
  },
  {
    quote: "E-commerce platform that tripled our online sales and enhanced customer experience significantly.",
    name: "RetailMax",
    title: "Retail Chain"
  },
  {
    quote: "Educational technology that engages students worldwide and revolutionized online learning.",
    name: "EduLearn Platform",
    title: "EdTech Company"
  }
];

const logoClients = [
  { name: "Microsoft", logo: "🏢" },
  { name: "Google", logo: "🔍" },
  { name: "Apple", logo: "🍎" },
  { name: "Amazon", logo: "📦" },
  { name: "Netflix", logo: "🎬" },
  { name: "Spotify", logo: "🎵" },
  { name: "Uber", logo: "🚗" },
  { name: "Airbnb", logo: "🏠" },
];

export default function ClientLogos() {
  return (
    <div className="py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            We've had the privilege of working with some of the world's most innovative companies.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
            {logoClients.map((client, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-6 bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-neutral-600 hover:bg-black/70 transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{client.logo}</div>
                <span className="text-neutral-300 text-xs font-medium group-hover:text-white transition-colors duration-300">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Moving Testimonials */}
        <div className="relative">
          <h3 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-12">
            What Our Clients Say
          </h3>
          <div className="relative">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className="py-4"
            />
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <SparklesCore
        id="clientlogos-sparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={40}
        className="w-full h-full absolute inset-0"
        particleColor="#FFFFFF"
      />
    </div>
  );
}