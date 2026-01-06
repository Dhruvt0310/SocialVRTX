"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const logos = [
  "/logos/2Amigos.png",
  "/logos/Abhivyakti Logo.jpeg",
  "/logos/BB Logo.png",
  "/logos/Chocolate Confetti.jpg",
  "/logos/CK.jpg",
  "/logos/Dimsums & More.jpg",
  "/logos/Flamora.jpg",
  "/logos/House of Sash.jpg",
  "/logos/Incept Desgin.jpg",
  "/logos/Krazzy Computer Valley.jpg",
];

export default function Brands() {
  const centerLogoRef = useRef<HTMLImageElement | null>(null);
  const orbitRefs = useRef<HTMLDivElement[]>([]);
  const orbitImgRefs = useRef<HTMLImageElement[]>([]);
  const angleRef = useRef(0);
  const lastFrameRef = useRef<number | null>(null);
  const tickRef = useRef(0);

  const visibleCount = 8;
  const wheelSize = 75;
  const centerSize = 20;
  const itemSize = 12;
  const radius = 27;
  const rotationSpeed = 12;
  const switchIntervalMs = 1500;

  // ✅ Smooth circular animation
  useEffect(() => {
    const step = 360 / visibleCount;
    let animationFrameId: number;
    
    const animate = (t: number) => {
      if (!lastFrameRef.current) lastFrameRef.current = t;
      const dt = (t - lastFrameRef.current) / 1000;
      lastFrameRef.current = t;
      angleRef.current += rotationSpeed * dt;

      orbitRefs.current.forEach((div, i) => {
        if (!div) return;
        const angle = step * i + angleRef.current;
        const rad = (angle * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);
        div.style.transform = `translate(-50%, -50%) translate(${x}vmin, ${y}vmin)`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // ✅ Initial load
  useEffect(() => {
    for (let i = 0; i < visibleCount; i++) {
      if (orbitImgRefs.current[i]) {
        orbitImgRefs.current[i]!.src = logos[i % logos.length];
      }
    }
    if (centerLogoRef.current) {
      centerLogoRef.current.src = logos[0];
    }
  }, []);

  // ✅ Change 1 slot + center every 3s
  useEffect(() => {
    const total = logos.length;
    const interval = setInterval(() => {
      const tick = tickRef.current;
      const centerIndex = tick % total;
      const slot = tick % visibleCount;
      const orbitLogoIndex = (visibleCount + tick) % total;

      if (centerLogoRef.current) {
        centerLogoRef.current.src = logos[centerIndex];
      }

      const slotImg = orbitImgRefs.current[slot];
      if (slotImg) slotImg.src = logos[orbitLogoIndex];

      tickRef.current++;
    }, switchIntervalMs);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 text-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.1),transparent_50%)]" />
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-black/5 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Information */}
          <div className="space-y-8 max-w-xl">
            <div className="inline-block px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              ✨ Our Partners
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-black leading-tight drop-shadow-lg">
              Trusted by Leading Brands
            </h2>
            <p className="text-lg md:text-xl text-black/80 leading-relaxed font-medium drop-shadow-sm">
              We've had the privilege of partnering with industry-leading companies across various sectors. 
              Our commitment to excellence and innovation has made us the go-to choice for brands that demand 
              nothing but the best.
            </p>
            <p className="text-base md:text-lg text-black/70 leading-relaxed">
              From startups to Fortune 500 companies, we deliver tailored solutions that drive growth, 
              enhance user experiences, and create lasting impact. Each partnership is built on trust, 
              transparency, and a shared vision for success.
            </p>
            <div className="flex gap-4 items-center">
              <Link 
                href="/work"
                className="inline-block px-10 py-5 bg-white text-black font-bold rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
              >
                See More Brands →
              </Link>
              <div className="text-sm text-black/60 font-medium">
                10+ Partners
              </div>
            </div>
          </div>

          {/* Right Side - Circular Animation */}
          <div className="flex items-center justify-center relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full blur-3xl opacity-30 animate-pulse" />
            
            <div
              className="relative flex items-center justify-center"
              style={{ width: `${wheelSize}vmin`, height: `${wheelSize}vmin` }}
            >
              {/* ✅ Center Logo */}
              <div
                className="absolute flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-200 to-yellow-300 border-[5px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden backdrop-blur-sm"
                style={{
                  width: `${centerSize}vmin`,
                  height: `${centerSize}vmin`,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  ref={centerLogoRef}
                  className="w-full h-full object-cover pointer-events-none select-none"
                  draggable={false}
                />
              </div>

              {/* ✅ Orbit logos */}
              {Array.from({ length: visibleCount }).map((_, i) => (
                <div
                  key={i}
                  ref={(el) => { if (el) orbitRefs.current[i] = el; }}
                  className="absolute flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-200 to-yellow-300 border-[4px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] overflow-hidden backdrop-blur-sm"
                  style={{
                    width: `${itemSize}vmin`,
                    height: `${itemSize}vmin`,
                    left: "50%",
                    top: "50%",
                    willChange: "transform",
                  }}
                >
                  <img
                    ref={(el) => { if (el) orbitImgRefs.current[i] = el; }}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
