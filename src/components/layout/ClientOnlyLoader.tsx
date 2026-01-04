"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("./Loader"), {
  ssr: false,
});

export default function ClientOnlyLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // ✅ Remove SSR curtain as soon as JS runs
    const curtain = document.getElementById("ssr-curtain");
    if (curtain) curtain.remove();

    const hasLoaded = sessionStorage.getItem("siteLoaded");

    if (hasLoaded) {
      setShowLoader(false);
      setShowContent(true);
      return;
    }

    // Hide content initially and show loader
    setShowContent(false);

    const t = setTimeout(() => {
      sessionStorage.setItem("siteLoaded", "true");
      setShowLoader(false);
      // Delay showing content slightly to ensure smooth transition
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, 2600);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Content is conditionally rendered - completely hidden during loading */}
      {showContent && (
        <div className="animate-fadeIn">
          {children}
        </div>
      )}

      {/* Loader is a visual overlay */}
      {showLoader && <Loader />}
    </>
  );
}
