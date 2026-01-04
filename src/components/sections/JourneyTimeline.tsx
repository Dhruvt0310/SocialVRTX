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
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isComplete) return;

      const container = containerRef.current;
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollStart = containerTop - windowHeight / 2;
      const scrollEnd = containerTop + containerHeight - windowHeight;
      const scrollProgress = (scrollTop - scrollStart) / (scrollEnd - scrollStart);

      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      setProgress(clampedProgress);

      if (clampedProgress >= 1) {
        setIsComplete(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isComplete]);

  const lineHeight = 600;
  const filledHeight = isComplete ? lineHeight : lineHeight * progress;

  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Journey</h1>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Building the future, one milestone at a time
        </p>

        <div ref={containerRef} className="relative" style={{ minHeight: isComplete ? 'auto' : '300vh' }}>
          <div className={`${isComplete ? 'relative' : 'sticky top-20'} flex justify-center py-12`}>
            <div className="relative">
              {/* Background Line */}
              <div
                className="absolute left-1/2 top-0 w-1 bg-gray-800 -translate-x-1/2"
                style={{ height: `${lineHeight}px` }}
              />

              {/* Progress Line */}
              <div
                className="absolute left-1/2 top-0 w-1 -translate-x-1/2 transition-all duration-300"
                style={{
                  height: `${filledHeight}px`,
                  background: 'linear-gradient(to bottom, #3b82f6, #eab308, #3b82f6)'
                }}
              />

              {/* Milestones */}
              <div className="relative" style={{ height: `${lineHeight}px` }}>
                {milestones.map((milestone, index) => {
                  const position = (index / (milestones.length - 1)) * lineHeight;
                  const milestoneProgress = (progress * milestones.length) - index;
                  const isActive = milestoneProgress >= 0 && milestoneProgress < 1;
                  const isPassed = milestoneProgress >= 1 || isComplete;
                  const dotColor = milestone.color === 'blue' ? '#3b82f6' : '#eab308';
                  const isLeft = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className="absolute w-full"
                      style={{ top: `${position}px` }}
                    >
                      {/* Dot */}
                      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {isActive && (
                          <div
                            className="absolute inset-0 rounded-full animate-pulse"
                            style={{
                              width: '32px',
                              height: '32px',
                              backgroundColor: dotColor,
                              opacity: 0.4,
                              transform: 'translate(-50%, -50%)',
                              left: '50%',
                              top: '50%'
                            }}
                          />
                        )}
                        <div
                          className="relative rounded-full transition-all duration-500"
                          style={{
                            width: isActive ? '16px' : '12px',
                            height: isActive ? '16px' : '12px',
                            backgroundColor: isPassed || isActive ? dotColor : '#374151'
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div
                        className={`absolute top-0 -translate-y-1/2 ${
                          isLeft ? 'right-1/2 pr-12 text-right' : 'left-1/2 pl-12 text-left'
                        } w-80 max-w-[40vw]`}
                      >
                        <div
                          className={`transition-all duration-500 ${
                            isPassed || isActive ? 'opacity-100' : 'opacity-30'
                          }`}
                        >
                          <div
                            className={`text-sm font-semibold mb-1 ${
                              milestone.color === 'blue' ? 'text-blue-400' : 'text-yellow-400'
                            }`}
                          >
                            {milestone.year}
                          </div>
                          <h3
                            className={`text-xl font-bold mb-2 ${
                              milestone.color === 'blue' ? 'text-blue-500' : 'text-yellow-500'
                            }`}
                          >
                            {milestone.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}