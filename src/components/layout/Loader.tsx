"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Bulb from "../sections/Bulb";
import Image from "next/image";

export default function Loader() {
  const [isRollingUp, setIsRollingUp] = useState(false);

  useEffect(() => {
    // Hide navbar and prevent scrolling
    const navbar = document.querySelector("nav");
    if (navbar) navbar.style.display = "none";
    document.body.style.overflow = "hidden";

    // Start roll-up animation after 2 seconds
    const rollTimer = setTimeout(() => {
      setIsRollingUp(true);
    }, 2000);

    // Cleanup function
    return () => {
      clearTimeout(rollTimer);
      // Restore navbar and scrolling when component unmounts
      document.body.style.overflow = "auto";
      if (navbar) navbar.style.display = "flex";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-slate-900 overflow-hidden"
      initial={{ y: 0 }}
      animate={isRollingUp ? { y: "-100%" } : { y: 0 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.4, 0.0, 0.2, 1] // Custom easing for smoother animation
      }}
    >
      <div className="relative">
        <Bulb
          cordScale={1}
          cordOffsetX={600}
          cordOffsetY={-10}
          bulbScale={0.65}
          bulbOffsetX={-200}
          bulbOffsetY={-210}
        />
      </div>

      {/* S */}
      <div className="absolute left-[28%] top-[27%] select-none pointer-events-none">
        <Image src="/SV/S.svg" alt="S" width={180} height={180} draggable={false} />
      </div>

      {/* C I A L */}
      <div className="absolute left-[40%] top-[27%] flex -space-x-20 select-none pointer-events-none">
        <Image src="/SV/C.svg" alt="C" width={180} height={180} draggable={false} />
        <Image src="/SV/I.svg" alt="I" width={180} height={180} draggable={false} />
        <Image src="/SV/A.svg" alt="A" width={180} height={180} draggable={false} />
        <Image src="/SV/L.svg" alt="L" width={180} height={180} draggable={false} />
      </div>

      {/* V R T X */}
      <div className="absolute left-[35%] top-[55%] flex -space-x-20 select-none pointer-events-none">
        <Image src="/SV/V.svg" alt="V" width={180} height={180} draggable={false} />
        <Image src="/SV/R.svg" alt="R" width={180} height={180} draggable={false} />
        <Image src="/SV/T.svg" alt="T" width={180} height={180} draggable={false} />
        <Image src="/SV/X.svg" alt="X" width={180} height={180} draggable={false} />
      </div>
    </motion.div>
  );
}
