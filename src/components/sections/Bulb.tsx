"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export default function Bulb({
  originX = "50%",
  originY = "50%",
  autoPullDelay = 500,

  // cord controls
  cordScale = 1,
  cordOffsetX = 0,
  cordOffsetY = 0,

  // bulb controls
  bulbScale = 1,
  bulbOffsetX = 0,
  bulbOffsetY = 0,
}) {
  const [isOn, setIsOn] = useState(false);
  const [irisActive, setIrisActive] = useState(false);
  const y = useMotionValue(0);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.y > 80) setIsOn((p) => !p);
    animate(y, 0, { type: "spring", stiffness: 250, damping: 20 });
  };

  useEffect(() => {
    if (isOn) {
      setIrisActive(true);
      const t = setTimeout(() => setIrisActive(false), 1500);
      return () => clearTimeout(t);
    }
  }, [isOn]);

  useEffect(() => {
    const t = setTimeout(() => {
      animate(y, 100, {
        duration: 0.8,
        ease: [0.3, 0, 0.2, 1],
        onComplete: () => {
          setIsOn((p) => !p);
          animate(y, [100, -20, 10, 0], {
            duration: 0.6,
            ease: "easeOut",
          });
        },
      });
    }, autoPullDelay);

    return () => clearTimeout(t);
  }, [autoPullDelay]);

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: isOn ? "#ffee42" : "#000c17" }}
    >
      {/* IRIS */}
      <motion.div
        key={isOn ? "on" : "off"}
        initial={{
          width: 0,
          height: 0,
          opacity: 0.8,
          borderRadius: "50%",
          position: "absolute",
          left: originX,
          top: originY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(255, 245, 154, 0.8) 0%, rgba(255, 236, 94, 0.6) 20%, rgba(255, 204, 0, 0.2) 60%, rgba(0,0,0,0) 100%)",
        }}
        animate={
          irisActive
            ? {
                width: ["0vw", "300vw"],
                height: ["0vw", "300vw"],
                opacity: [0.8, 0.7, 0],
                transition: { duration: 1.5, ease: "easeOut" },
              }
            : {}
        }
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 600"
        className="h-[70vmin] overflow-visible relative z-10"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <radialGradient id="bulbGradient" cx="0.3" cy="0.3" r="0.8">
            <stop offset="0%" stopColor={isOn ? "#fff9c4" : "#4a4a4a"} />
            <stop offset="50%" stopColor={isOn ? "#fef08a" : "#3a3a3a"} />
            <stop offset="100%" stopColor={isOn ? "#eab308" : "#2a2a2a"} />
          </radialGradient>

          <linearGradient id="capGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="20%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="80%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <linearGradient id="reflectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="25%" stopColor="rgba(255,255,255,0.25)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* CORD */}
        <motion.g
          style={{
            scale: cordScale,
            x: cordOffsetX,
            y: cordOffsetY,
          }}
        >
          <motion.line
            x1="150"
            x2="150"
            y1="-200"
            y2="260"
            stroke={isOn ? "#19461dff" : "#475569"}
            strokeWidth="6"
            strokeLinecap="round"
            style={{ y }}
          />
          <motion.circle
            cx="150"
            cy="260"
            r="20"
            fill={isOn ? "#19461dff" : "#4b5563"}
            style={{ y }}
          />
        </motion.g>

        {/* BULB */}
        <motion.g
          style={{
            scale: bulbScale,
            x: bulbOffsetX,
            y: bulbOffsetY,
          }}
        >
          <g transform="translate(90,260)">
            {/* GLASS */}
            <motion.path
              d="M 61 62 C 87 62 114 84 122 115 C 127 122 128 191 88 197 v 43 L 32 240 V 197 C -8 186 -8 122 -3 115 C 5 80 35 62 61 62 Z"
              fill="url(#bulbGradient)"
              stroke={isOn ? "#000000ff" : "#444"}
              strokeWidth={isOn ? "5" : "1"}
              filter={isOn ? "url(#glowFilter)" : "none"}
            />

            {/* REFLECTION */}
            <path
              d="M 45 75 
                 C 55 70, 65 80, 70 110 
                 C 75 140, 65 160, 55 180"
              fill="none"
              stroke="url(#reflectionGradient)"
              strokeWidth="5"
              opacity="0.6"
              strokeLinecap="round"
            />

            {/* FILAMENT */}
            <g transform="translate(-12, -15) scale(1.2)">
              <path
                d="
                 M 57 194 L 57 155 M 57 155 C 57 150 58 143 53 141 C 50 140 45 142 46 147 C 48 151 53 152 54 152 C 60 153 65 153 70 152 M 67 194 V 155 C 67 150 66 143 71 141 C 74 140 79 142 78 147 C 76 151 71 152 70 152
                "
                fill="none"
                stroke="#000000ff"
                strokeWidth={isOn ? "3" : "1"}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={isOn ? 1 : 0.35}
              />
            </g>

            {/* CAP */}
            <g transform="translate(-5,220)">
              <path
                d="M 50 0 L 80 0 L 94 0 Q 94 0 94 3 L 94 25 Q 94 28 89 28 L 41 28 Q 36 28 36 25 L 36 3 L 36 0 Z M 36 9 L 94 9 M 36 18 H 94"
                fill="url(#capGradient)"
                stroke="#000000ff"
                strokeWidth="4"
              />
            </g>
          </g>
        </motion.g>
      </svg>
    </motion.div>
  );
}
