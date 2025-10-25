"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SparklesCore } from "@/components/ui/sparkles";

const services = [
  {
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that build brand awareness, engage audiences, and drive conversions across all platforms.",
    link: "#"
  },
  {
    title: "Performance Marketing",
    description: "Data-driven paid advertising campaigns across Google, Facebook, Instagram, and other platforms to maximize ROI.",
    link: "#"
  },
  {
    title: "Content Marketing",
    description: "Compelling content strategies that tell your brand story and engage your target audience at every touchpoint.",
    link: "#"
  },
  {
    title: "Influencer Marketing",
    description: "Strategic partnerships with influencers and content creators to amplify your brand reach and credibility.",
    link: "#"
  },
  {
    title: "Marketing Automation",
    description: "Advanced automation systems that nurture leads, personalize customer journeys, and scale your marketing efforts.",
    link: "#"
  },
  {
    title: "Analytics & Insights",
    description: "Comprehensive tracking and analysis to measure campaign performance and optimize your marketing strategies.",
    link: "#"
  }
];

const bentoItems = [
  {
    title: "Strategy First",
    description: "Every project starts with a comprehensive strategy to ensure we're solving the right problems.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>,
  },
  {
    title: "Creative Excellence",
    description: "Award-winning creative solutions that stand out in today's competitive landscape.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>,
  },
  {
    title: "Technical Expertise",
    description: "Cutting-edge technology implementation with a focus on performance and scalability.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>,
  },
  {
    title: "Results Driven",
    description: "We measure success through your business growth and customer satisfaction.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>,
  },
];

export default function Services() {
  return (
    <div className="py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            What We're Good At
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            SocialVRTX combines data-driven strategies, creative content, and cutting-edge technology to deliver exceptional marketing results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <HoverEffect items={services} />
        </div>

        {/* Why Choose Us - Bento Grid */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-12">
            Why Choose Us
          </h3>
          <BentoGrid className="max-w-4xl mx-auto">
            {bentoItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
      
      <SparklesCore
        id="services-sparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={100}
        className="w-full h-full absolute inset-0"
        particleColor="#FFFFFF"
      />
    </div>
  );
}