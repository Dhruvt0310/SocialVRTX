"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Menu } from "lucide-react"
import { Manrope } from "next/font/google"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const marqueeItems = [
  "Social Media Management",
  "Website Development",
  "Photo and Video Shoots",
  "Logo Designing & Branding",
  "Influencer Marketing",
  "Performance Marketing",
]

function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(1)

  useEffect(() => {
    let frameId = 0
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp
      }

      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const next = Math.max(1, Math.floor(progress * target))

      setValue(next)

      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      }
    }

    frameId = requestAnimationFrame(step)

    return () => cancelAnimationFrame(frameId)
  }, [target, duration])

  return value
}

export default function AboutFeature() {
  const yearsCount = useCountUp(15)
  const projectsCount = useCountUp(50)

  return (
    <section className={`${manrope.className} relative overflow-hidden bg-[#e9ebef] text-[#060a1b]`}>
      <div className="mx-auto max-w-[1560px] px-12 pt-10 pb-16 md:px-16 md:pt-12 md:pb-20 lg:px-24 lg:pt-14 lg:pb-24">
        <div className="grid min-h-[620px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-8">
          <div className="relative z-10">
            <div className="flex items-start gap-5 pl-6 md:pl-8 lg:pl-14">
          

              <h2 className="w-full min-w-0 flex-1 max-w-none text-[1.95rem] font-extrabold leading-[0.95] tracking-[-0.035em] text-[#060a1b] sm:text-[2.4rem] md:text-[3rem] lg:text-[4.1rem]">
                We are on a mission to change the way brands approach social media.
              </h2>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(680px,1fr)_minmax(250px,300px)_minmax(250px,300px)] lg:items-start lg:gap-12">
              <div className="max-w-none space-y-8 lg:pl-10">
                <div className="flex items-center gap-4">
   

          
                </div>

                <p className="max-w-[760px] text-[1.5rem] font-normal leading-[1.38] tracking-[-0.015em] text-[#303544]">
Our focus is simple, to make social media work the way it’s supposed to and use it as a
powerful tool for visibility, connection, and long-term growth.
                </p>

                <button className="group relative mt-4 inline-flex items-center gap-3 overflow-hidden rounded-xl border border-[#79808f] px-6 py-2.5 text-[1.125rem] font-medium tracking-[-0.02em]">
                  <span className="absolute inset-0 origin-left scale-x-0 bg-[#0d1120] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  <span className="relative z-10 text-[#0d1120] transition-colors duration-300 group-hover:text-white">Más acerca de mi</span>
                  <ArrowRight className="relative z-10 h-5 w-5 text-[#0d1120] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </button>
              </div>

              <div className="lg:pt-28 pl-28">
                <div className="text-[5.25rem] font-bold leading-none tracking-[-0.06em]">{yearsCount}+</div>
                <p className="mt-3 whitespace-nowrap text-[1.5rem] font-medium tracking-[-0.02em] text-[#2f3442]">Años de experiencia</p>
              </div>

              <div className="lg:pt-28 pl-20">
                <div className="text-[5.25rem] font-bold leading-none tracking-[-0.06em]">{projectsCount}+</div>
                <p className="mt-3 whitespace-nowrap text-[1.5rem] font-medium tracking-[-0.02em] text-[#2f3442]">Proyectos entregados</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block" />

        </div>
      </div>

      <div className="border-y border-[#2b303d] bg-[#c7ced8] py-4 md:py-5">
        <div className="overflow-hidden">
          <div className="flex w-max animate-[about-marquee_28s_linear_infinite] items-center">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center">
                <span className="px-6 text-[0.95rem] font-medium tracking-[-0.01em] text-[#1b2130] whitespace-nowrap md:px-8 md:text-[1.15rem]">
                  {item}
                </span>
                <span className="h-0.5 w-12 bg-[#1f2533] md:w-14" />
              </div>
            ))}
          </div>
        </div>
      </div>

      
     
    </section>
  )
}