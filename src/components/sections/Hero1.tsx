"use client"

import React from "react"
import "./Hero1.css"

export default function Hero1() {
  return (
    <section className="hero-container">

      <video
        className="hero-video"
        src="/HeroBG.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="hero-content">
        <div className="hero-text-wrapper">
          <div className="hero-text">
            <h1>Social VRTX.</h1>
            <h1>Built for</h1>
            <h1>Brand Growth</h1>
          </div>
          <p className="hero-subtext">
            From content to strategy, Social VRTX helps brands scale their presence
            with consistency, clarity, and impact.
          </p>
        </div>
      </div>

    </section>
  )
}