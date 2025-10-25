"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const clients = [
  {
    name: "TechCorp",
    quote: "Innovative solutions that transformed our digital presence",
    title: "Fortune 500 Technology Company"
  },
  {
    name: "StartupXYZ",
    quote: "From concept to market leader in just 12 months",
    title: "Fintech Startup"
  },
  {
    name: "HealthTech Solutions",
    quote: "User-centered design that improved patient outcomes",
    title: "Healthcare Technology"
  },
  {
    name: "EcoGreen Industries",
    quote: "Sustainable branding that resonates with our values",
    title: "Environmental Services"
  },
  {
    name: "RetailMax",
    quote: "E-commerce platform that tripled our online sales",
    title: "Retail Chain"
  },
  {
    name: "EduLearn Platform",
    quote: "Educational technology that engages students worldwide",
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
    <div className="py-20 bg-black/[0.96] antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {logoClients.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-lg hover:border-neutral-600 transition-colors"
              >
                <div className="text-4xl mb-2">{client.logo}</div>
                <span className="text-neutral-300 text-sm font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Moving Testimonials */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-12">
            What Our Clients Say
          </h3>
          <InfiniteMovingCards
            items={clients}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}