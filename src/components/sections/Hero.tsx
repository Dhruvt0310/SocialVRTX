"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";

const products = [
  {
    title: "E-commerce Platform",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "Brand Identity Design",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "Mobile App Development",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "Digital Marketing Campaign",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "SaaS Dashboard",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "Corporate Website",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "Social Media Strategy",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "Content Management System",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "SEO Optimization",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "Analytics Dashboard",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "User Experience Design",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "Marketing Automation",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "Cloud Infrastructure",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "API Development",
    link: "#",
    thumbnail: "/img.png",
  },
  {
    title: "Performance Optimization",
    link: "#",
    thumbnail: "/img.png",
  },
];

export default function Hero() {
  return (
    <div className="relative">
      <HeroParallax products={products} />
      <div className="absolute inset-0 flex items-center justify-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>
    </div>
  );
}