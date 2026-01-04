import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import WorkProcess from "@/components/sections/WorkProcess"
import ClientLogos from "@/components/sections/ClientLogos"
import Projects from "@/components/sections/Projects"
import Testimonials from "@/components/sections/Testimonials"
import CTA from "@/components/sections/CTA"
import JourneyTimeline from "@/components/sections/JourneyTimeline"
import Brands from "@/components/sections/Brands"

export default function Home() {
  return (
    <main>
      
      <Hero />
      <JourneyTimeline/>
      <Projects />
      <Testimonials />
      <CTA />
      <Brands />
    </main>
  )
}