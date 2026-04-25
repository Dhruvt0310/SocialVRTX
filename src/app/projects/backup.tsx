  "use client";
  import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
  import Link from "next/link";

  const projects = [
    {
      id: 1,
      title: "Brand Campaign 2024",
      description: "Creative social media campaign",
      reelUrl: "https://www.instagram.com/reel/DJY7d_JtpAS/?igsh=MzloNGs3emJ1YWpm",
      videoUrl: "reels/Video-1.mp4",
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
      videoUrl: "/reels/reel3.mp4",
      views: "87K"
    },
    {
      id: 4,
      title: "Client Testimonial",
      description: "Success story highlight",
      reelUrl: "https://www.instagram.com/reel/PLACEHOLDER4",
      videoUrl: "/reels/reel4.mp4",
      views: "156K"
    },
    {
      id: 5,
      title: "Event Coverage",
      description: "Live event highlights",
      reelUrl: "https://www.instagram.com/reel/PLACEHOLDER5",
      videoUrl: "/reels/reel5.mp4",
      views: "203K"
    },
    {
      id: 6,
      title: "Tutorial Series",
      description: "Educational content",
      reelUrl: "https://www.instagram.com/reel/PLACEHOLDER6",
      videoUrl: "/reels/reel6.mp4",
      views: "142K"
    },
    {
      id: 7,
      title: "Brand Story",
      description: "Our journey so far",
      reelUrl: "https://www.instagram.com/reel/PLACEHOLDER7",
      videoUrl: "/reels/reel7.mp4",
      views: "178K"
    },
    {
      id: 8,
      title: "Creative Process",
      description: "Design workflow showcase",
      reelUrl: "https://www.instagram.com/reel/PLACEHOLDER8",
      videoUrl: "/reels/reel8.mp4",
      views: "91K"
    },
    {
      id: 9,
      title: "Team Introduction",
      description: "Meet our talented team",
      reelUrl: "https://www.instagram.com/reel/PLACEHOLDER9",
      videoUrl: "/reels/reel9.mp4",
      views: "134K"
    },
    {
      id: 10,
      title: "Innovation Showcase",
      description: "Latest tech solutions",
      reelUrl: "https://www.instagram.com/reel/PLACEHOLDER10",
      videoUrl: "/reels/reel10.mp4",
      views: "167K"
    },
    {
      id: 11,
      title: "Customer Success",
      description: "Impact stories",
      reelUrl: "https://www.instagram.com/reel/PLACEHOLDER11",
      videoUrl: "/reels/reel11.mp4",
      views: "112K"
    },
    {
      id: 12,
      title: "Industry Insights",
      description: "Expert perspectives",
      reelUrl: "https://www.instagram.com/reel/PLACEHOLDER12",
      videoUrl: "/reels/reel12.mp4",
      views: "145K"
    },
    {
      id: 13,
      title: "Milestone Celebration",
      description: "Achievement highlights",
      reelUrl: "https://www.instagram.com/reel/PLACEHOLDER13",
      videoUrl: "/reels/reel13.mp4",
      views: "189K"
    },
    {
      id: 14,
      title: "Future Vision",
      description: "What's coming next",
      reelUrl: "https://www.instagram.com/reel/PLACEHOLDER14",
      videoUrl: "/reels/reel14.mp4",
      views: "201K"
    }
  ];

  export default function ProjectsPage() {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.1),transparent_50%)]" />
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-black/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1400ms' }} />
        <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-black/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2100ms' }} />

        {/* Content */}
        <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 drop-shadow-lg">
                Featured Projects
              </h1>
              <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto font-medium drop-shadow-sm">
                Explore our creative journey through engaging Instagram reels showcasing our best work
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project) => (
                <CardContainer key={project.id} className="inter-var">
                  <CardBody className="bg-white/95 backdrop-blur-sm relative group/card hover:shadow-2xl hover:shadow-yellow-500/[0.3] border-white/[0.5] w-full h-auto rounded-2xl p-6 border-2 transition-all duration-300">
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
                      <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-lg group-hover/card:shadow-2xl transition-shadow duration-300" style={{ paddingBottom: '177.78%' }}>
                        <video
                          className="absolute inset-0 w-full h-full object-cover"
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
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm"
                      >
                        <span className="text-lg">👁️</span>
                        <span className="text-sm font-bold text-black">{project.views}</span>
                        <span className="text-xs text-black/60">views</span>
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.reelUrl}
                        target="_blank"
                        className="px-6 py-2 rounded-full bg-black text-white text-sm font-bold hover:bg-black/90 transition-colors shadow-lg hover:shadow-xl"
                      >
                        View Reel →
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-20 text-center">
              <div className="inline-block px-8 py-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                <p className="text-black/80 text-lg font-medium mb-4">
                  Want to see more of our work?
                </p>
                <Link
                  href="https://www.instagram.com/YOURHANDLE"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-black/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span>📱</span>
                  Follow us on Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
