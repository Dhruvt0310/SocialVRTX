"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business, goals, and challenges. Through comprehensive research and analysis, we develop a strategic foundation that guides every decision throughout the project.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold">Research & Analysis</h3>
        </div>
      </div>
    ),
  },
  {
    title: "Design & Concept",
    description:
      "Our creative team transforms strategy into visual concepts. We create wireframes, prototypes, and design systems that bring your vision to life while ensuring optimal user experience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-6xl mb-4">🎨</div>
          <h3 className="text-2xl font-bold">Creative Design</h3>
        </div>
      </div>
    ),
  },
  {
    title: "Development & Build",
    description:
      "Using cutting-edge technologies and best practices, we build robust, scalable solutions. Our development process includes regular testing and quality assurance to ensure flawless execution.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--blue-500))] flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-6xl mb-4">⚙️</div>
          <h3 className="text-2xl font-bold">Technical Build</h3>
        </div>
      </div>
    ),
  },
  {
    title: "Launch & Optimize",
    description:
      "We handle the complete launch process and provide ongoing optimization. Through continuous monitoring and data analysis, we ensure your project delivers maximum results and ROI.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold">Launch & Growth</h3>
        </div>
      </div>
    ),
  },
];

export default function WorkProcess() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Our Work Process
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to launch.
          </p>
        </div>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}