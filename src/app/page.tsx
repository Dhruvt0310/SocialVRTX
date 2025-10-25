import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import WorkProcess from "@/components/sections/WorkProcess"
import ClientLogos from "@/components/sections/ClientLogos"
import Testimonials from "@/components/sections/Testimonials"
import CTA from "@/components/sections/CTA"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WorkProcess />
      <ClientLogos />
      <Testimonials />
      <CTA />
    </main>
  )
}