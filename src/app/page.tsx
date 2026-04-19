import Hero1 from "@/components/sections/Hero1"
import AboutFeature from "@/components/sections/AboutFeature"
import Services from "@/components/sections/Services"
import WorkProcess from "@/components/sections/WorkProcess"
import ClientLogos from "@/components/sections/ClientLogos"
import Projects from "@/components/sections/Projects"
import Testimonials from "@/components/sections/Testimonials"
import Brands from "@/components/sections/Brands"

export default function Home() {
  return (
    <main>
      
      <Hero1 />
      <AboutFeature />
      <Projects />
      <Testimonials />
    
      <Brands />
    </main>
  )
}