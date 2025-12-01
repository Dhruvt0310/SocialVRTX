"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Bulb from "../sections/Bulb";
import Image from "next/image";

export default function Loader() {
  const [isRollingUp, setIsRollingUp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Hide navbar during loader
    const navbar = document.querySelector("nav");
    if (navbar) navbar.style.display = "none";

    // Disable scroll while loader is active
    document.body.style.overflow = "hidden";

    const hasLoadedBefore = sessionStorage.getItem("siteLoaded");

    if (hasLoadedBefore) {
      setIsLoading(false);
      setHasLoaded(true);
      document.body.style.overflow = "auto";
      if (navbar) navbar.style.display = "flex";
      return;
    }

    // === Trigger roll-up animation after 5 seconds ===
    const rollTimer = setTimeout(() => {
      setIsRollingUp(true);
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("siteLoaded", "true");
        document.body.style.overflow = "auto";
        if (navbar) navbar.style.display = "flex";
        setHasLoaded(true);
      }, 1200); // matches roll-up animation duration
    }, 4000);

    return () => clearTimeout(rollTimer);
  }, []);

  if (hasLoaded) return null;

  return (
    <motion.div
      className="bulb fixed inset-0 z-999 bg-slate-900 overflow-hidden"
      initial={{ y: 0, opacity: 1 }}
      animate={
        isRollingUp
          ? { y: "-100%", opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }
          : { y: 0, opacity: 1 }
      }
    >
      {/* Bulb component */}
      <div className="relative">
        <Bulb originX="36%" originY="35%" autoPullDelay={700} />
      </div>

      <div className="absolute left-[20%] top-[24%] select-none pointer-events-none">
        <Image
          src={"/S.png"}
          alt="Loader visual"
          width={200}
          height={200}
          className="object-contain opacity-90 select-none pointer-events-none"
          draggable={false}
        />
      </div>

      <div className="absolute left-[38%] top-[27%] select-none pointer-events-none">
        <Image
          src={"/CIAL.png"}
          alt="Loader visual"
          width={600}
          height={650}
          className="object-contain opacity-90 select-none pointer-events-none"
          draggable={false}
        />
      </div>

      <div className="absolute left-[30%] top-[55%] select-none pointer-events-none">
        <Image
          src={"/VRTX.png"}
          alt="Loader visual"
          width={600}
          height={650}
          className="object-contain opacity-90 select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
