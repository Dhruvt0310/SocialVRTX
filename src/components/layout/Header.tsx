"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-60 text-white">
        <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 md:px-10">
          <Link href="/" className="group inline-flex items-center gap-3" aria-label="SocialVRTX home">
            <span className="grid h-24 w-24 place-items-center rounded-2xl   transition-all duration-300 group-hover:border-yellow-400/60 group-hover:bg-yellow-400/10">
              <Image
                src="/SVLogoNoBg.png"
                alt="SocialVRTX mark"
                width={500}
                height={500}
                className="h-auto w-auto"
                priority
              />
            </span>
          </Link>

          <div className="flex items-center gap-4 md:gap-7">
            <Link
              href="/contact"
              className="group relative hidden items-center gap-3 overflow-hidden rounded-2xl border border-white/40 bg-transparent px-4 py-3 text-sm font-medium text-white/95 backdrop-blur-sm transition-colors duration-300 md:inline-flex"
              aria-label="Open contact"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Got any questions?</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
            </Link>

            <button
              type="button"
              className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/30 bg-transparent backdrop-blur-sm transition-colors duration-300"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              <span
                className={`absolute z-10 h-px w-5 bg-white transition-all duration-300 group-hover:bg-black ${
                  isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute z-10 h-px w-5 bg-white transition-all duration-300 group-hover:bg-black ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute z-10 h-px w-5 bg-white transition-all duration-300 group-hover:bg-black ${
                  isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-[#02081d]/95 text-white backdrop-blur-md transition-all duration-500 ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto grid h-full max-w-[1600px] grid-rows-[1fr_auto] px-6 pb-8 pt-28 md:px-10 md:pb-10">
          <nav className="flex items-center justify-center">
            <ul className="space-y-2 text-center uppercase leading-none tracking-tight md:space-y-4">
              {navigation.map((item, index) => (
                <li
                  key={item.name}
                  className="transition-all duration-500"
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 60 + 90}ms` : "0ms",
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? "translateY(0)" : "translateY(16px)",
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-5xl font-semibold text-white/90 transition-colors duration-300 hover:text-yellow-300 md:text-7xl"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-wrap items-end justify-between gap-6 text-sm text-white/80">
            <a
              href="mailto:hi@socialvrtx.com"
              className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
            >
              <span>hi@socialvrtx.com</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="flex items-center gap-7">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <span>Instagram</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
