'use client';

import { useState, useEffect, useRef } from 'react';

const milestones = [
  {
    year: 2020,
    title: 'Company Founded',
    description: 'Started our journey with a vision to transform the industry',
    color: 'blue'
  },
  {
    year: 2021,
    title: 'First Major Product Launch',
    description: 'Released our flagship product to market with overwhelming response',
    color: 'yellow'
  },
  {
    year: 2022,
    title: 'Series A Funding',
    description: 'Secured $10M in funding to accelerate growth and expansion',
    color: 'blue'
  },
  {
    year: 2023,
    title: 'Global Expansion',
    description: 'Opened offices in 5 countries across 3 continents',
    color: 'yellow'
  },
  {
    year: 2024,
    title: 'Industry Recognition',
    description: 'Named as one of the fastest growing companies in tech',
    color: 'blue'
  },
  {
    year: 2025,
    title: 'Innovation Milestone',
    description: 'Launched groundbreaking AI-powered solutions',
    color: 'yellow'
  }
];

export default function JourneyTimeline() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const milestoneRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the timeline section
      const scrollStart = containerTop - windowHeight / 2;
      const scrollEnd = containerTop + containerHeight - windowHeight / 2;
      const scrollProgress = (scrollTop - scrollStart) / (scrollEnd - scrollStart);
      
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      setProgress(clampedProgress);

      // Determine active milestone based on scroll position
      let newActiveIndex = 0;
      milestoneRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < windowHeight / 2) {
            newActiveIndex = index;
          }
        }
      });
      setActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">Our Journey</h1>
        <p className="text-gray-400 text-center mb-20 text-lg">
          Building the future, one milestone at a time
        </p>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800 -translate-x-1/2 hidden md:block">
            {/* Progress Fill */}
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-yellow-500 to-blue-500 transition-all duration-300 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              const isActive = index <= activeIndex;
              const accentColor = milestone.color === 'blue' ? 'blue' : 'yellow';

              return (
                <div
                  key={index}
                  ref={el => milestoneRefs.current[index] = el}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 transition-all duration-700 ${
                      isActive
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <div
                      className={`bg-gray-900 rounded-lg p-8 border-2 transition-all duration-500 ${
                        isActive
                          ? accentColor === 'blue'
                            ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                            : 'border-yellow-500 shadow-lg shadow-yellow-500/20'
                          : 'border-gray-800'
                      }`}
                    >
                      <div
                        className={`text-sm font-semibold mb-2 ${
                          accentColor === 'blue' ? 'text-blue-400' : 'text-yellow-400'
                        }`}
                      >
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                      <p className="text-gray-400 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-black transition-all duration-500 ${
                        isActive
                          ? accentColor === 'blue'
                            ? 'bg-blue-500 scale-125'
                            : 'bg-yellow-500 scale-125'
                          : 'bg-gray-700 scale-100'
                      }`}
                    />
                  </div>

                  {/* Year Label (on opposite side) */}
                  <div className="w-full md:w-5/12 hidden md:flex items-center justify-center">
                    <div
                      className={`text-6xl font-bold transition-all duration-700 ${
                        isActive
                          ? accentColor === 'blue'
                            ? 'text-blue-500/30'
                            : 'text-yellow-500/30'
                          : 'text-gray-800'
                      }`}
                    >
                      {milestone.year}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-32" />
      </div>
    </div>
  );
}





////CIRCLE WALAAA
// 'use client';

// import { useState, useEffect, useRef } from 'react';

// const milestones = [
//   {
//     year: 2020,
//     title: 'Company Founded',
//     description: 'Started our journey with a vision to transform the industry',
//     color: 'blue'
//   },
//   {
//     year: 2021,
//     title: 'First Major Product Launch',
//     description: 'Released our flagship product to market with overwhelming response',
//     color: 'yellow'
//   },
//   {
//     year: 2022,
//     title: 'Series A Funding',
//     description: 'Secured $10M in funding to accelerate growth and expansion',
//     color: 'blue'
//   },
//   {
//     year: 2023,
//     title: 'Global Expansion',
//     description: 'Opened offices in 5 countries across 3 continents',
//     color: 'yellow'
//   },
//   {
//     year: 2024,
//     title: 'Industry Recognition',
//     description: 'Named as one of the fastest growing companies in tech',
//     color: 'blue'
//   },
//   {
//     year: 2025,
//     title: 'Innovation Milestone',
//     description: 'Launched groundbreaking AI-powered solutions',
//     color: 'yellow'
//   }
// ];

// export default function JourneyTimeline() {
//   const [progress, setProgress] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const container = containerRef.current;
//       const scrollTop = window.scrollY;
//       const containerTop = container.offsetTop;
//       const containerHeight = container.offsetHeight;
//       const windowHeight = window.innerHeight;

//       const scrollStart = containerTop - windowHeight / 3;
//       const scrollEnd = containerTop + containerHeight - windowHeight / 1.5;
//       const scrollProgress = (scrollTop - scrollStart) / (scrollEnd - scrollStart);
      
//       const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
//       setProgress(clampedProgress);

//       // Determine active milestone
//       const progressPerMilestone = 1 / milestones.length;
//       const newActiveIndex = Math.min(
//         milestones.length - 1,
//         Math.floor(clampedProgress / progressPerMilestone)
//       );
//       setActiveIndex(newActiveIndex);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // ============ CUSTOMIZATION SETTINGS ============
//   const circleRadius = 145;           // Radius of the circle (increase for larger circle)
//   const strokeWidth = 7;              // Thickness of the circle line
//   const yearDistance = 32;            // Distance of year labels from circle edge
  
//   const circumference = 2 * Math.PI * circleRadius;
//   const filledLength = circumference * progress;

//   // Position years around the circle
//   const getYearPosition = (index) => {
//     const angle = (index / milestones.length) * 360 - 90; // Start from top
//     const radian = (angle * Math.PI) / 180;
//     const distance = circleRadius + yearDistance;
    
//     return {
//       x: Math.cos(radian) * distance,
//       y: Math.sin(radian) * distance,
//       angle
//     };
//   };

//   const activeMilestone = milestones[activeIndex];
//   const accentColor = activeMilestone?.color === 'blue' ? 'blue' : 'yellow';

//   return (
//     <div className="min-h-screen bg-black text-white py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <h1 className="text-5xl font-bold text-center mb-4">Our Journey</h1>
//         <p className="text-gray-400 text-center mb-1 text-lg">
//           Building the future, one milestone at a time
//         </p>

//         <div ref={containerRef} className="relative min-h-[400vh]">
//           {/* Sticky Circle Container */}
//           <div className="sticky top-6 h-screen flex items-center justify-center">
//             <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
              
//               {/* SVG Circle */}
//               <svg
//                 className="absolute inset-0 w-full h-full -rotate-90"
//                 viewBox="0 0 600 600"
//               >
//                 {/* Background Circle */}
//                 <circle
//                   cx="300"
//                   cy="300"
//                   r={circleRadius}
//                   fill="none"
//                   stroke="#1f2937"
//                   strokeWidth={strokeWidth}
//                 />
                
//                 {/* Progress Circle */}
//                 <circle
//                   cx="300"
//                   cy="300"
//                   r={circleRadius}
//                   fill="none"
//                   stroke="url(#gradient)"
//                   strokeWidth={strokeWidth}
//                   strokeDasharray={circumference}
//                   strokeDashoffset={circumference - filledLength}
//                   strokeLinecap="round"
//                   className="transition-all duration-300 ease-out"
//                 />
                
//                 {/* Gradient Definition */}
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#3b82f6" />
//                     <stop offset="50%" stopColor="#eab308" />
//                     <stop offset="100%" stopColor="#3b82f6" />
//                   </linearGradient>
//                 </defs>

//                 {/* Milestone Dots */}
//                 {milestones.map((milestone, index) => {
//                   const angle = (index / milestones.length) * 360;
//                   const radian = ((angle - 61) * Math.PI) / 180;
//                   const x = 300 + Math.cos(radian) * circleRadius;
//                   const y = 300 + Math.sin(radian) * circleRadius;
//                   const isActive = index <= activeIndex;
//                   const dotColor = milestone.color === 'blue' ? '#3b82f6' : '#eab308';

//                   return (
//                     <circle
//                       key={index}
//                       cx={x}
//                       cy={y}
//                       r={isActive ? 8 : 6}
//                       fill={isActive ? dotColor : '#374151'}
//                       className="transition-all duration-500"
//                     />
//                   );
//                 })}
//               </svg>

//               {/* Year Labels Around Circle */}
//               {milestones.map((milestone, index) => {
//                 const pos = getYearPosition(index);
//                 const isActive = index === activeIndex;
//                 const isPassed = index < activeIndex;
//                 const yearColor = milestone.color === 'blue' ? 'text-blue-200' : 'text-yellow-200';

//                 return (
//                   <div
//                     key={index}
//                     className="absolute transition-all duration-500"
//                     style={{
//                       left: '50%',
//                       top: '50%',
//                       transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
//                     }}
//                   >
//                     <div
//                       className={`text-2xl font-bold transition-all duration-500 ${
//                         isActive
//                           ? yearColor
//                           : isPassed
//                           ? `${yearColor} opacity-50`
//                           : 'text-gray-700'
//                       }`}
//                     >
//                       {milestone.year}
//                     </div>
//                   </div>
//                 );
//               })}

//               {/* Center Content */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="max-w-md px-8 text-center">
//                   <div
//                     key={activeIndex}
//                     className="animate-fadeIn"
//                   >
//                     <div
//                       className={`text-sm font-semibold mb-3 ${
//                         accentColor === 'blue' ? 'text-blue-400' : 'text-yellow-400'
//                       }`}
//                     >
//                       {activeMilestone.year}
//                     </div>
//                     <h3
//                       className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
//                         accentColor === 'blue' ? 'text-blue-500' : 'text-yellow-500'
//                       }`}
//                     >
//                       {activeMilestone.title}
//                     </h3>
//                     <p className="text-gray-400 leading-relaxed text-1xl">
//                       {activeMilestone.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Bottom spacing */}
//         <div className="h-32" />
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }