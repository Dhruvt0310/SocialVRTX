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

  useEffect(() => {
    // ✅ Remove SSR curtain as soon as JS runs
    const curtain = document.getElementById("ssr-curtain");
    if (curtain) curtain.remove();

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

  return (
    <>
      {/* App is already mounted behind */}
      {children}

      {/* Loader is a visual overlay */}
      {showLoader && <Loader />}
    </>
  );
}
