"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("./Loader"), { ssr: false });

export default function ClientOnlyLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Remove SSR curtain smoothly
    const curtain = document.getElementById("ssr-curtain");
    if (curtain) {
      curtain.style.transition = "opacity 0.3s ease-out";
      curtain.style.opacity = "0";
      setTimeout(() => curtain.remove(), 300);
    }

    const mainContent = document.getElementById("main-content");
    const hasLoaded = sessionStorage.getItem("siteLoaded");

    if (hasLoaded) {
      // Skip loader, show content immediately
      setIsLoading(false);
      if (mainContent) {
        mainContent.style.opacity = "1";
      }
      return;
    }

    // Start the loading sequence
    const loadingTimer = setTimeout(() => {
      sessionStorage.setItem("siteLoaded", "true");
      setIsLoading(false);
      
      // Show content smoothly after loader animation
      if (mainContent) {
        mainContent.style.opacity = "1";
      }
    }, 3800); // Total time: 2s wait + 1.2s roll-up + 0.6s buffer

    return () => clearTimeout(loadingTimer);
  }, []);

  if (!isLoading) return null;

  return <Loader />;
}
