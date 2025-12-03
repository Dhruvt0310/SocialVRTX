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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-50"
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
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-10 w-10 shadow-xl z-[110]"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 35,
                mass: 1,
              }}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-gradient-to-br from-yellow-50 to-white border-4 border-white sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div 
                layoutId={`image-${active.name}-${id}`}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
              >
                <img
                  width={600}
                  height={400}
                  src={active.logo}
                  alt={active.name}
                  className="w-full h-64 sm:rounded-tr-lg sm:rounded-tl-lg object-contain bg-gradient-to-br from-yellow-100 to-yellow-200 p-8"
                />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-6">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 0.8,
                      }}
                      className="font-bold text-2xl text-black mb-2"
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
                      className="text-black/70 font-medium"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  {active.ctaLink && (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.2,
                        ease: [0.4, 0, 0.2, 1] 
                      }}
                      href={active.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-sm rounded-full font-bold bg-black text-white shadow-lg"
                    >
                      {active.ctaText || "Visit"}
                    </motion.a>
                  )}
                </div>
                <div className="pt-4 relative px-6 pb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.15,
                      ease: [0.4, 0, 0.2, 1] 
                    }}
                    className="text-black/80 text-base leading-relaxed max-h-[300px] overflow-auto [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.2)_transparent]"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-gradient-to-br from-yellow-200/60 to-yellow-300/40 backdrop-blur-md border-[3px] border-white rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)] cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div 
                layoutId={`image-${brand.name}-${id}`}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
              >
                <img
                  width={160}
                  height={160}
                  src={brand.logo}
                  alt={brand.name}
                  className="w-36 h-36 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 border-[5px] border-white object-cover shadow-[0_10px_30px_rgba(0,0,0,0.2)] p-2"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${brand.name}-${id}`}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8,
                  }}
                  className="text-xl font-bold text-black mb-2 drop-shadow-sm"
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
                  className="text-sm text-black/70 font-medium"
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
