"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("./Loader"), { ssr: false });

export default function ClientOnlyLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const curtain = document.getElementById("ssr-curtain");
    const mainContent = document.getElementById("main-content");

    // Fade out SSR curtain (DO NOT REMOVE)
    if (curtain) {
      curtain.style.transition = "opacity 0.3s ease-out";
      curtain.style.opacity = "0";
      curtain.style.pointerEvents = "none";
    }

    const hasLoaded = sessionStorage.getItem("siteLoaded");

    if (hasLoaded) {
      setIsLoading(false);
      if (mainContent) {
        mainContent.style.opacity = "1";
      }
      return;
    }

    const loadingTimer = setTimeout(() => {
      sessionStorage.setItem("siteLoaded", "true");
      setIsLoading(false);

      if (mainContent) {
        mainContent.style.opacity = "1";
      }
    }, 3800);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (!isLoading) return null;

  return <Loader />;
}
