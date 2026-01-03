"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen overflow-hidden bg-white uppercase">
      <div className="max-w-7xl mx-auto pt-6 pb-16">
        <div className="relative flex h-screen">

          {/* LEFT SECTION */}
          <div className="w-[80%] h-full flex flex-col relative z-10">

            {/* TOP CONTENT */}
            <div className="w-full h-[70%] pt-16 text-black">
              <div className="font-bold text-[4.7rem] leading-tight">

                <div className="pl-8 text-black">Transform</div>
                <div className="pl-24 font-light text-[#d09409]">Your Digital</div>

                <div className="flex items-end pl-16 gap-5 ">
                  {/* 👇 EXCLUDED FROM UPPERCASE */}
                  <p className="w-60 text-[0.9rem] font-normal text-gray-700 leading-relaxed mb-3 normal-case text-right  ">
                    From social media to SEO, we help your brand stand out and grow beyond expectations.
                  </p>

                  <div className="text-black">Presence</div>
                </div>
              </div>

              {/* BUTTON */}
              <div className="mt-5 flex gap-10">
                <div className="w-[40%]" />
                <div className="w-[60%]">
                  <button className="group flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#faaf00] hover:text-black">
                    Get Started
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* BOTTOM BLOCKS */}
            <div className="w-full h-[30%] flex relative">

              <div className="w-1/4 h-full bg-[#feeee7] flex flex-col justify-center items-center text-center rounded-bl-2xl rounded-tl-2xl">
                <div className="text-3xl font-bold text-black">3K+</div>
                <div className="text-sm text-gray-600">Successful Projects</div>
              </div>

              <div className="w-1/4 h-full bg-[#daa936] flex flex-col justify-center items-center text-center">
                <div className="text-3xl font-bold">20K</div>
                <div className="text-sm text-black/80">Experienced Team</div>
              </div>

              <div className="w-1/4 h-full bg-[#feeee7] flex flex-col justify-center items-center text-center">
                <div className="text-3xl font-bold text-black">43K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>

              {/* IMAGE ONLY */}
              <div className="imagediv w-1/4 h-full bg-[#feeee7] relative overflow-visible">
                <div
                  className="
                    absolute
                    z-50
                    pointer-events-none
                    -top-[300px]
                    -left-32
                    scale-125
                    origin-center
                  "
                >
                  <Image
                    src="/Hero.png"
                    alt="Hero Graphic"
                    width={420}
                    height={420}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-[20%] h-full flex flex-col relative z-0">

            <div className="h-[25%]" />

            <div className="h-[35%] bg-[#daa936] flex flex-col justify-center items-center text-center rounded-tl-2xl rounded-tr-2xl">
              <div className="text-3xl font-bold">36K+</div>
              <div className="text-sm text-black/80">Client 5 Star Reviews</div>
            </div>

            <div className="h-[40%] bg-[#feeee7] flex flex-col justify-center items-center text-center rounded-br-2xl">
              <div className="text-3xl text-black font-bold">98%</div>
              <div className="text-sm text-gray-600">Client Retention Rate</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
