"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Our Team", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Get In Touch", href: "/contact" },
  ];

  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/socialvrtxmarketing/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/social-vrtx/" },
  ];

  return (
    <footer className="relative z-70 min-h-screen overflow-hidden text-white">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/FooterBG.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black/40 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1600px] flex-col px-6 py-16 md:px-10 md:py-20">
        {/* Top Section - Logo and Socials */}
        <div className="flex items-center justify-between mb-32 md:mb-40">
          <Link href="/" className="group inline-flex items-center gap-3" aria-label="SocialVRTX home">
            <span className="grid h-60 w-60 place-items-center rounded-lg">
              <Image
                src="/SVLogoNoBg.png"
                alt="SocialVRTX mark"
                width={96}
                height={96}
                className="h-auto w-auto"
              />
            </span>
          </Link>

          {/* Social Links - Top Right */}
          <div className="flex items-center gap-12 md:gap-16">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium uppercase text-white/85 transition-colors duration-300 hover:text-white md:text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section - Navigation (centered) */}
        <div className="mb-auto flex justify-center">
          <nav className="text-center">
            <ul className="space-y-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-3xl font-semibold uppercase text-white/95 transition-colors duration-300 hover:text-yellow-300 md:text-4xl"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Section - Email and Address (left-aligned) */}
        <div className="space-y-3">
          <a
            href="mailto:admin@socialvrtx.com"
            className="group block text-xl font-semibold uppercase text-white transition-colors duration-300 hover:text-white/80 md:text-2xl"
          >
            admin@socialvrtx.com
          </a>
          <p className="text-xs uppercase text-white/60 md:text-sm">
            C-4, Nemi Krishna, Jethwa Nagar,<br />Kandivali West, Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}