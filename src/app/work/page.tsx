"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Tabs } from "@/components/ui/tabs";
import { Compare } from "@/components/ui/compare";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AceternityButton } from "@/components/ui/aceternity-button";

const projects = [
  {
    title: "E-commerce Platform Redesign",
    description: "Complete redesign and development of a modern e-commerce platform with 300% increase in conversions.",
    link: "#",
    category: "Web Development"
  },
  {
    title: "Brand Identity for Tech Startup",
    description: "Full brand identity design including logo, guidelines, and marketing materials for a fintech startup.",
    link: "#",
    category: "Branding"
  },
  {
    title: "Mobile App for Healthcare",
    description: "User-friendly mobile application for healthcare providers with 50k+ downloads in first month.",
    link: "#",
    category: "Mobile"
  },
  {
    title: "Digital Marketing Campaign",
    description: "Multi-channel digital marketing campaign that generated 500% ROI for B2B client.",
    link: "#",
    category: "Digital Marketing"
  },
  {
    title: "SaaS Dashboard Design",
    description: "Intuitive dashboard design for SaaS platform with improved user engagement by 200%.",
    link: "#",
    category: "UI/UX Design"
  },
  {
    title: "Corporate Website",
    description: "Modern corporate website with custom CMS and advanced analytics integration.",
    link: "#",
    category: "Web Development"
  }
];

const testimonials = [
  {
    quote: "Working with this agency transformed our digital presence completely. The results exceeded our expectations.",
    name: "Sarah Johnson",
    title: "CEO, TechCorp"
  },
  {
    quote: "Their attention to detail and creative approach made all the difference in our rebranding project.",
    name: "Michael Chen",
    title: "Marketing Director, StartupXYZ"
  },
  {
    quote: "The team delivered exceptional results on time and within budget. Highly recommended!",
    name: "Emily Davis",
    title: "Founder, HealthTech Solutions"
  }
];

const caseStudies = [
  {
    title: "E-commerce Success Story",
    description: "How we increased online sales by 300% through strategic redesign and optimization.",
    image: "/img.png",
    results: ["300% increase in conversions", "50% reduction in bounce rate", "200% increase in average order value"],
    category: "E-commerce"
  },
  {
    title: "Brand Transformation",
    description: "Complete brand overhaul that positioned our client as an industry leader.",
    image: "/img.png",
    results: ["Brand recognition up 400%", "Market share increased by 25%", "Customer loyalty improved by 60%"],
    category: "Branding"
  },
  {
    title: "Mobile App Launch",
    description: "From concept to 50k downloads - a mobile app success story.",
    image: "/img.png",
    results: ["50k+ downloads in month 1", "4.8 star rating", "Featured in App Store"],
    category: "Mobile"
  }
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <TextGenerateEffect 
            words="Our Work Speaks for Itself"
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          />
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Project Categories */}
        <Tabs
          tabs={[
            {
              title: "All Projects",
              value: "all",
              content: <HoverEffect items={projects} />
            },
            {
              title: "Branding",
              value: "branding",
              content: <HoverEffect items={projects.filter(p => p.category === "Branding")} />
            },
            {
              title: "Web Development",
              value: "web",
              content: <HoverEffect items={projects.filter(p => p.category === "Web Development")} />
            },
            {
              title: "Mobile",
              value: "mobile",
              content: <HoverEffect items={projects.filter(p => p.category === "Mobile")} />
            },
            {
              title: "Digital Marketing",
              value: "digital",
              content: <HoverEffect items={projects.filter(p => p.category === "Digital Marketing")} />
            },
            {
              title: "UI/UX Design",
              value: "uiux",
              content: <HoverEffect items={projects.filter(p => p.category === "UI/UX Design")} />
            }
          ]}
          containerClassName="mb-20"
        />

        {/* Case Studies */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-12">
            Featured Case Studies
          </h2>
          
          <BentoGrid className="max-w-4xl mx-auto">
            {caseStudies.map((study, i) => (
              <BentoGridItem
                key={i}
                title={study.title}
                description={study.description}
                header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>

        {/* Before/After Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-12">
            Before & After Results
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Compare
              firstImage="/img.png"
              secondImage="/img.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[250px] md:h-[500px] w-full"
              slideMode="hover"
            />
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-12">
            What Our Clients Say
          </h2>
          
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* CTA Section */}
        <div className="text-center bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our proven strategies and creative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AceternityButton variant="primary" size="lg">
              Start a Project
            </AceternityButton>
            <AceternityButton variant="secondary" size="lg">
              View Portfolio
            </AceternityButton>
          </div>
        </div>
      </div>
    </div>
  );
}