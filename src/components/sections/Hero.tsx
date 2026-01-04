"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen bg-white uppercase overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 grid-rows-[auto_auto] lg:grid-cols-[4fr_1fr] lg:grid-rows-1 gap-3 min-h-[90vh]">

          {/* LEFT SECTION */}
          <div className="flex flex-col relative z-10">

            {/* TOP CONTENT */}
            <div className="flex-1 pt-18 text-black">
              <div className="font-light leading-tight">

                <div className="pl-8 text-[3rem] md:text-[3.8rem] lg:text-[4.7rem]">
                  Transform
                </div>

                <div className="pl-24 text-[3rem] md:text-[3.8rem] lg:text-[4.7rem] bg-gradient-to-l from-black via-[#946501] to-[#fcb308] text-transparent bg-clip-text">
                  Your Digital
                </div>

                <div className="flex items-end pl-16 gap-5 mt-2">
                  <p className="w-39 text-[0.9rem] font-normal leading-relaxed mb-3 normal-case text-right">
                    From social media to SEO, we help your brand stand out.
                  </p>
                  <div className="text-[3rem] md:text-[3.8rem] lg:text-[4.7rem]">
                    Presence
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <div className=" flex pb-2">
                <div className="w-full flex items-center justify-center">
                  <button className="group flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#faaf00] hover:text-black">
                    Get Started
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* BOTTOM BLOCKS */}
            <div className="grid grid-cols-4 min-h-[220px] relative rounded-2xl">

              {/* STAT 1 */}
              <div className="bg-[#feeee7] flex flex-col justify-center text-right pr-4 relative rounded-tl-2xl rounded-bl-2xl">
                <div className="absolute top-4 right-4 border border-black text-black text-[10px] px-3 py-1 rounded-md">REVIEWS</div>
                <div className="text-3xl lg:text-4xl font-bold pt-6 text-black">3K+</div>
                <div className="text-sm text-gray-600">Successful Projects</div>
              </div>

              {/* STAT 2 */}
              <div className="bg-[#daa936] flex flex-col justify-center text-right pr-4 relative">
                <div className="absolute top-4 right-4 border border-white text-[10px] px-3 py-1 rounded-md">PROJECTS</div>
                <div className="text-3xl lg:text-4xl font-bold pt-6">20K</div>
                <div className="text-sm text-white">Experienced Team</div>
              </div>

              {/* STAT 3 */}
              <div className="bg-[#feeee7] flex flex-col justify-center text-right pr-4 relative">
                <div className="absolute top-4 right-4 border border-black text-black text-[10px] px-3 py-1 rounded-md">CLIENTS</div>
                <div className="text-3xl lg:text-4xl font-bold pt-6 text-black">43K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>

              {/* IMAGE */}
              <div className="bg-[#feeee7] relative overflow-visible">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 origin-bottom scale-[3] md:scale-[2.8] lg:scale-[3] xl:scale-[3.5] pointer-events-none z-50">
                  <Image src="/Hero.png" alt="Hero Graphic" width={420} height={420} className="object-contain" priority />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-row lg:flex-col relative z-0">
            <div className="h-[25%]"></div>

            {/* RIGHT STAT 1 */}
            <div className="flex-1 bg-[#daa936] flex flex-col justify-center text-right pr-4 relative min-h-[200px] rounded-bl-2xl rounded-tl-2xl lg:rounded-tl-2xl lg:rounded-tr-2xl lg:rounded-br-none">
              <div className="absolute top-4 right-4 border border-white text-[10px] px-3 py-1 rounded-md">PERFORMANCE</div>
              <div className="text-3xl lg:text-4xl font-bold pt-6">36K+</div>
              <div className="text-sm text-white">5 Star Reviews</div>
            </div>

            {/* RIGHT STAT 2 */}
            <div className="flex-1 bg-[#feeee7] flex flex-col justify-center text-right pr-4 relative min-h-[200px] rounded-br-2xl rounded-tr-2xl lg:rounded-br-2xl lg:rounded-tl-2xl">
              <div className="absolute top-4 right-4 border border-black text-black text-[10px] px-3 py-1 rounded-md">RETENTION</div>
              <div className="text-3xl lg:text-4xl font-bold pt-6 text-black">98%</div>
              <div className="text-sm text-gray-600">Client Retention Rate</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
