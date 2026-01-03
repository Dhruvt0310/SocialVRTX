"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface BrandCard {
  name: string;
  logo: string;
  description: string;
  content: string;
  ctaText?: string;
  ctaLink?: string;
}

interface ExpandableBrandsProps {
  brands: BrandCard[];
}

export default function ExpandableBrands({ brands }: ExpandableBrandsProps) {
  const [active, setActive] = useState<BrandCard | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {active ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 grid place-items-center z-[100] p-4"
          >
            <motion.button
              key={`button-${active.name}-${id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white border border-slate-200 rounded-full h-10 w-10 shadow-lg hover:shadow-xl hover:bg-yellow-400 transition-all z-[110]"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              }}
              className="w-full max-w-[1200px] h-[90vh] md:h-[600px] lg:h-[700px] flex flex-col md:flex-row bg-white border-2 border-slate-200 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)] rounded-2xl"
              style={{ perspective: "1000px" }}
            >
              {/* Left Side - Image */}
              <motion.div 
                layoutId={`image-${active.name}-${id}`}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                  delay: 0.1,
                }}
                className="w-full md:w-2/5 h-[300px] md:h-full flex-shrink-0 bg-black p-8 flex items-center justify-center relative border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-slate-200"
              >
                {/* Yellow accent corner */}
                <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
                
                <img
                  width={400}
                  height={400}
                  src={active.logo}
                  alt={active.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Right Side - Content */}
              <div className="flex-1 flex flex-col overflow-hidden min-h-0">
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="p-6 md:p-8 pb-4 border-b-2 border-slate-200 flex-shrink-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <motion.h3
                        layoutId={`title-${active.name}-${id}`}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          mass: 0.8,
                        }}
                        className="font-bold text-3xl text-slate-900 mb-2 tracking-tight"
                      >
                        {active.name}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          mass: 0.8,
                        }}
                        className="text-slate-600 font-medium text-lg inline-flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        {active.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 min-h-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.3,
                      ease: [0.4, 0, 0.2, 1] 
                    }}
                    className="text-slate-700 text-sm md:text-base leading-relaxed [scrollbar-width:thin] [scrollbar-color:rgba(15,23,42,0.3)_transparent]"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        {brands.map((brand) => (
          <motion.div
            layoutId={`card-${brand.name}-${id}`}
            key={`card-${brand.name}-${id}`}
            onClick={() => setActive(brand)}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-[0_4px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.2)] transition-all duration-500 cursor-pointer border-2 border-white/50 hover:border-yellow-400 hover:-translate-y-2"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            
            <div className="relative flex flex-col items-center text-center space-y-4">
              <motion.div 
                layoutId={`image-${brand.name}-${id}`}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
                className="relative"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 p-1.5 group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-300 shadow-lg">
                  <div className="w-full h-full rounded-full bg-black overflow-hidden">
                    <img
                      width={112}
                      height={112}
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
              <div className="space-y-1">
                <motion.h3
                  layoutId={`title-${brand.name}-${id}`}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8,
                  }}
                  className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 line-clamp-1"
                >
                  {brand.name}
                </motion.h3>
                <motion.p
                  layoutId={`description-${brand.description}-${id}`}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8,
                  }}
                  className="text-[10px] sm:text-xs text-slate-600 font-medium line-clamp-2"
                >
                  {brand.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0, rotate: 90 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
