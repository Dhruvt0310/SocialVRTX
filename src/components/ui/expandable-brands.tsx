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
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl h-full w-full z-[99998]"
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
            className="fixed inset-0 grid place-items-center z-[99999] p-4"
          >
            <motion.button
              key={`button-${active.name}-${id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white border border-gray-300 rounded-full h-12 w-12 shadow-lg hover:shadow-xl hover:bg-yellow-500 hover:border-yellow-500 transition-all z-[100000] group"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 25,
                mass: 0.6,
              }}
              className="w-full max-w-[1200px] h-[700px] flex flex-col md:flex-row bg-white border-4 border-yellow-500/50 overflow-hidden shadow-[0_40px_160px_rgba(0,0,0,0.2),0_0_80px_rgba(251,191,36,0.3)] relative"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))'
              }}
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-500/5 to-red-500/10 animate-pulse"></div>
              
              {/* Sharp decorative elements */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-400/15" style={{
                clipPath: 'polygon(0 0, 100% 0, 0 100%)'
              }}></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-400/15" style={{
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
              }}></div>
              
              {/* Left Side - Image with enhanced design */}
              <motion.div 
                layoutId={`image-${active.name}-${id}`}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                  mass: 0.4,
                  delay: 0.1,
                }}
                className="w-full md:w-2/5 h-[280px] md:h-full flex-shrink-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 relative overflow-hidden border-r-2 border-yellow-500/30"
              >
                {/* Enhanced gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-500/10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_70%)]"></div>
                
                {/* Animated top accent */}
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 animate-pulse"></div>
                
                {/* Sharp corner cuts with glow */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-white shadow-[inset_0_0_20px_rgba(251,191,36,0.2)]" style={{
                  clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
                }}></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-white shadow-[inset_0_0_20px_rgba(251,191,36,0.2)]" style={{
                  clipPath: 'polygon(0 0, 100% 0, 0 100%)'
                }}></div>
                
                {/* Enhanced image container */}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="relative">
                    <img
                      width={400}
                      height={400}
                      src={active.logo}
                      alt={active.name}
                      className="max-w-full max-h-full object-contain filter drop-shadow-[0_20px_40px_rgba(251,191,36,0.3)]"
                    />
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-yellow-400/10 blur-2xl scale-150 -z-10"></div>
                  </div>
                </div>
                
                {/* Enhanced corner accents */}
                <div className="absolute bottom-6 right-6 w-16 h-16 border-b-3 border-r-3 border-yellow-500 shadow-[0_0_20px_rgba(251,191,36,0.4)]"></div>
                
                {/* Floating geometric elements */}
                <div className="absolute top-1/4 left-6 w-3 h-3 bg-yellow-500 transform rotate-45 animate-pulse"></div>
                <div className="absolute bottom-1/3 left-8 w-2 h-8 bg-gradient-to-t from-yellow-500 to-orange-500"></div>
                <div className="absolute top-1/3 right-8 w-4 h-4 border-2 border-yellow-500 animate-spin" style={{ animationDuration: '4s' }}></div>
              </motion.div>

              {/* Right Side - Enhanced Content */}
              <div className="flex-1 flex flex-col overflow-hidden bg-white relative">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                
                {/* Enhanced header */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="p-8 border-b-3 border-yellow-500/50 flex-shrink-0 relative bg-gradient-to-r from-white via-gray-50 to-white"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%)'
                  }}
                >
                  {/* Header glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/3 via-orange-500/5 to-yellow-400/3"></div>
                  
                  <div className="relative z-10">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        mass: 0.4,
                      }}
                      className="font-black text-6xl text-gray-900 mb-4 tracking-tighter uppercase drop-shadow-[0_4px_20px_rgba(251,191,36,0.2)]"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        mass: 0.4,
                      }}
                      className="text-yellow-600 font-bold text-2xl flex items-center gap-4 uppercase tracking-wide drop-shadow-sm"
                    >
                      <span className="w-4 h-4 bg-yellow-500 transform rotate-45 shadow-[0_0_10px_rgba(251,191,36,0.4)]"></span>
                      {active.description}
                    </motion.p>
                  </div>
                  
                  {/* Header decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-500/40"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-500/40"></div>
                </motion.div>
                
                {/* Enhanced Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-8 py-8 relative">
                  {/* Content background effects */}
                  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-400/3 to-transparent"></div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.3,
                      ease: [0.4, 0, 0.2, 1] 
                    }}
                    className="text-gray-700 text-xl leading-relaxed space-y-8 relative z-10"
                  >
                    {active.content.split('\n').map((paragraph, idx) => (
                      <motion.p 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="text-gray-700 leading-relaxed pl-6 border-l-2 border-yellow-500/30 hover:border-yellow-500/60 transition-colors duration-300"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </motion.div>
                  
                  {/* Scroll indicator */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-yellow-500/20 rounded-full">
                    <div className="w-full h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                  </div>
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
              stiffness: 500,
              damping: 20,
              mass: 0.4,
            }}
            whileHover={{ y: -12, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white overflow-hidden shadow-[4px_4px_0px_0px_rgba(251,191,36,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(251,191,36,0.4)] hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2 border-gray-600 hover:border-yellow-500"
          >
            {/* Sharp geometric border */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
              <div className="w-full h-full bg-white"></div>
            </div>
            
            {/* Main content */}
            <div className="relative p-5 flex flex-col items-center text-center space-y-3 h-full">
              {/* Sharp corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
              
              {/* Geometric grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,191,36,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <motion.div 
                layoutId={`image-${brand.name}-${id}`}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                  mass: 0.4,
                }}
                className="relative flex-shrink-0 z-10"
              >
                {/* Sharp hexagonal container */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                  {/* Outer sharp border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 transform group-hover:rotate-45 transition-transform duration-300"
                       style={{
                         clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                       }}>
                  </div>
                  
                  {/* Inner container */}
                  <div className="absolute inset-1 bg-white transform group-hover:-rotate-12 transition-transform duration-300"
                       style={{
                         clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                       }}>
                    <img
                      width={96}
                      height={96}
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300"
                      style={{
                        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                      }}
                    />
                  </div>
                  
                  {/* Sharp glow effect */}
                  <div className="absolute inset-0 bg-yellow-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                </div>
              </motion.div>
              
              {/* Text content */}
              <div className="flex-1 flex flex-col justify-center space-y-1 min-h-0 z-10">
                <motion.h3
                  layoutId={`title-${brand.name}-${id}`}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    mass: 0.4,
                  }}
                  className="text-sm sm:text-base font-black text-gray-900 line-clamp-1 group-hover:text-yellow-600 transition-colors duration-200 uppercase tracking-wider"
                >
                  {brand.name}
                </motion.h3>
                <motion.p
                  layoutId={`description-${brand.description}-${id}`}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    mass: 0.4,
                  }}
                  className="text-xs text-gray-500 font-medium line-clamp-2 group-hover:text-gray-700 transition-colors duration-200"
                >
                  {brand.description}
                </motion.p>
              </div>
              
              {/* Sharp bottom accent */}
              <div className="w-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-300"></div>
              
              {/* Floating sharp elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-yellow-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-200" style={{ animationDelay: '0.1s' }}></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-200" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-200" style={{ animationDelay: '0.3s' }}></div>
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
      className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
