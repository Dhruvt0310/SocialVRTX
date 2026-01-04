"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface PersonCard {
  name: string;
  photo: string;
  title: string;
  specialty: string;
  content: string;
  achievements: string[];
}

interface ExpandablePersonalProps {
  people: PersonCard[];
}

export default function ExpandablePersonal({ people }: ExpandablePersonalProps) {
  const [active, setActive] = useState<PersonCard | null>(null);
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
              layoutId={`person-card-${active.name}-${id}`}
              ref={ref}
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              }}
              className="w-full max-w-[1200px] h-[90vh] md:h-[600px] lg:h-[700px] flex flex-col md:flex-row bg-white border-2 border-slate-200 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)] rounded-2xl"
              style={{ perspective: "1000px" }}
            >
              {/* Left Side - Photo */}
              <motion.div 
                layoutId={`person-image-${active.name}-${id}`}
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
                  src={active.photo}
                  alt={active.name}
                  className="relative w-full h-full object-cover z-10"
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
                  <motion.h3
                    layoutId={`person-title-${active.name}-${id}`}
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
                    layoutId={`person-subtitle-${active.title}-${id}`}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className="text-slate-600 font-semibold text-lg mb-1 inline-flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {active.title}
                  </motion.p>
                  <motion.p
                    layoutId={`person-specialty-${active.specialty}-${id}`}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className="text-slate-500 font-medium mb-4"
                  >
                    {active.specialty}
                  </motion.p>
                  
                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, staggerChildren: 0.1 }}
                    className="flex flex-wrap gap-2"
                  >
                    {active.achievements.map((achievement, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="px-3 py-1 bg-slate-900 text-white text-xs font-bold border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
                      >
                        {achievement}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
                
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 min-h-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {people.map((person) => (
          <motion.div
            layoutId={`person-card-${person.name}-${id}`}
            key={`person-card-${person.name}-${id}`}
            onClick={() => setActive(person)}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_60px_rgba(0,0,0,0.25)] transition-all duration-500 cursor-pointer border-2 border-white/50 hover:border-yellow-400 hover:-translate-y-2"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative">
              {/* Full body image section - Much larger */}
              <motion.div 
                layoutId={`person-image-${person.name}-${id}`}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
                className="relative h-[350px] sm:h-[400px] lg:h-[450px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
                <div className="hidden sm:block absolute top-6 right-6 w-12 sm:w-16 h-12 sm:h-16 border-t-4 border-r-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="hidden sm:block absolute bottom-6 left-6 w-12 sm:w-16 h-12 sm:h-16 border-b-4 border-l-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <img
                  width={400}
                  height={600}
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Strong gradient overlay at bottom for text readability */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                
                {/* Name overlay on image */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10">
                  <motion.h3
                    layoutId={`person-title-${person.name}-${id}`}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className="text-xl sm:text-2xl font-black text-white mb-1 drop-shadow-lg"
                  >
                    {person.name}
                  </motion.h3>
                  <motion.p
                    layoutId={`person-subtitle-${person.title}-${id}`}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className="text-xs sm:text-sm text-yellow-400 font-bold"
                  >
                    {person.title}
                  </motion.p>
                </div>
              </motion.div>
              
              {/* Content section - Compact */}
              <div className="p-4 sm:p-6 bg-white">
                <motion.p
                  layoutId={`person-specialty-${person.specialty}-${id}`}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8,
                  }}
                  className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed"
                >
                  {person.specialty}
                </motion.p>
                
                {/* View Profile indicator */}
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs sm:text-sm mt-3 sm:mt-4 group-hover:text-yellow-600 transition-colors">
                  <span>View Profile</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
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
