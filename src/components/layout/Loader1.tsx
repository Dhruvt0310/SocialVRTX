"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Bulb from "../sections/Bulb";
import Image from "next/image";

export default function Loader1() {
  const [isRollingUp, setIsRollingUp] = useState(false);

  useEffect(() => {
    // Lock scroll only (this is safe)
    document.body.style.overflow = "hidden";

    const rollTimer = setTimeout(() => {
      setIsRollingUp(true);
    }, 3000);

    return () => {
      clearTimeout(rollTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-slate-900 overflow-hidden"
      initial={{ y: 0 }}
      animate={isRollingUp ? { y: "-100%" } : { y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      <div className="relative">
        <Bulb
          cordScale={1.8}
          cordOffsetX={380}
          cordOffsetY={-350}
          bulbScale={0.60}
          bulbOffsetX={-150}
          bulbOffsetY={-400}
          cordRadius={10}
        />
      </div>

      {/* S */}
      <div className="absolute left-[10%] top-[30%] pointer-events-none select-none">
        <Image src="/SV/S.svg" alt="S" width={100} height={100} draggable={false} />
      </div>

      {/* C I A L */}
      <div className="absolute left-[32%] top-[30%] flex -space-x-15 pointer-events-none select-none">
        <Image src="/SV/C.svg" alt="C" width={110} height={110} draggable={false} />
        <Image src="/SV/I.svg" alt="I" width={110} height={110} draggable={false} />
        <Image src="/SV/A.svg" alt="A" width={110} height={110} draggable={false} />
        <Image src="/SV/L.svg" alt="L" width={110} height={110} draggable={false} />
      </div>

      {/* V R T X */}
      <div className="absolute left-[17%] top-[40%] flex -space-x-15 pointer-events-none select-none">
        <Image src="/SV/V.svg" alt="V" width={110} height={110} draggable={false} />
        <Image src="/SV/R.svg" alt="R" width={110} height={110} draggable={false} />
        <Image src="/SV/T.svg" alt="T" width={110} height={110} draggable={false} />
        <Image src="/SV/X.svg" alt="X" width={110} height={110} draggable={false} />
      </div>
    </motion.div>
  );
}