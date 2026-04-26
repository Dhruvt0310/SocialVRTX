"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { StarsBackground } from "@/components/ui/stars-background";

import { servicesData } from "./servicesData";

// ─── Layout constants ─────────────────────────────────────────────────────────
const CARD_VW = 0.32;
const CARD_MAX_PX = 420;
const CARD_MIN_PX = 260;
const GAP_PX = 40;
const VISIBLE_CARDS = 2;
const SCROLL_STEPS = servicesData.length - VISIBLE_CARDS;

function getCardW(): number {
    if (typeof window === "undefined") return 340;
    return Math.max(CARD_MIN_PX, Math.min(CARD_MAX_PX, window.innerWidth * CARD_VW));
}

function getStartX(): number {
    if (typeof window === "undefined") return 60;
    const vw = window.innerWidth;
    const cardW = getCardW();
    return (vw - 2 * cardW - GAP_PX) / 2;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const stickyZoneRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: stickyZoneRef,
        offset: ["start start", "end end"],
    });

    const xPx = useTransform(scrollYProgress, (p) => {
        const startX = getStartX();
        const cardW = getCardW();
        const travel = SCROLL_STEPS * (cardW + GAP_PX);
        return startX - p * travel;
    });

    return (
        <section ref={sectionRef} className="relative bg-black">

            {/* ⭐ ONLY ADDITION — SAFE BACKGROUND */}
            <StarsBackground className="pointer-events-none"   starDensity={0.00045}
  allStarsTwinkle={false}
  twinkleProbability={0.85}
  minTwinkleSpeed={0.3}
  maxTwinkleSpeed={0.7} />

            <Spotlight className="top-0 left-0 md:left-60" fill="white" />

            {/* ── Heading ── */}
            <div className="px-8 md:px-16 pt-24 pb-10 overflow-hidden">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#ffffff] leading-none">
                    Our Services
                </h2>

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mt-4 text-base md:text-lg text-[#f0ff9bae] max-w-xl"
                >
                    Comprehensive digital solutions tailored to elevate your brand
                    and drive measurable results.
                </motion.p>
            </div>

            {/* ── Sticky horizontal-scroll zone ── */}
            <div
                ref={stickyZoneRef}
                style={{ height: `${SCROLL_STEPS * 100}vh` }}
                className="relative"
            >
                <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
                    <motion.div
                        style={{ x: xPx, gap: `${GAP_PX}px` }}
                        className="flex items-stretch will-change-transform"
                    >
                        {servicesData.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({
    service,
    index,
}: {
    service: (typeof servicesData)[0];
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5)",
            }}
            className="flex-shrink-0 group relative"
            style={{
                width: `clamp(${CARD_MIN_PX}px, ${CARD_VW * 100}vw, ${CARD_MAX_PX}px)`,
                height: "clamp(440px, 74vh, 680px)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)",
                transition: "box-shadow 0.4s ease",
            }}
        >
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.08) 28%, transparent 50%)",
                    }}
                />

                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.2) 100%)",
                    }}
                />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end p-7 md:p-8">
                <div>
                    <h3 className="text-2xl md:text-[1.65rem] font-bold text-white leading-snug">
                        {service.title}
                    </h3>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                        <div className="overflow-hidden">
                            <p className="text-gray-300 text-sm leading-relaxed pt-4 pb-5">
                                {service.description}
                            </p>

                            <button className="w-full py-3 px-6 bg-white text-black font-bold hover:bg-gray-100 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                <span>Learn More</span>
                                <svg
  className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M17 8l4 4m0 0l-4 4m4-4H3"
  />
</svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}