"use client"

import React from "react"

export default function Hero1() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 py-10">
        
        <div className="relative w-full">

          {/* HEADING */}
          <div className="tracking-tight leading-[1.1]">

            <h1 className="font-semibold text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem]">
              Social VRTX.
            </h1>

            <h2 className="mt-3 font-normal text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem]">
              A Social Media Marketing Agency
            </h2>

            <h2 className="font-normal text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem]">
              Built for Brand Growth
            </h2>

          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 sm:mt-8 max-w-lg text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
            From content to strategy, Social VRTX helps brands scale their presence
            with consistency, clarity, and impact.
          </p>

          {/* YEAR */}
          <div className="mt-6 text-sm sm:text-lg sm:absolute sm:bottom-6 sm:right-0">
            ©2026
          </div>

        </div>

      </div>

    </section>
  )
}