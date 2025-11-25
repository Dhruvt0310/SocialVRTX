"use client";

import { useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export default function Bulb() {
  const [isOn, setIsOn] = useState(false);
  const y = useMotionValue(0);

  const handleDragEnd = (_, info) => {
    if (info.offset.y > 80) {
      setIsOn((prev) => !prev);
    }
    animate(y, 0, { type: "spring", stiffness: 250, damping: 20 });
  };

  return (
    <motion.div
      className={`relative min-h-screen flex items-center justify-center transition-colors duration-700 ${
        isOn ? "bg-amber-100" : "bg-slate-900"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 600"
        className="h-[70vmin] overflow-visible"
        preserveAspectRatio="xMidYMin meet"
      >
        {/* ================== DEFINITIONS ================== */}
        <defs>
          {/* Bulb glass gradient */}
          <radialGradient id="bulbGradient" cx="0.3" cy="0.3" r="0.8">
            <stop offset="0%" stopColor={isOn ? "#fff9c4" : "#4a4a4a"} />
            <stop offset="50%" stopColor={isOn ? "#fef08a" : "#3a3a3a"} />
            <stop offset="100%" stopColor={isOn ? "#eab308" : "#2a2a2a"} />
          </radialGradient>

          {/* Metal base gradient */}
          <linearGradient id="capGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="20%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="80%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Reflection gradient */}
          <linearGradient id="reflectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="25%" stopColor="rgba(255,255,255,0.25)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ================== CORD SECTION ================== */}
        <motion.line
          x1="600"
          x2="600"
          y1="-300"
          y2="300"
          stroke={isOn ? "#cbd5e1" : "#475569"}
          strokeWidth="6"
          strokeLinecap="round"
          style={{ y }}
        />

        {/* Cord knob */}
        <motion.circle
          cx="600"
          cy="300"
          r="20"
          className={`cursor-grab active:cursor-grabbing ${
            isOn ? "fill-gray-300" : "fill-gray-600"
          }`}
          style={{ y }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 120 }}
          dragElastic={0.3}
          onDragEnd={handleDragEnd}
        />

        {/* ================== BULB SECTION ================== */}
        <g transform="translate(-200,100)">
          {/* Improved pear-shaped glass bulb */}
          <motion.path
            d="M 60 60 
               C 95 60, 115 90, 115 120
               C 115 155, 100 175, 85 195
               C 75 210, 70 225, 70 240
               L 50 240
               C 50 225, 45 210, 35 195
               C 20 175, 5 155, 5 120
               C 5 90, 25 60, 60 60 Z"
            fill="url(#bulbGradient)"
            stroke={isOn ? "#f9e07a" : "#444"}
            strokeWidth="2"
            filter={isOn ? "url(#glowFilter)" : "none"}
            transition={{ duration: 0.4 }}
          />

          {/* Reflection highlight for glass realism */}
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

          {/* Filament supports */}
          <line x1="60" y1="240" x2="60" y2="155" stroke="#666" strokeWidth="1.5" />
          <line x1="60" y1="155" x2="55" y2="145" stroke="#666" strokeWidth="1" />
          <line x1="60" y1="155" x2="65" y2="145" stroke="#666" strokeWidth="1" />

          {/* Filament */}
          <motion.g
            initial={{ opacity: isOn ? 1 : 0.3 }}
            animate={{ opacity: isOn ? [0.8, 1, 0.8] : 0.3 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            <path
              d="M 55 105 L 65 110 L 55 115 L 65 120 L 55 125 L 65 130 L 55 135 L 65 140 L 60 145"
              stroke={isOn ? "#ff9e2c" : "#333"}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 65 105 L 55 110 L 65 115 L 55 120 L 65 125 L 55 130 L 65 135 L 55 140 L 60 145"
              stroke={isOn ? "#ff9e2c" : "#333"}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Glow flicker when on */}
          {isOn && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
            >
              <path
                d="M 55 105 L 65 110 L 55 115 L 65 120 L 55 125 L 65 130 L 55 135 L 65 140 L 60 145"
                stroke="#ffef99"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
                filter="url(#glowFilter)"
              />
              <path
                d="M 65 105 L 55 110 L 65 115 L 55 120 L 65 125 L 55 130 L 65 135 L 55 140 L 60 145"
                stroke="#ffef99"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
                filter="url(#glowFilter)"
              />
            </motion.g>
          )}

          {/* Improved metal screw cap */}
          <g transform="translate(-5, 220)">
            {/* Base shape */}
            <path
              d="M 50 0 
                 L 80 0 
                 Q 85 0 85 3
                 L 85 25
                 Q 85 28 80 28
                 L 50 28
                 Q 45 28 45 25
                 L 45 3
                 Q 45 0 50 0 Z"
              fill="url(#capGradient)"
              stroke="#4b5563"
              strokeWidth="1"
            />

            {/* Screw ridges */}
            {[2, 5, 8, 11, 14, 17, 20, 23].map((offset) => (
              <path
                key={offset}
                d={`M 46 ${offset} Q 65 ${offset - 1} 84 ${offset}`}
                stroke="#6b7280"
                strokeWidth="1"
                fill="none"
              />
            ))}

            {/* Rim highlight */}
            <path
              d="M 50 0 L 80 0 Q 85 0 85 3"
              stroke="#f9fafb"
              strokeWidth="1.5"
              fill="none"
            />
          </g>

          {/* Glow aura */}
          {isOn && (
            <motion.ellipse
              cx="60"
              cy="140"
              rx="65"
              ry="90"
              stroke="hsl(50, 100%, 85%)"
              strokeWidth="6"
              strokeDasharray="15 15"
              fill="none"
              opacity="0.3"
              initial={{ opacity: 0.1, scale: 0.9 }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [0.9, 1.1, 0.9],
                rotate: [0, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Inner glow core */}
          {isOn && (
            <motion.ellipse
              cx="60"
              cy="140"
              rx="40"
              ry="55"
              fill="rgba(255, 255, 255, 0.25)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />
          )}
        </g>
      </svg>
    </motion.div>
  );
}
