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
    <main className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 text-slate-900">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Radial gradient overlays for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.08),transparent_40%)]"></div>
      
      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-yellow-400 text-black rounded-full text-xs sm:text-sm font-bold mb-8 sm:mb-10 shadow-lg hover:shadow-xl transition-shadow">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
              Trusted by Industry Leaders
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 tracking-tight text-slate-900 leading-[1.1] drop-shadow-lg px-4">
              Our <span className="relative inline-block pb-2 sm:pb-3">
                <span className="relative z-10 text-white">Partners</span>
                <span className="absolute bottom-0 left-0 w-full h-2 sm:h-3 bg-slate-900 -z-10 "></span>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-900/80 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-sm px-4">
              Collaborating with exceptional brands and talented individuals to create meaningful impact
            </p>
          </div>
        </div>
      </div>

      {/* Brand Partners Section */}
      <div className="container mx-auto px-6 lg:px-12 py-20 relative">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-yellow-400 text-black text-[10px] sm:text-xs font-bold rounded-full mb-4 sm:mb-6">
            BRANDS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-3 sm:mb-4">
            Brand Partners
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl">
            Companies we've helped grow and succeed through strategic partnerships
          </p>
        </div>
        
        <ExpandableBrands brands={brands} />
      </div>

      {/* Personal Businesses Section */}
      <div className="container mx-auto px-6 lg:px-12 py-20 relative">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-yellow-400 text-black text-[10px] sm:text-xs font-bold rounded-full mb-4 sm:mb-6">
            INDIVIDUALS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-3 sm:mb-4">
            Personal Businesses
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl">
            Individual entrepreneurs and consultants we collaborate with
          </p>
        </div>
        
        <ExpandablePersonal people={personalBusinesses} />
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="relative bg-slate-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-24 overflow-hidden">
          {/* Yellow accent bar */}
          <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-yellow-400"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Ready to Partner With Us?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
              Join our network of successful brands and talented professionals. Let's create something extraordinary together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-yellow-400 text-black font-bold text-sm sm:text-base rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start a Conversation
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
