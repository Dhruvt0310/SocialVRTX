"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Brand Campaign 2024",
    description: "Creative social media campaign",
    reelUrl: "https://www.instagram.com/reel/DJY7d_JtpAS/?igsh=MzloNGs3emJ1YWpm",
    videoUrl: "/reels/Video-1.mp4",
    views: "125K"
  },
  {
    id: 2,
    title: "Product Launch Video",
    description: "Engaging product showcase",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER2",
    videoUrl: "/reels/Video-2.mp4",
    views: "98K"
  },
  {
    id: 3,
    title: "Behind The Scenes",
    description: "Team collaboration moments",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER3",
    videoUrl: "/reels/Video-3.mp4",
    views: "87K"
  },
  {
    id: 4,
    title: "Client Testimonial",
    description: "Success story highlight",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER4",
    videoUrl: "/reels/Video-4.mp4",
    views: "156K"
  },
  {
    id: 5,
    title: "Event Coverage",
    description: "Live event highlights",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER5",
    videoUrl: "/reels/Video-5.mp4",
    views: "203K"
  },
  {
    id: 6,
    title: "Tutorial Series",
    description: "Educational content",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER6",
    videoUrl: "/reels/Video-6.mp4",
    views: "142K"
  },
  {
    id: 7,
    title: "Brand Story",
    description: "Our journey so far",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER7",
    videoUrl: "/reels/Video-7.mp4",
    views: "178K"
  },
  {
    id: 8,
    title: "Creative Process",
    description: "Design workflow showcase",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER8",
    videoUrl: "/reels/Video-8.mp4",
    views: "91K"
  },
  {
    id: 9,
    title: "Team Introduction",
    description: "Meet our talented team",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER9",
    videoUrl: "/reels/Video-9.mp4",
    views: "134K"
  },
  {
    id: 10,
    title: "Innovation Showcase",
    description: "Latest tech solutions",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER10",
    videoUrl: "/reels/Video-10.mp4",
    views: "167K"
  },
  {
    id: 11,
    title: "Customer Success",
    description: "Impact stories",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER11",
    videoUrl: "/reels/Video-11.mp4",
    views: "112K"
  },
  {
    id: 12,
    title: "Industry Insights",
    description: "Expert perspectives",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER12",
    videoUrl: "/reels/Video-12.mp4",
    views: "145K"
  },
  {
    id: 13,
    title: "Milestone Celebration",
    description: "Achievement highlights",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER13",
    videoUrl: "/reels/Video-13.mp4",
    views: "189K"
  },
  {
    id: 14,
    title: "Future Vision",
    description: "What's coming next",
    reelUrl: "https://www.instagram.com/reel/PLACEHOLDER14",
    videoUrl: "/reels/Video-14.mp4",
    views: "201K"
  }
];

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fullscreenVideo, setFullscreenVideo] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openFullscreen = (projectId: number) => {
    setFullscreenVideo(projectId);
  };

  const closeFullscreen = () => {
    setFullscreenVideo(null);
  };

  const currentProject = fullscreenVideo ? projects.find(p => p.id === fullscreenVideo) : null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(0,0,0,0.2) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          animation: 'float 20s ease-in-out infinite'
        }} />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.1),transparent_50%)]" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 30s linear infinite'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Fade-in Animation */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-6 border border-white/30 shadow-lg animate-bounce-slow">
              🎬 Our Creative Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 drop-shadow-2xl relative">
              <span className="inline-block animate-fade-in-up">Featured</span>{" "}
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '100ms' }}>Projects</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full blur-sm" />
            </h1>
            <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto font-medium drop-shadow-sm leading-relaxed">
              Explore our creative journey through engaging Instagram reels showcasing our best work
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-12 h-0.5 bg-black/20 rounded-full" />
              <div className="w-2 h-2 bg-black/30 rounded-full animate-pulse" />
              <div className="w-12 h-0.5 bg-black/20 rounded-full" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative"
                >
                  <CardContainer className="inter-var">
                    <CardBody className="bg-white/95 backdrop-blur-sm relative group/card hover:shadow-2xl hover:shadow-yellow-500/[0.3] border-white/[0.5] w-full h-auto rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-[1.02]">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-black mb-2"
                      >
                        {project.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-black/70 text-sm mb-4"
                      >
                        {project.description}
                      </CardItem>

                      {/* Video Player */}
                      <CardItem translateZ="100" className="w-full">
                        <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-lg group-hover/card:shadow-2xl transition-all duration-300 ring-2 ring-transparent group-hover/card:ring-yellow-400/50" style={{ paddingBottom: '177.78%' }}>
                          <video
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${hoveredCard === project.id ? 'blur-sm scale-105' : ''}`}
                            src={project.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                          />
                        </div>
                      </CardItem>

                      {/* Views and Link */}
                      <div className="flex justify-between items-center mt-6">
                        <CardItem
                          translateZ={20}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm hover:bg-black/10 transition-colors"
                        >
                          <span className="text-lg animate-pulse">👁️</span>
                          <span className="text-sm font-bold text-black">{project.views}</span>
                          <span className="text-xs text-black/60">views</span>
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href={project.reelUrl}
                          target="_blank"
                          className="px-6 py-2 rounded-full bg-black text-white text-sm font-bold hover:bg-black/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                        >
                          View Reel →
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>

                  {/* Play Button Overlay - Outside CardContainer */}
                  {hoveredCard === project.id && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: '0', left: '0', right: '0', bottom: '80px' }}>
                      <button
                        type="button"
                        onClick={() => openFullscreen(project.id)}
                        className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-2xl cursor-pointer pointer-events-auto hover:bg-white transition-colors"
                      >
                        <span className="text-2xl ml-1">▶️</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className={`mt-20 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-8 py-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 border border-white/50">
              <p className="text-black/80 text-lg font-medium mb-4">
                Want to see more of our work?
              </p>
              <Link
                href="https://www.instagram.com/YOURHANDLE"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-black/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <span className="text-xl">📱</span>
                Follow us on Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && currentProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={closeFullscreen}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-2xl transition-all"
            >
              <span className="text-2xl font-bold text-black">✕</span>
            </button>

            {/* Video Info */}
            <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-2xl max-w-md">
              <h2 className="text-2xl font-bold text-black mb-2">{currentProject.title}</h2>
              <p className="text-black/70 text-sm mb-3">{currentProject.description}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20">
                  <span className="text-lg">👁️</span>
                  <span className="text-sm font-bold text-black">{currentProject.views}</span>
                  <span className="text-xs text-black/60">views</span>
                </div>
                <Link
                  href={currentProject.reelUrl}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 rounded-full bg-black text-white text-sm font-bold hover:bg-black/90 transition-all shadow-lg"
                >
                  View on Instagram →
                </Link>
              </div>
            </div>

            {/* Video Container */}
            <div
              className="relative w-full max-w-md aspect-[9/16] bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={currentProject.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

