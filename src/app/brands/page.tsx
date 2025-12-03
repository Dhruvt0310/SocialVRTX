"use client";
import ExpandableBrands from "@/components/ui/expandable-brands";

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 text-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.1),transparent_50%)]" />
      
      {/* Floating Shapes */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-black/5 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-3 bg-black/10 backdrop-blur-sm rounded-full text-base font-semibold mb-6">
            ✨ Trusted Partnerships
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 leading-tight drop-shadow-lg">
            Our Brand Partners
          </h1>
          <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto font-medium drop-shadow-sm">
            We're proud to collaborate with these exceptional brands, delivering innovative solutions 
            that drive success and create meaningful impact across industries.
          </p>
        </div>

        {/* Brands Grid with Expandable Cards */}
        <ExpandableBrands brands={brands} />

        {/* CTA Section */}
        <div className="mt-28 text-center">
          <div className="relative bg-gradient-to-br from-black/10 to-black/5 backdrop-blur-md border-[3px] border-white rounded-[2.5rem] p-16 max-w-4xl mx-auto shadow-[0_30px_80px_rgba(0,0,0,0.3)] overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 drop-shadow-lg">
                Want to Join Our Partners?
              </h2>
              <p className="text-xl text-black/80 mb-12 font-medium max-w-2xl mx-auto">
                Let's discuss how we can help your brand achieve its goals and create exceptional experiences.
              </p>
              <a
                href="/contact"
                className="inline-block px-14 py-6 bg-white text-black font-bold text-lg rounded-full shadow-[0_15px_50px_rgba(0,0,0,0.25)]"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
