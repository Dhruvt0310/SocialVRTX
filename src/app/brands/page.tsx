"use client";
import ExpandableBrands from "@/components/ui/expandable-brands";
import ExpandablePersonal from "@/components/ui/expandable-personal";

export default function BrandsPage() {
  const brands = [
    { 
      name: "2Amigos", 
      logo: "/logos/2Amigos.png", 
      description: "Restaurant & hospitality",
      content: "2Amigos is a premier restaurant brand known for its exceptional hospitality and authentic culinary experiences. With a focus on creating memorable dining moments, they have established themselves as a leader in the food and beverage industry. Their commitment to quality ingredients and outstanding service has earned them a loyal customer base.",
      ctaText: "Visit Website",
      ctaLink: "#"
    },
    { 
      name: "Abhivyakti", 
      logo: "/logos/Abhivyakti Logo.jpeg", 
      description: "Creative expression & arts",
      content: "Abhivyakti is a creative arts organization dedicated to fostering artistic expression and cultural enrichment. Through various programs and initiatives, they provide a platform for artists to showcase their talents and connect with audiences. Their work spans multiple artistic disciplines, promoting creativity and innovation in the arts community.",
      ctaText: "Learn More",
      ctaLink: "#"
    },
    { 
      name: "BB", 
      logo: "/logos/BB Logo.png", 
      description: "Brand excellence",
      content: "BB represents brand excellence through innovative marketing strategies and exceptional brand development services. They specialize in creating powerful brand identities that resonate with target audiences and drive business growth. Their expertise in brand positioning and strategy has helped numerous companies achieve market leadership.",
      ctaText: "Explore",
      ctaLink: "#"
    },
    { 
      name: "Chocolate Confetti", 
      logo: "/logos/Chocolate Confetti.jpg", 
      description: "Gourmet confectionery",
      content: "Chocolate Confetti is a premium confectionery brand that creates artisanal chocolates and sweets using the finest ingredients. Each product is crafted with meticulous attention to detail, combining traditional techniques with modern flavors. Their gourmet creations are perfect for celebrations, gifts, and indulgent moments.",
      ctaText: "Shop Now",
      ctaLink: "#"
    },
    { 
      name: "CK", 
      logo: "/logos/CK.jpg", 
      description: "Fashion & lifestyle",
      content: "CK is a contemporary fashion and lifestyle brand that embodies modern elegance and sophistication. Their collections feature cutting-edge designs that blend comfort with style, catering to fashion-forward individuals. From apparel to accessories, CK delivers quality products that define contemporary lifestyle trends.",
      ctaText: "View Collection",
      ctaLink: "#"
    },
    { 
      name: "Dimsums & More", 
      logo: "/logos/Dimsums & More.jpg", 
      description: "Asian cuisine specialist",
      content: "Dimsums & More is an authentic Asian cuisine restaurant specializing in traditional dim sum and contemporary Asian dishes. Their menu features a wide variety of handcrafted dumplings, noodles, and specialty items prepared by expert chefs. The restaurant offers a unique dining experience that celebrates the rich flavors and traditions of Asian culinary arts.",
      ctaText: "Order Online",
      ctaLink: "#"
    },
    { 
      name: "Flamora", 
      logo: "/logos/Flamora.jpg", 
      description: "Floral & decor",
      content: "Flamora is a premium floral and decor brand that transforms spaces with stunning floral arrangements and elegant decorative elements. Their team of creative designers specializes in creating bespoke designs for weddings, events, and corporate spaces. With a keen eye for detail and a passion for beauty, Flamora brings visions to life.",
      ctaText: "Get Quote",
      ctaLink: "#"
    },
    { 
      name: "House of Sash", 
      logo: "/logos/House of Sash.jpg", 
      description: "Fashion & accessories",
      content: "House of Sash is a distinguished fashion house offering exquisite clothing and accessories for the modern individual. Their collections showcase timeless designs with contemporary touches, crafted from premium materials. Each piece reflects their commitment to quality craftsmanship and attention to detail, making them a favorite among fashion enthusiasts.",
      ctaText: "Discover",
      ctaLink: "#"
    },
    { 
      name: "Incept Design", 
      logo: "/logos/Incept Desgin.jpg", 
      description: "Design & innovation",
      content: "Incept Design is a forward-thinking design studio that specializes in creating innovative solutions for brands and businesses. Their multidisciplinary team combines creativity with strategic thinking to deliver impactful designs across digital and physical mediums. From branding to user experience, they craft designs that inspire and engage.",
      ctaText: "View Portfolio",
      ctaLink: "#"
    },
    { 
      name: "Krazzy Computer Valley", 
      logo: "/logos/Krazzy Computer Valley.jpg", 
      description: "Technology solutions",
      content: "Krazzy Computer Valley is a leading technology solutions provider offering comprehensive IT services and products. They specialize in computer hardware, software solutions, and technical support for businesses and individuals. With a commitment to innovation and customer satisfaction, they help clients navigate the ever-evolving technology landscape.",
      ctaText: "Contact Us",
      ctaLink: "#"
    },
  ];

  const personalBusinesses = [
    {
      name: "Sarah Mitchell",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      title: "Brand Strategist",
      specialty: "Digital Marketing & Brand Identity",
      content: "Sarah is a seasoned brand strategist with over 10 years of experience helping businesses craft compelling brand narratives. Her expertise lies in digital marketing, brand positioning, and creating cohesive visual identities that resonate with target audiences. She has worked with Fortune 500 companies and startups alike, delivering measurable results through strategic brand development.",
      achievements: ["150+ Brands Transformed", "Award-Winning Campaigns", "TEDx Speaker"]
    },
    {
      name: "Marcus Chen",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      title: "Creative Director",
      specialty: "Visual Design & Art Direction",
      content: "Marcus brings a unique blend of artistic vision and technical expertise to every project. With a background in fine arts and digital design, he specializes in creating visually stunning campaigns that tell powerful stories. His work has been featured in international design publications and has won numerous industry awards.",
      achievements: ["20+ Design Awards", "Published Designer", "Creative Mentor"]
    },
    {
      name: "Elena Rodriguez",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      title: "Business Consultant",
      specialty: "Growth Strategy & Operations",
      content: "Elena is a results-driven business consultant who helps companies scale efficiently. Her analytical approach combined with creative problem-solving has helped dozens of businesses optimize their operations and achieve sustainable growth. She specializes in market analysis, operational efficiency, and strategic planning.",
      achievements: ["$50M+ Revenue Generated", "MBA from Harvard", "Industry Thought Leader"]
    },
    {
      name: "David Park",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      title: "Tech Innovator",
      specialty: "Software Development & AI",
      content: "David is a technology innovator passionate about leveraging cutting-edge solutions to solve real-world problems. With expertise in AI, machine learning, and full-stack development, he has built scalable platforms that serve millions of users. His innovative approach has earned him recognition in the tech community.",
      achievements: ["3 Successful Startups", "Patent Holder", "Tech Conference Speaker"]
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-r from-yellow-400 via-yellow-100 to-yellow-300 text-gray-900">
      {/* Light grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(251,191,36,0.05),transparent_40%)]"></div>
      
      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-6xl mx-auto text-center">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-yellow-600 rounded-full text-sm sm:text-base font-bold mb-12 sm:mb-16 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_48px_rgba(251,191,36,0.3)] transition-all duration-300 group">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              <span className="uppercase tracking-wider">Trusted by Industry Leaders</span>
              <div className="w-8 h-0.5 bg-linear-to-r from-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Enhanced Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 sm:mb-12 tracking-tighter text-gray-900 leading-[0.9] drop-shadow-lg px-4">
              Our <span className="relative inline-block pb-3 sm:pb-4">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 animate-pulse">Partners</span>
                <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-gradient-to-r from-yellow-400/40 to-orange-500/40 blur-sm"></span>
                <span className="absolute bottom-0 left-0 w-full h-2 sm:h-3 bg-gradient-to-r from-yellow-500 to-orange-500"></span>
              </span>
            </h1>
            
            {/* Enhanced Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium leading-relaxed max-w-4xl mx-auto drop-shadow-sm px-4 mb-8">
              Collaborating with <span className="text-yellow-600 font-bold">exceptional brands</span> and <span className="text-yellow-600 font-bold">talented individuals</span> to create meaningful impact
            </p>
            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-500"></div>
              <div className="w-3 h-3 border-2 border-yellow-500 rotate-45"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-500"></div>
            </div>
            
            {/* Stats or Additional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-yellow-600 mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-500 uppercase tracking-wider">Brand Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-yellow-600 mb-2">100+</div>
                <div className="text-sm sm:text-base text-gray-500 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-yellow-600 mb-2">5+</div>
                <div className="text-sm sm:text-base text-gray-500 uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Navigation Section */}
          <div className="max-w-4xl mx-auto mt-16 sm:mt-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <button
                onClick={() => document.getElementById('brand-partners')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-600 hover:border-yellow-500 text-gray-800 hover:text-yellow-600 font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(251,191,36,0.3)] hover:translate-x-1 hover:-translate-y-1"
              >
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Brand Partners
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              
              <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>
              
              <button
                onClick={() => document.getElementById('personal-businesses')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-600 hover:border-yellow-500 text-gray-800 hover:text-yellow-600 font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(251,191,36,0.3)] hover:translate-x-1 hover:-translate-y-1"
              >
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Personal Businesses
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Partners Section */}
      <div id="brand-partners" className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 relative">
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-12 h-1 bg-gray-300"></div>
            <div className="px-4 py-2 bg-white/80 border border-gray-200 text-gray-600 text-xs font-black uppercase tracking-widest shadow-sm">
              BRANDS
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-gray-300/50 to-transparent"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-800 mb-6 uppercase">
            Brand Partners
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl font-medium">
            Companies we've helped grow and succeed through strategic partnerships and innovative solutions
          </p>
        </div>
        
        <ExpandableBrands brands={brands} />
      </div>

      {/* Personal Businesses Section */}
      <div id="personal-businesses" className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 relative">
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-12 h-1 bg-gray-300"></div>
            <div className="px-4 py-2 bg-white/80 border border-gray-200 text-gray-600 text-xs font-black uppercase tracking-widest shadow-sm">
              INDIVIDUALS
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-gray-300/50 to-transparent"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-800 mb-6 uppercase">
            Personal Businesses
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl font-medium">
            Individual entrepreneurs and consultants who bring exceptional expertise to every project
          </p>
        </div>
        
        <ExpandablePersonal people={personalBusinesses} />
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 relative">
        <div className="relative bg-gradient-to-r from-gray-100 to-white p-1 max-w-5xl mx-auto border border-gray-200 shadow-xl">
          <div className="bg-white p-8 sm:p-12 md:p-16 lg:p-20">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tighter uppercase">
                Ready to Partner?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
                Join our network of successful brands and talented professionals. 
                <span className="text-yellow-600 font-bold"> Let's create something extraordinary.</span>
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-4 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-yellow-500 text-white font-black text-sm sm:text-base lg:text-lg uppercase tracking-wider hover:bg-yellow-600 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(251,191,36,0.5)] hover:translate-x-1 hover:-translate-y-1"
              >
                Start Conversation
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
