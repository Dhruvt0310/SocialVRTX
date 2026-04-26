import Hero1 from "@/components/sections/Hero1"
import AboutFeature from "@/components/sections/AboutFeature"

import WorkProcess from "@/components/sections/WorkProcess"
import ClientLogos from "@/components/sections/ClientLogos"
import Services from "@/components/sections/Services"
import Testimonials from "@/components/sections/Testimonials"
import Brands from "@/components/sections/Brands"

export default function Home() {
  return (
    <main>
      
      <Hero1 />
      <AboutFeature />
      <Services />
      <Testimonials />

      <Brands />
    </main>
  )
}