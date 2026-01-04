"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("./Loader"), { ssr: false });

export default function ClientOnlyLoader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Fade out SSR curtain safely
    const curtain = document.getElementById("ssr-curtain");
    if (curtain) {
      curtain.style.opacity = "0";
      curtain.style.pointerEvents = "none";
    }

    const hasLoaded = sessionStorage.getItem("siteLoaded");

    if (hasLoaded) {
      setShowLoader(false);
      return;
    }

    const t = setTimeout(() => {
      sessionStorage.setItem("siteLoaded", "true");
      setShowLoader(false);
    }, 2600);

    return () => clearTimeout(t);
  }, []);

  if (!showLoader) return null;

  return <Loader />;
}
